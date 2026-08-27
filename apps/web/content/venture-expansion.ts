import type { Locale } from "@/content/founder-site";

export type EmergingVenture = {
  slug: string;
  nameFa: string;
  nameEn: string;
  industryFa: string;
  industryEn: string;
  statusFa: string;
  statusEn: string;
  publicNameConfirmed: boolean;
};

export const emergingVentures: EmergingVenture[] = [
  {
    slug: "tasvia",
    nameFa: "تسویا",
    nameEn: "Tasvia",
    industryFa: "فین‌تک",
    industryEn: "FinTech",
    statusFa: "در حال توسعه",
    statusEn: "In development",
    publicNameConfirmed: true,
  },
  {
    slug: "tourism-venture",
    nameFa: "محصول گردشگری",
    nameEn: "Tourism venture",
    industryFa: "فناوری گردشگری",
    industryEn: "TourismTech",
    statusFa: "در مرحله توسعه",
    statusEn: "In development",
    publicNameConfirmed: false,
  },
  {
    slug: "health-venture",
    nameFa: "محصول پزشکی",
    nameEn: "Health venture",
    industryFa: "فناوری سلامت",
    industryEn: "HealthTech",
    statusFa: "در مرحله توسعه",
    statusEn: "In development",
    publicNameConfirmed: false,
  },
];

export function getEmergingVentureName(venture: EmergingVenture, locale: Locale) {
  return locale === "fa" ? venture.nameFa : venture.nameEn;
}

export function getEmergingVentureIndustry(venture: EmergingVenture, locale: Locale) {
  return locale === "fa" ? venture.industryFa : venture.industryEn;
}

export function getEmergingVentureStatus(venture: EmergingVenture, locale: Locale) {
  return locale === "fa" ? venture.statusFa : venture.statusEn;
}
