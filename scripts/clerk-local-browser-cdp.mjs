import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawn } from 'node:child_process';

const [baseUrl, artifactsDir] = process.argv.slice(2);
if (!baseUrl || !artifactsDir) {
  throw new Error('Usage: node scripts/clerk-local-browser-cdp.mjs <baseUrl> <artifactsDir>');
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
if (!chromePath) {
  throw new Error('No supported system Chrome/Edge executable was found.');
}

fs.mkdirSync(artifactsDir, { recursive: true });
const userDataDir = path.join(artifactsDir, 'chrome-profile');
fs.rmSync(userDataDir, { recursive: true, force: true });

const debugPort = 9333;
const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  `--remote-debugging-port=${debugPort}`,
  `--user-data-dir=${userDataDir}`,
  'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForDebugger() {
  for (let i = 0; i < 60; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${debugPort}/json/version`);
      if (response.ok) return;
    } catch {}
    await sleep(250);
  }
  throw new Error('System Chrome DevTools endpoint did not become ready.');
}

async function createTarget() {
  const response = await fetch(`http://127.0.0.1:${debugPort}/json/new?about:blank`, { method: 'PUT' });
  if (!response.ok) throw new Error(`Unable to create Chrome target: HTTP ${response.status}`);
  return response.json();
}

async function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
    }
  });

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    id += 1;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });

  return { ws, send };
}

async function waitForLoad(send) {
  for (let i = 0; i < 80; i += 1) {
    const result = await send('Runtime.evaluate', { expression: 'document.readyState', returnByValue: true });
    if (result?.result?.value === 'complete') return;
    await sleep(100);
  }
  throw new Error('Page did not reach document.readyState=complete.');
}

async function navigateAndCapture(targetPath, name, viewport) {
  const target = await createTarget();
  const { ws, send } = await connect(target.webSocketDebuggerUrl);
  try {
    await send('Page.enable');
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: viewport.deviceScaleFactor || 1,
      mobile: Boolean(viewport.mobile),
      screenWidth: viewport.width,
      screenHeight: viewport.height,
    });
    if (viewport.mobile) {
      await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
    }

    await send('Page.navigate', { url: `${baseUrl}${targetPath}` });
    await waitForLoad(send);
    await sleep(1800);

    const urlResult = await send('Runtime.evaluate', { expression: 'location.pathname', returnByValue: true });
    const finalPath = urlResult?.result?.value;

    const screenshot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false });
    fs.writeFileSync(path.join(artifactsDir, `${name}.png`), Buffer.from(screenshot.data, 'base64'));
    return finalPath;
  } finally {
    ws.close();
  }
}

try {
  await waitForDebugger();

  const faRedirect = await navigateAndCapture('/fa/login', 'fa-login-redirect-check', { width: 1280, height: 900 });
  if (faRedirect !== '/fa/sign-in') throw new Error(`Expected /fa/login -> /fa/sign-in, got ${faRedirect}`);
  console.log('PASS browser /fa/login -> /fa/sign-in');

  const enRedirect = await navigateAndCapture('/en/login', 'en-login-redirect-check', { width: 1280, height: 900 });
  if (enRedirect !== '/en/sign-in') throw new Error(`Expected /en/login -> /en/sign-in, got ${enRedirect}`);
  console.log('PASS browser /en/login -> /en/sign-in');

  const targets = [
    ['/fa/sign-in', 'fa-sign-in'],
    ['/fa/sign-up', 'fa-sign-up'],
    ['/en/sign-in', 'en-sign-in'],
    ['/en/sign-up', 'en-sign-up'],
  ];

  for (const [route, name] of targets) {
    await navigateAndCapture(route, `${name}-desktop`, { width: 1440, height: 1000 });
    await navigateAndCapture(route, `${name}-mobile`, { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });
    console.log(`PASS screenshots ${route}`);
  }

  console.log(`Evidence: ${artifactsDir}`);
} finally {
  chrome.kill('SIGTERM');
}
