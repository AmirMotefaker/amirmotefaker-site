import { getLegacyPageById } from "@/lib/legacy-wordpress";
import { formatSiteDate } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";

export default function LegacyPageContent({
  locale,
  pageId,
}: {
  locale: Locale;
  pageId: number;
}) {
  const page = getLegacyPageById(pageId);
  if (!page) return null;

  return (
    <section className="wrap legacy-page-section">
      <div className="legacy-section-meta">
        <span>{locale === "fa" ? "محتوای کامل سایت قبلی" : "Legacy site content"}</span>
        <time dateTime={page.modified}>{formatSiteDate(page.modified, locale)}</time>
      </div>
      <article
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: page.content_html }}
      />
    </section>
  );
}