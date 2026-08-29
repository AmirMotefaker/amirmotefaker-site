"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  productFilters,
  getProductCategory,
  getProductDisplayName,
  getProductIndustry,
  type ProductStatus,
} from "@/content/product-portfolio";
import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";
import { supplementalProductPortfolio } from "@/content/supplemental-product-portfolio";
import type { Locale } from "@/content/founder-site";
import { localeDigits } from "@/lib/locale-format";
import styles from "./ProductShowcase.module.css";

const productPortfolio = [...canonicalProductPortfolio, ...supplementalProductPortfolio];

const filterLabelsFa: Record<(typeof productFilters)[number], string> = {
  "همه": "همه", "AI & Intelligent Products": "هوش مصنوعی و محصولات هوشمند", "FinTech": "فین‌تک",
  "FoodTech": "فودتک", "Enterprise Technology": "فناوری سازمانی", "Digital Platforms": "پلتفرم‌های دیجیتال",
  "EntertainmentTech": "فناوری سرگرمی",
};

const statusLabels: Record<ProductStatus, { fa: string; en: string }> = {
  live: { fa: "فعال", en: "Live" }, development: { fa: "در حال توسعه", en: "In development" },
  discovery: { fa: "در مرحله کشف", en: "Discovery" }, concept: { fa: "مفهوم اولیه", en: "Concept" },
  "to-confirm": { fa: "در انتظار تأیید", en: "To confirm" },
};

const productMarks: Record<string, string> = {
  linkresan: "LR", farsio: "FA", neveshtyar: "NY", avayar: "AY", fahmio: "FH", zobdino: "ZO", filmtrack: "FT", idehjo: "IJ",
  restyar: "RY", primesys: "PS", tasvia: "TS",
};

function getStatusLabel(status: ProductStatus, locale: Locale) { return locale === "fa" ? statusLabels[status].fa : statusLabels[status].en; }
function getPrimaryCta(status: ProductStatus, fa: boolean) {
  if (status === "live") return fa ? "مشاهده محصول" : "View product";
  if (status === "development") return fa ? "مسیر ساخت" : "Build journey";
  return fa ? "شناخت محصول" : "Explore product";
}

export default function ProductsIndexView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const [filter, setFilter] = useState<(typeof productFilters)[number]>("همه");
  const visible = useMemo(() => filter === "همه" ? productPortfolio : productPortfolio.filter((p) => p.filterGroup === filter), [filter]);
  const portfolioStats = useMemo(() => ({
    live: productPortfolio.filter((p) => p.status === "live").length,
    building: productPortfolio.filter((p) => p.status === "development").length,
    categories: new Set(productPortfolio.map((p) => p.filterGroup)).size,
  }), []);
  const formatCount = (value: number) => localeDigits(String(value).padStart(2, "0"), locale);

  return (
    <main className={styles.productsPage}>
      <section className={`wrap ${styles.showcaseHero}`}>
        <div className={styles.heroMain}>
          <span className="sec-tag">{fa ? "پرتفوی بنیان‌گذار" : "FOUNDER PORTFOLIO"}</span>
          <h1>{fa ? <>ساختن، نه فقط <em>ایده‌پردازی.</em></> : <>Building, not just <em>imagining.</em></>}</h1>
          <p className={styles.heroLead}>{fa ? "مجموعه‌ای از محصولات مستقل که هرکدام برای حل یک مسئله واقعی ساخته شده‌اند؛ از زیرساخت دیجیتال و هوش مصنوعی تا آموزش، رسانه و فین‌تک." : "Independent products built around real problems — spanning digital infrastructure, AI, education, media and fintech."}</p>
        </div>
        <aside className={styles.heroManifesto}>
          <span className={styles.manifestoIndex}>AM / PRODUCT SYSTEM / 2026</span>
          <p>{fa ? "هر محصول باید مسئله، سیستم و مسیر رشد خودش را داشته باشد." : "Every product needs its own problem, system and path to scale."}</p>
          <span className={styles.englishLine}>THINK → BUILD → SHIP → LEARN</span>
        </aside>
      </section>

      <section className={`wrap ${styles.portfolioStrip}`} aria-label={fa ? "نمای کلی پرتفوی" : "Portfolio overview"}>
        <article><strong>{formatCount(productPortfolio.length)}</strong><span>{fa ? "محصول" : "Products"}</span></article>
        <article><strong>{formatCount(portfolioStats.live)}</strong><span>{fa ? "فعال" : "Live"}</span></article>
        <article><strong>{formatCount(portfolioStats.building)}</strong><span>{fa ? "در حال ساخت" : "Building"}</span></article>
        <article><strong>{formatCount(portfolioStats.categories)}</strong><span>{fa ? "حوزه فناوری" : "Sectors"}</span></article>
      </section>

      <section className={`wrap ${styles.portfolioControls}`}>
        <div className={styles.controlIntro}><span>VENTURE INDEX</span><strong>{fa ? "محصولات و کسب‌وکارها" : "Products & ventures"}</strong></div>
        <div className={styles.filters} role="group">
          {productFilters.map((item) => <button type="button" key={item} onClick={() => setFilter(item)} className={filter === item ? styles.activeFilter : styles.filterButton} aria-pressed={filter === item}>{fa ? filterLabelsFa[item] : item === "همه" ? "All" : item}</button>)}
        </div>
      </section>

      <section className={`wrap ${styles.productGrid}`} aria-live="polite">
        {visible.map((product, index) => (
          <article key={product.slug} className={`${styles.productCard} ${index === 0 ? styles.featuredCard : ""}`} data-theme={product.slug} data-status={product.status}>
            <div className={styles.cardRail}><span className={styles.cardNumber}>{formatCount(index + 1)}</span><span className={styles.statusDot}/><span className={styles.statusText}>{getStatusLabel(product.status, locale)}</span></div>
            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <div className={styles.identityRow}>
                  <div className={styles.productMark} aria-hidden="true">{productMarks[product.slug] ?? product.slug.slice(0,2).toUpperCase()}</div>
                  <div><span className={styles.industryBadge}>{getProductIndustry(product, locale)}</span><h2 className={fa ? undefined : "ltr"}>{getProductDisplayName(product, locale)}</h2>{product.domain ? <div className={`ltr ${styles.domain}`}>{product.domain}</div> : null}</div>
                </div>
                <span className={styles.externalIcon}>↗</span>
              </div>
              <div className={styles.cardNarrative}><p className={styles.positioning}>{product.positioning}</p><p className={styles.description}>{fa ? product.shortDescriptionFa : product.shortDescriptionEn}</p></div>
              <div className={styles.evidenceRow}>
                <div><span>{fa ? "مرحله" : "STAGE"}</span><strong>{getStatusLabel(product.status, locale)}</strong></div>
                <div><span>{fa ? "حوزه" : "SECTOR"}</span><strong>{getProductCategory(product, locale)}</strong></div>
                <div><span>{fa ? "محصول" : "PRODUCT"}</span><strong>{product.status === "live" ? (fa ? "در دسترس" : "Available") : (fa ? "در حال ساخت" : "Building")}</strong></div>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.cardMeta}>{product.tags.slice(0,3).map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className={styles.cardActions}><Link href={`/${locale}/products/${product.slug}`} className={styles.primaryCardLink}>{getPrimaryCta(product.status, fa)} <span>↗</span></Link>{product.status === "live" && product.domain ? <a href={`https://${product.domain.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className={styles.domainLink}>{fa ? "وب‌سایت مستقل" : "Independent website"}</a> : null}</div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={`wrap ${styles.closingCta}`}><div><span className="sec-tag">{fa ? "اصل کار" : "THE WORK"}</span><h2>{fa ? "این صفحه قرار نیست پروژه‌ها را بشمارد؛ باید نشان دهد چه چیزهایی واقعاً ساخته شده‌اند." : "This page is not here to count projects. It exists to show what has actually been built."}</h2></div><div className={styles.closingActions}><Link href={`/${locale}/about`} className="btn btn-ghost">{fa ? "درباره من" : "About me"}</Link><Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "شروع گفتگو" : "Start a conversation"}</Link></div></section>
    </main>
  );
}
