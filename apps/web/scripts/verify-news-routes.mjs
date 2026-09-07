import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const archive = fs.readFileSync(path.join(root, "app", "[locale]", "news", "page.tsx"), "utf8");
const detail = fs.readFileSync(path.join(root, "app", "[locale]", "news", "[slug]", "page.tsx"), "utf8");
const legacy = fs.readFileSync(path.join(root, "lib", "legacy-wordpress.ts"), "utf8");

const failures = [];

if (!archive.includes("encodeURIComponent(normalizeLegacySlug(slug))")) {
  failures.push("archive does not use one canonical encoded slug helper");
}
if (!archive.includes("href={`/${locale}/news/${newsSlug(post.slug)}`}")) {
  failures.push("archive cards are not wired to the canonical encoded slug");
}
if (!detail.includes("export const dynamicParams = false")) {
  failures.push("detail route is not locked to pre-rendered legacy articles");
}
if (!detail.includes("export function generateStaticParams()")) {
  failures.push("detail route does not pre-render indexed WordPress articles");
}
if (!detail.includes("getLegacyPosts().flatMap")) {
  failures.push("detail route static params are not sourced from the canonical post index");
}
if (!legacy.includes("decodeURIComponent") || !legacy.includes('.normalize("NFC")')) {
  failures.push("legacy slug normalization lost percent-decoding or Unicode NFC normalization");
}

if (failures.length) {
  console.error("Technology News route verification FAILED");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Technology News route verification PASS");
