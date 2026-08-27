import type { Metadata } from "next";
import Link from "next/link";
import { getLegacyPages } from "@/lib/legacy-wordpress";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "آرشیو صفحات سایت | امیر متفکر" : "Page Archive | Amir Motefaker";
  const description = fa
    ? "آرشیو صفحات محتوایی نسخه‌های قبلی AmirMotefaker.ir برای حفظ دسترسی و پیوستگی محتوایی."
    : "Archive of legacy AmirMotefaker.ir content pages retained for continuity and access.";
  const canonical = `${base}/${locale}/pages`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "fa-IR": `${base}/fa/pages`,
        "en-US": `${base}/en/pages`,
        "x-default": `${base}/en/pages`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: fa ? "fa_IR" : "en_US",
      alternateLocale: fa ? ["en_US"] : ["fa_IR"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const pages = getLegacyPages();

  return (
    <main className="inner-page">
      <section className="wrap inner-hero">
        <span className="sec-tag">{locale === "fa" ? "صفحات سایت قبلی" : "LEGACY PAGES"}</span>
        <h1>{locale === "fa" ? "آرشیو کامل صفحات" : "Complete Page Archive"}</h1>
      </section>

      <section className="wrap legacy-pages-grid">
        {pages.map((page) => (
          <Link className="legacy-page-card" href={`/${locale}/pages/${encodeURIComponent(page.slug)}`} key={page.id}>
            <h2>{page.title}</h2>
            <p>{page.excerpt_text}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
