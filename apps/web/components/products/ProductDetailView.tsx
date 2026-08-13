import Link from "next/link";
import {
  getProductCategory,
  getProductDisplayName,
  getProductIndustry,
  getRelatedProducts,
  type Product,
} from "@/content/product-portfolio";
import type { Locale } from "@/content/founder-site";
import { localeDigits } from "@/lib/locale-format";
import styles from "./ProductPortfolio.module.css";

export default function ProductDetailView({ locale, product }: { locale: Locale; product: Product }) {
  const fa = locale === "fa";
  const displayName = getProductDisplayName(product, locale);
  const related = getRelatedProducts(product);
  const problems = fa ? product.problemFa : product.problemEn;
  const capabilities = fa ? product.capabilitiesFa : product.capabilitiesEn;

  return (
    <main className={styles.detailPage} data-product-theme={product.slug}>
      <section className={`wrap ${styles.productHero}`}>
        <div className={styles.heroCopy}>
          <span className="sec-tag">{getProductIndustry(product, locale)}</span>
          <div className={`ltr ${styles.heroDomain}`}>{product.domain}</div>
          <h1 className={fa ? undefined : "ltr"}>{displayName}</h1>
          <p className={styles.heroPositioning}>{product.positioning}</p>
          <h2>{fa ? product.hero.titleFa : product.hero.titleEn}</h2>
          <p>{fa ? product.hero.descriptionFa : product.hero.descriptionEn}</p>

          <div className={styles.heroActions}>
            <a href={`https://${product.domain.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {fa ? product.hero.secondaryCtaFa : product.hero.secondaryCtaEn} ↗
            </a>
            <Link href={`/${locale}/contact`} className="btn btn-ghost">
              {fa ? "گفت‌وگو درباره همکاری" : "Discuss collaboration"}
            </Link>
          </div>
        </div>

        <div className={styles.conceptVisual} aria-label={fa ? "نمای مفهومی محصول" : "Product concept visual"}>
          <span className={styles.conceptLabel}>{fa ? "نمای مفهومی محصول" : "PRODUCT CONCEPT"}</span>
          <div className={styles.conceptHeader}>
            <strong className={fa ? undefined : "ltr"}>{displayName}</strong>
            <span>{getProductCategory(product, locale)}</span>
          </div>
          <div className={styles.conceptGrid}>
            {capabilities.slice(0, 6).map((capability, index) => (
              <div key={capability} className={styles.conceptCell}>
                <small>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</small>
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.snapshotGrid}`}>
        <article>
          <span>{fa ? "صنعت" : "Industry"}</span>
          <strong>{getProductIndustry(product, locale)}</strong>
        </article>
        <article>
          <span>{fa ? "دسته‌بندی" : "Category"}</span>
          <strong>{getProductCategory(product, locale)}</strong>
        </article>
        <article>
          <span>{fa ? "مخاطبان" : "Audience"}</span>
          <strong>{fa ? product.audienceFa : product.audienceEn}</strong>
        </article>
        <article>
          <span>{fa ? "دامنه" : "Domain"}</span>
          <strong className="ltr">{product.domain}</strong>
        </article>
      </section>

      {product.criticalPositioningFa ? (
        <section className={`wrap ${styles.notice}`}>
          <span className="sec-tag">{fa ? "قاعده جایگاه‌یابی" : "POSITIONING RULE"}</span>
          <p>{fa ? product.criticalPositioningFa : product.criticalPositioningEn}</p>
          {product.doNotPositionAs?.length ? (
            <div className={styles.tags}>
              {product.doNotPositionAs.map((item) => <span key={item}>NOT: {item}</span>)}
            </div>
          ) : null}
        </section>
      ) : null}

      <section className={`wrap ${styles.twoColumnSection}`}>
        <article className={styles.sectionCard}>
          <span className="sec-tag">{fa ? "مسئله" : "PROBLEM"}</span>
          <h2>{fa ? "مسئله‌ای که محصول روی آن تمرکز دارد" : "The problem"}</h2>
          <ul>{problems.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>

        <article className={styles.sectionCard}>
          <span className="sec-tag">{fa ? "راهکار" : "SOLUTION"}</span>
          <h2>{fa ? "راهکار محصول" : "The solution"}</h2>
          <p>{fa ? product.solutionFa : product.solutionEn}</p>
        </article>
      </section>

      <section className={`wrap ${styles.sectionShell}`}>
        <div className={styles.sectionHeading}>
          <span className="sec-tag">{fa ? "قابلیت‌ها" : "CORE CAPABILITIES"}</span>
          <h2>{fa ? "قابلیت‌های اصلی" : "Core capabilities"}</h2>
        </div>
        <div className={styles.capabilityGrid}>
          {capabilities.map((capability, index) => (
            <article key={capability}>
              <span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span>
              <h3>{capability}</h3>
            </article>
          ))}
        </div>
      </section>

      {(product.currentProductFa || product.productPromiseFa) ? (
        <section className={`wrap ${styles.experienceSection}`}>
          <div>
            <span className="sec-tag">{fa ? "تجربه محصول" : "PRODUCT EXPERIENCE"}</span>
            <h2>{fa ? "محصول امروز و وعده تجربه" : "Current product & experience promise"}</h2>
            {product.currentProductFa ? (
              <p><strong>{fa ? "محصول فعلی: " : "Current product: "}</strong>{fa ? product.currentProductFa : product.currentProductEn}</p>
            ) : null}
            {product.productPromiseFa ? (
              <blockquote>{fa ? product.productPromiseFa : product.productPromiseEn}</blockquote>
            ) : null}
          </div>
          <div className={styles.experienceVisual}>
            <span>{fa ? "نمای مفهومی" : "PRODUCT CONCEPT"}</span>
            <strong className={fa ? undefined : "ltr"}>{displayName}</strong>
            <p>{product.positioning}</p>
          </div>
        </section>
      ) : null}

      <section className={`wrap ${styles.sectionShell}`}>
        <div className={styles.sectionHeading}>
          <span className="sec-tag">{fa ? "فناوری" : "TECHNOLOGY LAYER"}</span>
          <h2>{fa ? "لایه فناوری" : "Technology layer"}</h2>
        </div>
        <div className={styles.technologyGrid}>
          {product.technology.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className={`wrap ${styles.visionMission}`}>
        <article>
          <span className="sec-tag">{fa ? "چشم‌انداز" : "VISION"}</span>
          <p>{fa ? product.visionFa : product.visionEn}</p>
        </article>
        <article>
          <span className="sec-tag">{fa ? "ماموریت" : "MISSION"}</span>
          <p>{fa ? product.missionFa : product.missionEn}</p>
        </article>
      </section>

      {related.length > 0 ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}>
            <span className="sec-tag">{fa ? "محصولات مرتبط" : "RELATED PRODUCTS"}</span>
            <h2>{fa ? "محصولات مرتبط" : "Related products"}</h2>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <Link key={item.slug} href={`/${locale}/products/${item.slug}`}>
                <span>{getProductIndustry(item, locale)}</span>
                <strong className={fa ? undefined : "ltr"}>{getProductDisplayName(item, locale)}</strong>
                <p>{fa ? item.shortDescriptionFa : item.shortDescriptionEn}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className={`wrap ${styles.productCta}`}>
        <div>
          <span className="sec-tag">{fa ? "محصول و همکاری" : "PRODUCT & COLLABORATION"}</span>
          <h2>{fa ? "برای ساخت محصول و همکاری فناورانه در ارتباط باشیم." : "Let's connect around product and technology."}</h2>
        </div>
        <div className={styles.heroActions}>
          <a href={`https://${product.domain.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {fa ? `مشاهده ${displayName}` : `Visit ${displayName}`} ↗
          </a>
          <Link href={`/${locale}/contact`} className="btn btn-ghost">
            {fa ? "تماس با امیر" : "Contact Amir"}
          </Link>
        </div>
      </section>
    </main>
  );
}