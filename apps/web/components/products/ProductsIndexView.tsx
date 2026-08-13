"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  productFilters,
  productPortfolio,
  getProductCategory,
  getProductDisplayName,
  getProductIndustry,
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

export default function ProductsIndexView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const [filter, setFilter] = useState<(typeof productFilters)[number]>("همه");

  const visible = useMemo(
    () => filter === "همه" ? productPortfolio : productPortfolio.filter((product) => product.filterGroup === filter),
    [filter],
  );

  return (
    <main className={styles.productsPage}>
      <section className={`wrap ${styles.indexHero}`}>
        <span className="sec-tag">{fa ? "محصولات و کسب‌وکارها" : "PRODUCTS & VENTURES"}</span>
        <h1>{fa ? "محصولاتی که می‌سازم." : "Products & Ventures"}</h1>
        <p>
          {fa
            ? "هشت محصول و پلتفرم در تقاطع هوش مصنوعی، نرم‌افزار و صنایع واقعی؛ از فودتک و فین‌تک تا زبان، دانش، رسانه و فناوری سازمانی."
            : "Eight products and platforms across AI, software and real-world industries — from FoodTech and FinTech to language, knowledge, media and enterprise technology."}
        </p>
        <p className={styles.englishLine}>AI-powered products for real-world problems.</p>
      </section>

      <section className={`wrap ${styles.filterSection}`} aria-label={fa ? "فیلتر محصولات" : "Product filters"}>
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
          <article key={product.slug} className={styles.productCard} data-theme={product.slug}
            style={{ ["--portfolio-order" as string]: index }}>
            <div className={styles.cardTop}>
              <div>
                <span className={styles.industryBadge}>{getProductIndustry(product, locale)}</span>
                <h2 className={fa ? undefined : "ltr"}>{getProductDisplayName(product, locale)}</h2>
                <div className={`ltr ${styles.domain}`}>{product.domain}</div>
              </div>
              <span className={styles.externalIcon} aria-hidden="true">↗</span>
            </div>
            <p className={styles.positioning}>{product.positioning}</p>
            <p className={styles.description}>{fa ? product.shortDescriptionFa : product.shortDescriptionEn}</p>
            <div className={styles.cardMeta}>
              <span>{getProductCategory(product, locale)}</span>
              <span>{getProductIndustry(product, locale)}</span>
            </div>
            <div className={styles.tags}>
              {product.tags.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className={styles.cardActions}>
              <Link href={`/${locale}/products/${product.slug}`} className="btn btn-primary">
                {fa ? "مشاهده محصول" : "View product"}
              </Link>
              <a href={`https://${product.domain.toLowerCase()}`} target="_blank" rel="noopener noreferrer"
                className={styles.domainLink}
                aria-label={`${getProductDisplayName(product, locale)} — ${product.domain}`}>
                {product.domain} ↗
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className={`wrap ${styles.closingCta}`}>
        <div>
          <span className="sec-tag">{fa ? "ساختن" : "BUILD"}</span>
          <h2>{fa ? "یک ایده زمانی ارزشمند می‌شود که به محصول قابل استفاده تبدیل شود." : "An idea becomes valuable when it becomes a product people can use."}</h2>
        </div>
        <div className={styles.closingActions}>
          <Link href={`/${locale}/about`} className="btn btn-ghost">{fa ? "درباره من" : "About me"}</Link>
          <Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "شروع گفتگو" : "Start a conversation"}</Link>
        </div>
      </section>
    </main>
  );
}