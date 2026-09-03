import { founder, type Locale } from "@/content/founder-site";
import { finalPublicProductPortfolio } from "@/content/final-public-product-portfolio";
import { getProductDisplayName } from "@/content/product-portfolio";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export type SeoProductEntity = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  description: string;
  status: string;
  language: "fa-IR" | "en-US";
};

export function getFounderEntity(locale: Locale) {
  const fa = locale === "fa";

  return {
    id: `${SITE_URL}/${locale}/#person`,
    name: fa ? founder.nameFa : founder.nameEn,
    alternateName: fa ? founder.nameEn : founder.nameFa,
    url: `${SITE_URL}/${locale}/about`,
    image: `${SITE_URL}/assets/profile/amir-motefaker.png`,
    jobTitle: fa ? "کارآفرین و سازنده محصولات فناوری" : "Entrepreneur and Technology Product Builder",
    description: fa
      ? "امیر متفکر، کارآفرین و سازنده محصولات فناوری در حوزه‌های هوش مصنوعی، فناوری مالی، آموزش، سلامت، گردشگری، رسانه و زیرساخت دیجیتال است."
      : "Amir Motefaker is an entrepreneur and technology product builder across AI, FinTech, education, health, tourism, media and digital infrastructure.",
    sameAs: [founder.github, founder.linkedin, founder.x, founder.kaggle].filter(Boolean),
    knowsAbout: fa
      ? ["کارآفرینی فناوری", "هوش مصنوعی", "محصول دیجیتال", "فناوری مالی", "فناوری آموزشی", "فناوری سلامت", "فناوری گردشگری", "رسانه دیجیتال", "زیرساخت نرم‌افزار"]
      : ["Technology Entrepreneurship", "Artificial Intelligence", "Digital Products", "FinTech", "Education Technology", "Health Technology", "Travel Technology", "Digital Media", "Software Infrastructure"],
  } as const;
}

export function getProductEntities(locale: Locale): SeoProductEntity[] {
  return finalPublicProductPortfolio.map((product) => ({
    slug: product.slug,
    name: getProductDisplayName(product, locale),
    url: `${SITE_URL}/${locale}/products/${product.slug}`,
    domain: product.domain,
    category: product.category,
    description: locale === "fa" ? product.shortDescriptionFa : product.shortDescriptionEn,
    status: product.status,
    language: locale === "fa" ? "fa-IR" : "en-US",
  }));
}

export function getProductEntity(locale: Locale, slug: string) {
  return getProductEntities(locale).find((product) => product.slug === slug);
}
