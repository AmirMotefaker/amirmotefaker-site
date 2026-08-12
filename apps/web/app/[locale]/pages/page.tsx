import Link from "next/link";
import FounderShell from "@/components/founder/FounderShell";
import { getLegacyPages } from "@/lib/legacy-wordpress";
import type { Locale } from "@/content/founder-site";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const pages = getLegacyPages();

  return (
    <FounderShell locale={locale}>
      <main className="inner-page">
        <section className="wrap inner-hero">
          <span className="sec-tag">
            {locale === "fa" ? "صفحات سایت قبلی" : "LEGACY PAGES"}
          </span>
          <h1>
            {locale === "fa" ? "آرشیو کامل صفحات" : "Complete Page Archive"}
          </h1>
        </section>

        <section className="wrap legacy-pages-grid">
          {pages.map((page) => (
            <Link
              className="legacy-page-card"
              href={`/${locale}/pages/${encodeURIComponent(page.slug)}`}
              key={page.id}
            >
              <h2>{page.title}</h2>
              <p>{page.excerpt_text}</p>
            </Link>
          ))}
        </section>
      </main>
    </FounderShell>
  );
}