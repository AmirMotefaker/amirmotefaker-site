import type { Metadata } from "next";
import ContactPageV6 from "@/components/founder/ContactPageV6";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "ارتباط با امیر متفکر" : "Contact Amir Motefaker";
  const description = fa
    ? "راه‌های ارتباط با امیر متفکر برای همکاری، گفتگو درباره محصولات، فناوری و فرصت‌های کسب‌وکار."
    : "Contact Amir Motefaker for collaboration, product discussions, technology and business opportunities.";
  const canonical = `${base}/${locale}/contact`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "fa-IR": `${base}/fa/contact`,
        "en-US": `${base}/en/contact`,
        "x-default": `${base}/en/contact`,
      },
    },
    openGraph: { title, description, url: canonical, type: "website", locale: fa ? "fa_IR" : "en_US" },
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

  return <ContactPageV6 locale={locale} />;
}
