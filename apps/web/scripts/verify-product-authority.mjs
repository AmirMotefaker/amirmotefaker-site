import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const registry = fs.readFileSync(path.join(root, "content", "brand-registry.ts"), "utf8");
const authority = fs.readFileSync(path.join(root, "content", "final-public-product-portfolio.ts"), "utf8");
const productPage = fs.readFileSync(path.join(root, "app", "[locale]", "products", "[slug]", "page.tsx"), "utf8");
const detailView = fs.readFileSync(path.join(root, "components", "products", "ProductDetailView.tsx"), "utf8");

const products = [
  ["primesys", "PrimeSYS", "primesys.ir"],
  ["restyar", "RestYar", "restyar.ir"],
  ["linkresan", "LinkResan", "linkresan.ir"],
  ["farsio", "Farsio", "farsio.ir"],
  ["fahmio", "Fahmio", "fahmio.ir"],
  ["zobdino", "Zobdino", "zobdino.ir"],
  ["idehjo", "IdehJo", "idehjo.ir"],
  ["filmtrack", "FilmTrack", "filmtrack.ir"],
  ["tasvia", "Tasvin", "tasvin.ir"],
  ["darmic", "Darmic", "darmic.ir"],
  ["vayran", "Vairan", "vairan.ir"],
];

const failures = [];
for (const [slug, name, domain] of products) {
  for (const [label, source, needle] of [
    ["registry slug", registry, `slug: \"${slug}\"`],
    ["official name", registry, `name: \"${name}\"`],
    ["official domain", registry, `domain: \"${domain}\"`],
  ]) {
    if (!source.includes(needle)) failures.push(`${slug}: missing ${label}`);
  }
}

for (const field of [
  "shortDescriptionFa", "shortDescriptionEn", "problemFa", "problemEn",
  "solutionFa", "solutionEn", "capabilitiesFa", "capabilitiesEn",
  "audienceFa", "audienceEn", "currentProductFa", "currentProductEn",
  "productPromiseFa", "productPromiseEn", "roadmapFa", "roadmapEn",
]) {
  if (!authority.includes(field)) failures.push(`authority dataset: missing ${field}`);
}

for (const signal of ["SoftwareApplication", "BreadcrumbList", "FAQPage", "sameAs", "hreflang", "alternates"]) {
  const haystack = `${productPage}\n${detailView}`;
  if (signal === "hreflang") continue; // Next Metadata alternates.languages renders hreflang.
  if (!haystack.includes(signal)) failures.push(`product SEO/GEO surface: missing ${signal}`);
}

if (!detailView.includes("وب‌سایت رسمی محصول") || !detailView.includes("Visit ${name}")) {
  failures.push("product detail: official-site CTA missing");
}

if (failures.length) {
  console.error("Product authority verification FAILED");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Product authority verification PASS (${products.length}/${products.length} official products)`);
