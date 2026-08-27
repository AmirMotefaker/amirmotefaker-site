import type { Metadata } from "next";
import ThesisPageV1 from "@/components/founder/ThesisPageV1";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "نگاه امیر متفکر به ساخت محصول" : "Product Thesis | Amir Motefaker";
  const description = fa
    ? "نگاه امیر متفکر به ساخت محصول؛ از مسئله واقعی و شواهد تا هوش مصنوعی، سیستم‌های قابل رشد و منطق مشترک پرتفوی محصولات."
    : "Amir Motefaker's product-building thesis: real problems first, evidence over claims, AI as a tool and systems designed to compound learning.";
  const canonical = `${base}/${locale}/thesis`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "fa-IR": `${base}/fa/thesis`,
        "en-US": `${base}/en/thesis`,
        "x-default": `${base}/en/thesis`,
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
  return <ThesisPageV1 locale={locale} />;
}
