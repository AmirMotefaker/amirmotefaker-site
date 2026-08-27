import type { Metadata } from "next";
import AboutPageV6 from "@/components/founder/AboutPageV6";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "درباره امیر متفکر" : "About Amir Motefaker";
  const description = fa
    ? "درباره امیر متفکر، مسیر فعالیت در فناوری و نگاه او به ساخت محصولات و کسب‌وکارهای دیجیتال."
    : "About Amir Motefaker, his technology journey and approach to building digital products and ventures.";
  const canonical = `${base}/${locale}/about`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "fa-IR": `${base}/fa/about`,
        "en-US": `${base}/en/about`,
        "x-default": `${base}/en/about`,
      },
    },
    openGraph: { title, description, url: canonical, type: "profile", locale: fa ? "fa_IR" : "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";

  return <AboutPageV6 locale={locale} />;
}
