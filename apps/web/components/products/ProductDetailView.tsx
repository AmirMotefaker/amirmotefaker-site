import Link from "next/link";
import { getProductEvidence } from "@/content/evidence-registry";
import {
  getProductCategory,
  getProductDisplayName,
  getProductIndustry,
  type Product,
} from "@/content/product-portfolio";
import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";
import { getProductTopicCluster } from "@/content/seo-topic-clusters";
import type { Locale } from "@/content/founder-site";
import { localeDigits } from "@/lib/locale-format";
import styles from "./ProductPortfolio.module.css";

function lifecycle(status: Product["status"], locale: Locale) {
  const labels = {
    fa: { live: "فعال", development: "در حال توسعه", discovery: "در مرحله بررسی", concept: "ایده اولیه", "to-confirm": "در حال تأیید" },
    en: { live: "Live", development: "In development", discovery: "Discovery", concept: "Concept", "to-confirm": "To confirm" },
  } as const;
  return labels[locale][status];
}

const clean = (value?: string | null) => value?.trim() ?? "";
const list = (items?: readonly string[]) => (items ?? []).map((item) => item.trim()).filter(Boolean);

export default function ProductDetailView({ locale, product }: { locale: Locale; product: Product }) {
  const fa = locale === "fa";
  const name = getProductDisplayName(product, locale);
  const problems = list(fa ? product.problemFa : product.problemEn);
  const capabilities = list(fa ? product.capabilitiesFa : product.capabilitiesEn);
  const roadmap = list(fa ? product.roadmapFa : product.roadmapEn);
  const future = fa ? [] : list(product.futureDirections);
  const topics = getProductTopicCluster(product.slug, locale);
  const evidence = getProductEvidence(product.slug);
  const audience = clean(fa ? product.audienceFa : product.audienceEn);
  const solution = clean(fa ? product.solutionFa : product.solutionEn);
  const vision = clean(fa ? product.visionFa : product.visionEn);
  const mission = clean(fa ? product.missionFa : product.missionEn);
  const heroTitle = clean(fa ? product.hero.titleFa : product.hero.titleEn);
  const heroDescription = clean(fa ? product.hero.descriptionFa : product.hero.descriptionEn);
  const currentProduct = clean(fa ? product.currentProductFa : product.currentProductEn);
  const productPromise = clean(fa ? product.productPromiseFa : product.productPromiseEn);
  const amirRole = clean(fa ? product.amirRoleFa : product.amirRoleEn);
  const related = canonicalProductPortfolio.filter((item) => product.related?.includes(item.slug));

  return (
    <main className={styles.detailPage} data-product-theme={product.slug}>
      <section className={`wrap ${styles.productHero}`}>
        <div className={styles.heroCopy}>
          <span className="sec-tag">{getProductIndustry(product, locale)}</span>
          {!fa && product.domain ? <div className={`ltr ${styles.heroDomain}`}>{product.domain}</div> : null}
          <h1>{name}</h1>
          {!fa && product.positioning ? <p className={styles.heroPositioning}>{product.positioning}</p> : null}
          {heroTitle ? <h2>{heroTitle}</h2> : null}
          <p>{heroDescription || (fa ? product.shortDescriptionFa : product.shortDescriptionEn)}</p>
          <div className={styles.heroActions}>
            {product.status === "live" && product.domain ? (
              <a href={`https://${product.domain.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{fa ? "ورود به وب‌سایت محصول" : `Visit ${name}`} ↗</a>
            ) : (
              <Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "پیگیری مسیر توسعه" : "Follow development"}</Link>
            )}
            <Link href={`/${locale}/contact`} className="btn btn-ghost">{fa ? "گفت‌وگو درباره همکاری" : "Discuss collaboration"}</Link>
          </div>
        </div>

        <div className={styles.conceptVisual} aria-label={fa ? "نمای مفهومی محصول" : "Product concept visual"}>
          <span className={styles.conceptLabel}>{fa ? "نمای مفهومی محصول" : "PRODUCT CONCEPT"}</span>
          <div className={styles.conceptHeader}><strong>{name}</strong><span>{getProductCategory(product, locale)}</span></div>
          <div className={styles.conceptGrid}>
            {(capabilities.length ? capabilities : [getProductIndustry(product, locale), getProductCategory(product, locale)]).slice(0, 6).map((item, index) => (
              <div key={`${item}-${index}`} className={styles.conceptCell}>
                <small>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</small><span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.snapshotGrid}`}>
        <article><span>{fa ? "وضعیت" : "Lifecycle"}</span><strong>{lifecycle(product.status, locale)}</strong></article>
        <article><span>{fa ? "صنعت" : "Industry"}</span><strong>{getProductIndustry(product, locale)}</strong></article>
        <article><span>{fa ? "حوزه" : "Category"}</span><strong>{getProductCategory(product, locale)}</strong></article>
        {audience ? <article><span>{fa ? "مخاطبان" : "Audience"}</span><strong>{audience}</strong></article> : null}
      </section>

      {topics.length ? (
        <section className={`wrap ${styles.sectionShell}`} aria-labelledby={`${product.slug}-topics`}>
          <div className={styles.sectionHeading}>
            <span className="sec-tag">{fa ? "موضوعات مرتبط" : "RELATED TOPICS"}</span>
            <h2 id={`${product.slug}-topics`}>{fa ? `حوزه‌ها و کاربردهای مرتبط با ${name}` : `${name} topics and use cases`}</h2>
            <p>{fa ? "این موضوعات محدوده مسئله و کاربرد محصول را روشن می‌کنند و برای توضیح بهتر جایگاه آن در صنعت انتخاب شده‌اند." : "These topics clarify the product's problem space and practical context within its industry."}</p>
          </div>
          <div className={styles.technologyGrid}>{topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
        </section>
      ) : null}

      {(problems.length || solution) ? (
        <section className={`wrap ${styles.twoColumnSection}`}>
          {problems.length ? <article className={styles.sectionCard}><span className="sec-tag">{fa ? "مسئله" : "PROBLEM"}</span><h2>{fa ? "مسئله‌ای که این محصول حل می‌کند" : "The problem"}</h2><ul>{problems.map((item) => <li key={item}>{item}</li>)}</ul></article> : null}
          {solution ? <article className={styles.sectionCard}><span className="sec-tag">{fa ? "راهکار" : "SOLUTION"}</span><h2>{fa ? "راهکار محصول" : "The solution"}</h2><p>{solution}</p></article> : null}
        </section>
      ) : null}

      {capabilities.length ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}><span className="sec-tag">{fa ? "قابلیت‌ها" : "CAPABILITIES"}</span><h2>{fa ? "قابلیت‌های اصلی محصول" : "Core product capabilities"}</h2></div>
          <div className={styles.capabilityGrid}>{capabilities.map((item, index) => <article key={item}><span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span><h3>{item}</h3></article>)}</div>
        </section>
      ) : null}

      {(currentProduct || productPromise || amirRole) ? (
        <section className={`wrap ${styles.experienceSection}`}>
          <div>
            <span className="sec-tag">{fa ? "وضعیت امروز" : "CURRENT STATE"}</span>
            <h2>{fa ? "محصول در وضعیت فعلی" : "The product today"}</h2>
            {currentProduct ? <p>{currentProduct}</p> : null}
            {productPromise ? <blockquote>{productPromise}</blockquote> : null}
          </div>
          <div className={styles.experienceVisual}>
            <span>{fa ? "نقش امیر متفکر" : "AMIR'S ROLE"}</span>
            <strong>{lifecycle(product.status, locale)}</strong>
            {amirRole ? <p>{amirRole}</p> : null}
          </div>
        </section>
      ) : null}

      {(roadmap.length || future.length) ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}>
            <span className="sec-tag">{fa ? "مسیر آینده" : "FUTURE DIRECTION"}</span>
            <h2>{fa ? "مسیر توسعه محصول" : "Product roadmap and future direction"}</h2>
            <p>{fa ? "این بخش جهت توسعه را نشان می‌دهد و به معنی وعده زمان‌بندی‌شده نیست." : "This section is forward-looking and does not represent a time-bound commitment."}</p>
          </div>
          <div className={styles.capabilityGrid}>{[...roadmap, ...future].map((item, index) => <article key={`${item}-${index}`}><span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span><h3>{item}</h3></article>)}</div>
        </section>
      ) : null}

      {evidence.length ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}><span className="sec-tag">{fa ? "شواهد" : "EVIDENCE"}</span><h2>{fa ? "شواهد تأییدشده" : "Verified evidence"}</h2><p>{fa ? "فقط مدارک تأییدشده در این بخش نمایش داده می‌شوند." : "Only verified evidence is shown here."}</p></div>
          <div className={styles.relatedGrid}>{evidence.map((item) => item.url ? <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer"><span>{fa ? "مدرک تأییدشده" : item.type}</span><strong>{fa ? item.titleFa : item.titleEn}</strong>{clean(fa ? item.descriptionFa : item.descriptionEn) ? <p>{fa ? item.descriptionFa : item.descriptionEn}</p> : null}</a> : <div key={item.id}><span>{fa ? "مدرک تأییدشده" : item.type}</span><strong>{fa ? item.titleFa : item.titleEn}</strong></div>)}</div>
        </section>
      ) : null}

      {(vision || mission) ? (
        <section className={`wrap ${styles.visionMission}`}>
          {vision ? <article><span className="sec-tag">{fa ? "چشم‌انداز" : "VISION"}</span><p>{vision}</p></article> : null}
          {mission ? <article><span className="sec-tag">{fa ? "ماموریت" : "MISSION"}</span><p>{mission}</p></article> : null}
        </section>
      ) : null}

      {related.length ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}><span className="sec-tag">{fa ? "محصولات مرتبط" : "RELATED PRODUCTS"}</span><h2>{fa ? "ادامه در اکوسیستم" : "Continue through the ecosystem"}</h2></div>
          <div className={styles.relatedGrid}>{related.map((item) => <Link key={item.slug} href={`/${locale}/products/${item.slug}`}><span>{getProductIndustry(item, locale)}</span><strong>{getProductDisplayName(item, locale)}</strong><p>{fa ? item.shortDescriptionFa : item.shortDescriptionEn}</p></Link>)}</div>
        </section>
      ) : null}

      <section className={`wrap ${styles.productClosing}`}>
        <div><span className="sec-tag">{fa ? "پرتفوی" : "PORTFOLIO"}</span><h2>{fa ? "این محصول بخشی از یک اکوسیستم چندمحصولی است." : "This product is part of a multi-product ecosystem."}</h2></div>
        <div className={styles.heroActions}><Link href={`/${locale}/products`} className="btn btn-ghost">{fa ? "همه محصولات" : "All products"}</Link><Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "تماس و همکاری" : "Contact & collaborate"}</Link></div>
      </section>
    </main>
  );
}
