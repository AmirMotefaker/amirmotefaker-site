import Link from "next/link";
import type { Locale } from "@/content/founder-site";
import type { Product } from "@/content/product-portfolio";
import {
  getProductCategory,
  getProductDisplayName,
  getProductIndustry,
} from "@/content/product-portfolio";
import { getProductTopicCluster } from "@/content/seo-topic-clusters";
import { localeDigits } from "@/lib/locale-format";
import styles from "./ProductDetailExperience.module.css";

const clean = (value?: string | null) => value?.trim() ?? "";
const list = (items?: readonly string[]) => (items ?? []).map((item) => item.trim()).filter(Boolean);

function lifecycle(status: Product["status"], locale: Locale) {
  const labels = {
    fa: { live: "فعال", development: "در حال توسعه", discovery: "در مرحله بررسی", concept: "ایده اولیه", "to-confirm": "در حال تأیید" },
    en: { live: "Live", development: "In development", discovery: "Discovery", concept: "Concept", "to-confirm": "To confirm" },
  } as const;
  return labels[locale][status];
}

export default function ProductDetailExperience({ locale, product }: { locale: Locale; product: Product }) {
  const fa = locale === "fa";
  const name = getProductDisplayName(product, locale);
  const description = clean(fa ? product.shortDescriptionFa : product.shortDescriptionEn);
  const heroTitle = clean(fa ? product.hero.titleFa : product.hero.titleEn);
  const heroDescription = clean(fa ? product.hero.descriptionFa : product.hero.descriptionEn) || description;
  const problems = list(fa ? product.problemFa : product.problemEn);
  const capabilities = list(fa ? product.capabilitiesFa : product.capabilitiesEn);
  const roadmap = list(fa ? product.roadmapFa : product.roadmapEn);
  const solution = clean(fa ? product.solutionFa : product.solutionEn);
  const audience = clean(fa ? product.audienceFa : product.audienceEn);
  const currentProduct = clean(fa ? product.currentProductFa : product.currentProductEn);
  const productPromise = clean(fa ? product.productPromiseFa : product.productPromiseEn);
  const amirRole = clean(fa ? product.amirRoleFa : product.amirRoleEn);
  const topics = getProductTopicCluster(product.slug, locale);
  const domain = product.domain?.toLowerCase();

  return (
    <main className={styles.page} data-theme={product.slug}>
      <section className={`wrap ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>
            <span>{getProductIndustry(product, locale)}</span>
            {domain ? <b className={styles.domain}>{domain}</b> : null}
          </div>
          <h1>{name}</h1>
          {heroTitle ? <h2>{heroTitle}</h2> : null}
          <p>{heroDescription}</p>
          <div className={styles.actions}>
            {domain ? <a className={styles.primary} href={`https://${domain}`} target="_blank" rel="noopener noreferrer">{fa ? "ورود به سایت رسمی" : "Visit official site"} ↗</a> : null}
            <Link className={styles.secondary} href={`/${locale}/contact`}>{fa ? "گفت‌وگو درباره همکاری" : "Discuss collaboration"}</Link>
          </div>
        </div>

        <div className={styles.visual} aria-label={fa ? `نمای مفهومی ${name}` : `${name} concept visual`}>
          <div className={styles.visualTop}>
            <div><strong>{name}</strong><br/><span>{getProductCategory(product, locale)}</span></div>
            <span>{lifecycle(product.status, locale)}</span>
          </div>
          <div className={styles.capOrbit}>
            {(capabilities.length ? capabilities : [getProductIndustry(product, locale), getProductCategory(product, locale)]).slice(0, 6).map((item, index) => (
              <div key={`${item}-${index}`}>
                <small>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</small>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.snapshot}`}>
        <article><span>{fa ? "وضعیت" : "Lifecycle"}</span><strong>{lifecycle(product.status, locale)}</strong></article>
        <article><span>{fa ? "صنعت" : "Industry"}</span><strong>{getProductIndustry(product, locale)}</strong></article>
        <article><span>{fa ? "حوزه" : "Category"}</span><strong>{getProductCategory(product, locale)}</strong></article>
        {audience ? <article><span>{fa ? "مخاطب" : "Audience"}</span><strong>{audience}</strong></article> : null}
      </section>

      {(problems.length || solution) ? (
        <section className={`wrap ${styles.section}`}>
          <div className={styles.heading}>
            <span>{fa ? "از مسئله تا محصول" : "FROM PROBLEM TO PRODUCT"}</span>
            <h2>{fa ? `چرا ${name} ساخته شده؟` : `Why ${name} exists`}</h2>
            <p>{fa ? "این بخش مسئله و راهکار محصول را بر اساس اطلاعات فعلی و قابل‌تأیید توضیح می‌دهد." : "The product problem and solution, based on the currently verified product information."}</p>
          </div>
          <div className={styles.problemGrid}>
            <article className={styles.storyCard}>
              <span>{fa ? "مسئله" : "PROBLEM"}</span>
              <ul>{problems.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            {solution ? <article className={styles.solutionCard}><span>{fa ? "راهکار" : "SOLUTION"}</span><p>{solution}</p></article> : null}
          </div>
        </section>
      ) : null}

      {capabilities.length ? (
        <section className={`wrap ${styles.section}`}>
          <div className={styles.heading}>
            <span>{fa ? "قابلیت‌های اصلی" : "CORE CAPABILITIES"}</span>
            <h2>{fa ? `آنچه ${name} انجام می‌دهد` : `What ${name} does`}</h2>
          </div>
          <div className={styles.capGrid}>
            {capabilities.map((item, index) => (
              <article className={styles.capCard} key={item}>
                <span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {(currentProduct || productPromise || amirRole) ? (
        <section className={`wrap ${styles.section}`}>
          <div className={styles.heading}>
            <span>{fa ? "وضعیت امروز" : "PRODUCT TODAY"}</span>
            <h2>{fa ? "محصول امروز و مسیر ساخت" : "Current product state and build direction"}</h2>
          </div>
          <div className={styles.journey}>
            <article>
              {currentProduct ? <p>{currentProduct}</p> : null}
              {productPromise ? <blockquote>{productPromise}</blockquote> : null}
            </article>
            <article className={styles.role}>
              <div><span>{fa ? "نقش امیر متفکر" : "AMIR'S ROLE"}</span><strong>{lifecycle(product.status, locale)}</strong></div>
              {amirRole ? <p>{amirRole}</p> : null}
            </article>
          </div>
        </section>
      ) : null}

      {roadmap.length ? (
        <section className={`wrap ${styles.section}`}>
          <div className={styles.heading}>
            <span>{fa ? "مسیر آینده" : "FUTURE DIRECTION"}</span>
            <h2>{fa ? "جهت توسعه بعدی" : "Next development direction"}</h2>
            <p>{fa ? "این موارد جهت توسعه‌اند و به معنی تعهد زمانی یا وعده انتشار نیستند." : "These are development directions, not time-bound release commitments."}</p>
          </div>
          <div className={styles.roadmap}>
            {roadmap.map((item, index) => <article key={`${item}-${index}`}><span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span><h3>{item}</h3></article>)}
          </div>
        </section>
      ) : null}

      {topics.length ? (
        <section className={`wrap ${styles.section}`}>
          <div className={styles.heading}>
            <span>{fa ? "موضوعات مرتبط" : "RELATED TOPICS"}</span>
            <h2>{fa ? "حوزه‌های مرتبط با این محصول" : "Topics around this product"}</h2>
          </div>
          <div className={styles.topics}>{topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
        </section>
      ) : null}

      <section className={`wrap ${styles.closing}`}>
        <h2>{fa ? `${name} بخشی از پرتفوی یازده‌محصولی امیر متفکر است.` : `${name} is part of Amir Motefaker's eleven-product portfolio.`}</h2>
        <div className={styles.actions}>
          <Link className={styles.secondary} href={`/${locale}/products`}>{fa ? "همه محصولات" : "All products"}</Link>
          {domain ? <a className={styles.primary} href={`https://${domain}`} target="_blank" rel="noopener noreferrer">{fa ? "سایت رسمی محصول" : "Official product site"} ↗</a> : null}
        </div>
      </section>
    </main>
  );
}
