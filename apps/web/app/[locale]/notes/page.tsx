import type { Metadata } from "next";
import NotesPageV1 from "@/components/founder/NotesPageV1";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "یادداشت‌های امیر متفکر درباره فناوری، محصول و هوش مصنوعی" : "Amir Motefaker Notes on Technology, Product & AI";
  const description = fa
    ? "یادداشت‌های دست‌اول امیر متفکر درباره ساخت محصول، هوش مصنوعی، بازار، تجربه کاربر، آزمایش‌ها و تصمیم‌های پشت پرتفوی فناوری."
    : "First-hand notes from Amir Motefaker on product building, AI, markets, user experience, experiments and decisions behind the technology portfolio.";
  const canonical = `${base}/${locale}/notes`;
  return {
    title,
    description,
    keywords: fa ? ["یادداشت امیر متفکر", "هوش مصنوعی", "ساخت محصول", "استراتژی محصول", "کارآفرینی فناوری", "بازار فناوری"] : ["Amir Motefaker notes", "artificial intelligence", "product building", "product strategy", "technology entrepreneurship", "technology market"],
    alternates: { canonical, languages: { "fa-IR": `${base}/fa/notes`, "en-US": `${base}/en/notes`, "x-default": `${base}/en/notes` } },
    openGraph: { title, description, url: canonical, type: "website", locale: fa ? "fa_IR" : "en_US", alternateLocale: fa ? ["en_US"] : ["fa_IR"] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const pageUrl = `${base}/${locale}/notes`;
  const personId = `${base}/${locale}/#person`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#notes`,
    name: fa ? "یادداشت‌های امیر متفکر" : "Amir Motefaker Notes",
    description: fa ? "مجموعه یادداشت‌های دست‌اول امیر متفکر درباره فناوری و ساخت محصول." : "A collection of first-hand notes by Amir Motefaker about technology and product building.",
    url: pageUrl,
    inLanguage: fa ? "fa-IR" : "en-US",
    creator: { "@id": personId },
    about: ["Artificial Intelligence", "Product Strategy", "Digital Products", "Technology Entrepreneurship"],
    isPartOf: { "@id": `${base}/${locale}/#website` },
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><NotesPageV1 locale={locale} /></>;
}
