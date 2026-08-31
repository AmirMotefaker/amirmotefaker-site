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
    slug: "tasvin",
    nameFa: "تسوین",
    nameEn: "Tasvin",
    industryFa: "فین‌تک و خدمات مالی",
    industryEn: "FinTech & Financial Services",
    statusFa: "در حال توسعه",
    statusEn: "In development",
    publicNameConfirmed: true,
  },
  {
    slug: "vayran",
    nameFa: "وایران",
    nameEn: "Vayran",
    industryFa: "فناوری گردشگری",
    industryEn: "TourismTech",
    statusFa: "در حال توسعه",
    statusEn: "In development",
    publicNameConfirmed: true,
  },
  {
    slug: "darmic",
    nameFa: "دارمیک",
    nameEn: "Darmic",
    industryFa: "فناوری سلامت و پزشکی",
    industryEn: "HealthTech & Medical AI",
    statusFa: "در حال توسعه",
    statusEn: "In development",
    publicNameConfirmed: true,
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
