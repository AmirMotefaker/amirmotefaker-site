import type { Metadata } from "next";
import type { ReactNode } from "react";
import FounderShell from "@/components/founder/FounderShell";
import { founder, type Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

function resolveLocale(raw: string): Locale {
  return raw === "en" ? "en" : "fa";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const fa = locale === "fa";
  const title = fa ? founder.titleFa : founder.titleEn;
  const description = fa
    ? "امیر متفکر، علاقه‌مند به فناوری؛ معرفی محصولات و پروژه‌های فناوری، اخبار فناوری و مسیر فعالیت در هوش مصنوعی، فین‌تک، آموزش، سلامت، گردشگری و زیرساخت دیجیتال."
    : "Amir Motefaker, Tech-savvy; technology products, technology news and digital ventures across AI, FinTech, education, health, tourism and digital infrastructure.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "fa-IR": "/fa",
        "en-US": "/en",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: fa ? "fa_IR" : "en_US",
      alternateLocale: fa ? ["en_US"] : ["fa_IR"],
      url: `${base}/${locale}`,
      siteName: title,
      title,
      description,
      images: [{ url: "/assets/profile/amir-motefaker.png", width: 1024, height: 1024, alt: fa ? founder.nameFa : founder.nameEn }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/profile/amir-motefaker.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const fa = locale === "fa";
  const title = fa ? founder.titleFa : founder.titleEn;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: fa ? founder.nameFa : founder.nameEn,
    alternateName: fa ? founder.nameEn : founder.nameFa,
    url: `${base}/${locale}`,
    image: `${base}/assets/profile/amir-motefaker.png`,
    sameAs: [founder.github, founder.linkedin, founder.x, founder.kaggle],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url: `${base}/${locale}`,
    inLanguage: fa ? "fa-IR" : "en-US",
    publisher: {
      "@type": "Person",
      name: fa ? founder.nameFa : founder.nameEn,
    },
  };

  return (
    <FounderShell locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {children}
    </FounderShell>
  );
}
