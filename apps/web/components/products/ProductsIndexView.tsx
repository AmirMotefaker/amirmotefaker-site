"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  productFilters,
  productPortfolio,
  getProductCategory,
  getProductDisplayName,
  getProductIndustry,
  type ProductStatus,
} from "@/content/product-portfolio";
import type { Locale } from "@/content/founder-site";
import styles from "./ProductPortfolio.module.css";

const filterLabelsFa: Record<(typeof productFilters)[number], string> = {
  "همه": "همه",
  "AI & Intelligent Products": "هوش مصنوعی و محصولات هوشمند",
  "FinTech": "فین‌تک",
  "FoodTech": "فودتک",
  "Enterprise Technology": "فناوری سازمانی",
  "Digital Platforms": "پلتفرم‌های دیجیتال",
  "EntertainmentTech": "فناوری سرگرمی",
};

const statusLabels: Record<ProductStatus, { fa: string; en: string }> = {
  live: { fa: "فعال", en: "Live" },
  development: { fa: "در حال توسعه", en: "In development" },
  discovery: { fa: "در مرحله کشف", en: "Discovery" },
  concept: { fa: "مفهوم اولیه", en: "Concept" },
  "to-confirm": { fa: "در انتظار تأیید", en: "To confirm" },
};

function getStatusLabel(status: ProductStatus, locale: Locale) {
  return locale === "fa" ? statusLabels[status].fa : statusLabels[status].en;
}

function getPrimaryCta(status: ProductStatus, fa: boolean) {
  switch (status) {
    case "live":
      return fa ? "ورود به محصول" : "Visit product";
    case "development":
      return fa ? "مشاهده مسیر توسعه" : "View development";
    case "discovery":
      return fa ? "شناخت محصول" : "Explore discovery";
    case "concept":
      return fa ? "مشاهده مفهوم" : "Explore concept";
    default:
      return fa ? "مشاهده جزئیات" : "View details";
  }
}

export default function ProductsIndexView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const [filter, setFilter] = useState<(typeof productFilters)[number]>("همه");

  const visible = useMemo(
    () => filter === "همه" ? productPortfolio : productPortfolio.filter((product) => product.filterGroup === filter),
    [filter],
  );

  const portfolioStats = useMemo(() => {
    const live = productPortfolio.filter((product) => product.status === "live").length;
    const building = productPortfolio.filter((product) => product.status === "development").length;
    const categories = new Set(productPortfolio.map((product) => product.filterGroup)).size;
    return { live, building, categories };
  }, []);

  return (
    <main className={styles.productsPage}>
      <section className={`wrap ${styles.showcaseHero}`}>
        <div className={styles.heroMain}>
          <span className="sec-tag">{fa ? "پرتفوی محصولات" : "FOUNDER PRODUCT PORTFOLIO"}</span>
          <h1>
            {fa ? (
              <>محصولاتی برای <em>ساختن آینده.</em></>
            ) : (
              <>Products built for <em>what comes next.</em></>
            )}
          </h1>
          <p className={styles.heroLead}>
            {fa
              ? "پرتفویی از محصولات فناوری که از مسئله‌های واقعی شروع می‌شوند؛ با تمرکز بر هوش مصنوعی، نرم‌افزار و زیرساخت‌های دیجیتال قابل مقیاس."
              : "A portfolio of technology products that start with real problems — spanning AI, software and scalable digital infrastructure."}
          </p>
        </div>

        <aside className={styles.heroManifesto}>
          <span className={styles.manifestoIndex}>PORTFOLIO / 26</span>
          <p>{fa ? "از ایده تا محصول، از محصول تا کسب‌وکار." : "From idea to product. From product to business."}</p>
          <span className={styles.englishLine}>BUILD · VALIDATE · SCALE</span>
        </aside>
      </section>

      <section className={`wrap ${styles.portfolioStrip}`} aria-label={fa ? "نمای کلی پرتفوی" : "Portfolio overview"}>
        <article>
          <strong>{String(productPortfolio.length).padStart(2, "0")}</strong>
          <span>{fa ? "محصول در پرتفوی" : "Portfolio products"}</span>
        </article>
        <article>
          <strong>{String(portfolioStats.live).padStart(2, "0")}</strong>
          <span>{fa ? "محصول فعال" : "Live products"}</span>
        </article>
        <article>
          <strong>{String(portfolioStats.building).padStart(2, "0")}</strong>
          <span>{fa ? "در حال ساخت" : "In development"}</span>
        </article>
        <article>
          <strong>{String(portfolioStats.categories).padStart(2, "0")}</strong>
          <span>{fa ? "حوزه فناوری" : "Technology sectors"}</span>
        </article>
      </section>

      <section className={`wrap ${styles.portfolioControls}`} aria-label={fa ? "فیلتر محصولات" : "Product filters"}>
        <div className={styles.controlIntro}>
          <span>{fa ? "پرتفوی" : "PORTFOLIO"}</span>
          <strong>{fa ? "محصولات و کسب‌وکارها" : "Products & ventures"}</strong>
        </div>
        <div className={styles.filters} role="group" aria-label={fa ? "دسته‌بندی محصولات" : "Product categories"}>
          {productFilters.map((item) => {
            const label = fa ? filterLabelsFa[item] : item === "همه" ? "All" : item;
            return (
              <button type="button" key={item} onClick={() => setFilter(item)}
                className={filter === item ? styles.activeFilter : styles.filterButton} aria-pressed={filter === item}>
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section className={`wrap ${styles.productGrid}`} aria-live="polite">
        {visible.map((product, index) => (
          <article
            key={product.slug}
            className={`${styles.productCard} ${index === 0 ? styles.featuredCard : ""}`}
            data-theme={product.slug}
            data-status={product.status}
            style={{ ["--portfolio-order" as string]: index }}
          >
            <div className={styles.cardRail}>
              <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.statusText}>{getStatusLabel(product.status, locale)}</span>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <div className={styles.cardIdentity}>
                  <span className={styles.industryBadge}>{getProductIndustry(product, locale)}</span>
                  <h2 className={fa ? undefined : "ltr"}>{getProductDisplayName(product, locale)}</h2>
                  <div className={`ltr ${styles.domain}`}>{product.domain}</div>
                </div>
                <span className={styles.externalIcon} aria-hidden="true">↗</span>
              </div>

              <div className={styles.cardNarrative}>
                <p className={styles.positioning}>{product.positioning}</p>
                <p className={styles.description}>{fa ? product.shortDescriptionFa : product.shortDescriptionEn}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.cardMeta}>
                  <span>{getProductCategory(product, locale)}</span>
                  {product.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className={styles.cardActions}>
                  <Link href={`/${locale}/products/${product.slug}`} className={styles.primaryCardLink}>
                    {getPrimaryCta(product.status, fa)} <span aria-hidden="true">↗</span>
                  </Link>
                  {product.status === "live" && (
                    <a href={`https://${product.domain.toLowerCase()}`} target="_blank" rel="noopener noreferrer"
                      className={styles.domainLink}
                      aria-label={`${getProductDisplayName(product, locale)} — ${product.domain}`}>
                      {fa ? "وب‌سایت محصول" : "Product website"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={`wrap ${styles.closingCta}`}>
        <div>
          <span className="sec-tag">{fa ? "ساختن" : "BUILD"}</span>
          <h2>{fa ? "برای من، پرتفوی فقط فهرست پروژه‌ها نیست؛ سابقه ساختن است." : "A portfolio is not a project list. It is a record of building."}</h2>
        </div>
        <div className={styles.closingActions}>
          <Link href={`/${locale}/about`} className="btn btn-ghost">{fa ? "درباره من" : "About me"}</Link>
          <Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "شروع گفتگو" : "Start a conversation"}</Link>
        </div>
      </section>
    </main>
  );
}
