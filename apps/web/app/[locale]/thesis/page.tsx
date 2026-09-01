import type { Metadata } from "next";
import ThesisPageV1 from "@/components/founder/ThesisPageV1";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "نگاه امیر متفکر به محصول، هوش مصنوعی و فناوری" : "Amir Motefaker on Product, AI & Technology";
  const description = fa
    ? "نگاه تحلیلی امیر متفکر به ساخت محصول، حل مسئله، هوش مصنوعی، داده، تجربه کاربر و ساخت سیستم‌های فناوری قابل رشد."
    : "Amir Motefaker's product thesis on problem solving, AI, data, user experience and building technology systems designed to grow.";
  const canonical = `${base}/${locale}/thesis`;
  return {
    title,
    description,
    keywords: fa
      ? ["نگاه امیر متفکر", "استراتژی محصول", "ساخت محصول", "هوش مصنوعی", "کارآفرینی فناوری", "تجربه کاربر"]
      : ["Amir Motefaker product thesis", "product strategy", "AI product development", "technology entrepreneurship", "user experience"],
    alternates: { canonical, languages: { "fa-IR": `${base}/fa/thesis`, "en-US": `${base}/en/thesis`, "x-default": `${base}/en/thesis` } },
    openGraph: { title, description, url: canonical, type: "article", locale: fa ? "fa_IR" : "en_US", alternateLocale: fa ? ["en_US"] : ["fa_IR"] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const pageUrl = `${base}/${locale}/thesis`;
  const personId = `${base}/${locale}/#person`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#thesis`,
    headline: fa ? "نگاه امیر متفکر به محصول، هوش مصنوعی و فناوری" : "Amir Motefaker on Product, AI & Technology",
    description: fa ? "چارچوب فکری امیر متفکر برای ساخت محصول و سیستم‌های فناوری." : "Amir Motefaker's framework for building products and technology systems.",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: fa ? "fa-IR" : "en-US",
    author: { "@id": personId },
    publisher: { "@id": personId },
    about: ["Product Strategy", "Artificial Intelligence", "Digital Products", "Technology Entrepreneurship"],
    isPartOf: { "@id": `${base}/${locale}/#website` },
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><ThesisPageV1 locale={locale} /></>;
}
