import type { Locale } from "@/content/founder-site";
import { getFounderEntity, getProductEntities, getProductEntity, SITE_URL } from "@/lib/seo/entities";

export function buildFounderGraph(locale: Locale) {
  const founder = getFounderEntity(locale);
  const products = getProductEntities(locale);
  const fa = locale === "fa";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": founder.id,
        name: founder.name,
        alternateName: founder.alternateName,
        url: founder.url,
        image: { "@type": "ImageObject", url: founder.image },
        description: founder.description,
        jobTitle: founder.jobTitle,
        sameAs: founder.sameAs,
        knowsAbout: founder.knowsAbout,
        owns: products.map((product) => ({ "@id": `${product.url}#product` })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/${locale}/#website`,
        name: fa ? "وب‌سایت رسمی امیر متفکر" : "Official Website of Amir Motefaker",
        alternateName: fa ? "Amir Motefaker" : "امیر متفکر",
        url: `${SITE_URL}/${locale}`,
        inLanguage: fa ? "fa-IR" : "en-US",
        publisher: { "@id": founder.id },
        about: { "@id": founder.id },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/${locale}/products#portfolio`,
        name: fa ? "پرتفوی محصولات امیر متفکر" : "Amir Motefaker Product Portfolio",
        url: `${SITE_URL}/${locale}/products`,
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": `${product.url}#product` },
        })),
      },
      ...products.map((product) => ({
        "@type": "SoftwareApplication",
        "@id": `${product.url}#product`,
        name: product.name,
        url: product.url,
        description: product.description,
        applicationCategory: product.category,
        creator: { "@id": founder.id },
        inLanguage: product.language,
      })),
    ],
  };
}

export function buildProductGraph(locale: Locale, slug: string) {
  const founder = getFounderEntity(locale);
  const product = getProductEntity(locale, slug);
  if (!product) return null;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${product.url}#product`,
        name: product.name,
        url: product.url,
        description: product.description,
        applicationCategory: product.category,
        creator: { "@id": founder.id },
        inLanguage: product.language,
      },
      buildBreadcrumbSchema(locale, [
        { name: locale === "fa" ? "خانه" : "Home", url: `${SITE_URL}/${locale}` },
        { name: locale === "fa" ? "محصولات" : "Products", url: `${SITE_URL}/${locale}/products` },
        { name: product.name, url: product.url },
      ]),
    ],
  };
}

export function buildBreadcrumbSchema(
  locale: Locale,
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${items.at(-1)?.url || SITE_URL}/${locale}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
