import { notFound } from "next/navigation";
import FounderShell from "@/components/founder/FounderShell";
import { getLegacyPageBySlug } from "@/lib/legacy-wordpress";
import { formatSiteDate } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const page = getLegacyPageBySlug(decodeURIComponent(slug));

  if (!page) notFound();

  return (
    <FounderShell locale={locale}>
      <main className="inner-page">
        <article className="wrap article-wrap">
          <header className="article-head">
            <span className="sec-tag">
              {locale === "fa" ? "آرشیو سایت قبلی" : "LEGACY PAGE"}
            </span>
            <h1>{page.title}</h1>
            <div className="article-meta">
              <time dateTime={page.modified}>
                {formatSiteDate(page.modified, locale)}
              </time>
            </div>
          </header>

          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: page.content_html }}
          />
        </article>
      </main>
    </FounderShell>
  );
}