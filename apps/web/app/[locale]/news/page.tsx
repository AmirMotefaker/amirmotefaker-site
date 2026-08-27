import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getLegacyPosts } from "@/lib/legacy-wordpress";
import { formatSiteDate, formatSiteNumber } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";

const PAGE_SIZE = 12;
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const query = await searchParams;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const page = Math.max(1, Number(query.page || "1") || 1);
  const suffix = page > 1 ? `?page=${page}` : "";
  const url = `${base}/${locale}/news${suffix}`;
  const titleBase = fa ? "اخبار فناوری و هوش مصنوعی | امیر متفکر" : "Technology & AI News | Amir Motefaker";
  const title = page > 1 ? `${titleBase} — ${fa ? "صفحه" : "Page"} ${formatSiteNumber(page, locale)}` : titleBase;
  const description = fa
    ? "آرشیو اخبار و نوشته‌های فناوری امیر متفکر؛ شامل هوش مصنوعی، نرم‌افزار، محصولات دیجیتال، ابزارها و روندهای فناوری."
    : "Amir Motefaker's technology news archive covering AI, software, digital products, tools and technology trends.";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "fa-IR": `${base}/fa/news${suffix}`,
        "en-US": `${base}/en/news${suffix}`,
        "x-default": `${base}/en/news${suffix}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: fa ? "امیر متفکر، علاقه‌مند به فناوری" : "Amir Motefaker, Tech-savvy",
      locale: fa ? "fa_IR" : "en_US",
      alternateLocale: fa ? ["en_US"] : ["fa_IR"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { locale: raw } = await params;
  const query = await searchParams;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";

  const posts = [...getLegacyPosts()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const requestedPage = Math.max(1, Number(query.page || "1") || 1);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const currentPage = Math.min(requestedPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = posts.slice(start, start + PAGE_SIZE);
  const canonicalSuffix = currentPage > 1 ? `?page=${currentPage}` : "";

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: fa ? "اخبار فناوری و هوش مصنوعی" : "Technology & AI News",
    url: `${base}/${locale}/news${canonicalSuffix}`,
    inLanguage: fa ? "fa-IR" : "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: fa ? "امیر متفکر، علاقه‌مند به فناوری" : "Amir Motefaker, Tech-savvy",
      url: `${base}/${locale}`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: visible.map((post, index) => ({
        "@type": "ListItem",
        position: start + index + 1,
        url: `${base}/${locale}/news/${encodeURIComponent(post.slug)}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <main className="inner-page">
        <section className="wrap inner-hero">
          <span className="sec-tag">{fa ? "اخبار فناوری" : "TECHNOLOGY NEWS"}</span>
          <h1>{fa ? "اخبار فناوری و هوش مصنوعی" : "Technology & AI News"}</h1>
          <p>
            {fa
              ? "آرشیو نوشته‌ها و خبرهای فناوری AmirMotefaker.ir؛ از هوش مصنوعی و نرم‌افزار تا محصولات، ابزارها و روندهای دنیای دیجیتال."
              : "The AmirMotefaker.ir technology archive, covering AI, software, products, tools and digital-industry trends. Original articles are preserved in their source language."}
          </p>
        </section>

        <section className="wrap">
          <div className="legacy-news-toolbar">
            <span>{fa ? "تعداد مطالب:" : "Articles:"} {formatSiteNumber(posts.length, locale)}</span>
            <span>{fa ? "صفحه" : "Page"} {formatSiteNumber(currentPage, locale)} / {formatSiteNumber(totalPages, locale)}</span>
          </div>

          <div className="legacy-news-grid">
            {visible.map((post) => (
              <Link key={post.id} href={`/${locale}/news/${encodeURIComponent(post.slug)}`} className="news-card">
                <div className="news-cover">
                  {post.featured_image ? (
                    <Image src={post.featured_image} alt={post.title} width={960} height={540} unoptimized />
                  ) : null}
                </div>
                <div className="news-card-body">
                  <time className="news-date" dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt_text}</p>
                  <div className="news-taxonomies">
                    {post.categories.slice(0, 3).map((category) => <span key={category.id}>{category.name}</span>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 ? (
            <nav className="news-pagination" aria-label={fa ? "صفحه‌بندی اخبار فناوری" : "Technology news pagination"}>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) =>
                page === currentPage ? (
                  <span key={page} className="active" aria-current="page">{formatSiteNumber(page, locale)}</span>
                ) : (
                  <Link key={page} href={`/${locale}/news?page=${page}`}>{formatSiteNumber(page, locale)}</Link>
                ),
              )}
            </nav>
          ) : null}
        </section>
      </main>
    </>
  );
}
