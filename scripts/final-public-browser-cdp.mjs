import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawn } from 'node:child_process';

const [baseUrl, artifactsDir] = process.argv.slice(2);
if (!baseUrl || !artifactsDir) {
  throw new Error('Usage: node scripts/final-public-browser-cdp.mjs <baseUrl> <artifactsDir>');
}

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA || ''}/Google/Chrome/Application/chrome.exe`,
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean);
const chromePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));
if (!chromePath) throw new Error('No supported system Chrome/Edge executable was found.');

fs.mkdirSync(artifactsDir, { recursive: true });
const userDataDir = path.join(artifactsDir, 'chrome-profile');
fs.rmSync(userDataDir, { recursive: true, force: true });

const debugPort = 9344;
const chrome = spawn(chromePath, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
  '--no-default-browser-check', '--disable-extensions', '--disable-background-networking',
  `--remote-debugging-port=${debugPort}`, `--user-data-dir=${userDataDir}`, 'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const timeout = (promise, ms, label) => Promise.race([
  promise,
  new Promise((_, reject) => setTimeout(() => reject(new Error(`Timeout: ${label}`)), ms)),
]);

async function waitForDebugger() {
  for (let i = 0; i < 60; i += 1) {
    try {
      const r = await fetch(`http://127.0.0.1:${debugPort}/json/version`);
      if (r.ok) return;
    } catch {}
    await sleep(250);
  }
  throw new Error('Chrome DevTools endpoint did not become ready.');
}

async function createTarget() {
  const r = await fetch(`http://127.0.0.1:${debugPort}/json/new?about:blank`, { method: 'PUT' });
  if (!r.ok) throw new Error(`Unable to create Chrome target: HTTP ${r.status}`);
  return r.json();
}

async function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await timeout(new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  }), 5000, 'CDP websocket open');
  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const entry = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) entry.reject(new Error(message.error.message));
      else entry.resolve(message.result);
    }
  });
  const send = (method, params = {}) => timeout(new Promise((resolve, reject) => {
    id += 1;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  }), 10000, method);
  return { ws, send };
}

async function waitForLoad(send) {
  for (let i = 0; i < 100; i += 1) {
    const result = await send('Runtime.evaluate', { expression: 'document.readyState', returnByValue: true });
    if (result?.result?.value === 'complete') return;
    await sleep(100);
  }
  throw new Error('Page did not reach document.readyState=complete.');
}

async function capture(route, name, viewport) {
  const target = await createTarget();
  const { ws, send } = await connect(target.webSocketDebuggerUrl);
  try {
    await send('Page.enable');
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width, height: viewport.height,
      deviceScaleFactor: viewport.mobile ? 2 : 1,
      mobile: Boolean(viewport.mobile), screenWidth: viewport.width, screenHeight: viewport.height,
    });
    if (viewport.mobile) await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
    await send('Page.navigate', { url: `${baseUrl}${route}` });
    await waitForLoad(send);
    await sleep(1200);
    const result = await send('Page.captureScreenshot', {
      format: 'png', fromSurface: true, captureBeyondViewport: false,
    });
    const output = path.join(artifactsDir, `${name}.png`);
    fs.writeFileSync(output, Buffer.from(result.data, 'base64'));
    if (fs.statSync(output).size <= 0) throw new Error(`Empty screenshot: ${output}`);
  } finally {
    ws.close();
  }
}

const routes = [
  ['/fa', 'fa-home'], ['/en', 'en-home'],
  ['/fa/products', 'fa-products'], ['/en/products', 'en-products'],
  ['/fa/about', 'fa-about'], ['/en/about', 'en-about'],
  ['/fa/contact', 'fa-contact'], ['/en/contact', 'en-contact'],
];
const viewports = [
  ['desktop', { width: 1440, height: 1000, mobile: false }],
  ['mobile', { width: 390, height: 844, mobile: true }],
];

try {
  await waitForDebugger();
  console.log(`Browser: ${chromePath}`);
  let index = 0;
  const total = routes.length * viewports.length;
  for (const [route, name] of routes) {
    for (const [viewportName, viewport] of viewports) {
      index += 1;
      console.log(`PROGRESS screenshot ${index}/${total} :: ${name} ${viewportName}`);
      await timeout(capture(route, `${name}-${viewportName}`, viewport), 20000, `${route} ${viewportName}`);
      console.log(`PASS screenshot ${name} ${viewportName}`);
    }
  }
  console.log(`Evidence: ${artifactsDir}`);
} finally {
  chrome.kill('SIGTERM');
  await sleep(300);
  fs.rmSync(userDataDir, { recursive: true, force: true });
}
