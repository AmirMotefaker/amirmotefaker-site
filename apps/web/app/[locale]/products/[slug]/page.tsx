import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailView from "@/components/products/ProductDetailView";
import { getProduct, getProductDisplayName, productPortfolio } from "@/content/product-portfolio";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export function generateStaticParams() {
  return productPortfolio.flatMap((product) => [
    { locale: "fa", slug: product.slug },
    { locale: "en", slug: product.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const product = getProduct(slug);
  if (!product) return {};

  const title = `${getProductDisplayName(product, locale)} | Amir Motefaker`;
  const description = locale === "fa" ? product.shortDescriptionFa : product.shortDescriptionEn;
  const canonical = `${base}/${locale}/products/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const product = getProduct(slug);
  if (!product) notFound();

  const productUrl = `https://${product.domain.toLowerCase()}`;
  const pageUrl = `${base}/${locale}/products/${product.slug}`;

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: getProductDisplayName(product, locale),
    url: productUrl,
    description: product.positioning,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "fa" ? "محصولات" : "Products",
        item: `${base}/${locale}/products`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: getProductDisplayName(product, locale),
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetailView locale={locale} product={product} />
    </>
  );
}
