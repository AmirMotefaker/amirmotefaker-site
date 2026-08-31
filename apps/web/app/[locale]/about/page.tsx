import type { Metadata } from "next";
import AboutPageV6 from "@/components/founder/AboutPageV6";
import { founder, type Locale } from "@/content/founder-site";
import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";
import { getProductDisplayName } from "@/content/product-portfolio";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://amirmotefaker.ir";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const title = fa ? "امیر متفکر کیست؟ | کارآفرین و سازنده محصولات فناوری" : "Who is Amir Motefaker? | Entrepreneur & Technology Product Builder";
  const description = fa
    ? "معرفی جامع امیر متفکر، کارآفرین و سازنده محصولات فناوری؛ بیش از ۳۰ سال فعالیت در فناوری، مسیر حرفه‌ای، حوزه‌های تخصصی و پرتفوی ۱۱ محصول مستقل."
    : "A comprehensive profile of Amir Motefaker, an entrepreneur and technology product builder: 30+ years in technology, professional journey, areas of expertise and an 11-product portfolio.";
  const canonical = `${base}/${locale}/about`;

  return {
    title,
    description,
    keywords: fa
      ? ["امیر متفکر کیست", "امیر متفکر", "بیوگرافی امیر متفکر", "رزومه امیر متفکر", "کارآفرین فناوری", "سازنده محصولات فناوری", "پرتفوی امیر متفکر"]
      : ["who is Amir Motefaker", "Amir Motefaker", "Amir Motefaker biography", "Amir Motefaker resume", "technology entrepreneur", "technology product builder"],
    alternates: { canonical, languages: { "fa-IR": `${base}/fa/about`, "en-US": `${base}/en/about`, "x-default": `${base}/en/about` } },
    openGraph: { title, description, url: canonical, type: "profile", locale: fa ? "fa_IR" : "en_US", images: [{ url: "/assets/profile/amir-motefaker.png", width: 1024, height: 1024, alt: fa ? founder.nameFa : founder.nameEn }] },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/profile/amir-motefaker.png"] },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fa";
  const fa = locale === "fa";
  const canonical = `${base}/${locale}/about`;
  const personId = `${base}/${locale}/#person`;

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${canonical}#profile`,
    url: canonical,
    name: fa ? "امیر متفکر کیست؟" : "Who is Amir Motefaker?",
    description: fa
      ? "صفحه مرجع معرفی امیر متفکر، مسیر حرفه‌ای، تخصص‌ها و محصولات فناوری او."
      : "Canonical profile of Amir Motefaker, his professional journey, expertise and technology products.",
    inLanguage: fa ? "fa-IR" : "en-US",
    mainEntity: { "@id": personId },
    about: { "@id": personId },
    hasPart: canonicalProductPortfolio.map((product) => ({
      "@type": "SoftwareApplication",
      "@id": `${base}/${locale}/products/${product.slug}#product`,
      name: getProductDisplayName(product, locale),
      url: `${base}/${locale}/products/${product.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
      <AboutPageV6 locale={locale} />
    </>
  );
}
