import Link from "next/link";
import {
  getRelatedProducts,
  getStatusLabel,
  type Product,
} from "@/content/product-portfolio";
import type { Locale } from "@/content/founder-site";
import styles from "./ProductPortfolio.module.css";

const confirm = "CONTENT TO CONFIRM";

function TextBlock({
  fa,
  locale,
  fallback = confirm,
}: {
  fa: string;
  locale: Locale;
  fallback?: string;
}) {
  return <>{locale === "fa" ? fa : fallback}</>;
}

export default function ProductDetailView({
  locale,
  product,
}: {
  locale: Locale;
  product: Product;
}) {
  const fa = locale === "fa";
  const related = getRelatedProducts(product);

  const problem = fa ? product.problemFa : product.problemEn;
  const roadmap = fa ? product.roadmapFa : product.roadmapEn;

  return (
    <main className={styles.detailPage} data-product-theme={product.slug}>
      <section className={`wrap ${styles.productHero}`}>
        <div className={styles.heroCopy}>
          <span className="sec-tag">{product.industry}</span>
          <div className={`ltr ${styles.heroDomain}`}>{product.domain}</div>
          <h1 className="ltr">{product.name}</h1>
          <p className={styles.heroPositioning}>{product.positioning}</p>
          <h2>{fa ? product.hero.titleFa : product.hero.titleEn}</h2>
          <p>{fa ? product.hero.descriptionFa : product.hero.descriptionEn}</p>

          <div className={styles.heroActions}>
            <a
              href={`https://${product.domain.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {fa ? product.hero.secondaryCtaFa : product.hero.secondaryCtaEn} ↗
            </a>
            <Link href={`/${locale}/contact`} className="btn btn-ghost">
              {fa ? "گفت‌وگو درباره همکاری" : "Discuss collaboration"}
            </Link>
          </div>
        </div>

        <div className={styles.conceptVisual} aria-label={fa ? "نمای مفهومی محصول" : "Product concept visual"}>
          <span className={styles.conceptLabel}>CONCEPT UI — NOT A REAL SCREENSHOT</span>
          <div className={styles.conceptHeader}>
            <strong className="ltr">{product.name}</strong>
            <span>{product.category}</span>
          </div>
          <div className={styles.conceptGrid}>
            {product.capabilities.slice(0, 6).map((capability, index) => (
              <div key={capability} className={styles.conceptCell}>
                <small>0{index + 1}</small>
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.snapshotGrid}`}>
        <article>
          <span>{fa ? "صنعت" : "Industry"}</span>
          <strong>{product.industry}</strong>
        </article>
        <article>
          <span>{fa ? "دسته‌بندی" : "Category"}</span>
          <strong>{product.category}</strong>
        </article>
        <article>
          <span>{fa ? "وضعیت" : "Status"}</span>
          <strong>{getStatusLabel(product.status, locale)}</strong>
        </article>
        <article>
          <span>{fa ? "کاربران هدف" : "Target users"}</span>
          <strong>CONTENT TO CONFIRM</strong>
        </article>
      </section>

      {product.criticalPositioningFa && (
        <section className={`wrap ${styles.notice}`}>
          <span className="sec-tag">POSITIONING RULE</span>
          <p>{fa ? product.criticalPositioningFa : confirm}</p>
          {product.doNotPositionAs?.length ? (
            <div className={styles.tags}>
              {product.doNotPositionAs.map((item) => <span key={item}>NOT: {item}</span>)}
            </div>
          ) : null}
        </section>
      )}

      <section className={`wrap ${styles.twoColumnSection}`}>
        <article className={styles.sectionCard}>
          <span className="sec-tag">{fa ? "مسئله" : "PROBLEM"}</span>
          <h2>{fa ? "مسئله‌ای که محصول حل می‌کند" : "The problem"}</h2>
          <ul>
            {problem.map((item) => <li key={item}>{item}</li>)}
          </ul>
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
          {product.capabilities.map((capability, index) => (
            <article key={capability}>
              <span>0{index + 1}</span>
              <h3>{capability}</h3>
              <p>CONTENT TO CONFIRM</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.experienceSection}`}>
        <div>
          <span className="sec-tag">{fa ? "تجربه محصول" : "PRODUCT EXPERIENCE"}</span>
          <h2>{fa ? "زبان بصری و تجربه محصول" : "Product experience & visual language"}</h2>
          <p>{fa ? product.visualDirectionFa : confirm}</p>
          {product.currentProductFa ? (
            <p><strong>{fa ? "محصول فعلی: " : "Current product: "}</strong>{fa ? product.currentProductFa : confirm}</p>
          ) : null}
          {product.productPromiseFa ? (
            <blockquote>{fa ? product.productPromiseFa : confirm}</blockquote>
          ) : null}
        </div>
        <div className={styles.experienceVisual}>
          <span>CONCEPT UI</span>
          <strong className="ltr">{product.name}</strong>
          <p>{product.positioning}</p>
        </div>
      </section>

      <section className={`wrap ${styles.sectionShell}`}>
        <div className={styles.sectionHeading}>
          <span className="sec-tag">{fa ? "فناوری" : "AI / TECHNOLOGY LAYER"}</span>
          <h2>{fa ? "لایه فناوری" : "Technology layer"}</h2>
        </div>
        <div className={styles.technologyGrid}>
          {product.technology.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className={`wrap ${styles.visionMission}`}>
        <article>
          <span className="sec-tag">{fa ? "چشم‌انداز" : "VISION"}</span>
          <p><TextBlock fa={product.visionFa} locale={locale} fallback={product.visionEn} /></p>
        </article>
        <article>
          <span className="sec-tag">{fa ? "ماموریت" : "MISSION"}</span>
          <p><TextBlock fa={product.missionFa} locale={locale} fallback={product.missionEn} /></p>
        </article>
      </section>

      <section className={`wrap ${styles.twoColumnSection}`}>
        <article className={styles.sectionCard}>
          <span className="sec-tag">{fa ? "نقشه راه" : "ROADMAP"}</span>
          <h2>{fa ? "Roadmap" : "Roadmap"}</h2>
          <ul>{roadmap.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className={styles.sectionCard}>
          <span className="sec-tag">{fa ? "نقش امیر" : "AMIR'S ROLE"}</span>
          <h2>{fa ? "نقش در محصول" : "Role in the product"}</h2>
          <p>{fa ? product.amirRoleFa : product.amirRoleEn}</p>
        </article>
      </section>

      {product.futureDirections?.length ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}>
            <span className="sec-tag">{fa ? "مسیر آینده" : "FUTURE DIRECTIONS"}</span>
            <h2>{fa ? "قابلیت‌های آینده ذکرشده در Source of Truth" : "Future directions in the source of truth"}</h2>
          </div>
          <div className={styles.technologyGrid}>
            {product.futureDirections.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className={`wrap ${styles.sectionShell}`}>
          <div className={styles.sectionHeading}>
            <span className="sec-tag">{fa ? "محصولات مرتبط" : "RELATED PRODUCTS"}</span>
            <h2>{fa ? "محصولات مرتبط" : "Related products"}</h2>
          </div>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <Link key={item.slug} href={`/${locale}/products/${item.slug}`}>
                <span>{item.industry}</span>
                <strong className="ltr">{item.name}</strong>
                <p>{item.positioning}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className={`wrap ${styles.productCta}`}>
        <div>
          <span className="sec-tag">{fa ? "محصول و همکاری" : "PRODUCT & COLLABORATION"}</span>
          <h2>{fa ? "برای ساختن محصول و همکاری فناورانه در ارتباط باشیم." : "Let's connect around product and technology."}</h2>
        </div>
        <div className={styles.heroActions}>
          <a
            href={`https://${product.domain.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {fa ? `مشاهده ${product.name}` : `Visit ${product.name}`} ↗
          </a>
          <Link href={`/${locale}/contact`} className="btn btn-ghost">
            {fa ? "تماس با امیر" : "Contact Amir"}
          </Link>
        </div>
      </section>
    </main>
  );
}