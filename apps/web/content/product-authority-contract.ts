import type { Product } from "@/content/product-portfolio";
import { finalPublicProductPortfolio } from "@/content/final-public-product-portfolio";

export const OFFICIAL_PRODUCT_AUTHORITY = [
  { slug: "primesys", name: "PrimeSYS", domain: "primesys.ir" },
  { slug: "restyar", name: "RestYar", domain: "restyar.ir" },
  { slug: "linkresan", name: "LinkResan", domain: "linkresan.ir" },
  { slug: "farsio", name: "Farsio", domain: "farsio.ir" },
  { slug: "fahmio", name: "Fahmio", domain: "fahmio.ir" },
  { slug: "zobdino", name: "Zobdino", domain: "zobdino.ir" },
  { slug: "idehjo", name: "IdehJo", domain: "idehjo.ir" },
  { slug: "filmtrack", name: "FilmTrack", domain: "filmtrack.ir" },
  // Legacy internal slugs are intentionally retained to preserve established URLs.
  { slug: "tasvia", name: "Tasvin", domain: "tasvin.ir" },
  { slug: "darmic", name: "Darmic", domain: "darmic.ir" },
  { slug: "vayran", name: "Vairan", domain: "vairan.ir" },
] as const;

const nonEmpty = (value?: string | null) => Boolean(value?.trim());
const nonEmptyList = (values?: readonly string[]) => Boolean(values?.some((value) => value.trim()));

export type ProductAuthorityAudit = {
  slug: string;
  complete: boolean;
  missing: string[];
};

/**
 * One truth gate for every public product surface. Any new page/index/schema
 * should consume finalPublicProductPortfolio and this contract rather than
 * inventing a separate product list.
 */
export function auditProductAuthority(product: Product): ProductAuthorityAudit {
  const missing: string[] = [];
  const checks: Array<[string, boolean]> = [
    ["domain", nonEmpty(product.domain)],
    ["shortDescriptionFa", nonEmpty(product.shortDescriptionFa)],
    ["shortDescriptionEn", nonEmpty(product.shortDescriptionEn)],
    ["hero.titleFa", nonEmpty(product.hero?.titleFa)],
    ["hero.titleEn", nonEmpty(product.hero?.titleEn)],
    ["problemFa", nonEmptyList(product.problemFa)],
    ["problemEn", nonEmptyList(product.problemEn)],
    ["solutionFa", nonEmpty(product.solutionFa)],
    ["solutionEn", nonEmpty(product.solutionEn)],
    ["capabilitiesFa", nonEmptyList(product.capabilitiesFa)],
    ["capabilitiesEn", nonEmptyList(product.capabilitiesEn)],
    ["audienceFa", nonEmpty(product.audienceFa)],
    ["audienceEn", nonEmpty(product.audienceEn)],
    ["currentProductFa", nonEmpty(product.currentProductFa)],
    ["currentProductEn", nonEmpty(product.currentProductEn)],
    ["productPromiseFa", nonEmpty(product.productPromiseFa)],
    ["productPromiseEn", nonEmpty(product.productPromiseEn)],
    ["roadmapFa", nonEmptyList(product.roadmapFa)],
    ["roadmapEn", nonEmptyList(product.roadmapEn)],
    ["amirRoleFa", nonEmpty(product.amirRoleFa)],
    ["amirRoleEn", nonEmpty(product.amirRoleEn)],
  ];

  for (const [field, ok] of checks) {
    if (!ok) missing.push(field);
  }

  return { slug: product.slug, complete: missing.length === 0, missing };
}

export function auditOfficialPortfolio() {
  return OFFICIAL_PRODUCT_AUTHORITY.map((official) => {
    const product = finalPublicProductPortfolio.find((item) => item.slug === official.slug);
    if (!product) {
      return { slug: official.slug, complete: false, missing: ["product"] } satisfies ProductAuthorityAudit;
    }

    const audit = auditProductAuthority(product);
    if (product.name !== official.name) audit.missing.push("officialName");
    if (product.domain.toLowerCase() !== official.domain) audit.missing.push("officialDomain");
    audit.complete = audit.missing.length === 0;
    return audit;
  });
}
