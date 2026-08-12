import type { ReactNode } from "react";
import FounderShell from "@/components/founder/FounderShell";
import type { Locale } from "@/content/founder-site";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";

  return <FounderShell locale={locale}>{children}</FounderShell>;
}
