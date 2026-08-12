import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { getProductDisplayName, productPortfolio as products } from "@/content/product-portfolio";
import ThemeToggle from "@/components/founder/ThemeToggle";

const labels = {
  fa: {
    about: "درباره من",
    products: "محصولات",
    expertise: "تخصص",
    timeline: "مسیر حرفه‌ای",
    news: "اخبار فناوری",
    contact: "تماس",
    seeProducts: "مشاهده محصولات",
    sitemap: "نقشه سایت",
    interest: "علاقه‌مند به فناوری",
    footerText:
      "ساخت محصولات هوشمند، اکوسیستم‌های دیجیتال و تجربه‌های داده‌محور برای آینده کسب‌وکار.",
    quickLinks: "دسترسی سریع",
    productLinks: "محصولات منتخب",
    contactBlock: "ارتباط",
    rights: "تمام حقوق محفوظ است.",
  },
  en: {
    about: "About",
    products: "Products",
    expertise: "Expertise",
    timeline: "Journey",
    news: "Technology News",
    contact: "Contact",
    seeProducts: "View Products",
    sitemap: "Sitemap",
    interest: "Technology Enthusiast",
    footerText:
      "Building intelligent products, digital ecosystems and data-driven experiences for the future.",
    quickLinks: "Quick Links",
    productLinks: "Featured Products",
    contactBlock: "Contact",
    rights: "All rights reserved.",
  },
};

export default function FounderShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const l = labels[locale];
  const other = locale === "fa" ? "en" : "fa";

  return (
    <div className="founder-site" lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <div className="bg-glow" />
      <div className="noise" />

      <header className="site-header">
        <nav className="wrap header-shell">
          <Link href={`/${locale}`} className="brand-block" aria-label="Amir Motefaker">
            <span className="brand-avatar">
              <Image
                src="/assets/profile/amir-motefaker.png"
                alt={locale === "fa" ? founder.nameFa : founder.nameEn}
                width={52}
                height={52}
                priority
              />
            </span>
            <span className="brand-copy">
              <strong>{locale === "fa" ? founder.nameFa : founder.nameEn}</strong>
              <small>{l.interest}</small>
            </span>
          </Link>

          <div className="nav-links">
            <Link href={`/${locale}/about`}>{l.about}</Link>
            <Link href={`/${locale}/products`}>{l.products}</Link>
            <Link href={`/${locale}#expertise`}>{l.expertise}</Link>
            <Link href={`/${locale}/resume`}>{l.timeline}</Link>
            <Link href={`/${locale}/news`}>{l.news}</Link>
          </div>

          <div className="nav-cta">
            <ThemeToggle />
            <Link href={`/${other}`} className="locale-switch">{other.toUpperCase()}</Link>
            <Link href={`/${locale}/contact`} className="btn btn-primary">{l.contact}</Link>
          </div>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-top">
              <span className="brand-avatar brand-avatar-sm">
                <Image src="/assets/profile/amir-motefaker.png" alt="Amir Motefaker" width={44} height={44} />
              </span>
              <div className="brand-copy">
                <strong>{locale === "fa" ? founder.nameFa : founder.nameEn}</strong>
                <small>{l.interest}</small>
              </div>
            </div>
            <p>{l.footerText}</p>
          </div>

          <div className="footer-links-block">
            <h3>{l.quickLinks}</h3>
            <div className="footer-links">
              <Link href={`/${locale}`}>Home</Link>
              <Link href={`/${locale}/about`}>{l.about}</Link>
              <Link href={`/${locale}/products`}>{l.products}</Link>
              <Link href={`/${locale}/resume`}>{l.timeline}</Link>
              <Link href={`/${locale}/news`}>{l.news}</Link>
              <Link href={`/${locale}/contact`}>{l.contact}</Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">{l.sitemap}</a>
            </div>
          </div>

          <div className="footer-links-block">
            <h3>{l.productLinks}</h3>
            <div className="footer-links">
              {products.slice(0, 5).map((product) => (
                <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>
                  {getProductDisplayName(product, locale)}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-links-block">
            <h3>{l.contactBlock}</h3>
            <div className="footer-links footer-links-compact">
              <a href={`mailto:${founder.email}`}>{founder.email}</a>
              <a href={`tel:${founder.phoneHref}`}>{founder.phone}</a>
              <span>{locale === "fa" ? founder.cityFa : founder.cityEn}</span>
              <div className="social-links">
                <a href={founder.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={founder.kaggle} target="_blank" rel="noopener noreferrer">Kaggle</a>
                <a href={founder.x} target="_blank" rel="noopener noreferrer">X</a>
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap footer-bottom">
          <span>© 2026 {locale === "fa" ? founder.nameFa : founder.nameEn}. {l.rights}</span>
          <span>{locale === "fa" ? "طراحی و توسعه محلی" : "Local design & development build"}</span>
        </div>
      </footer>
    </div>
  );
}
