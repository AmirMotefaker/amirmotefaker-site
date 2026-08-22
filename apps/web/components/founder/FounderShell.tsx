import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { getProductDisplayName, productPortfolio as products } from "@/content/product-portfolio";
import ThemeToggle from "@/components/founder/ThemeToggle";
import { formatSiteYear } from "@/lib/locale-format";

const labels = {
  fa: {
    about: "درباره",
    products: "محصولات",
    thesis: "نگاه من",
    notes: "یادداشت‌ها",
    timeline: "مسیر حرفه‌ای",
    legacyNews: "آرشیو خبرها",
    contact: "تماس",
    sitemap: "نقشه سایت",
    interest: "بنیان‌گذار / محصول / فناوری",
    footerText:
      "ساخت محصولات فناوری با تمرکز بر مسئله واقعی، تجربه کاربر و استفاده عملی از هوش مصنوعی و نرم‌افزار.",
    quickLinks: "دسترسی سریع",
    productLinks: "محصولات منتخب",
    contactBlock: "ارتباط",
    rights: "تمام حقوق محفوظ است.",
  },
  en: {
    about: "About",
    products: "Products",
    thesis: "Thesis",
    notes: "Notes",
    timeline: "Journey",
    legacyNews: "News Archive",
    contact: "Contact",
    sitemap: "Sitemap",
    interest: "Founder / Product / Technology",
    footerText:
      "Building technology products around real problems, user experience and practical applications of AI and software.",
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
  const fa = locale === "fa";
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
            <Link href={`/${locale}/products`}>{l.products}</Link>
            <Link href={`/${locale}/thesis`}>{l.thesis}</Link>
            <Link href={`/${locale}/notes`}>{l.notes}</Link>
            <Link href={`/${locale}/about`}>{l.about}</Link>
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
              <Link href={`/${locale}`}>{fa ? "خانه" : "Home"}</Link>
              <Link href={`/${locale}/products`}>{l.products}</Link>
              <Link href={`/${locale}/thesis`}>{l.thesis}</Link>
              <Link href={`/${locale}/notes`}>{l.notes}</Link>
              <Link href={`/${locale}/about`}>{l.about}</Link>
              <Link href={`/${locale}/resume`}>{l.timeline}</Link>
              <Link href={`/${locale}/news`}>{l.legacyNews}</Link>
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
          <span>© {formatSiteYear(new Date(), locale)} {locale === "fa" ? founder.nameFa : founder.nameEn}. {l.rights}</span>
          <span>{locale === "fa" ? "طراحی و توسعه محلی" : "Local design & development build"}</span>
        </div>
      </footer>
    </div>
  );
}
