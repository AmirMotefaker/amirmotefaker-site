import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import ProductDetailView from "@/components/products/ProductDetailView";
import { getProductDisplayName } from "@/content/product-portfolio";
import { finalPublicProductPortfolio, getFinalPublicProduct } from "@/content/final-public-product-portfolio";
import { getProductTopicCluster } from "@/content/seo-topic-clusters";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export function generateStaticParams() {
  return finalPublicProductPortfolio.flatMap((product) => [
    { locale: "fa", slug: product.slug },
    { locale: "en", slug: product.slug },
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  if (slug === "tasvin") return {};

  const fa = locale === "fa";
  const product = getFinalPublicProduct(slug);
  if (!product) return {};

  const displayName = getProductDisplayName(product, locale);
  const cluster = getProductTopicCluster(product.slug, locale);
  const title = fa ? `${displayName} چیست؟ | محصول فناوری امیر متفکر` : `${displayName} | Technology Product by Amir Motefaker`;
  const description = fa
    ? `${product.shortDescriptionFa} معرفی مسئله، راهکار، قابلیت‌ها و نقش امیر متفکر در توسعه ${displayName}.`
    : `${product.shortDescriptionEn} Explore the problem, solution, capabilities and Amir Motefaker's role in building ${displayName}.`;
  const canonical = `${base}/${locale}/products/${product.slug}`;
  const faUrl = `${base}/fa/products/${product.slug}`;
  const enUrl = `${base}/en/products/${product.slug}`;
  const keywords = fa
    ? [displayName, `${displayName} چیست`, ...cluster, product.category, "امیر متفکر"]
    : [displayName, `${displayName} product`, ...cluster, product.category, "Amir Motefaker"];

  return {
    title,
    description,
    keywords,
    authors: [{ name: fa ? "امیر متفکر" : "Amir Motefaker", url: `${base}/${locale}/about` }],
    creator: fa ? "امیر متفکر" : "Amir Motefaker",
    alternates: { canonical, languages: { "fa-IR": faUrl, "en-US": enUrl, "x-default": enUrl } },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: fa ? "fa_IR" : "en_US",
      alternateLocale: [fa ? "en_US" : "fa_IR"],
      siteName: fa ? "امیر متفکر" : "Amir Motefaker",
      images: [{ url: "/assets/profile/amir-motefaker.png", width: 1024, height: 1024, alt: displayName }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/profile/amir-motefaker.png"] },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  if (slug === "tasvin") permanentRedirect(`/${locale}/products/tasvia`);

  const fa = locale === "fa";
  const product = getFinalPublicProduct(slug);
  if (!product) notFound();

  const displayName = getProductDisplayName(product, locale);
  const cluster = getProductTopicCluster(product.slug, locale);
  const pageUrl = `${base}/${locale}/products/${product.slug}`;
  const verifiedProductUrl = product.domain ? `https://${product.domain.toLowerCase()}` : undefined;
  const personId = `${base}/${locale}/#person`;
  const websiteId = `${base}/${locale}/#website`;
  const description = fa ? product.shortDescriptionFa : product.shortDescriptionEn;
  const problem = (fa ? product.problemFa : product.problemEn)?.find((item) => item?.trim()) || (fa ? product.solutionFa : product.solutionEn) || description;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#product`,
    name: displayName,
    alternateName: product.name,
    description,
    applicationCategory: product.category,
    operatingSystem: "Web",
    url: pageUrl,
    sameAs: verifiedProductUrl ? [verifiedProductUrl] : undefined,
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    inLanguage: fa ? "fa-IR" : "en-US",
    creator: { "@id": personId },
    author: { "@id": personId },
    isPartOf: { "@id": websiteId },
    about: fa ? product.problemFa : product.problemEn,
    keywords: [displayName, product.category, product.positioning, ...cluster],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: fa ? `${displayName} چیست؟` : `${displayName} product profile`,
    description,
    inLanguage: fa ? "fa-IR" : "en-US",
    isPartOf: { "@id": websiteId },
    about: { "@id": `${pageUrl}#product` },
    mainEntity: { "@id": `${pageUrl}#product` },
    author: { "@id": personId },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: fa ? "امیر متفکر" : "Amir Motefaker", item: `${base}/${locale}` },
      { "@type": "ListItem", position: 2, name: fa ? "محصولات" : "Products", item: `${base}/${locale}/products` },
      { "@type": "ListItem", position: 3, name: displayName, item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: fa ? `${displayName} چیست؟` : `What is ${displayName}?`,
        acceptedAnswer: { "@type": "Answer", text: description },
      },
      {
        "@type": "Question",
        name: fa ? `${displayName} چه مسئله‌ای را حل می‌کند؟` : `What problem does ${displayName} solve?`,
        acceptedAnswer: { "@type": "Answer", text: problem },
      },
      ...(product.domain ? [{
        "@type": "Question",
        name: fa ? `وب‌سایت رسمی ${displayName} چیست؟` : `What is the official ${displayName} website?`,
        acceptedAnswer: { "@type": "Answer", text: fa ? `وب‌سایت رسمی این محصول ${product.domain} است.` : `The official product website is ${product.domain}.` },
      }] : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductDetailView locale={locale} product={product} />
    </>
  );
}
