import Link from "next/link";
import { getProductEvidence } from "@/content/evidence-registry";
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

function getLifecycleLabel(status: Product["status"], locale: Locale) {
  const labels = {
    fa: {
      live: "فعال",
      development: "در حال توسعه",
      discovery: "در مرحله کشف",
      concept: "مفهوم اولیه",
      "to-confirm": "وضعیت در حال تأیید",
    },
    en: {
      live: "Live",
      development: "In development",
      discovery: "Discovery",
      concept: "Concept",
      "to-confirm": "Status to confirm",
    },
  } as const;
  return labels[locale][status];
}

function getPrimaryAction(product: Product, locale: Locale) {
  const fa = locale === "fa";
  switch (product.status) {
    case "live":
      return product.domain
        ? { type: "external" as const, label: fa ? `مشاهده ${getProductDisplayName(product, locale)}` : `Visit ${getProductDisplayName(product, locale)}` }
        : { type: "contact" as const, label: fa ? "پیگیری وضعیت محصول" : "Check product status" };
    case "development":
      return { type: "contact" as const, label: fa ? "پیگیری توسعه / درخواست Preview" : "Follow development / request preview" };
    case "discovery":
      return { type: "contact" as const, label: fa ? "پیگیری روند محصول" : "Follow product progress" };
    case "concept":
      return { type: "none" as const, label: fa ? "هنوز برای استفاده عمومی عرضه نشده" : "Not publicly available yet" };
    case "to-confirm":
    default:
      return { type: "none" as const, label: fa ? "وضعیت دسترسی عمومی در حال تأیید است" : "Public availability is being confirmed" };
  }
}

const clean = (value?: string | null) => value?.trim() ?? "";
const cleanList = (items?: readonly string[]) => (items ?? []).map((item) => item.trim()).filter(Boolean);

export default function ProductDetailView({ locale, product }: { locale: Locale; product: Product }) {
  const fa = locale === "fa";
  const displayName = getProductDisplayName(product, locale);
  const related = getRelatedProducts(product);
  const problems = cleanList(fa ? product.problemFa : product.problemEn);
  const capabilities = cleanList(fa ? product.capabilitiesFa : product.capabilitiesEn);
  const roadmap = cleanList(fa ? product.roadmapFa : product.roadmapEn);
  const futureDirections = cleanList(product.futureDirections);
  const technology = cleanList(product.technology);
  const primaryAction = getPrimaryAction(product, locale);
  const evidence = getProductEvidence(product.slug);
  const audience = clean(fa ? product.audienceFa : product.audienceEn);
  const solution = clean(fa ? product.solutionFa : product.solutionEn);
  const vision = clean(fa ? product.visionFa : product.visionEn);
  const mission = clean(fa ? product.missionFa : product.missionEn);
  const heroTitle = clean(fa ? product.hero.titleFa : product.hero.titleEn);
  const heroDescription = clean(fa ? product.hero.descriptionFa : product.hero.descriptionEn);
  const positioning = clean(product.positioning);
  const currentProduct = clean(fa ? product.currentProductFa : product.currentProductEn);
  const productPromise = clean(fa ? product.productPromiseFa : product.productPromiseEn);
  const criticalPositioning = clean(fa ? product.criticalPositioningFa : product.criticalPositioningEn);

  return (
    <main className={styles.detailPage} data-product-theme={product.slug}>
      <section className={`wrap ${styles.productHero}`}>
        <div className={styles.heroCopy}>
          <span className="sec-tag">{getProductIndustry(product, locale)}</span>
          {product.domain ? <div className={`ltr ${styles.heroDomain}`}>{product.domain}</div> : null}
          <h1 className={fa ? undefined : "ltr"}>{displayName}</h1>
          {positioning ? <p className={styles.heroPositioning}>{positioning}</p> : null}
          {heroTitle ? <h2>{heroTitle}</h2> : null}
          {heroDescription ? <p>{heroDescription}</p> : null}
          <div className={styles.heroActions}>
            {primaryAction.type === "external" && product.domain ? (
              <a href={`https://${product.domain.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{primaryAction.label} ↗</a>
            ) : primaryAction.type === "contact" ? (
              <Link href={`/${locale}/contact`} className="btn btn-primary">{primaryAction.label}</Link>
            ) : (
              <span className="btn btn-ghost" aria-disabled="true">{primaryAction.label}</span>
            )}
            <Link href={`/${locale}/contact`} className="btn btn-ghost">{fa ? "گفت‌وگو درباره همکاری" : "Discuss collaboration"}</Link>
          </div>
        </div>

        <div className={styles.conceptVisual} aria-label={fa ? "نمای مفهومی محصول" : "Product concept visual"}>
          <span className={styles.conceptLabel}>{fa ? "نمای مفهومی محصول" : "PRODUCT CONCEPT"}</span>
          <div className={styles.conceptHeader}>
            <strong className={fa ? undefined : "ltr"}>{displayName}</strong>
            <span>{getProductCategory(product, locale)}</span>
          </div>
          {capabilities.length ? (
            <div className={styles.conceptGrid}>
              {capabilities.slice(0, 6).map((capability, index) => (
                <div key={capability} className={styles.conceptCell}>
                  <small>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</small>
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className={`wrap ${styles.snapshotGrid}`}>
        <article><span>{fa ? "وضعیت محصول" : "Lifecycle"}</span><strong>{getLifecycleLabel(product.status, locale)}</strong></article>
        <article><span>{fa ? "صنعت" : "Industry"}</span><strong>{getProductIndustry(product, locale)}</strong></article>
        <article><span>{fa ? "دسته‌بندی" : "Category"}</span><strong>{getProductCategory(product, locale)}</strong></article>
        {audience ? <article><span>{fa ? "مخاطبان" : "Audience"}</span><strong>{audience}</strong></article> : null}
      </section>

      {product.status === "to-confirm" ? (
        <section className={`wrap ${styles.notice}`}>
          <span className="sec-tag">{fa ? "مرز انتشار" : "PUBLICATION BOUNDARY"}</span>
          <p>{fa ? "عضویت این محصول در پرتفوی تأیید شده است، اما وضعیت دسترسی عمومی و مرحله چرخه عمر آن هنوز در رجیستری محصول نهایی نشده است. بنابراین این صفحه از ادعای «فعال» یا CTA استفاده قطعی خودداری می‌کند." : "This product is confirmed as part of the portfolio, but its public availability and lifecycle state are not yet finalized in the product registry. This page therefore avoids claiming it is live or presenting a definitive usage CTA."}</p>
        </section>
      ) : null}

      {criticalPositioning ? (
        <section className={`wrap ${styles.notice}`}>
          <span className="sec-tag">{fa ? "قاعده جایگاه‌یابی" : "POSITIONING RULE"}</span>
          <p>{criticalPositioning}</p>
          {product.doNotPositionAs?.length ? <div className={styles.tags}>{product.doNotPositionAs.map((item) => <span key={item}>NOT: {item}</span>)}</div> : null}
        </section>
      ) : null}

      {(problems.length || solution) ? (
        <section className={`wrap ${styles.twoColumnSection}`}>
          {problems.length ? (
            <article className={styles.sectionCard}>
              <span className="sec-tag">{fa ? "مسئله" : "PROBLEM"}</span>
              <h2>{fa ? "مسئله‌ای که محصول روی آن تمرکز دارد" : "The problem"}</h2>
              <ul>{problems.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ) : null}
          {solution ? (
            <article className={styles.sectionCard}>
              <span className="sec-tag">{fa ? "راهکار" : "SOLUTION"}</span>
              <h2>{fa ? "راهکار محصول" : "The solution"}</h2>
              <p>{solution}</p>
            </article>
          ) : null}
        </section>
      ) : null}

      {capabilities.length ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}>
            <span className="sec-tag">{fa ? "قابلیت‌های فعلی" : "CURRENT CAPABILITIES"}</span>
            <h2>{fa ? "آنچه امروز به‌عنوان قابلیت محصول ثبت شده" : "What is currently recorded as product capability"}</h2>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((capability, index) => <article key={capability}><span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span><h3>{capability}</h3></article>)}
          </div>
        </section>
      ) : null}

      {(currentProduct || productPromise) ? (
        <section className={`wrap ${styles.experienceSection}`}>
          <div>
            <span className="sec-tag">{fa ? "وضعیت فعلی" : "CURRENT PRODUCT"}</span>
            <h2>{fa ? "محصول امروز" : "Current product state"}</h2>
            {currentProduct ? <p><strong>{fa ? "محصول فعلی: " : "Current product: "}</strong>{currentProduct}</p> : null}
            {productPromise ? <blockquote>{productPromise}</blockquote> : null}
          </div>
          <div className={styles.experienceVisual}>
            <span>{fa ? "وضعیت چرخه عمر" : "LIFECYCLE STATE"}</span>
            <strong className={fa ? undefined : "ltr"}>{getLifecycleLabel(product.status, locale)}</strong>
            {positioning ? <p>{positioning}</p> : null}
          </div>
        </section>
      ) : null}

      {(roadmap.length || futureDirections.length) ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}>
            <span className="sec-tag">{fa ? "مسیر آینده" : "FUTURE DIRECTION"}</span>
            <h2>{fa ? "Roadmap و جهت‌های آینده — نه قابلیت فعلی" : "Roadmap and future directions — not current capability"}</h2>
            <p>{fa ? "موارد این بخش رو به جلو هستند و نباید به‌عنوان قابلیت موجود یا وعده زمان‌بندی‌شده تفسیر شوند." : "Items in this section are forward-looking and should not be interpreted as current capabilities or time-bound commitments."}</p>
          </div>
          <div className={styles.capabilityGrid}>
            {[...roadmap, ...futureDirections].map((item, index) => <article key={`${item}-${index}`}><span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span><h3>{item}</h3></article>)}
          </div>
        </section>
      ) : null}

      {evidence.length > 0 ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}>
            <span className="sec-tag">{fa ? "شواهد" : "EVIDENCE"}</span>
            <h2>{fa ? "شواهد تأییدشده" : "Verified evidence"}</h2>
            <p>{fa ? "فقط مدارکی که در Evidence Registry تأیید شده‌اند در این بخش نمایش داده می‌شوند." : "Only evidence verified in the Evidence Registry is shown here."}</p>
          </div>
          <div className={styles.relatedGrid}>
            {evidence.map((item) => (
              item.url ? (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
                  <span>{item.type}</span>
                  <strong>{fa ? item.titleFa : item.titleEn}</strong>
                  {clean(fa ? item.descriptionFa : item.descriptionEn) ? <p>{fa ? item.descriptionFa : item.descriptionEn}</p> : null}
                </a>
              ) : (
                <div key={item.id}>
                  <span>{item.type}</span>
                  <strong>{fa ? item.titleFa : item.titleEn}</strong>
                  {clean(fa ? item.descriptionFa : item.descriptionEn) ? <p>{fa ? item.descriptionFa : item.descriptionEn}</p> : null}
                </div>
              )
            ))}
          </div>
        </section>
      ) : null}

      {technology.length ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}><span className="sec-tag">{fa ? "فناوری" : "TECHNOLOGY LAYER"}</span><h2>{fa ? "لایه فناوری" : "Technology layer"}</h2></div>
          <div className={styles.technologyGrid}>{technology.map((item) => <span key={item}>{item}</span>)}</div>
        </section>
      ) : null}

      {(vision || mission) ? (
        <section className={`wrap ${styles.visionMission}`}>
          {vision ? <article><span className="sec-tag">{fa ? "چشم‌انداز" : "VISION"}</span><p>{vision}</p></article> : null}
          {mission ? <article><span className="sec-tag">{fa ? "ماموریت" : "MISSION"}</span><p>{mission}</p></article> : null}
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}><span className="sec-tag">{fa ? "محصولات مرتبط" : "RELATED PRODUCTS"}</span><h2>{fa ? "محصولات مرتبط" : "Related products"}</h2></div>
          <div className={styles.relatedGrid}>
            {related.map((item) => {
              const description = clean(fa ? item.shortDescriptionFa : item.shortDescriptionEn);
              return <Link key={item.slug} href={`/${locale}/products/${item.slug}`}><span>{getProductIndustry(item, locale)}</span><strong className={fa ? undefined : "ltr"}>{getProductDisplayName(item, locale)}</strong>{description ? <p>{description}</p> : null}</Link>;
            })}
          </div>
        </section>
      ) : null}

      <section className={`wrap ${styles.productCta}`}>
        <div>
          <span className="sec-tag">{fa ? "گام بعد" : "NEXT STEP"}</span>
          <h2>{primaryAction.type === "external" ? (fa ? "محصول در دسترس است؛ می‌توانید از دامنه رسمی وارد شوید." : "The product is available; continue to its official domain.") : (fa ? "برای وضعیت، همکاری یا دسترسی احتمالی از مسیر تماس مرتبط وارد شوید." : "Use the contact route for status, collaboration or potential access.")}</h2>
        </div>
        <div className={styles.heroActions}>
          {primaryAction.type === "external" && product.domain ? <a href={`https://${product.domain.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{primaryAction.label} ↗</a> : <Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "شروع گفت‌وگو" : "Start a conversation"}</Link>}
          <Link href={`/${locale}/products`} className="btn btn-ghost">{fa ? "بازگشت به پرتفوی" : "Back to portfolio"}</Link>
        </div>
      </section>
    </main>
  );
}