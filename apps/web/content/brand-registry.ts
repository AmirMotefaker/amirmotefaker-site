export type PortfolioClassification = "active" | "pending-classification";
export type ClaimStatus = "founder-confirmed" | "team-draft";

export type BrandRegistryEntry = {
  slug: string;
  name: string;
  nameFa: string;
  domain: string;
  classification: PortfolioClassification;
  claimStatus: ClaimStatus;
  order: number;
};

export const brandRegistry = [
  {
    slug: "linkresan",
    name: "LinkResan",
    nameFa: "لینک‌رسان",
    domain: "linkresan.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 10,
  },
  {
    slug: "farsio",
    name: "Farsio",
    nameFa: "فارسیو",
    domain: "farsio.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 20,
  },
  {
    slug: "fahmio",
    name: "Fahmio",
    nameFa: "فهمیو",
    domain: "fahmio.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 30,
  },
  {
    slug: "zobdino",
    name: "Zobdino",
    nameFa: "زبدینو",
    domain: "zobdino.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 40,
  },
  {
    slug: "filmtrack",
    name: "FilmTrack",
    nameFa: "فیلم‌ترک",
    domain: "filmtrack.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 50,
  },
  {
    slug: "idehjo",
    name: "IdehJo",
    nameFa: "ایده‌جو",
    domain: "idehjo.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 60,
  },
  {
    slug: "tasvia",
    name: "Tasvia",
    nameFa: "تسویا",
    domain: "tasvia-app",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 70,
  },
  {
    slug: "primesys",
    name: "PrimeSYS",
    nameFa: "پرایم‌سیستم",
    domain: "primesys.ir",
    classification: "pending-classification",
    claimStatus: "team-draft",
    order: 110,
  },
  {
    slug: "restyar",
    name: "RestYar",
    nameFa: "رستیار",
    domain: "restyar.ir",
    classification: "pending-classification",
    claimStatus: "team-draft",
    order: 120,
  },
] as const satisfies readonly BrandRegistryEntry[];

export type BrandSlug = (typeof brandRegistry)[number]["slug"];

const registryBySlug = new Map(brandRegistry.map((brand) => [brand.slug, brand]));

export function getBrand(slug: string) {
  return registryBySlug.get(slug as BrandSlug);
}

export function getBrandName(slug: string, locale: "fa" | "en") {
  const brand = getBrand(slug);
  if (!brand) return slug;
  return locale === "fa" ? brand.nameFa : brand.name;
}

export function getBrandOrder(slug: string) {
  return getBrand(slug)?.order ?? Number.MAX_SAFE_INTEGER;
}

export function isActivePortfolioBrand(slug: string) {
  return getBrand(slug)?.classification === "active";
}

export const activePortfolioBrands = brandRegistry
  .filter((brand) => brand.classification === "active")
  .sort((a, b) => a.order - b.order);

export const pendingPortfolioAssets = brandRegistry
  .filter((brand) => brand.classification === "pending-classification")
  .sort((a, b) => a.order - b.order);
