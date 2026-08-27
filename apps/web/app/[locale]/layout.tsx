import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import FounderShell from "@/components/founder/FounderShell";
import { founder, type Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

function resolveLocale(raw: string): Locale {
  if (raw === "fa" || raw === "en") return raw;
  notFound();
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
  const personId = `${base}/${locale}/#person`;
  const websiteId = `${base}/${locale}/#website`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: fa ? founder.nameFa : founder.nameEn,
    alternateName: fa ? founder.nameEn : founder.nameFa,
    url: `${base}/${locale}/about`,
    mainEntityOfPage: `${base}/${locale}/about`,
    image: `${base}/assets/profile/amir-motefaker.png`,
    sameAs: [founder.github, founder.linkedin, founder.x, founder.kaggle],
    knowsAbout: fa
      ? ["هوش مصنوعی", "محصول دیجیتال", "فین‌تک", "فناوری آموزشی", "فناوری سلامت", "فناوری گردشگری"]
      : ["Artificial Intelligence", "Digital Products", "FinTech", "Education Technology", "Health Technology", "Tourism Technology"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: title,
    url: `${base}/${locale}`,
    inLanguage: fa ? "fa-IR" : "en-US",
    publisher: { "@id": personId },
    about: { "@id": personId },
    hasPart: [
      { "@type": "CollectionPage", name: fa ? "محصولات" : "Products", url: `${base}/${locale}/products` },
      { "@type": "CollectionPage", name: fa ? "اخبار فناوری" : "Technology News", url: `${base}/${locale}/news` },
    ],
  };

  return (
    <FounderShell locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {children}
    </FounderShell>
  );
}
