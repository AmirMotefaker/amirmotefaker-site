import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import FounderShell from "@/components/founder/FounderShell";
import { founder, type Locale } from "@/content/founder-site";
import { finalPublicProductPortfolio } from "@/content/final-public-product-portfolio";
import { getProductDisplayName } from "@/content/product-portfolio";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

function resolveLocale(raw: string): Locale {
  if (raw === "fa" || raw === "en") return raw;
  notFound();
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const fa = locale === "fa";
  const title = fa ? "امیر متفکر | کارآفرین و سازنده محصولات فناوری" : "Amir Motefaker | Entrepreneur & Technology Product Builder";
  const description = fa
    ? "وب‌سایت رسمی امیر متفکر؛ کارآفرین و سازنده محصولات فناوری با بیش از ۳۰ سال حضور در فناوری و پرتفویی شامل رستیار، پرایم‌سیستم، لینک‌رسان، فارسیو، فهمیو، زبدینو، ایده‌جو، تسویا، وایران، دارمیک و فیلم‌ترک."
    : "Official website of Amir Motefaker, an entrepreneur and technology product builder with 30+ years in technology and an 11-product portfolio spanning AI, FinTech, education, health, tourism, media and digital infrastructure.";

  return {
    title,
    description,
    keywords: fa
      ? ["امیر متفکر", "کارآفرین فناوری", "محصولات فناوری", "هوش مصنوعی", "فناوری مالی", "فناوری سلامت", "فناوری گردشگری", "فناوری آموزشی", "رستیار", "پرایم‌سیستم", "لینک‌رسان", "فارسیو", "فهمیو", "زبدینو", "ایده‌جو", "تسویا", "وایران", "دارمیک", "فیلم‌ترک"]
      : ["Amir Motefaker", "technology entrepreneur", "technology products", "artificial intelligence", "FinTech", "digital health", "travel technology", "education technology", "RestYar", "PrimeSYS", "LinkResan", "Farsio", "Fahmio", "Zobdino", "IdehJo", "Tasvia", "Vayran", "Darmic", "FilmTrack"],
    alternates: {
      canonical: `/${locale}`,
      languages: { "fa-IR": "/fa", "en-US": "/en", "x-default": "/en" },
    },
    openGraph: {
      type: "profile",
      locale: fa ? "fa_IR" : "en_US",
      alternateLocale: fa ? ["en_US"] : ["fa_IR"],
      url: `${base}/${locale}`,
      siteName: fa ? "امیر متفکر" : "Amir Motefaker",
      title,
      description,
      images: [{ url: "/assets/profile/amir-motefaker.png", width: 1024, height: 1024, alt: fa ? founder.nameFa : founder.nameEn }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/profile/amir-motefaker.png"] },
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const fa = locale === "fa";
  const personId = `${base}/${locale}/#person`;
  const websiteId = `${base}/${locale}/#website`;
  const aboutUrl = `${base}/${locale}/about`;
  const knowsAbout = fa
    ? ["کارآفرینی فناوری", "هوش مصنوعی", "طراحی و توسعه محصول دیجیتال", "فناوری مالی", "فناوری آموزشی", "فناوری سلامت", "فناوری گردشگری", "رسانه دیجیتال", "زیرساخت نرم‌افزار", "تجربه کاربری"]
    : ["Technology Entrepreneurship", "Artificial Intelligence", "Digital Product Development", "FinTech", "Education Technology", "Health Technology", "Travel Technology", "Digital Media", "Software Infrastructure", "User Experience"];

  const productRefs = finalPublicProductPortfolio.map((product) => ({
    "@id": `${base}/${locale}/products/${product.slug}#product`,
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: fa ? founder.nameFa : founder.nameEn,
        alternateName: fa ? founder.nameEn : founder.nameFa,
        url: aboutUrl,
        mainEntityOfPage: { "@id": `${aboutUrl}#profile` },
        image: { "@type": "ImageObject", url: `${base}/assets/profile/amir-motefaker.png` },
        description: fa
          ? "امیر متفکر، کارآفرین و سازنده مجموعه‌ای از محصولات مستقل فناوری در حوزه‌های هوش مصنوعی، فناوری مالی، آموزش، سلامت، گردشگری، رسانه و زیرساخت دیجیتال است."
          : "Amir Motefaker is an entrepreneur and builder of independent technology products across AI, FinTech, education, health, tourism, media and digital infrastructure.",
        jobTitle: fa ? "کارآفرین و سازنده محصولات فناوری" : "Entrepreneur and Technology Product Builder",
        sameAs: [founder.github, founder.linkedin, founder.x, founder.kaggle].filter(Boolean),
        knowsAbout,
        owns: productRefs,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: fa ? "وب‌سایت رسمی امیر متفکر" : "Official Website of Amir Motefaker",
        alternateName: fa ? "Amir Motefaker" : "امیر متفکر",
        url: `${base}/${locale}`,
        inLanguage: fa ? "fa-IR" : "en-US",
        publisher: { "@id": personId },
        about: { "@id": personId },
        hasPart: [
          { "@type": "CollectionPage", name: fa ? "پرتفوی محصولات" : "Product Portfolio", url: `${base}/${locale}/products` },
          { "@type": "ProfilePage", name: fa ? "درباره امیر متفکر" : "About Amir Motefaker", url: aboutUrl },
          { "@type": "CollectionPage", name: fa ? "اخبار فناوری" : "Technology News", url: `${base}/${locale}/news` },
          { "@type": "CollectionPage", name: fa ? "یادداشت‌ها" : "Notes", url: `${base}/${locale}/notes` },
        ],
      },
      ...finalPublicProductPortfolio.map((product) => ({
        "@type": "SoftwareApplication",
        "@id": `${base}/${locale}/products/${product.slug}#product`,
        name: getProductDisplayName(product, locale),
        url: `${base}/${locale}/products/${product.slug}`,
        description: fa ? product.shortDescriptionFa : product.shortDescriptionEn,
        applicationCategory: product.category,
        creator: { "@id": personId },
        inLanguage: fa ? "fa-IR" : "en-US",
      })),
    ],
  };

  return (
    <FounderShell locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      {children}
    </FounderShell>
  );
}
