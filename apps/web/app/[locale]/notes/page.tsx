import type { Metadata } from "next";
import NotesPageV1 from "@/components/founder/NotesPageV1";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "یادداشت‌های امیر متفکر" : "Notes | Amir Motefaker";
  const description = fa
    ? "یادداشت‌های دست‌اول امیر متفکر درباره ساخت محصول، هوش مصنوعی، بازار، آزمایش‌ها و تصمیم‌هایی که پشت پرتفوی محصولات قرار دارند."
    : "First-hand notes from Amir Motefaker on product building, AI, markets, experiments and decisions behind the product portfolio.";
  const canonical = `${base}/${locale}/notes`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "fa-IR": `${base}/fa/notes`,
        "en-US": `${base}/en/notes`,
        "x-default": `${base}/en/notes`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: fa ? "fa_IR" : "en_US",
      alternateLocale: fa ? ["en_US"] : ["fa_IR"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  return <NotesPageV1 locale={locale} />;
}
