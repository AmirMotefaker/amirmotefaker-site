import type { Metadata } from "next";
import CareerPage from "@/components/founder/CareerPage";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const canonical = `${base}/${locale}/resume`;
  const title = fa ? "مسیر حرفه‌ای امیر متفکر | بیش از ۳۰ سال در فناوری" : "Amir Motefaker Career | 30+ Years in Technology";
  const description = fa
    ? "مسیر حرفه‌ای و شواهد سابقه امیر متفکر در بیش از ۳۰ سال فعالیت فناوری؛ از فناوری اطلاعات و فروش تا داده، هوش مصنوعی، محصول، تحصیلات و مدارک حرفه‌ای."
    : "Amir Motefaker's documented 30+ year technology journey across IT, sales, data, AI and product building, including education and professional credentials.";
  return {
    title, description,
    keywords: fa ? ["رزومه امیر متفکر", "سوابق امیر متفکر", "مسیر حرفه‌ای امیر متفکر", "کارآفرین فناوری ایران", "هوش مصنوعی", "محصول دیجیتال"] : ["Amir Motefaker resume", "Amir Motefaker career", "technology entrepreneur Iran", "AI product builder", "digital product founder"],
    alternates: { canonical, languages: { "fa-IR": `${base}/fa/resume`, "en-US": `${base}/en/resume`, "x-default": `${base}/en/resume` } },
    openGraph: { type: "profile", url: canonical, title, description, locale: fa ? "fa_IR" : "en_US", alternateLocale: fa ? ["en_US"] : ["fa_IR"] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const pageUrl = `${base}/${locale}/resume`;
  const personId = `${base}/${locale}/#person`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${pageUrl}#career-profile`,
    url: pageUrl,
    name: fa ? "مسیر حرفه‌ای امیر متفکر" : "Amir Motefaker Professional Journey",
    inLanguage: fa ? "fa-IR" : "en-US",
    about: { "@id": personId },
    mainEntity: { "@id": personId },
    isPartOf: { "@id": `${base}/${locale}/#website` },
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><CareerPage locale={locale} /></>;
}
