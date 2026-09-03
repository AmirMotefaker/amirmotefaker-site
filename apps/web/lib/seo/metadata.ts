import type { Metadata } from "next";
import type { Locale } from "@/content/founder-site";
import { SITE_URL } from "@/lib/seo/entities";

export function buildLocalizedMetadata(input: {
  locale: Locale;
  path?: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  keywordsFa?: string[];
  keywordsEn?: string[];
  image?: string;
}): Metadata {
  const {
    locale,
    path = "",
    titleFa,
    titleEn,
    descriptionFa,
    descriptionEn,
    keywordsFa = [],
    keywordsEn = [],
    image = "/assets/profile/amir-motefaker.png",
  } = input;

  const fa = locale === "fa";
  const localizedPath = `/${locale}${path}`;
  const siblingPath = `/${fa ? "en" : "fa"}${path}`;
  const title = fa ? titleFa : titleEn;
  const description = fa ? descriptionFa : descriptionEn;

  return {
    title,
    description,
    keywords: fa ? keywordsFa : keywordsEn,
    alternates: {
      canonical: localizedPath,
      languages: {
        "fa-IR": fa ? localizedPath : siblingPath,
        "en-US": fa ? siblingPath : localizedPath,
        "x-default": fa ? siblingPath : localizedPath,
      },
    },
    openGraph: {
      type: "website",
      locale: fa ? "fa_IR" : "en_US",
      alternateLocale: fa ? ["en_US"] : ["fa_IR"],
      url: `${SITE_URL}${localizedPath}`,
      siteName: fa ? "امیر متفکر" : "Amir Motefaker",
      title,
      description,
      images: [{ url: image, width: 1200, height: 1200, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
