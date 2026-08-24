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
  const sectors = new Set(products.map((p) => p.filterGroup)).size;
  const featured = products.slice(0, 4);
  const portfolioNames = products.slice(0, 6);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.heroKicker}>
              <span>{fa ? "امیر متفکر" : "AMIR MOTefAKER"}</span>
              <span>{fa ? "کارآفرین · سازنده محصول · فناوری" : "ENTREPRENEUR · PRODUCT BUILDER · TECHNOLOGY"}</span>
            </div>

            <h1>
              {fa ? (
                <>محصولات فناوری را <em>از مسئله تا اجرا</em> می‌سازم.</>
              ) : (
                <>I build technology products <em>from problem to execution.</em></>
              )}
            </h1>

            <p className={styles.heroLead}>
              {fa
                ? "بنیان‌گذار و سازنده مجموعه‌ای از محصولات مستقل در هوش مصنوعی، نرم‌افزار، آموزش، رسانه، فین‌تک و زیرساخت دیجیتال. این سایت نمای زنده‌ای از چیزهایی است که می‌سازم، آزمایش می‌کنم و توسعه می‌دهم."
                : "Founder and builder of independent products across AI, software, education, media, fintech and digital infrastructure. This site is a living view of what I build, test and grow."}
            </p>

            <div className={styles.heroActions}>
              <Link href={`/${locale}/products`} className="btn btn-primary">{fa ? "مشاهده محصولات" : "Explore products"}</Link>
              <Link href={`/${locale}/about`} className="btn btn-ghost">{fa ? "درباره امیر" : "About Amir"}</Link>
            </div>

            <div className={styles.heroPortfolioLine}>
              <span>{fa ? "پرتفوی منتخب" : "SELECTED PORTFOLIO"}</span>
              <div>
                {portfolioNames.map((product) => (
                  <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>
                    {getProductDisplayName(product, locale)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className={styles.founderVisual}>
            <div className={styles.portraitFrame}>
              <Image
                src="/assets/profile/amir-motefaker.png"
                alt={fa ? founder.nameFa : founder.nameEn}
                fill
                priority
                sizes="(max-width: 980px) 80vw, 38vw"
                className={styles.portrait}
              />
              <div className={styles.portraitOverlay} />
              <div className={styles.portraitCaption}>
                <span>{fa ? "FOUNDER / PRODUCT / TECHNOLOGY" : "FOUNDER / PRODUCT / TECHNOLOGY"}</span>
                <strong>{fa ? founder.nameFa : founder.nameEn}</strong>
              </div>
            </div>
            <div className={styles.authorityBar}>
              <div><strong>{String(products.length).padStart(2,"0")}</strong><span>{fa ? "محصول در پرتفوی" : "Portfolio products"}</span></div>
              <div><strong>{String(sectors).padStart(2,"0")}</strong><span>{fa ? "حوزه فناوری" : "Technology sectors"}</span></div>
              <div><strong>{String(evidence.length).padStart(2,"0")}</strong><span>{fa ? "شاهد تأییدشده" : "Verified evidence"}</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.portfolioTicker}>
        <div className="wrap">
          <span>{fa ? "محصولات و کسب‌وکارها" : "PRODUCTS & VENTURES"}</span>
          <div className={styles.tickerNames}>
            {portfolioNames.map((product, index) => (
              <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>
                <small>{String(index + 1).padStart(2,"0")}</small>{getProductDisplayName(product, locale)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`wrap ${styles.sectionHead}`}>
          <div><span className={styles.eyebrow}>{fa ? "VENTURES منتخب" : "SELECTED VENTURES"}</span></div>
          <div>
            <h2>{fa ? "چند محصول، چند صنعت؛ یک سابقه مستمر از ساختن." : "Multiple products, multiple industries — one continuous record of building."}</h2>
            <p>{fa ? "هر Venture مسئله، بازار، فناوری و مسیر رشد خودش را دارد. صفحه اصلی فقط مهم‌ترین آن‌ها را معرفی می‌کند؛ جزئیات کامل در Portfolio قرار دارد." : "Each venture has its own problem, market, technology and growth path. The homepage highlights the clearest examples; the full operating view lives in the portfolio."}</p>
          </div>
        </div>

        <div className={`wrap ${styles.ventureGrid}`}>
          {featured.map((product, index) => (
            <Link href={`/${locale}/products/${product.slug}`} key={product.slug} className={styles.ventureCard}>
              <div className={styles.ventureTop}>
                <div className={styles.ventureMark}>{marks[product.slug] ?? product.slug.slice(0,2).toUpperCase()}</div>
                <span className={styles.ventureState}>{String(index + 1).padStart(2,"0")} · {lifecycle(product.status, fa)}</span>
              </div>
              <div className={styles.ventureIdentity}>
                <h3>{getProductDisplayName(product, locale)}</h3>
                <span>{product.domain}</span>
              </div>
              <p>{fa ? product.shortDescriptionFa : product.shortDescriptionEn}</p>
              <div className={styles.ventureFoot}><span>{getProductCategory(product, locale)}</span><strong>{fa ? "مشاهده محصول ↗" : "View product ↗"}</strong></div>
            </Link>
          ))}
        </div>

        <div className={`wrap ${styles.sectionAction}`}>
          <Link href={`/${locale}/products`} className="btn btn-ghost">{fa ? `مشاهده هر ${products.length} محصول` : `Explore all ${products.length} products`}</Link>
        </div>
      </section>

      {evidence.length > 0 && (
        <section className={`${styles.section} ${styles.proofSection}`}>
          <div className={`wrap ${styles.sectionHead}`}>
            <div><span className={styles.eyebrow}>{fa ? "PROOF OF EXECUTION" : "PROOF OF EXECUTION"}</span></div>
            <div><h2>{fa ? "پرتفوی باید با خروجی قابل بررسی حرف بزند." : "A portfolio should speak through verifiable output."}</h2><p>{fa ? "شواهد تأییدشده، مسیر ساختن را از ادعا جدا می‌کنند." : "Verified evidence separates a building record from a collection of claims."}</p></div>
          </div>
          <div className={`wrap ${styles.proofCards}`}>
            {evidence.slice(0,6).map((item, index) => (
              <article className={styles.proofCard} key={item.id}>
                <span>{String(index + 1).padStart(2,"0")}</span>
                <h3>{fa ? item.titleFa : item.titleEn}</h3>
                {item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{fa ? "بررسی مدرک ↗" : "Inspect evidence ↗"}</a> : null}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={`wrap ${styles.sectionHead}`}>
          <div><span className={styles.eyebrow}>{fa ? "PRODUCT THESIS" : "PRODUCT THESIS"}</span></div>
          <div><h2>{fa ? "محصول خوب از فناوری شروع نمی‌شود؛ از مسئله شروع می‌شود." : "Good products do not start with technology. They start with a problem."}</h2><p>{fa ? "سه اصل که در تصمیم‌گیری برای ساخت، توسعه و متوقف‌کردن محصولات استفاده می‌کنم." : "Three principles I use when deciding what to build, grow or stop."}</p></div>
        </div>
        <div className={`wrap ${styles.thesisGrid}`}>
          {thesisPrinciples[locale].map(([index, title, detail]) => <article className={styles.thesisCard} key={title}><span>{index}</span><h3>{title}</h3><p>{detail}</p></article>)}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`wrap ${styles.ctaPanel}`}>
          <div><span className={styles.eyebrow}>{fa ? "ارتباط" : "CONTACT"}</span><h2>{fa ? "برای ساختن، سرمایه‌گذاری یا همکاری جدی گفتگو کنیم." : "Let's talk about building, investing or serious collaboration."}</h2></div>
          <div className={styles.ctaSide}><p>{fa ? "مسیر تماس برای همکاری محصول، سرمایه‌گذاری، شراکت یا گفت‌وگوی تخصصی." : "A direct path for product collaboration, investment, partnerships or focused conversations."}</p><Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "شروع گفتگو" : "Start a conversation"}</Link><Link href={`/${locale}/resume`} className={styles.textLink}>{fa ? "مسیر حرفه‌ای ↗" : "Professional journey ↗"}</Link></div>
        </div>
      </section>
    </main>
  );
}
