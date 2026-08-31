import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailView from "@/components/products/ProductDetailView";
import { getProductDisplayName } from "@/content/product-portfolio";
import { canonicalProductPortfolio, getCanonicalProduct } from "@/content/canonical-product-portfolio";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export function generateStaticParams() {
  return canonicalProductPortfolio.flatMap((product) => [
    { locale: "fa", slug: product.slug },
    { locale: "en", slug: product.slug },
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const product = getCanonicalProduct(slug);
  if (!product) return {};

  const displayName = getProductDisplayName(product, locale);
  const title = `${displayName} | ${locale === "fa" ? "پرتفوی امیر متفکر" : "Amir Motefaker Portfolio"}`;
  const description = locale === "fa" ? product.shortDescriptionFa : product.shortDescriptionEn;
  const canonical = `${base}/${locale}/products/${product.slug}`;
  const faUrl = `${base}/fa/products/${product.slug}`;
  const enUrl = `${base}/en/products/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical, languages: { "fa-IR": faUrl, "en-US": enUrl, "x-default": enUrl } },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: [locale === "fa" ? "en_US" : "fa_IR"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const product = getCanonicalProduct(slug);
  if (!product) notFound();

  const displayName = getProductDisplayName(product, locale);
  const pageUrl = `${base}/${locale}/products/${product.slug}`;
  const productUrl = product.domain ? `https://${product.domain.toLowerCase()}` : undefined;
  const personId = `${base}/${locale}/#person`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#product`,
    name: displayName,
    description: locale === "fa" ? product.shortDescriptionFa : product.shortDescriptionEn,
    applicationCategory: product.category,
    operatingSystem: "Web",
    url: productUrl || pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: locale === "fa" ? "fa-IR" : "en-US",
    creator: { "@id": personId },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "fa" ? "محصولات" : "Products", item: `${base}/${locale}/products` },
      { "@type": "ListItem", position: 2, name: displayName, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductDetailView locale={locale} product={product} />
    </>
  );
}
