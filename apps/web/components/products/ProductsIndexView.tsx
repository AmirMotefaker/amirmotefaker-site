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
import { canonicalProductPortfolio as productPortfolio } from "@/content/canonical-product-portfolio";
import type { Locale } from "@/content/founder-site";
import { localeDigits } from "@/lib/locale-format";
import styles from "./ProductShowcase.module.css";

const filterLabelsFa: Record<(typeof productFilters)[number], string> = {
  "همه": "همه",
  "AI & Intelligent Products": "هوش مصنوعی",
  "FinTech": "فناوری مالی",
  "FoodTech": "فناوری غذا و رستوران",
  "Enterprise Technology": "فناوری سازمانی",
  "Digital Platforms": "پلتفرم‌های دیجیتال",
  "EntertainmentTech": "فناوری سرگرمی",
};

const statusLabels: Record<ProductStatus, { fa: string; en: string }> = {
  live: { fa: "فعال", en: "Live" },
  development: { fa: "در حال توسعه", en: "In development" },
  discovery: { fa: "در مرحله بررسی", en: "Discovery" },
  concept: { fa: "ایده اولیه", en: "Concept" },
  "to-confirm": { fa: "در حال تأیید", en: "To confirm" },
};

function getStatusLabel(status: ProductStatus, locale: Locale) {
  return locale === "fa" ? statusLabels[status].fa : statusLabels[status].en;
}

function getPrimaryCta(status: ProductStatus, fa: boolean) {
  if (status === "live") return fa ? "مشاهده محصول" : "View product";
  if (status === "development") return fa ? "مشاهده مسیر توسعه" : "View build journey";
  return fa ? "آشنایی با محصول" : "Explore product";
}

function productMark(name: string, fa: boolean) {
  if (!fa) return name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase() || "AM";
  return name.replace(/[\s‌-]/g, "").slice(0, 2);
}

export default function ProductsIndexView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const [filter, setFilter] = useState<(typeof productFilters)[number]>("همه");
  const visible = useMemo(
    () => (filter === "همه" ? productPortfolio : productPortfolio.filter((p) => p.filterGroup === filter)),
    [filter],
  );
  const portfolioStats = useMemo(
    () => ({
      live: productPortfolio.filter((p) => p.status === "live").length,
      building: productPortfolio.filter((p) => p.status === "development").length,
      categories: new Set(productPortfolio.map((p) => p.filterGroup)).size,
    }),
    [],
  );
  const formatCount = (value: number) => localeDigits(String(value).padStart(2, "0"), locale);

  return (
    <main className={styles.productsPage}>
      <section className={`wrap ${styles.showcaseHero}`}>
        <div className={styles.heroMain}>
          <span className="sec-tag">{fa ? "پرتفوی محصولات" : "FOUNDER PORTFOLIO"}</span>
          <h1>{fa ? <>محصولاتی برای <em>مسئله‌های واقعی.</em></> : <>Products for <em>real problems.</em></>}</h1>
          <p className={styles.heroLead}>
            {fa
              ? "یازده محصول مستقل در بیش از ده حوزه فناوری؛ هرکدام با مسئله، بازار، تجربه کاربری و مسیر رشد مشخص."
              : "Eleven independent products across more than ten technology sectors, each with a clear problem, market, user experience and growth path."}
          </p>
        </div>
        <aside className={styles.heroManifesto}>
          <span className={styles.manifestoIndex}>{fa ? "منطق ساخت محصول" : "PRODUCT SYSTEM"}</span>
          <p>{fa ? "فکر کن، بساز، منتشر کن، اندازه بگیر و بهتر کن." : "Think, build, ship, measure and improve."}</p>
          <span className={styles.englishLine}>{fa ? "مسئله ← محصول ← اجرا ← یادگیری" : "PROBLEM → PRODUCT → SHIP → LEARN"}</span>
        </aside>
      </section>

      <section className={`wrap ${styles.portfolioStrip}`} aria-label={fa ? "نمای کلی پرتفوی" : "Portfolio overview"}>
        <article><strong>{formatCount(productPortfolio.length)}</strong><span>{fa ? "محصول" : "Products"}</span></article>
        <article><strong>{formatCount(portfolioStats.live)}</strong><span>{fa ? "محصول فعال" : "Live"}</span></article>
        <article><strong>{formatCount(portfolioStats.building)}</strong><span>{fa ? "در حال توسعه" : "Building"}</span></article>
        <article><strong>{fa ? "۱۰+" : "10+"}</strong><span>{fa ? "حوزه فناوری" : "Technology sectors"}</span></article>
      </section>

      <section className={`wrap ${styles.portfolioControls}`}>
        <div className={styles.controlIntro}>
          <span>{fa ? "فهرست محصولات" : "VENTURE INDEX"}</span>
          <strong>{fa ? "محصولات و کسب‌وکارها" : "Products & ventures"}</strong>
        </div>
        <div className={styles.filters} role="group" aria-label={fa ? "فیلتر محصولات" : "Product filters"}>
          {productFilters.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item ? styles.activeFilter : styles.filterButton}
              aria-pressed={filter === item}
            >
              {fa ? filterLabelsFa[item] : item === "همه" ? "All" : item}
            </button>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.productGrid}`} aria-live="polite">
        {visible.map((product, index) => {
          const name = getProductDisplayName(product, locale);
          return (
            <article
              key={product.slug}
              className={`${styles.productCard} ${index === 0 ? styles.featuredCard : ""}`}
              data-theme={product.slug}
              data-status={product.status}
            >
              <div className={styles.cardRail}>
                <span className={styles.cardNumber}>{formatCount(index + 1)}</span>
                <span className={styles.statusDot} />
                <span className={styles.statusText}>{getStatusLabel(product.status, locale)}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <div className={styles.identityRow}>
                    <div className={styles.productMark} aria-hidden="true">{productMark(name, fa)}</div>
                    <div>
                      <span className={styles.industryBadge}>{getProductIndustry(product, locale)}</span>
                      <h2>{name}</h2>
                      {!fa && product.domain ? <div className={`ltr ${styles.domain}`}>{product.domain}</div> : null}
                    </div>
                  </div>
                  <span className={styles.externalIcon}>↗</span>
                </div>
                <div className={styles.cardNarrative}>
                  {!fa ? <p className={styles.positioning}>{product.positioning}</p> : null}
                  <p className={styles.description}>{fa ? product.shortDescriptionFa : product.shortDescriptionEn}</p>
                </div>
                <div className={styles.evidenceRow}>
                  <div><span>{fa ? "مرحله" : "STAGE"}</span><strong>{getStatusLabel(product.status, locale)}</strong></div>
                  <div><span>{fa ? "حوزه" : "SECTOR"}</span><strong>{getProductCategory(product, locale)}</strong></div>
                  <div><span>{fa ? "وضعیت" : "STATUS"}</span><strong>{product.status === "live" ? (fa ? "در دسترس" : "Available") : (fa ? "در حال ساخت" : "Building")}</strong></div>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.cardMeta}>
                    {fa
                      ? <><span>{getProductIndustry(product, locale)}</span><span>{getProductCategory(product, locale)}</span></>
                      : product.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className={styles.cardActions}>
                    <Link href={`/${locale}/products/${product.slug}`} className={styles.primaryCardLink}>
                      {getPrimaryCta(product.status, fa)} <span>↗</span>
                    </Link>
                    {product.status === "live" && product.domain ? (
                      <a href={`https://${product.domain.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className={styles.domainLink}>
                        {fa ? "ورود به وب‌سایت محصول" : "Independent website"}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className={`wrap ${styles.closingCta}`}>
        <div>
          <span className="sec-tag">{fa ? "اصل کار" : "THE WORK"}</span>
          <h2>{fa ? "این پرتفوی فقط فهرست پروژه‌ها نیست؛ تصویری از مسئله‌هایی است که به محصول تبدیل شده‌اند." : "This portfolio is more than a project list; it shows problems turned into products."}</h2>
        </div>
        <div className={styles.closingActions}>
          <Link href={`/${locale}/about`} className="btn btn-ghost">{fa ? "درباره من" : "About me"}</Link>
          <Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "شروع گفتگو" : "Start a conversation"}</Link>
        </div>
      </section>
    </main>
  );
}
