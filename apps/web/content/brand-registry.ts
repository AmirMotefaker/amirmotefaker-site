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

/**
 * Founder-confirmed canonical portfolio, ordered for all public surfaces.
 * All eleven products have official public destinations. Legacy internal slugs
 * are preserved where needed to avoid breaking established routes; public names
 * and domains remain the source of truth for labels, CTAs and structured data.
 */
export const brandRegistry = [
  {
    slug: "restyar",
    name: "RestYar",
    nameFa: "رستیار",
    domain: "restyar.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 10,
  },
  {
    slug: "primesys",
    name: "PrimeSYS",
    nameFa: "پرایم‌سیستم",
    domain: "primesys.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 20,
  },
  {
    slug: "linkresan",
    name: "LinkResan",
    nameFa: "لینک‌رسان",
    domain: "linkresan.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 30,
  },
  {
    slug: "farsio",
    name: "Farsio",
    nameFa: "فارسیو",
    domain: "farsio.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 40,
  },
  {
    slug: "fahmio",
    name: "Fahmio",
    nameFa: "فهمیو",
    domain: "fahmio.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 50,
  },
  {
    slug: "zobdino",
    name: "Zobdino",
    nameFa: "زبدینو",
    domain: "zobdino.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 60,
  },
  {
    slug: "idehjo",
    name: "IdehJo",
    nameFa: "ایده‌جو",
    domain: "idehjo.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 70,
  },
  {
    slug: "tasvia",
    name: "Tasvin",
    nameFa: "تسوین",
    domain: "tasvin.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 80,
  },
  {
    slug: "vayran",
    name: "Vairan",
    nameFa: "وایران",
    domain: "vairan.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 90,
  },
  {
    slug: "darmic",
    name: "Darmic",
    nameFa: "دارمیک",
    domain: "darmic.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 100,
  },
  {
    slug: "filmtrack",
    name: "FilmTrack",
    nameFa: "فیلم‌ترک",
    domain: "filmtrack.ir",
    classification: "active",
    claimStatus: "founder-confirmed",
    order: 110,
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
