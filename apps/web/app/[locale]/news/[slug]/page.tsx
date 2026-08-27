import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getLegacyPostBySlug } from "@/lib/legacy-wordpress";
import { formatSiteDate } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";
import { getProductDisplayName } from "@/content/product-portfolio";
import { getRelatedNewsProducts } from "@/content/news-authority";

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
  const personId = `${base}/${locale}/#person`;
  const relatedProducts = getRelatedNewsProducts({
    title: post.title,
    excerpt: post.excerpt_text,
    categories: post.categories.map((category) => category.name),
  });

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
    author: { "@id": personId },
    publisher: { "@id": personId },
    about: relatedProducts.map((product) => ({
      "@type": "SoftwareApplication",
      "@id": `${base}/${locale}/products/${product.slug}#product`,
      name: getProductDisplayName(product, locale),
      url: `${base}/${locale}/products/${product.slug}`,
      applicationCategory: product.categoryEn,
    })),
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

          {relatedProducts.length > 0 ? (
            <aside className="prose-card" aria-labelledby="related-portfolio-heading">
              <span className="sec-tag">{fa ? "ارتباط با پرتفوی" : "PORTFOLIO CONTEXT"}</span>
              <h2 id="related-portfolio-heading">{fa ? "محصولات مرتبط با این موضوع" : "Related products in the portfolio"}</h2>
              <p>
                {fa
                  ? "این ارتباط بر اساس موضوع و دسته‌بندی همین مطلب است و به معنی ادعای مشارکت محصول در خبر نیست."
                  : "These links are based on the article topic and taxonomy; they do not imply that the products participated in the reported event."}
              </p>
              <div className="footer-links">
                {relatedProducts.map((product) => (
                  <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>
                    {getProductDisplayName(product, locale)} ↗
                  </Link>
                ))}
              </div>
            </aside>
          ) : null}

          <nav className="article-meta" aria-label={fa ? "مسیرهای مرتبط" : "Related navigation"}>
            <Link href={`/${locale}/news`}>{fa ? "بازگشت به اخبار فناوری" : "Back to Technology News"}</Link>
            <Link href={`/${locale}/products`}>{fa ? "مشاهده محصولات" : "Explore products"}</Link>
            <Link href={`/${locale}/about`}>{fa ? "درباره امیر متفکر" : "About Amir Motefaker"}</Link>
          </nav>
        </article>
      </main>
    </>
  );
}
