import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { getProductDisplayName } from "@/content/product-portfolio";
import { canonicalProductPortfolio as products } from "@/content/canonical-product-portfolio";
import ThemeToggle from "@/components/founder/ThemeToggle";
import { formatSiteYear, localeDigits } from "@/lib/locale-format";
import styles from "./FounderShell.module.css";

const labels = {
  fa: { home:"خانه", about:"درباره", products:"محصولات", thesis:"نگاه من", notes:"یادداشت‌ها", timeline:"مسیر حرفه‌ای", news:"اخبار فناوری", contact:"تماس", sitemap:"نقشه سایت", interest:"علاقه‌مند به فناوری", footerText:"ساخت و توسعه محصولات دیجیتال با تمرکز بر مسئله واقعی، تجربه کاربر و استفاده عملی از فناوری.", quickLinks:"دسترسی سریع", productLinks:"محصولات منتخب", contactBlock:"ارتباط", rights:"تمام حقوق محفوظ است.", languageSwitch:"English", menu:"منو" },
  en: { home:"Home", about:"About", products:"Products", thesis:"Thesis", notes:"Notes", timeline:"Journey", news:"Technology News", contact:"Contact", sitemap:"Sitemap", interest:"Tech-savvy", footerText:"Building and developing digital products around real problems, user experience and practical technology.", quickLinks:"Quick Links", productLinks:"Featured Products", contactBlock:"Contact", rights:"All rights reserved.", languageSwitch:"فارسی", menu:"Menu" },
};

export default function FounderShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const l=labels[locale]; const fa=locale==="fa"; const other=fa?"en":"fa"; const canonicalTitle=fa?founder.titleFa:founder.titleEn;
  const navigation=[
    {href:`/${locale}/products`,label:l.products},
    {href:`/${locale}/news`,label:l.news,news:true},
    {href:`/${locale}/notes`,label:l.notes},
    {href:`/${locale}/thesis`,label:l.thesis},
    {href:`/${locale}/resume`,label:l.timeline},
    {href:`/${locale}/about`,label:l.about},
  ];
  const mobileNavigation=[{href:`/${locale}`,label:l.home},...navigation,{href:`/${locale}/contact`,label:l.contact}];
  const phoneDisplay=fa?localeDigits(founder.phone,locale):founder.phone;
  return <div className={`founder-site ${styles.shell}`} lang={locale} dir={fa?"rtl":"ltr"}>
    <header className={styles.header}>
      <nav className={`wrap ${styles.nav}`} aria-label={fa?"ناوبری اصلی":"Primary navigation"}>
        <Link href={`/${locale}`} className={styles.brand} aria-label={canonicalTitle}>
          <span className={styles.avatar}><Image src="/assets/profile/amir-motefaker.png" alt={fa?founder.nameFa:founder.nameEn} width={40} height={40} priority/></span>
          <span className={styles.brandCopy}><strong>{fa?founder.nameFa:founder.nameEn}</strong><small>{l.interest}</small></span>
        </Link>
        <div className={styles.links}>{navigation.map(item=><Link key={item.href} href={item.href} className={item.news?styles.news:undefined}>{item.label}</Link>)}</div>
        <div className={styles.actions}><ThemeToggle locale={locale}/><Link href={`/${other}`} className={styles.language}>{l.languageSwitch}</Link><Link href={`/${locale}/contact`} className={styles.contact}>{l.contact}</Link></div>
        <details className={styles.mobile}>
          <summary aria-label={l.menu}><span className={styles.menuIcon} aria-hidden="true"><i/><i/><i/></span></summary>
          <div className={styles.mobilePanel}>
            <nav aria-label={fa?"منوی موبایل":"Mobile navigation"}>{mobileNavigation.map(item=><Link key={item.href} href={item.href} className={("news" in item&&item.news)?styles.news:undefined}>{item.label}</Link>)}</nav>
            <div className={styles.mobileTheme}><ThemeToggle locale={locale}/></div>
            <div className={styles.mobileUtilities}><Link href={`/${other}`}>{l.languageSwitch}</Link></div>
          </div>
        </details>
      </nav>
    </header>
    {children}
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand"><div className="footer-brand-top"><span className="brand-avatar brand-avatar-sm"><Image src="/assets/profile/amir-motefaker.png" alt={fa?founder.nameFa:founder.nameEn} width={44} height={44}/></span><div className="brand-copy"><strong>{fa?founder.nameFa:founder.nameEn}</strong><small>{l.interest}</small></div></div><p>{l.footerText}</p></div>
        <div className="footer-links-block"><h3>{l.quickLinks}</h3><div className="footer-links"><Link href={`/${locale}`}>{l.home}</Link><Link href={`/${locale}/products`}>{l.products}</Link><Link href={`/${locale}/news`} className={styles.footerNews}>{l.news}</Link><Link href={`/${locale}/thesis`}>{l.thesis}</Link><Link href={`/${locale}/notes`}>{l.notes}</Link><Link href={`/${locale}/about`}>{l.about}</Link><Link href={`/${locale}/resume`}>{l.timeline}</Link><Link href={`/${locale}/contact`}>{l.contact}</Link><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">{l.sitemap}</a></div></div>
        <div className="footer-links-block"><h3>{l.productLinks}</h3><div className="footer-links">{products.map(product=><Link key={product.slug} href={`/${locale}/products/${product.slug}`}>{getProductDisplayName(product,locale)}</Link>)}</div></div>
        <div className="footer-links-block"><h3>{l.contactBlock}</h3><div className="footer-links footer-links-compact"><a href={`mailto:${founder.email}`}>{founder.email}</a><a href={`tel:${founder.phoneHref}`}>{phoneDisplay}</a><span>{fa?founder.cityFa:founder.cityEn}</span><div className="social-links"><a href={founder.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={founder.kaggle} target="_blank" rel="noopener noreferrer">Kaggle</a><a href={founder.x} target="_blank" rel="noopener noreferrer">X</a><a href={founder.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div></div>
      </div>
      <div className="wrap footer-bottom"><span>© {formatSiteYear(new Date(),locale)} {canonicalTitle}. {l.rights}</span><span>{fa?"طراحی و توسعه محلی":"Local design & development build"}</span></div>
    </footer>
  </div>;
}
