import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { brandRegistry } from "@/content/brand-registry";
import ThemeToggle from "@/components/founder/ThemeToggle";
import AuthAction from "@/components/founder/AuthAction";
import { formatSiteYear, localeDigits } from "@/lib/locale-format";
import styles from "./FounderShell.module.css";
import mobile from "./MobileFinal.module.css";

const labels = {
  fa: {
    home: "خانه", about: "درباره", products: "محصولات", thesis: "نگاه من", notes: "یادداشت‌ها",
    timeline: "مسیر حرفه‌ای", news: "اخبار فناوری", contact: "تماس با ما", login: "ورود",
    sitemap: "نقشه سایت", interest: "علاقه‌مند به فناوری",
    footerText: "ساخت و توسعه محصولات دیجیتال با تمرکز بر مسئله واقعی، تجربه کاربر و استفاده عملی از فناوری.",
    quickLinks: "دسترسی سریع", productLinks: "محصولات", contactBlock: "ارتباط", rights: "تمام حقوق محفوظ است.",
    languageSwitch: "تغییر زبان", menu: "منو", soon: "به‌زودی",
  },
  en: {
    home: "Home", about: "About", products: "Products", thesis: "Thesis", notes: "Notes",
    timeline: "Journey", news: "Technology News", contact: "Contact", login: "Sign in",
    sitemap: "Sitemap", interest: "Tech-savvy",
    footerText: "Building and developing digital products around real problems, user experience and practical technology.",
    quickLinks: "Quick Links", productLinks: "Products", contactBlock: "Contact", rights: "All rights reserved.",
    languageSwitch: "Change language", menu: "Menu", soon: "Coming soon",
  },
};

const GlobeIcon = () => <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z"/></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24"><path d="M4 5h16v14H4zM4 7l8 6 8-6"/></svg>;

export default function FounderShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const l = labels[locale];
  const fa = locale === "fa";
  const other = fa ? "en" : "fa";
  const title = fa ? founder.titleFa : founder.titleEn;
  const navigation = [
    { href: `/${locale}`, label: l.home },
    { href: `/${locale}/news`, label: l.news },
    { href: `/${locale}/notes`, label: l.notes },
    { href: `/${locale}/thesis`, label: l.thesis },
    { href: `/${locale}/resume`, label: l.timeline },
    { href: `/${locale}/about`, label: l.about },
    { href: `/${locale}/contact`, label: l.contact },
  ];
  const productName = (p: (typeof brandRegistry)[number]) => fa ? p.nameFa : p.name;

  return (
    <div className={`founder-site ${styles.shell} ${mobile.mobileFinal}`} lang={locale} dir={fa ? "rtl" : "ltr"}>
      <header className={styles.header}>
        <nav className={`wrap ${styles.nav}`}>
          <Link href={`/${locale}`} className={styles.brand}>
            <span className={styles.avatar}><Image src="/assets/profile/amir-motefaker.png" alt={fa ? founder.nameFa : founder.nameEn} width={40} height={40} priority /></span>
            <span className={styles.brandCopy}><strong>{fa ? founder.nameFa : founder.nameEn}</strong><small>{l.interest}</small></span>
          </Link>

          <div className={styles.links}>
            <div className={styles.productsMenu}>
              <Link href={`/${locale}/products`} className={styles.productsTrigger}>{l.products}<span className={styles.chevron}/></Link>
              <div className={styles.megaMenu}><div className={styles.megaGrid}>{brandRegistry.map(product => <Link key={product.slug} href={`/${locale}/products/${product.slug}`} className={styles.megaProduct}>{productName(product)}</Link>)}</div></div>
            </div>
            {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>

          <div className={styles.actions}>
            <span className={styles.themeAction}><ThemeToggle locale={locale}/></span>
            <Link href={`/${other}`} className={styles.iconAction} aria-label={l.languageSwitch}><GlobeIcon/></Link>
            <Link href={`/${locale}/contact`} className={styles.iconAction} aria-label={l.contact}><MailIcon/></Link>
            <AuthAction locale={locale} className={styles.iconAction} />
          </div>

          <details className={styles.mobile}>
            <summary><span className={styles.menuIcon}><i/><i/><i/></span></summary>
            <div className={styles.mobilePanel}>
              <nav>
                <Link href={`/${locale}`}>{l.home}</Link>
                <Link href={`/${locale}/products`}>{l.products}</Link>
                {navigation.slice(1).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
                <AuthAction locale={locale} variant="mobile" />
              </nav>
              <div className={styles.mobileProducts}>{brandRegistry.map(product => <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>{productName(product)}</Link>)}</div>
              <div className={styles.mobileTheme}><ThemeToggle locale={locale}/></div>
              <div className={styles.mobileUtilities}><Link href={`/${other}`}>{l.languageSwitch}</Link></div>
            </div>
          </details>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-top">
              <span className="brand-avatar brand-avatar-sm"><Image src="/assets/profile/amir-motefaker.png" alt={fa ? founder.nameFa : founder.nameEn} width={44} height={44}/></span>
              <div className="brand-copy"><strong>{fa ? founder.nameFa : founder.nameEn}</strong><small>{l.interest}</small></div>
            </div>
            <p>{l.footerText}</p>
          </div>
          <div className="footer-links-block">
            <h3>{l.quickLinks}</h3>
            <div className="footer-links">
              {navigation.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
              <Link href={`/${locale}/products`}>{l.products}</Link>
              <AuthAction locale={locale} variant="footer" />
            </div>
          </div>
          <div className="footer-links-block">
            <h3>{l.productLinks}</h3>
            <div className="footer-links">{brandRegistry.map(product => <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>{productName(product)}</Link>)}</div>
          </div>
          <div className="footer-links-block">
            <h3>{l.contactBlock}</h3>
            <div className="footer-links footer-links-compact">
              <a href={`mailto:${founder.email}`}>{founder.email}</a>
              <a href={`tel:${founder.phoneHref}`} dir="ltr">{fa ? localeDigits(founder.phone, locale) : founder.phone}</a>
              <span>{fa ? founder.cityFa : founder.cityEn}</span>
            </div>
          </div>
        </div>
        <div className="wrap footer-bottom"><span>© {formatSiteYear(new Date(), locale)} {title}. {l.rights}</span></div>
      </footer>
    </div>
  );
}
