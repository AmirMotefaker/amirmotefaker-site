import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/fa/login", "/en/login"] },
      { userAgent: "Googlebot", allow: "/", disallow: ["/api/", "/fa/login", "/en/login"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/api/", "/fa/login", "/en/login"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/api/", "/fa/login", "/en/login"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/api/", "/fa/login", "/en/login"] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
