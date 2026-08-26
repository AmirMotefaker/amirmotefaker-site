import type { MetadataRoute } from "next";
import { productPortfolio as products } from "@/content/product-portfolio";
import { getLegacyPages, getLegacyPosts } from "@/lib/legacy-wordpress";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";
const locales = ["fa", "en"] as const;

function alternates(path: string) {
  return {
    languages: {
      "fa-IR": `${base}/fa${path}`,
      "en-US": `${base}/en${path}`,
      "x-default": `${base}/en${path}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of ["", "/about", "/products", "/thesis", "/notes", "/resume", "/news", "/contact", "/pages"]) {
      routes.push({
        url: `${base}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : path === "/products" || path === "/news" || path === "/thesis" || path === "/notes" ? 0.9 : 0.8,
        alternates: alternates(path),
      });
    }

    for (const product of products) {
      const path = `/products/${product.slug}`;
      routes.push({
        url: `${base}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: alternates(path),
      });
    }

    for (const post of getLegacyPosts()) {
      const path = `/news/${encodeURIComponent(post.slug)}`;
      routes.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(post.modified || post.date),
        changeFrequency: "weekly",
        priority: 0.75,
        alternates: alternates(path),
      });
    }

    for (const page of getLegacyPages()) {
      const path = `/pages/${encodeURIComponent(page.slug)}`;
      routes.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(page.modified),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: alternates(path),
      });
    }
  }

  return routes;
}
