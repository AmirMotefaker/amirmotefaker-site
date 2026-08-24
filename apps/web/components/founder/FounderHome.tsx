import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { getVerifiedEvidence } from "@/content/evidence-registry";
import {
  getProductCategory,
  getProductDisplayName,
  productPortfolio as products,
  type Product,
} from "@/content/product-portfolio";
import { formatSiteNumber, localeDigits } from "@/lib/locale-format";
import styles from "./FounderHomeV2.module.css";

const thesisPrinciples = {
  fa: [
    ["۰۱", "مسئله، قبل از فناوری", "ابتدا مسئله واقعی و رفتار کاربر را می‌فهمم؛ بعد سراغ ابزار می‌روم."],
    ["۰۲", "محصول، قبل از ادعا", "خروجی قابل استفاده از هر روایت بازاریابی مهم‌تر است."],
    ["۰۳", "سیستم، قبل از ویژگی", "محصول باید بتواند رشد کند، یاد بگیرد و به یک اکوسیستم بزرگ‌تر متصل شود."],
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

function lifecycle(status: Product["status"], locale: Locale) {
  const labels = {
    fa: {
      live: "فعال",
      development: "در حال توسعه",
      discovery: "در مرحله بررسی",
      concept: "ایده اولیه",
      "to-confirm": "در حال تأیید",
    },
    en: {
      live: "Live",
      development: "In development",
      discovery: "Discovery",
      concept: "Concept",
      "to-confirm": "To confirm",
    },
  } as const;
  return labels[locale][status];
}

export default function FounderHome({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const evidence = getVerifiedEvidence();
  const sectors = new Set(products.map((p) => p.filterGroup)).size;
  const featured = products.slice(0, 4);
  const portfolioNames = products.slice(0, 6);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroShell}`}>
          <div className={styles.heroCopy}>
            <div className={styles.identityLine}>
              <span>{fa ? "امیر متفکر" : "Amir Motefaker"}</span>
              <i aria-hidden="true" />
              <span>{fa ? "کارآفرین و سازنده محصولات فناوری" : "Entrepreneur & technology product builder"}</span>
            </div>

            <h1>
              {fa ? (
                <>محصول می‌سازم؛ <em>برای مسئله‌های واقعی.</em></>
              ) : (
                <>I build products <em>for real problems.</em></>
              )}
            </h1>

            <p className={styles.heroLead}>
              {fa
                ? "پرتفویی از محصولات مستقل در هوش مصنوعی، نرم‌افزار، آموزش، رسانه و زیرساخت دیجیتال؛ از کشف مسئله تا طراحی، ساخت و رشد محصول."
                : "A portfolio of independent products across AI, software, education, media and digital infrastructure — from problem discovery to design, build and growth."}
            </p>

            <div className={styles.heroActions}>
              <Link href={`/${locale}/products`} className={styles.primaryAction}>{fa ? "مشاهده پرتفوی" : "Explore portfolio"}<span aria-hidden="true">↗</span></Link>
              <Link href={`/${locale}/about`} className={styles.secondaryAction}>{fa ? "درباره امیر" : "About Amir"}</Link>
            </div>

            <div className={styles.heroMetrics}>
              <div><strong>{formatSiteNumber(products.length, locale)}</strong><span>{fa ? "محصول" : "Products"}</span></div>
              <div><strong>{formatSiteNumber(sectors, locale)}</strong><span>{fa ? "حوزه فناوری" : "Technology sectors"}</span></div>
              <div><strong>{formatSiteNumber(evidence.length, locale)}</strong><span>{fa ? "شاهد تأییدشده" : "Verified evidence"}</span></div>
            </div>
          </div>

          <aside className={styles.heroVisual}>
            <div className={styles.visualHalo} aria-hidden="true" />
            <div className={styles.portraitCard}>
              <Image
                src="/assets/profile/amir-motefaker.png"
                alt={fa ? founder.nameFa : founder.nameEn}
                fill
                priority
                sizes="(max-width: 980px) 82vw, 34vw"
                className={styles.portrait}
              />
              <div className={styles.portraitShade} />
              <div className={styles.portraitMeta}>
                <span>{fa ? "بنیان‌گذار · محصول · فناوری" : "Founder · Product · Technology"}</span>
                <strong>{fa ? founder.nameFa : founder.nameEn}</strong>
              </div>
            </div>
          </aside>
        </div>

        <div className={`wrap ${styles.portfolioRail}`}>
          <span>{fa ? "محصولات منتخب" : "Selected products"}</span>
          <div>
            {portfolioNames.map((product) => (
              <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>
                {getProductDisplayName(product, locale)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.venturesSection}>
        <div className={`wrap ${styles.sectionIntro}`}>
          <span>{fa ? "پرتفوی" : "Portfolio"}</span>
          <div>
            <h2>{fa ? "چند محصول، چند بازار؛ یک مسیر پیوسته از ساختن." : "Multiple products, multiple markets — one continuous record of building."}</h2>
            <p>{fa ? "هر محصول هویت، مسئله و مسیر رشد خودش را دارد. اینجا فقط چهار نمونه شاخص را می‌بینید." : "Each product has its own identity, problem and growth path. Here are four representative ventures."}</p>
          </div>
        </div>

        <div className={`wrap ${styles.ventureGrid}`}>
          {featured.map((product, index) => (
            <Link href={`/${locale}/products/${product.slug}`} key={product.slug} className={styles.ventureCard}>
              <div className={styles.ventureTop}>
                <div className={styles.ventureMark}>{marks[product.slug] ?? product.slug.slice(0, 2).toUpperCase()}</div>
                <span>{localeDigits(String(index + 1).padStart(2, "0"), locale)} · {lifecycle(product.status, locale)}</span>
              </div>
              <div className={styles.ventureContent}>
                <div>
                  <h3>{getProductDisplayName(product, locale)}</h3>
                  <small>{product.domain}</small>
                </div>
                <p>{fa ? product.shortDescriptionFa : product.shortDescriptionEn}</p>
              </div>
              <div className={styles.ventureFoot}>
                <span>{getProductCategory(product, locale)}</span>
                <strong>{fa ? "مشاهده" : "View"} ↗</strong>
              </div>
            </Link>
          ))}
        </div>

        <div className={`wrap ${styles.allProducts}`}>
          <Link href={`/${locale}/products`}>{fa ? `مشاهده هر ${formatSiteNumber(products.length, locale)} محصول` : `Explore all ${formatSiteNumber(products.length, locale)} products`}<span>↗</span></Link>
        </div>
      </section>

      {evidence.length > 0 && (
        <section className={styles.proofSection}>
          <div className={`wrap ${styles.sectionIntro}`}>
            <span>{fa ? "شواهد اجرا" : "Proof of execution"}</span>
            <div>
              <h2>{fa ? "پرتفوی باید با خروجی قابل بررسی حرف بزند." : "A portfolio should speak through verifiable output."}</h2>
              <p>{fa ? "شواهد تأییدشده، خروجی واقعی را از ادعا جدا می‌کنند." : "Verified evidence separates real output from claims."}</p>
            </div>
          </div>
          <div className={`wrap ${styles.proofGrid}`}>
            {evidence.slice(0, 6).map((item, index) => (
              <article className={styles.proofCard} key={item.id}>
                <span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span>
                <h3>{fa ? item.titleFa : item.titleEn}</h3>
                {item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{fa ? "بررسی مدرک" : "Inspect evidence"} ↗</a> : null}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className={styles.thesisSection}>
        <div className={`wrap ${styles.sectionIntro}`}>
          <span>{fa ? "منطق ساخت محصول" : "Product thesis"}</span>
          <div>
            <h2>{fa ? "فناوری ابزار است؛ نقطه شروع، مسئله است." : "Technology is a tool. The starting point is the problem."}</h2>
            <p>{fa ? "سه اصل ساده که چارچوب تصمیم‌گیری من برای ساخت و توسعه محصول هستند." : "Three simple principles that shape how I decide what to build and grow."}</p>
          </div>
        </div>
        <div className={`wrap ${styles.thesisGrid}`}>
          {thesisPrinciples[locale].map(([index, title, detail]) => (
            <article className={styles.thesisCard} key={title}><span>{index}</span><h3>{title}</h3><p>{detail}</p></article>
          ))}
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`wrap ${styles.contactPanel}`}>
          <span>{fa ? "گفت‌وگو" : "Conversation"}</span>
          <h2>{fa ? "برای ساختن، سرمایه‌گذاری یا همکاری جدی گفتگو کنیم." : "Let's talk about building, investing or serious collaboration."}</h2>
          <div><Link href={`/${locale}/contact`} className={styles.primaryAction}>{fa ? "شروع گفتگو" : "Start a conversation"}<span aria-hidden="true">↗</span></Link><Link href={`/${locale}/resume`} className={styles.secondaryAction}>{fa ? "مسیر حرفه‌ای" : "Professional journey"}</Link></div>
        </div>
      </section>
    </main>
  );
}
