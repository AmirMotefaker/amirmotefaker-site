import FounderHome from "@/components/founder/FounderHome";
import type { Locale } from "@/content/founder-site";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  return <FounderHome locale={locale} />;
}