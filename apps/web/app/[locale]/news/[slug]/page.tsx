import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getLegacyPostBySlug } from "@/lib/legacy-wordpress";
import { formatSiteDate } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const post = getLegacyPostBySlug(decodeURIComponent(slug));
  if (!post) return {};

  const fa = locale === "fa";
  const url = `${base}/${locale}/news/${encodeURIComponent(post.slug)}`;
  const description = post.excerpt_text || (fa ? "خبر و نوشته فناوری در AmirMotefaker.ir" : "Technology article on AmirMotefaker.ir");

  return {
    title: `${post.title} | ${fa ? "اخبار فناوری امیر متفکر" : "Amir Motefaker Technology News"}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        "fa-IR": `${base}/fa/news/${encodeURIComponent(post.slug)}`,
        "en-US": `${base}/en/news/${encodeURIComponent(post.slug)}`,
        "x-default": `${base}/en/news/${encodeURIComponent(post.slug)}`,
      },
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      publishedTime: post.date,
      modifiedTime: post.modified || post.date,
      images: post.featured_image ? [{ url: post.featured_image, alt: post.title }] : undefined,
      locale: fa ? "fa_IR" : "en_US",
      alternateLocale: fa ? ["en_US"] : ["fa_IR"],
    },
    twitter: {
      card: post.featured_image ? "summary_large_image" : "summary",
      title: post.title,
      description,
      images: post.featured_image ? [post.featured_image] : undefined,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const post = getLegacyPostBySlug(decodeURIComponent(slug));
  if (!post) notFound();

  const fa = locale === "fa";
  const articleUrl = `${base}/${locale}/news/${encodeURIComponent(post.slug)}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt_text,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    inLanguage: fa ? "fa-IR" : "en-US",
    mainEntityOfPage: articleUrl,
    image: post.featured_image || undefined,
    author: { "@type": "Person", name: fa ? "امیر متفکر" : "Amir Motefaker", url: `${base}/${locale}` },
    publisher: { "@type": "Person", name: fa ? "امیر متفکر" : "Amir Motefaker", url: `${base}/${locale}` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: fa ? "خانه" : "Home", item: `${base}/${locale}` },
      { "@type": "ListItem", position: 2, name: fa ? "اخبار فناوری" : "Technology News", item: `${base}/${locale}/news` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="inner-page">
        <article className="wrap article-wrap">
          <header className="article-head">
            <span className="sec-tag">{fa ? "اخبار فناوری" : "TECHNOLOGY NEWS"}</span>
            <h1>{post.title}</h1>
            <div className="article-meta">
              <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
              {post.categories.map((category) => <span key={category.id}>{category.name}</span>)}
            </div>
          </header>

          {post.featured_image ? (
            <Image className="article-featured" src={post.featured_image} alt={post.title} width={1400} height={788} unoptimized priority />
          ) : null}

          <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content_html }} />
        </article>
      </main>
    </>
  );
}
