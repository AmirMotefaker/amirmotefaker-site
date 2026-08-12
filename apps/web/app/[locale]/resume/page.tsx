import type { Metadata } from "next";
import CareerPage from "@/components/founder/CareerPage";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const canonical = `${base}/${locale}/resume`;

  return {
    title: fa ? "مسیر حرفه‌ای امیر متفکر | رزومه، تجربه و مدارک" : "Amir Motefaker Career | Experience, Education & Credentials",
    description: fa
      ? "مسیر حرفه‌ای امیر متفکر از فناوری اطلاعات و فروش تا داده، هوش مصنوعی، محصول، تحصیلات، گواهی‌نامه‌ها و مجوزهای حرفه‌ای."
      : "Amir Motefaker's professional journey across IT, sales, data, AI and products, including education, credentials and professional qualifications.",
    alternates: {
      canonical,
      languages: {
        fa: `${base}/fa/resume`,
        en: `${base}/en/resume`,
        "x-default": `${base}/fa/resume`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: fa ? "مسیر حرفه‌ای امیر متفکر" : "Amir Motefaker — Professional Journey",
      description: fa
        ? "تجربه، تحصیلات، مدارک، مجوزها و نقاط عطف حرفه‌ای."
        : "Experience, education, credentials, licenses and professional milestones.",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";

  return <CareerPage locale={locale} />;
}
