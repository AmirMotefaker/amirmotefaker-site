const key = "ff3cda09b28a42dc098a8c7912f16f5d";
const host = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";
const normalizedHost = host.replace(/\/$/, "");
const input = process.argv.slice(2);

if (input.length === 0) {
  console.error("Usage: npm run seo:indexnow -- /fa/about /fa/products/linkresan");
  process.exit(1);
}

const urlList = input.map((value) => {
  if (/^https?:\/\//i.test(value)) return value;
  return `${normalizedHost}${value.startsWith("/") ? value : `/${value}`}`;
});

for (const url of urlList) {
  if (!url.startsWith(`${normalizedHost}/`)) {
    throw new Error(`Refusing to submit URL outside ${normalizedHost}: ${url}`);
  }
}

const payload = {
  host: new URL(normalizedHost).host,
  key,
  keyLocation: `${normalizedHost}/${key}.txt`,
  urlList,
};

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow submission failed (${response.status}): ${body}`);
}

console.log(`IndexNow accepted ${urlList.length} URL(s) for ${payload.host}.`);
