import Link from "next/link";
import type { Locale } from "@/content/founder-site";
import { getVerifiedEvidence } from "@/content/evidence-registry";
import {
  getProductCategory,
  getProductDisplayName,
  productPortfolio as products,
  type Product,
} from "@/content/product-portfolio";
import styles from "./FounderHomeV2.module.css";

const thesisPrinciples = {
  fa: [
    ["01", "مسئله قبل از تکنولوژی", "ابتدا مسئله واقعی و رفتار کاربر را می‌فهمم؛ بعد سراغ ابزار می‌روم."],
    ["02", "محصول قبل از ادعا", "خروجی قابل استفاده، از هر روایت بازاریابی مهم‌تر است."],
    ["03", "سیستم قبل از ویژگی", "محصول باید بتواند رشد کند، یاد بگیرد و به اکوسیستم بزرگ‌تری متصل شود."],
  ],
  en: [
    ["01", "Problem before technology", "Understand the real problem and user behavior before choosing the tool."],
    ["02", "Product before claims", "A working product matters more than oversized marketing."],
    ["03", "Systems before features", "Products should be able to grow, learn and connect into a wider ecosystem."],
  ],
} as const;

const marks: Record<string, string> = {
  linkresan: "LR", farsio: "FA", fahmio: "FH", zobdino: "ZO", filmtrack: "FT", idehjo: "IJ",
  restyar: "RY", primesys: "PS", shiftpay: "SP",
};

function lifecycle(status: Product["status"], fa: boolean) {
  const labels = {
    live: fa ? "فعال" : "Live",
    development: fa ? "در حال توسعه" : "In development",
    discovery: fa ? "در مرحله کشف" : "Discovery",
    concept: fa ? "مفهوم اولیه" : "Concept",
    "to-confirm": fa ? "در حال تأیید" : "To confirm",
  } as const;
  return labels[status];
}

export default function FounderHome({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const evidence = getVerifiedEvidence();
  const liveCount = products.filter((p) => p.status === "live").length;
  const buildingCount = products.filter((p) => p.status === "development").length;
  const sectors = new Set(products.map((p) => p.filterGroup)).size;
  const featured = products.slice(0, 6);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.heroKicker}>
              <span>{fa ? "امیر متفکر / بنیان‌گذار / سازنده محصول" : "AMIR MOTefAKER / FOUNDER / PRODUCT BUILDER"}</span>
              <strong>{fa ? "در حال ساخت" : "BUILDING"}</strong>
            </div>
            <h1>{fa ? <>ایده را به <em>محصول واقعی.</em></> : <>Turning ideas into <em>real products.</em></>}</h1>
            <p className={styles.heroLead}>{fa ? "من روی ساخت محصولات فناوری کار می‌کنم؛ محصولاتی که هوش مصنوعی، نرم‌افزار و داده را به مسئله‌های واقعی در کسب‌وکار، آموزش، رسانه و زیرساخت دیجیتال متصل می‌کنند." : "I build technology products that connect AI, software and data to real problems across business, education, media and digital infrastructure."}</p>
            <div className={styles.heroActions}>
              <Link href={`/${locale}/products`} className="btn btn-primary">{fa ? "مشاهده پرتفوی" : "Explore portfolio"}</Link>
              <Link href={`/${locale}/about`} className="btn btn-ghost">{fa ? "درباره من" : "About me"}</Link>
              <Link href={`/${locale}/thesis`} className={styles.textLink}>{fa ? "نگاه من به ساخت محصول ↗" : "Product thesis ↗"}</Link>
            </div>
          </div>

          <aside className={styles.signature}>
            <div className={styles.signatureTop}><span>FOUNDER SYSTEM / 2026</span><span>IR / GLOBAL</span></div>
            <div className={styles.signatureCore}>
              <div className={styles.signatureCell}><span>{fa ? "محصول" : "PRODUCTS"}</span><strong>{String(products.length).padStart(2,"0")}</strong></div>
              <div className={styles.signatureCell}><span>{fa ? "فعال" : "LIVE"}</span><strong>{String(liveCount).padStart(2,"0")}</strong></div>
              <div className={styles.signatureCell}><span>{fa ? "در حال ساخت" : "BUILDING"}</span><strong>{String(buildingCount).padStart(2,"0")}</strong></div>
              <div className={styles.signatureCell}><span>{fa ? "حوزه" : "SECTORS"}</span><strong>{String(sectors).padStart(2,"0")}</strong></div>
            </div>
            <div className={styles.signatureFoot}>THINK → BUILD → SHIP → LEARN</div>
          </aside>
        </div>
      </section>

      <section className={styles.proofStrip}>
        <div className={`wrap ${styles.proofGrid}`}>
          <article><strong>{String(products.length).padStart(2,"0")}</strong><span>{fa ? "محصول در پرتفوی" : "Portfolio products"}</span></article>
          <article><strong>{String(liveCount).padStart(2,"0")}</strong><span>{fa ? "محصول فعال" : "Live products"}</span></article>
          <article><strong>{String(evidence.length).padStart(2,"0")}</strong><span>{fa ? "مدرک تأییدشده" : "Verified evidence"}</span></article>
          <article><strong>{String(sectors).padStart(2,"0")}</strong><span>{fa ? "حوزه فناوری" : "Technology sectors"}</span></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`wrap ${styles.sectionHead}`}>
          <div><span className={styles.eyebrow}>{fa ? "پرتفوی منتخب" : "SELECTED VENTURES"}</span></div>
          <div><h2>{fa ? "محصولات مستقل، با مسئله و مسیر رشد مستقل." : "Independent products, each with its own problem and growth path."}</h2><p>{fa ? "صفحه اصلی قرار نیست همه چیز را یکجا نشان دهد؛ اینجا فقط مهم‌ترین Ventureها را می‌بینید و برای جزئیات وارد پرتفوی کامل می‌شوید." : "The homepage highlights the ventures that best explain the portfolio. The full product index contains the complete operating view."}</p></div>
        </div>
        <div className={`wrap ${styles.ventureGrid}`}>
          {featured.map((product, index) => (
            <Link href={`/${locale}/products/${product.slug}`} key={product.slug} className={styles.ventureCard}>
              <div className={styles.ventureTop}><div className={styles.ventureMark}>{marks[product.slug] ?? product.slug.slice(0,2).toUpperCase()}</div><span className={styles.ventureState}>{String(index + 1).padStart(2,"0")} / {lifecycle(product.status, fa)}</span></div>
              <h3>{getProductDisplayName(product, locale)}</h3>
              <p>{fa ? product.shortDescriptionFa : product.shortDescriptionEn}</p>
              <div className={styles.ventureFoot}><span>{getProductCategory(product, locale)}</span><span>↗</span></div>
            </Link>
          ))}
        </div>
        <div className={`wrap ${styles.heroActions}`}><Link href={`/${locale}/products`} className={styles.textLink}>{fa ? "مشاهده کل پرتفوی ↗" : "Explore full portfolio ↗"}</Link></div>
      </section>

      {evidence.length > 0 && (
        <section className={styles.section}>
          <div className={`wrap ${styles.sectionHead}`}>
            <div><span className={styles.eyebrow}>{fa ? "اثبات اجرا" : "PROOF OF EXECUTION"}</span></div>
            <div><h2>{fa ? "ادعا کمتر؛ شواهد قابل بررسی بیشتر." : "Less claiming. More verifiable proof."}</h2><p>{fa ? "فقط مواردی نمایش داده می‌شوند که در Evidence Registry تأیید شده‌اند." : "Only evidence that has been verified in the Evidence Registry is surfaced here."}</p></div>
          </div>
          <div className={`wrap ${styles.proofCards}`}>
            {evidence.slice(0,6).map((item, index) => (
              <article className={styles.proofCard} key={item.id}><span>{String(index + 1).padStart(2,"0")}</span><h3>{fa ? item.titleFa : item.titleEn}</h3>{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{fa ? "مشاهده مدرک ↗" : "View evidence ↗"}</a> : null}</article>
            ))}
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={`wrap ${styles.sectionHead}`}>
          <div><span className={styles.eyebrow}>{fa ? "منطق ساخت" : "PRODUCT THESIS"}</span></div>
          <div><h2>{fa ? "محصول خوب از فناوری شروع نمی‌شود؛ از مسئله شروع می‌شود." : "Good products do not start with technology. They start with a problem."}</h2><p>{fa ? "این سه اصل، معیار تصمیم‌گیری من در طراحی و توسعه محصول هستند." : "These three principles shape how I decide what and how to build."}</p></div>
        </div>
        <div className={`wrap ${styles.thesisGrid}`}>
          {thesisPrinciples[locale].map(([index, title, detail]) => <article className={styles.thesisCard} key={title}><span>{index}</span><h3>{title}</h3><p>{detail}</p></article>)}
        </div>
        <div className={`wrap ${styles.heroActions}`}><Link href={`/${locale}/thesis`} className={styles.textLink}>{fa ? "مطالعه Product Thesis ↗" : "Read product thesis ↗"}</Link></div>
      </section>

      <section className={styles.cta}>
        <div className={`wrap ${styles.ctaPanel}`}>
          <div><span className={styles.eyebrow}>{fa ? "شروع گفتگو" : "START A CONVERSATION"}</span><h2>{fa ? "اگر مسئله‌ای ارزش ساختن دارد، درباره‌اش حرف بزنیم." : "If the problem is worth building around, let's talk."}</h2></div>
          <div className={styles.ctaSide}><p>{fa ? "برای همکاری محصول، سرمایه‌گذاری، شراکت یا گفت‌وگوی تخصصی از صفحه تماس شروع کنید." : "For product collaboration, investment, partnerships or a focused conversation, start from the contact page."}</p><Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "شروع گفتگو" : "Start a conversation"}</Link><Link href={`/${locale}/resume`} className={styles.textLink}>{fa ? "مسیر حرفه‌ای ↗" : "Professional journey ↗"}</Link></div>
        </div>
      </section>
    </main>
  );
}
