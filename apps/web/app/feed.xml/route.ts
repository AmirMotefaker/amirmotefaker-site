import { getLegacyPosts } from "@/lib/legacy-wordpress";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const posts = getLegacyPosts()
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 50);

  const items = posts
    .map((post) => {
      const link = `${base}/fa/news/${encodeURIComponent(post.slug)}`;
      const categories = post.categories
        .map((category) => `<category>${escapeXml(category.name)}</category>`)
        .join("");

      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<link>${escapeXml(link)}</link>`,
        `<guid isPermaLink="true">${escapeXml(link)}</guid>`,
        `<pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
        `<description>${escapeXml(post.excerpt_text || post.title)}</description>`,
        categories,
        "</item>",
      ].join("");
    })
    .join("");

  const latestDate = posts[0]?.modified || posts[0]?.date;
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    "<title>Amir Motefaker — Technology News</title>",
    `<link>${escapeXml(`${base}/fa/news`)}</link>`,
    `<atom:link href="${escapeXml(`${base}/feed.xml`)}" rel="self" type="application/rss+xml" />`,
    "<description>Technology and AI news archive from AmirMotefaker.ir.</description>",
    "<language>fa-IR</language>",
    latestDate ? `<lastBuildDate>${new Date(latestDate).toUTCString()}</lastBuildDate>` : "",
    items,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
