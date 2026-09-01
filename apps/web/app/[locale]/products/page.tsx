import type { Metadata } from "next";
import ProductsIndexView from "@/components/products/ProductsIndexView";
import type { Locale } from "@/content/founder-site";
import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";
import { getProductDisplayName } from "@/content/product-portfolio";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "محصولات امیر متفکر | ۱۱ محصول فناوری" : "Amir Motefaker Products | 11 Technology Ventures";
  const description = fa
    ? "پرتفوی رسمی ۱۱ محصول امیر متفکر در هوش مصنوعی، فین‌تک، سلامت دیجیتال، گردشگری هوشمند، آموزش، زبان فارسی، مدیریت لینک، کتاب و سرگرمی."
    : "The official 11-product portfolio of Amir Motefaker across AI, FinTech, digital health, smart tourism, education, Persian language technology, link management, books and entertainment.";
  const canonical = `${base}/${locale}/products`;
  const keywords = fa
    ? ["محصولات امیر متفکر", "پرتفوی امیر متفکر", "محصولات فناوری ایران", "هوش مصنوعی فارسی", "فین‌تک ایران", "فناوری سلامت", "گردشگری هوشمند", "فناوری آموزشی", "مدیریت لینک", "خلاصه کتاب با هوش مصنوعی"]
    : ["Amir Motefaker products", "Amir Motefaker portfolio", "AI products Iran", "FinTech Iran", "digital health", "smart tourism", "education technology", "Persian AI", "link management", "AI book intelligence"];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: { "fa-IR": `${base}/fa/products`, "en-US": `${base}/en/products`, "x-default": `${base}/en/products` },
    },
    openGraph: { title, description, url: canonical, type: "website", locale: fa ? "fa_IR" : "en_US", alternateLocale: fa ? ["en_US"] : ["fa_IR"] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const pageUrl = `${base}/${locale}/products`;
  const personId = `${base}/${locale}/#person`;
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#portfolio`,
    name: fa ? "پرتفوی محصولات امیر متفکر" : "Amir Motefaker Product Portfolio",
    description: fa ? "مرجع رسمی محصولات فناوری ساخته یا هدایت‌شده توسط امیر متفکر." : "The official reference for technology products built or directed by Amir Motefaker.",
    url: pageUrl,
    inLanguage: fa ? "fa-IR" : "en-US",
    about: { "@id": personId },
    creator: { "@id": personId },
    isPartOf: { "@id": `${base}/${locale}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: canonicalProductPortfolio.length,
      itemListElement: canonicalProductPortfolio.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          "@id": `${base}/${locale}/products/${product.slug}#product`,
          name: getProductDisplayName(product, locale),
          url: `${base}/${locale}/products/${product.slug}`,
          description: fa ? product.shortDescriptionFa : product.shortDescriptionEn,
          applicationCategory: product.category,
          creator: { "@id": personId },
        },
      })),
    },
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} /><div id="top"><ProductsIndexView locale={locale} /></div></>;
}
