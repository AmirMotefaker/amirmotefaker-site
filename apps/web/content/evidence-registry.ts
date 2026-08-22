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

export const evidenceRegistry: EvidenceEntry[] = [
  {
    id: "linkresan-live-product",
    productSlug: "linkresan",
    type: "live-product",
    status: "verified",
    titleFa: "محصول فعال لینک‌رسان",
    titleEn: "LinkResan live product",
    descriptionFa: "سرویس عمومی لینک‌رسان روی دامنه رسمی در دسترس است و قابلیت کوتاه‌سازی لینک را ارائه می‌کند.",
    descriptionEn: "The public LinkResan service is available on its official domain and provides URL shortening.",
    url: "https://linkresan.ir",
    source: "Official product domain",
    verifiedAt: "2026-08-22",
  },
  {
    id: "farsio-public-repository",
    productSlug: "farsio",
    type: "repository",
    status: "verified",
    titleFa: "مخزن عمومی فارسیو",
    titleEn: "Farsio public repository",
    descriptionFa: "مخزن عمومی وب‌سایت فارسیو در سازمان رسمی FarsioIR روی GitHub قابل مشاهده است.",
    descriptionEn: "The public Farsio website repository is available under the official FarsioIR GitHub organization.",
    url: "https://github.com/FarsioIR/farsio.ir",
    source: "GitHub repository",
    verifiedAt: "2026-08-22",
  },
  {
    id: "zobdino-public-repository",
    productSlug: "zobdino",
    type: "repository",
    status: "verified",
    titleFa: "مخزن عمومی زبدینو",
    titleEn: "Zobdino public repository",
    descriptionFa: "مخزن عمومی Zobdino در سازمان رسمی Zobdino روی GitHub قابل مشاهده است.",
    descriptionEn: "The public Zobdino repository is available under the official Zobdino GitHub organization.",
    url: "https://github.com/Zobdino/Zobdino",
    source: "GitHub repository",
    verifiedAt: "2026-08-22",
  },
  {
    id: "filmtrack-public-repository",
    productSlug: "filmtrack",
    type: "repository",
    status: "verified",
    titleFa: "مخزن عمومی فیلم‌ترک",
    titleEn: "FilmTrack public repository",
    descriptionFa: "مخزن عمومی FilmTrack در حساب GitHub امیر متفکر قابل مشاهده است.",
    descriptionEn: "The public FilmTrack repository is available on Amir Motefaker's GitHub account.",
    url: "https://github.com/AmirMotefaker/FilmTrack",
    source: "GitHub repository",
    verifiedAt: "2026-08-22",
  },
  {
    id: "idehjo-public-repository",
    productSlug: "idehjo",
    type: "repository",
    status: "verified",
    titleFa: "مخزن عمومی ایده‌جو",
    titleEn: "IdehJo public repository",
    descriptionFa: "کد پروژه ایده‌جو در مخزن عمومی iran-hunt روی GitHub قابل مشاهده است.",
    descriptionEn: "IdehJo project code is available in the public iran-hunt repository on GitHub.",
    url: "https://github.com/AmirMotefaker/iran-hunt",
    source: "GitHub repository",
    verifiedAt: "2026-08-22",
  },
];

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
