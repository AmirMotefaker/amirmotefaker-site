import AboutPageV6 from "@/components/founder/AboutPageV6";
import type { Locale } from "@/content/founder-site";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";

  return <AboutPageV6 locale={locale} />;
}
