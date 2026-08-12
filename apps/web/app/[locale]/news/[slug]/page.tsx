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
  const post = getLegacyPostBySlug(decodeURIComponent(slug));

  if (!post) notFound();

  return (
    <FounderShell locale={locale}>
      <main className="inner-page">
        <article className="wrap article-wrap">
          <header className="article-head">
            <span className="sec-tag">
              {locale === "fa" ? "اخبار فناوری" : "TECHNOLOGY NEWS"}
            </span>
            <h1>{post.title}</h1>
            <div className="article-meta">
              <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
              {post.categories.map((category) => (
                <span key={category.id}>{category.name}</span>
              ))}
            </div>
          </header>

          {post.featured_image ? (
            <Image
              className="article-featured"
              src={post.featured_image}
              alt={post.title}
              width={1400}
              height={788}
              unoptimized
              priority
            />
          ) : null}

          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content_html }}
          />
        </article>
      </main>
    </FounderShell>
  );
}