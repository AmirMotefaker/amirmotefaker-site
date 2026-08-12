import type { Metadata } from "next";
import ProductsIndexView from "@/components/products/ProductsIndexView";
import type { Locale } from "@/content/founder-site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "محصولات فناوری | امیر متفکر" : "Products & Ventures | Amir Motefaker";
  const description = fa
    ? "مجموعه محصولات و کسب‌وکارهای فناوری امیر متفکر در حوزه‌های هوش مصنوعی، فین‌تک، فودتک، زبان، دانش و پلتفرم‌های دیجیتال."
    : "I build AI-powered technology products across FinTech, FoodTech, LanguageTech, Knowledge, Entertainment and Enterprise Technology.";
  const canonical = `${base}/${locale}/products`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";

  return (
    <>
      <div id="top">
        <ProductsIndexView locale={locale} />
      </div>
    </>
  );
}
