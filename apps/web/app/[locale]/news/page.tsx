import Link from "next/link";
import Image from "next/image";
import FounderShell from "@/components/founder/FounderShell";
import { getLegacyPosts } from "@/lib/legacy-wordpress";
import { formatSiteDate, formatSiteNumber } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";

const PAGE_SIZE = 10;

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

  const lead = visible[0];
  const highlights = visible.slice(1, 5);
  const archive = visible.slice(5);

  return (
    <FounderShell locale={locale}>
      <main className="mv-inner">
        <section className="mv-inner-hero mv-inner-hero-balanced">
          <div className="mv-container">
            <span className="mv-section-index">01 / {fa ? "اخبار فناوری" : "Technology news"}</span>
            <h1>{fa ? "مطالب فناوری، با ارائه حرفه‌ای‌تر." : "Technology stories, better presented."}</h1>
            <p>
              {fa
                ? "آرشیو واقعی نوشته‌های سایت قبلی، حالا با یک چیدمان editorial و خواناتر برای نمایش بهتر مطالب."
                : "The real archive from the previous website, now presented with a cleaner editorial layout."}
            </p>
          </div>
        </section>

        <section className="mv-news-editorial-wrap">
          <div className="mv-container">
            <div className="mv-news-editorial-toolbar">
              <span>{fa ? "تعداد مطالب" : "Stories"}: {formatSiteNumber(posts.length, locale)}</span>
              <span>{fa ? "صفحه" : "Page"}: {formatSiteNumber(currentPage, locale)} / {formatSiteNumber(totalPages, locale)}</span>
            </div>

            {lead ? (
              <Link href={`/${locale}/news/${encodeURIComponent(lead.slug)}`} className="mv-news-lead">
                <div className="mv-news-lead-visual">
                  {lead.featured_image ? (
                    <Image
                      src={lead.featured_image}
                      alt={lead.title}
                      width={1400}
                      height={900}
                      unoptimized
                      priority
                    />
                  ) : (
                    <span>AM / NEWS</span>
                  )}
                </div>
                <div className="mv-news-lead-copy">
                  <time dateTime={lead.date}>{formatSiteDate(lead.date, locale)}</time>
                  <h2>{lead.title}</h2>
                  <p>{lead.excerpt_text}</p>
                  <b>↗</b>
                </div>
              </Link>
            ) : null}

            {highlights.length ? (
              <div className="mv-news-secondary-grid">
                {highlights.map((post) => (
                  <Link
                    key={post.id}
                    href={`/${locale}/news/${encodeURIComponent(post.slug)}`}
                    className="mv-news-mini-card"
                  >
                    <div className="mv-news-mini-image">
                      {post.featured_image ? (
                        <Image src={post.featured_image} alt={post.title} width={900} height={560} unoptimized />
                      ) : (
                        <span>AM</span>
                      )}
                    </div>
                    <div className="mv-news-mini-copy">
                      <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt_text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}

            {archive.length ? (
              <div className="mv-news-archive-grid">
                {archive.map((post) => (
                  <Link
                    key={post.id}
                    href={`/${locale}/news/${encodeURIComponent(post.slug)}`}
                    className="mv-news-archive-card"
                  >
                    <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt_text}</p>
                    <div className="mv-news-taxonomies-lite">
                      {post.categories.slice(0, 3).map((category) => (
                        <span key={category.id}>{category.name}</span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}

            {totalPages > 1 ? (
              <nav className="news-pagination" aria-label="Pagination">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) =>
                  page === currentPage ? (
                    <span key={page} className="active">
                      {formatSiteNumber(page, locale)}
                    </span>
                  ) : (
                    <Link key={page} href={`/${locale}/news?page=${page}`}>
                      {formatSiteNumber(page, locale)}
                    </Link>
                  ),
                )}
              </nav>
            ) : null}
          </div>
        </section>
      </main>
    </FounderShell>
  );
}