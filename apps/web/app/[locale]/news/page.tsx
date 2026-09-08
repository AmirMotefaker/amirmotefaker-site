import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getLegacyPosts, normalizeLegacySlug } from "@/lib/legacy-wordpress";
import { formatSiteDate, formatSiteNumber } from "@/lib/locale-format";
import type { Locale } from "@/content/founder-site";
import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";
import { getProductDisplayName } from "@/content/product-portfolio";
import styles from "./NewsExperience.module.css";

const PAGE_SIZE = 12;
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";
const newsSlug = (slug: string) => normalizeLegacySlug(slug);

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
  const requestedPage = Math.max(1, Number(query.page || "1") || 1);
  const totalPages = Math.max(1, Math.ceil(getLegacyPosts().length / PAGE_SIZE));
  const page = Math.min(requestedPage, totalPages);
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
      types: { "application/rss+xml": `${base}/feed.xml` },
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
  const posts = [...getLegacyPosts()].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const requestedPage = Math.max(1, Number(query.page || "1") || 1);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const currentPage = Math.min(requestedPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = posts.slice(start, start + PAGE_SIZE);
  const canonicalSuffix = currentPage > 1 ? `?page=${currentPage}` : "";
  const personId = `${base}/${locale}/#person`;
  const [lead, ...rest] = visible;
  const side = rest.slice(0, 2);
  const cards = rest.slice(2);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${base}/${locale}/news#collection`,
    name: fa ? "اخبار فناوری و هوش مصنوعی" : "Technology & AI News",
    url: `${base}/${locale}/news${canonicalSuffix}`,
    inLanguage: fa ? "fa-IR" : "en-US",
    creator: { "@id": personId },
    isPartOf: { "@id": `${base}/${locale}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: visible.map((post, index) => ({
        "@type": "ListItem",
        position: start + index + 1,
        url: `${base}/${locale}/news/${newsSlug(post.slug)}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <main className={styles.page}>
        <section className={`wrap ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <span>{fa ? "تحریریه فناوری" : "TECHNOLOGY EDITORIAL"}</span>
            <h1>{fa ? "اخبار فناوری، هوش مصنوعی و دنیای محصول" : "Technology, AI & Product News"}</h1>
            <p>{fa ? "آرشیو زنده‌ای از خبرها و نوشته‌های فناوری؛ از هوش مصنوعی و نرم‌افزار تا محصولات دیجیتال، ابزارها و روندهایی که آینده ساخت محصول را شکل می‌دهند." : "A living archive of technology coverage spanning AI, software, digital products, tools and the trends shaping how products are built."}</p>
          </div>
          <div className={styles.heroMeta}>
            <article><span>{fa ? "تعداد مطالب" : "Articles"}</span><strong>{formatSiteNumber(posts.length, locale)}</strong></article>
            <article><span>{fa ? "صفحه فعلی" : "Current page"}</span><strong>{formatSiteNumber(currentPage, locale)} / {formatSiteNumber(totalPages, locale)}</strong></article>
          </div>
        </section>

        {lead ? (
          <section className={`wrap ${styles.featured}`}>
            <Link href={`/${locale}/news/${newsSlug(lead.slug)}`} className={styles.lead}>
              {lead.featured_image ? <Image src={lead.featured_image} alt={lead.title} width={1440} height={810} unoptimized /> : null}
              <div className={styles.leadCopy}>
                <time dateTime={lead.date}>{formatSiteDate(lead.date, locale)}</time>
                <h2>{lead.title}</h2>
                <p>{lead.excerpt_text}</p>
              </div>
            </Link>
            <div className={styles.side}>
              {side.map((post) => (
                <Link key={post.id} href={`/${locale}/news/${newsSlug(post.slug)}`} className={styles.sideCard}>
                  <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt_text}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="wrap">
          <div className={styles.toolbar}>
            <h2>{fa ? "تازه‌ترین مطالب" : "Latest stories"}</h2>
            <div><span>{fa ? "صفحه" : "Page"} {formatSiteNumber(currentPage, locale)}</span><span>•</span><span>{formatSiteNumber(posts.length, locale)} {fa ? "مطلب" : "articles"}</span></div>
          </div>

          <div className={styles.grid}>
            {cards.map((post) => (
              <Link key={post.id} href={`/${locale}/news/${newsSlug(post.slug)}`} className={styles.card}>
                <div className={styles.cover}>
                  {post.featured_image ? <Image src={post.featured_image} alt={post.title} width={960} height={540} unoptimized /> : null}
                </div>
                <div className={styles.body}>
                  <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt_text}</p>
                  <div className={styles.tax}>{post.categories.slice(0, 3).map((category) => <span key={category.id}>{category.name}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>

          {currentPage === 1 ? (
            <aside className={styles.portfolio} aria-labelledby="portfolio-topics-heading">
              <span>{fa ? "موضوعات پرتفوی" : "PORTFOLIO TOPICS"}</span>
              <h2 id="portfolio-topics-heading">{fa ? "از خبر به محصول" : "From coverage to product"}</h2>
              <p>{fa ? "خبرهای فناوری را می‌توان در امتداد محصولاتی دید که در همان حوزه ساخته و توسعه داده می‌شوند." : "Technology coverage connects directly to products being built in the same domains."}</p>
              <div className={styles.portfolioLinks}>
                {canonicalProductPortfolio.map((product) => <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>{getProductDisplayName(product, locale)}</Link>)}
              </div>
            </aside>
          ) : null}

          {totalPages > 1 ? (
            <nav className={styles.pagination} aria-label={fa ? "صفحه‌بندی اخبار فناوری" : "Technology news pagination"}>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => page === currentPage ? <span key={page} aria-current="page">{formatSiteNumber(page, locale)}</span> : <Link key={page} href={`/${locale}/news?page=${page}`}>{formatSiteNumber(page, locale)}</Link>)}
            </nav>
          ) : null}
        </section>
      </main>
    </>
  );
}
