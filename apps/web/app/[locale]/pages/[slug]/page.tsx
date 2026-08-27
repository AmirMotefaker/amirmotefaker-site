import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegacyPageBySlug } from "@/lib/legacy-wordpress";
import { formatSiteDate } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const page = getLegacyPageBySlug(decodeURIComponent(slug));
  if (!page) return {};

  const path = `/pages/${encodeURIComponent(page.slug)}`;
  const canonical = `${base}/${locale}${path}`;
  const description = page.excerpt_text || page.title;

  return {
    title: `${page.title} | AmirMotefaker.ir`,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical },
    openGraph: {
      title: page.title,
      description,
      url: canonical,
      type: "article",
      locale: locale === "fa" ? "fa_IR" : "en_US",
    },
  };
}

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
    <main className="inner-page">
      <article className="wrap article-wrap">
        <header className="article-head">
          <span className="sec-tag">{locale === "fa" ? "آرشیو سایت قبلی" : "LEGACY PAGE"}</span>
          <h1>{page.title}</h1>
          <div className="article-meta">
            <time dateTime={page.modified}>{formatSiteDate(page.modified, locale)}</time>
          </div>
        </header>

        <div className="wp-content" dangerouslySetInnerHTML={{ __html: page.content_html }} />
      </article>
    </main>
  );
}
