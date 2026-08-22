import { isActivePortfolioBrand } from "@/content/brand-registry";

export type EvidenceType =
  | "live-product"
  | "demo"
  | "repository"
  | "case-study"
  | "user-evidence"
  | "metric"
  | "media"
  | "external-reference";

export type EvidenceStatus = "verified" | "pending" | "archived";

export type EvidenceEntry = {
  id: string;
  productSlug: string;
  type: EvidenceType;
  status: EvidenceStatus;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  url?: string;
  source?: string;
  verifiedAt?: string;
};

// Evidence starts empty by design. Entries must be backed by a real artifact or
// source before they can be marked verified and surfaced as public proof.
export const evidenceRegistry: EvidenceEntry[] = [];

export const verifiedEvidence = evidenceRegistry.filter(
  (entry) => entry.status === "verified" && isActivePortfolioBrand(entry.productSlug),
);

export function getVerifiedEvidence() {
  return verifiedEvidence;
}

export function getProductEvidence(productSlug: string) {
  return verifiedEvidence.filter((entry) => entry.productSlug === productSlug);
}

export function hasVerifiedEvidence(productSlug: string) {
  return getProductEvidence(productSlug).length > 0;
}
