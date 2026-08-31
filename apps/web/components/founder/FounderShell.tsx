import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { brandRegistry } from "@/content/brand-registry";
import ThemeToggle from "@/components/founder/ThemeToggle";
import { formatSiteYear, localeDigits } from "@/lib/locale-format";
import styles from "./FounderShell.module.css";

const labels = {
  fa: { home:"خانه", about:"درباره", products:"محصولات", allProducts:"همه محصولات", thesis:"نگاه من", notes:"یادداشت‌ها", timeline:"مسیر حرفه‌ای", news:"اخبار فناوری", contact:"تماس", sitemap:"نقشه سایت", interest:"علاقه‌مند به فناوری", footerText:"ساخت و توسعه محصولات دیجیتال با تمرکز بر مسئله واقعی، تجربه کاربر و استفاده عملی از فناوری.", quickLinks:"دسترسی سریع", productLinks:"محصولات", contactBlock:"ارتباط", rights:"تمام حقوق محفوظ است.", languageSwitch:"English", menu:"منو", live:"فعال", soon:"به‌زودی" },
  en: { home:"Home", about:"About", products:"Products", allProducts:"All products", thesis:"Thesis", notes:"Notes", timeline:"Journey", news:"Technology News", contact:"Contact", sitemap:"Sitemap", interest:"Tech-savvy", footerText:"Building and developing digital products around real problems, user experience and practical technology.", quickLinks:"Quick Links", productLinks:"Products", contactBlock:"Contact", rights:"All rights reserved.", languageSwitch:"فارسی", menu:"Menu", live:"Live", soon:"Coming soon" },
};

export default function FounderShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const l=labels[locale]; const fa=locale==="fa"; const other=fa?"en":"fa"; const canonicalTitle=fa?founder.titleFa:founder.titleEn;
  const navigation=[
    {href:`/${locale}/news`,label:l.news,news:true},
    {href:`/${locale}/notes`,label:l.notes},
    {href:`/${locale}/thesis`,label:l.thesis},
    {href:`/${locale}/resume`,label:l.timeline},
    {href:`/${locale}/about`,label:l.about},
  ];
  const phoneDisplay=fa?localeDigits(founder.phone,locale):founder.phone;
  const productName=(p:(typeof brandRegistry)[number])=>fa?p.nameFa:p.name;
  const productStatus=(p:(typeof brandRegistry)[number])=>p.classification==="active"?l.live:l.soon;
  const productHref=(p:(typeof brandRegistry)[number])=>p.classification==="active"?`https://${p.domain}`:null;

  return <div className={`founder-site ${styles.shell}`} lang={locale} dir={fa?"rtl":"ltr"}>
    <header className={styles.header}>
      <nav className={`wrap ${styles.nav}`} aria-label={fa?"ناوبری اصلی":"Primary navigation"}>
        <Link href={`/${locale}`} className={styles.brand} aria-label={canonicalTitle}>
          <span className={styles.avatar}><Image src="/assets/profile/amir-motefaker.png" alt={fa?founder.nameFa:founder.nameEn} width={40} height={40} priority/></span>
          <span className={styles.brandCopy}><strong>{fa?founder.nameFa:founder.nameEn}</strong><small>{l.interest}</small></span>
        </Link>
        <div className={styles.links}>
          <div className={styles.productsMenu}>
            <Link href={`/${locale}/products`} className={styles.productsTrigger}>{l.products}<span aria-hidden="true">⌄</span></Link>
            <div className={styles.megaMenu}>
              <div className={styles.megaHeader}><div><strong>{l.products}</strong><small>{brandRegistry.length} {fa?"محصول در پرتفوی":"products in portfolio"}</small></div><Link href={`/${locale}/products`}>{l.allProducts} ↗</Link></div>
              <div className={styles.megaGrid}>{brandRegistry.map((product,index)=>{
                const href=productHref(product);
                const body=<><span className={styles.productIndex}>{String(index+1).padStart(2,"0")}</span><span className={styles.productCopy}><strong>{productName(product)}</strong><small dir="ltr">{product.domain}</small></span><em className={product.classification==="active"?styles.live:styles.soon}>{productStatus(product)}</em></>;
                return href?<a key={product.slug} href={href} target="_blank" rel="noopener noreferrer" className={styles.megaProduct}>{body}</a>:<div key={product.slug} className={`${styles.megaProduct} ${styles.pendingProduct}`}>{body}</div>;
              })}</div>
            </div>
          </div>
          {navigation.map(item=><Link key={item.href} href={item.href} className={item.news?styles.news:undefined}>{item.label}</Link>)}
        </div>
        <div className={styles.actions}><ThemeToggle locale={locale}/><Link href={`/${other}`} className={styles.language}>{l.languageSwitch}</Link><Link href={`/${locale}/contact`} className={styles.contact}>{l.contact}</Link></div>
        <details className={styles.mobile}>
          <summary aria-label={l.menu}><span className={styles.menuIcon} aria-hidden="true"><i/><i/><i/></span></summary>
          <div className={styles.mobilePanel}>
            <nav aria-label={fa?"منوی موبایل":"Mobile navigation"}><Link href={`/${locale}`}>{l.home}</Link><Link href={`/${locale}/products`}>{l.products}</Link>{navigation.map(item=><Link key={item.href} href={item.href} className={item.news?styles.news:undefined}>{item.label}</Link>)}<Link href={`/${locale}/contact`}>{l.contact}</Link></nav>
            <div className={styles.mobileProducts}><strong>{l.products}</strong>{brandRegistry.map(product=>{const href=productHref(product); return href?<a key={product.slug} href={href} target="_blank" rel="noopener noreferrer"><span>{productName(product)}</span><small>{l.live}</small></a>:<div key={product.slug}><span>{productName(product)}</span><small>{l.soon}</small></div>})}</div>
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
        <div className="footer-links-block"><h3>{l.productLinks}</h3><div className="footer-links">{brandRegistry.map(product=>{const href=productHref(product);return href?<a key={product.slug} href={href} target="_blank" rel="noopener noreferrer">{productName(product)}</a>:<span key={product.slug}>{productName(product)} · {l.soon}</span>})}</div></div>
        <div className="footer-links-block"><h3>{l.contactBlock}</h3><div className="footer-links footer-links-compact"><a href={`mailto:${founder.email}`}>{founder.email}</a><a href={`tel:${founder.phoneHref}`}>{phoneDisplay}</a><span>{fa?founder.cityFa:founder.cityEn}</span><div className="social-links"><a href={founder.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={founder.kaggle} target="_blank" rel="noopener noreferrer">Kaggle</a><a href={founder.x} target="_blank" rel="noopener noreferrer">X</a><a href={founder.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div></div>
      </div>
      <div className="wrap footer-bottom"><span>© {formatSiteYear(new Date(),locale)} {canonicalTitle}. {l.rights}</span><span>{fa?"طراحی و توسعه محلی":"Local design & development build"}</span></div>
    </footer>
  </div>;
}
