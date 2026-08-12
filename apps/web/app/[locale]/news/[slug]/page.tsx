import { notFound } from "next/navigation";
import Image from "next/image";
import FounderShell from "@/components/founder/FounderShell";
import { getLegacyPostBySlug } from "@/lib/legacy-wordpress";
import { formatSiteDate } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const post = getLegacyPostBySlug(decodeURIComponent(slug));

  if (!post) notFound();

  return (
    <FounderShell locale={locale}>
      <main className="mv-inner">
        <article className="mv-article-page">
          <section className="mv-article-hero">
            <div className="mv-container">
              <span className="mv-section-index">01 / {fa ? "مقاله" : "Article"}</span>
              <h1>{post.title}</h1>
              <div className="mv-article-meta-line">
                <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
                <div>
                  {post.categories.map((category) => (
                    <span key={category.id}>{category.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {post.featured_image ? (
            <div className="mv-article-feature-wrap">
              <div className="mv-container">
                <Image
                  className="mv-article-featured"
                  src={post.featured_image}
                  alt={post.title}
                  width={1500}
                  height={860}
                  unoptimized
                  priority
                />
              </div>
            </div>
          ) : null}

          <section className="mv-article-body-wrap">
            <div className="mv-container">
              <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content_html }} />
            </div>
          </section>
        </article>
      </main>
    </FounderShell>
  );
}