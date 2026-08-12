import Image from "next/image";
import Link from "next/link";
import LocaleDigits from "@/components/founder/LocaleDigits";
import ThemeToggle from "@/components/founder/ThemeToggle";
import { founder, products, type Locale } from "@/content/founder-site";

const labels = {
  fa: {
    about: "درباره من",
    products: "محصولات",
    resume: "مسیر حرفه‌ای",
    news: "اخبار فناوری",
    contact: "تماس",
    menu: "منو",
    interest: "علاقه‌مند به فناوری",
    talk: "شروع گفتگو",
    build: "چیز بعدی را بسازیم.",
    footerText: "هوش مصنوعی، محصول، داده و سیستم‌های دیجیتال.",
    explore: "کاوش",
  },
  en: {
    about: "About",
    products: "Work",
    resume: "Journey",
    news: "Insights",
    contact: "Contact",
    menu: "Menu",
    interest: "Technology Enthusiast",
    talk: "Start a conversation",
    build: "Let's build what's next.",
    footerText: "AI, product, data and digital systems.",
    explore: "Explore",
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
  const fa = locale === "fa";

  const primaryLinks = [
    [`/${locale}/products`, l.products],
    [`/${locale}/about`, l.about],
    [`/${locale}/resume`, l.resume],
    [`/${locale}/news`, l.news],
  ] as const;

  return (
    <div className="mv-site" lang={locale} dir={fa ? "rtl" : "ltr"}>
      <LocaleDigits locale={locale} />

      <header className="mv-header">
        <div className="mv-header-inner">
          <Link href={`/${locale}`} className="mv-brand" aria-label={fa ? founder.nameFa : founder.nameEn}>
            <span className="mv-brand-avatar">
              <Image
                src="/assets/profile/amir-motefaker.png"
                alt={fa ? founder.nameFa : founder.nameEn}
                width={46}
                height={46}
                priority
              />
            </span>
            <span className="mv-brand-copy">
              <strong>{fa ? founder.nameFa : founder.nameEn}</strong>
              <small>{l.interest}</small>
            </span>
          </Link>

          <nav className="mv-nav" aria-label={fa ? "ناوبری اصلی" : "Primary navigation"}>
            {primaryLinks.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="mv-header-actions">
            <ThemeToggle />
            <Link href={`/${other}`} className="mv-lang" aria-label={fa ? "English" : "فارسی"}>
              {other.toUpperCase()}
            </Link>
            <Link href={`/${locale}/contact`} className="mv-talk">
              <span>{l.talk}</span>
              <b aria-hidden="true">↗</b>
            </Link>

            <details className="mv-mobile-menu">
              <summary aria-label={l.menu}>
                <span />
                <span />
              </summary>
              <div className="mv-mobile-panel">
                {primaryLinks.map(([href, label]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
                <Link href={`/${locale}/contact`}>{l.contact}</Link>
                <Link href={`/${other}`}>{other.toUpperCase()}</Link>
              </div>
            </details>
          </div>
        </div>
      </header>

      {children}

      <footer className="mv-footer">
        <div className="mv-container">
          <div className="mv-footer-top">
            <span className="mv-kicker">AM / 2026</span>
            <h2>{l.build}</h2>
            <Link href={`/${locale}/contact`} className="mv-round-link" aria-label={l.talk}>
              ↗
            </Link>
          </div>

          <div className="mv-footer-grid">
            <div>
              <strong>{fa ? founder.nameFa : founder.nameEn}</strong>
              <p>{l.footerText}</p>
            </div>

            <div className="mv-footer-links">
              <span>{l.explore}</span>
              <Link href={`/${locale}/about`}>{l.about}</Link>
              <Link href={`/${locale}/products`}>{l.products}</Link>
              <Link href={`/${locale}/resume`}>{l.resume}</Link>
              <Link href={`/${locale}/news`}>{l.news}</Link>
            </div>

            <div className="mv-footer-links">
              <span>{fa ? "منتخب" : "Selected"}</span>
              {products.slice(0, 4).map((product) => (
                <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>
                  {product.name}
                </Link>
              ))}
            </div>

            <div className="mv-footer-links">
              <span>{l.contact}</span>
              <a href={`mailto:${founder.email}`}>{founder.email}</a>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={founder.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={founder.x} target="_blank" rel="noopener noreferrer">
                X
              </a>
            </div>
          </div>

          <div className="mv-footer-bottom">
            <span>© 2026 {fa ? founder.nameFa : founder.nameEn}</span>
            <a href="/sitemap.xml">{fa ? "نقشه سایت" : "Sitemap"}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}