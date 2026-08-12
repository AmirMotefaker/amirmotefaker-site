import Link from "next/link";
import Image from "next/image";
import FounderShell from "@/components/founder/FounderShell";
import { getLegacyPosts } from "@/lib/legacy-wordpress";
import { formatSiteDate, formatSiteNumber } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";

const PAGE_SIZE = 12;

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

  return (
    <FounderShell locale={locale}>
      <main className="inner-page">
        <section className="wrap inner-hero">
          <span className="sec-tag">{fa ? "اخبار فناوری" : "TECHNOLOGY NEWS"}</span>
          <h1>{fa ? "اخبار فناوری و هوش مصنوعی" : "Technology & AI News"}</h1>
          <p>
            {fa
              ? "آرشیو واقعی مطالب سایت قبلی؛ اکنون روی طراحی جدید و به‌صورت Local."
              : "The legacy technology archive, now rendered inside the new local design."}
          </p>
        </section>

        <section className="wrap">
          <div className="legacy-news-toolbar">
            <span>
              {fa ? "تعداد مطالب:" : "Articles:"} {formatSiteNumber(posts.length, locale)}
            </span>
            <span>
              {fa ? "صفحه" : "Page"} {formatSiteNumber(currentPage, locale)} / {formatSiteNumber(totalPages, locale)}
            </span>
          </div>

          <div className="legacy-news-grid">
            {visible.map((post) => (
              <Link
                key={post.id}
                href={`/${locale}/news/${encodeURIComponent(post.slug)}`}
                className="news-card"
              >
                <div className="news-cover">
                  {post.featured_image ? (
                    <Image
                      src={post.featured_image}
                      alt={post.title}
                      width={960}
                      height={540}
                      unoptimized
                    />
                  ) : null}
                </div>

                <div className="news-card-body">
                  <time className="news-date" dateTime={post.date}>
                    {formatSiteDate(post.date, locale)}
                  </time>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt_text}</p>
                  <div className="news-taxonomies">
                    {post.categories.slice(0, 3).map((category) => (
                      <span key={category.id}>{category.name}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

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
        </section>
      </main>
    </FounderShell>
  );
}