import type { MetadataRoute } from "next";
import { productPortfolio as products } from "@/content/product-portfolio";
import { getLegacyPages, getLegacyPosts } from "@/lib/legacy-wordpress";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";
const locales = ["fa", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of ["", "/about", "/products", "/resume", "/news", "/contact", "/pages"]) {
      routes.push({
        url: `${base}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
      });
    }

    for (const product of products) {
      routes.push({
        url: `${base}/${locale}/products/${product.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }

    for (const post of getLegacyPosts()) {
      routes.push({
        url: `${base}/${locale}/news/${encodeURIComponent(post.slug)}`,
        lastModified: new Date(post.modified || post.date),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }

    for (const page of getLegacyPages()) {
      routes.push({
        url: `${base}/${locale}/pages/${encodeURIComponent(page.slug)}`,
        lastModified: new Date(page.modified),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return routes;
}
