import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import FounderShell from "@/components/founder/FounderShell";
import type { Locale } from "@/content/founder-site";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";
import { buildFounderGraph } from "@/lib/seo/schema";

function resolveLocale(raw: string): Locale {
  if (raw === "fa" || raw === "en") return raw;
  notFound();
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);

  return buildLocalizedMetadata({
    locale,
    titleFa: "امیر متفکر | کارآفرین و سازنده محصولات فناوری",
    titleEn: "Amir Motefaker | Entrepreneur & Technology Product Builder",
    descriptionFa:
      "وب‌سایت رسمی امیر متفکر؛ کارآفرین و سازنده محصولات فناوری با بیش از ۳۰ سال حضور در فناوری و پرتفویی شامل رستیار، پرایم سیستم، لینک‌رسان، فارسیو، فهمیو، زبدینو، ایده‌جو، تسوین، وایران، دارمیک و فیلم‌ترک.",
    descriptionEn:
      "Official website of Amir Motefaker, an entrepreneur and technology product builder with 30+ years in technology and an 11-product portfolio spanning AI, FinTech, education, health, tourism, media and digital infrastructure.",
    keywordsFa: [
      "امیر متفکر",
      "کارآفرین فناوری",
      "محصولات فناوری",
      "هوش مصنوعی",
      "فناوری مالی",
      "فناوری سلامت",
      "فناوری گردشگری",
      "فناوری آموزشی",
      "رستیار",
      "پرایم سیستم",
      "لینک‌رسان",
      "فارسیو",
      "فهمیو",
      "زبدینو",
      "ایده‌جو",
      "تسوین",
      "وایران",
      "دارمیک",
      "فیلم‌ترک",
    ],
    keywordsEn: [
      "Amir Motefaker",
      "technology entrepreneur",
      "technology products",
      "artificial intelligence",
      "FinTech",
      "digital health",
      "travel technology",
      "education technology",
      "RestYar",
      "PrimeSYS",
      "LinkResan",
      "Farsio",
      "Fahmio",
      "Zobdino",
      "IdehJo",
      "Tasvin",
      "Vayran",
      "Darmic",
      "FilmTrack",
    ],
  });
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const graph = buildFounderGraph(locale);

  return (
    <FounderShell locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      {children}
    </FounderShell>
  );
}
