import type { MetadataRoute } from "next";
import { finalPublicProductPortfolio } from "@/content/final-public-product-portfolio";
import { getLegacyPosts } from "@/lib/legacy-wordpress";

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
  const routes: MetadataRoute.Sitemap = [];
  const corePages = [
    ["", 1, "weekly"],
    ["/about", 0.95, "monthly"],
    ["/products", 0.95, "weekly"],
    ["/resume", 0.9, "monthly"],
    ["/thesis", 0.9, "monthly"],
    ["/notes", 0.85, "weekly"],
    ["/news", 0.9, "daily"],
    ["/contact", 0.65, "monthly"],
  ] as const;

  for (const locale of locales) {
    for (const [path, priority, changeFrequency] of corePages) {
      routes.push({
        url: `${base}/${locale}${path}`,
        changeFrequency,
        priority,
        alternates: alternates(path),
      });
    }

    for (const product of finalPublicProductPortfolio) {
      const path = `/products/${product.slug}`;
      routes.push({
        url: `${base}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: 0.92,
        alternates: alternates(path),
      });
    }

    for (const post of getLegacyPosts()) {
      const path = `/news/${encodeURIComponent(post.slug)}`;
      routes.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(post.modified || post.date),
        changeFrequency: "monthly",
        priority: 0.72,
        alternates: alternates(path),
      });
    }
  }

  return routes;
}
