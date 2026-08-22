import Link from "next/link";
import type { Locale } from "@/content/founder-site";
import { getVerifiedEvidence } from "@/content/evidence-registry";
import {
  getProductCategory,
  getProductDisplayName,
  getProductIndustry,
  productPortfolio as products,
} from "@/content/product-portfolio";
import { formatSiteNumber, localeDigits } from "@/lib/locale-format";
import styles from "./FounderV6.module.css";

const thesisPrinciples = {
  fa: [
    ["01", "مسئله قبل از تکنولوژی", "ابتدا مسئله و رفتار واقعی کاربر را می‌فهمیم."],
    ["02", "محصول قبل از نمایش", "قابلیت واقعی مهم‌تر از ادعای بزرگ است."],
    ["03", "سیستم قبل از ویژگی", "محصول باید بتواند رشد کند، یاد بگیرد و به اکوسیستم متصل شود."],
  ],
  en: [
    ["01", "Problem before technology", "Understand the real user problem and behavior first."],
    ["02", "Product before presentation", "Working capability matters more than oversized claims."],
    ["03", "Systems before features", "Products should be able to grow, learn and connect into a broader ecosystem."],
  ],
} as const;

function formatOrdinal(index: number, locale: Locale) {
  return localeDigits(String(index + 1).padStart(2, "0"), locale);
}

export default function FounderHome({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const featuredProducts = products;
  const evidence = getVerifiedEvidence();

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.heroKicker}>
              <span>{fa ? "بنیان‌گذار / محصول / فناوری" : "FOUNDER / PRODUCT / TECHNOLOGY"}</span>
              <span className={styles.liveDot}>{fa ? "ساخت محصول" : "BUILDING PRODUCTS"}</span>
            </div>

            <h1>
              {fa ? (
                <>
                  فناوری را به <span>محصول</span>،
                  <br />
                  و محصول را به یک <span>پرتفوی قابل ساخت</span>
                  <br />
                  تبدیل می‌کنم.
                </>
              ) : (
                <>
                  I turn technology into <span>products</span>
                  <br />
                  — and products into a <span>portfolio built to compound.</span>
                </>
              )}
            </h1>

            <p className={styles.heroLead}>
              {fa
                ? "من امیر متفکر هستم؛ کارآفرین و سازنده محصولات فناوری. تمرکز من روی ساخت محصولاتی است که هوش مصنوعی، نرم‌افزار و داده را به مسئله‌های واقعی کاربران و کسب‌وکارها متصل می‌کنند."
                : "I'm Amir Motefaker, an entrepreneur and technology product builder. I focus on products that connect AI, software and data to real problems for people and businesses."}
            </p>

            <div className={styles.heroActions}>
              <Link href={`/${locale}/products`} className="btn btn-primary">
                {fa ? "مشاهده محصولات" : "Explore products"}
              </Link>
              <Link href={`/${locale}/thesis`} className="btn btn-ghost">
                {fa ? "نگاه من به ساخت محصول" : "Read my product thesis"}
              </Link>
              <Link href={`/${locale}/about`} className={styles.textLink}>
                {fa ? "درباره امیر ↗" : "About Amir ↗"}
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.productMatrix}>
              <div className={styles.matrixGlow} />
              <div className={styles.matrixCore}>
                <span>{fa ? "پرتفوی محصولات" : "PRODUCT PORTFOLIO"}</span>
                <strong>
                  {formatSiteNumber(featuredProducts.length, locale)} {fa ? "محصول فعال" : "active products"}
                </strong>
                <small>
                  {fa
                    ? "محصولات مستقل؛ یک منطق مشترک برای ساختن."
                    : "Independent products. A shared logic for building."}
                </small>
              </div>

              <div className={styles.matrixRing}>
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.slug}
                    className={`${styles.matrixNode} ${styles[`matrixNode${index + 1}`] ?? ""}`}
                  >
                    <strong>{getProductDisplayName(product, locale)}</strong>
                    <span>{getProductCategory(product, locale)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.operatorStrip}>
        <div className={`wrap ${styles.operatorGrid}`}>
          {(fa
            ? ["مسئله", "محصول", "هوش مصنوعی", "سیستم", "رشد"]
            : ["PROBLEM", "PRODUCT", "AI", "SYSTEMS", "GROWTH"]).map((item, index) => (
            <div key={item}>
              <span>{formatOrdinal(index, locale)}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.visionSection}>
        <div className={`wrap ${styles.visionShell}`}>
          <div className={styles.visionHeading}>
            <span className={styles.sectionEyebrow}>{fa ? "نگاه من به ساخت محصول" : "PRODUCT THESIS"}</span>
            <h2>
              {fa
                ? "محصول خوب از فناوری شروع نمی‌شود؛ از یک مسئله واقعی شروع می‌شود."
                : "Good products don't start with technology. They start with a real problem."}
            </h2>
            <p>
              {fa
                ? "در پروژه‌هایی که می‌سازم، فناوری زمانی ارزشمند است که اصطکاک را کم کند، تصمیم‌گیری را بهتر کند یا یک تجربه پیچیده را ساده‌تر سازد. هوش مصنوعی برای من یک برچسب بازاریابی نیست؛ یکی از ابزارهای ساختن محصول بهتر است."
                : "Across the products I build, technology matters when it reduces friction, improves decisions or makes a complex experience simpler. AI is not the proposition by itself; it is one of the tools for building a better product."}
            </p>
          </div>

          <div className={styles.visionGrid}>
            {thesisPrinciples[locale].map(([index, title, detail]) => (
              <article key={title}>
                <span>{localeDigits(index, locale)}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>

          <Link href={`/${locale}/thesis`} className={styles.textLink}>
            {fa ? "مطالعه کامل Thesis ↗" : "Read the full thesis ↗"}
          </Link>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={`wrap ${styles.sectionIntro}`}>
          <div>
            <span className={styles.sectionEyebrow}>{fa ? "پرتفوی محصولات" : "PRODUCT PORTFOLIO"}</span>
            <h2>{fa ? "محصولات مستقل؛ یک منطق مشترک برای ساختن." : "Independent products. A shared logic for building."}</h2>
          </div>
          <Link href={`/${locale}/products`} className={styles.textLink}>
            {fa ? "مشاهده کل پرتفوی ↗" : "Explore the portfolio ↗"}
          </Link>
        </div>

        <div className={`wrap ${styles.productGrid}`}>
          {featuredProducts.map((product, index) => (
            <Link href={`/${locale}/products/${product.slug}`} className={styles.productCard} key={product.slug}>
              <div className={styles.productCardTop}>
                <span>{formatSiteNumber(index + 1, locale)}</span>
                <small>{getProductIndustry(product, locale)}</small>
              </div>
              <div className={styles.productMark}>
                <strong>{getProductDisplayName(product, locale)}</strong>
              </div>
              <div className={styles.productCardBody}>
                <span>{getProductCategory(product, locale)}</span>
                <p>{fa ? product.shortDescriptionFa : product.shortDescriptionEn}</p>
              </div>
              <div className={styles.productCardFoot}>
                <span className="ltr">{product.domain}</span>
                <span>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {evidence.length > 0 ? (
        <section className={styles.storySection}>
          <div className={`wrap ${styles.sectionIntro}`}>
            <div>
              <span className={styles.sectionEyebrow}>{fa ? "شواهد ساختن" : "BUILDING EVIDENCE"}</span>
              <h2>{fa ? "پرتفوی باید با چیزی بیشتر از ادعا توضیح داده شود." : "A portfolio should be explained by more than claims."}</h2>
            </div>
            <p>
              {fa
                ? "این بخش فقط شواهد تأییدشده‌ای را نشان می‌دهد که در Evidence Registry ثبت شده‌اند."
                : "This section only shows verified proof registered in the Evidence Registry."}
            </p>
          </div>

          <div className={`wrap ${styles.storyGrid}`}>
            {evidence.slice(0, 4).map((item, index) => (
              <article key={item.id} className={styles.storyCard}>
                <span>{formatOrdinal(index, locale)}</span>
                <p>{fa ? item.titleFa : item.titleEn}</p>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                    {fa ? "مشاهده مدرک ↗" : "View evidence ↗"}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className={styles.newsSection}>
        <div className={`wrap ${styles.sectionIntro}`}>
          <div>
            <span className={styles.sectionEyebrow}>{fa ? "یادداشت‌ها" : "NOTES"}</span>
            <h2>{fa ? "تصمیم‌ها، آزمایش‌ها و چیزهایی که در مسیر ساختن یاد می‌گیرم." : "Decisions, experiments and lessons from building."}</h2>
          </div>
          <Link href={`/${locale}/notes`} className={styles.textLink}>
            {fa ? "مشاهده یادداشت‌ها ↗" : "Read the notes ↗"}
          </Link>
        </div>

        <div className={`wrap ${styles.newsGrid}`}>
          <article className={styles.newsCard}>
            <div className={styles.newsCardTop}><span>{fa ? "محصول" : "PRODUCT"}</span></div>
            <h3>{fa ? "تصمیم‌های محصول" : "Product decisions"}</h3>
            <p>{fa ? "چرا یک قابلیت ساخته، حذف یا بازطراحی شد." : "Why a capability was built, removed or redesigned."}</p>
          </article>
          <article className={styles.newsCard}>
            <div className={styles.newsCardTop}><span>{fa ? "فناوری" : "TECHNOLOGY"}</span></div>
            <h3>{fa ? "یادداشت‌های میدانی AI" : "AI field notes"}</h3>
            <p>{fa ? "آنچه از استفاده واقعی هوش مصنوعی در محصول یاد می‌گیریم." : "What real product use teaches us about AI."}</p>
          </article>
          <article className={styles.newsCard}>
            <div className={styles.newsCardTop}><span>{fa ? "بازار" : "MARKET"}</span></div>
            <h3>{fa ? "مشاهده و آزمایش" : "Observations and experiments"}</h3>
            <p>{fa ? "فرضیه‌هایی که با بازار، کاربر و داده سنجیده می‌شوند." : "Hypotheses tested against markets, users and data."}</p>
          </article>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={`wrap ${styles.sectionIntro}`}>
          <div>
            <span className={styles.sectionEyebrow}>{fa ? "درباره امیر" : "ABOUT AMIR"}</span>
            <h2>{fa ? "مسیر من با ساختن گره خورده است." : "My path has always been tied to building."}</h2>
          </div>
          <p>
            {fa
              ? "از تجربه‌های اولیه در فناوری تا ساخت محصولات و کسب‌وکارهای امروز، تمرکز من روی تبدیل مسئله‌های واقعی به سیستم‌ها و محصولاتی بوده که بتوانند استفاده شوند، رشد کنند و بهتر شوند."
              : "From early work in technology to building today's products and businesses, my focus has been turning real problems into systems and products that can be used, improved and scaled."}
          </p>
        </div>
        <div className={`wrap ${styles.heroActions}`}>
          <Link href={`/${locale}/about`} className="btn btn-ghost">{fa ? "داستان من" : "My story"}</Link>
          <Link href={`/${locale}/resume`} className={styles.textLink}>{fa ? "مسیر حرفه‌ای ↗" : "Professional journey ↗"}</Link>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`wrap ${styles.ctaPanel}`}>
          <div>
            <span className={styles.sectionEyebrow}>{fa ? "گفت‌وگو" : "START A CONVERSATION"}</span>
            <h2>{fa ? "اگر یک مسئله واقعی برای ساختن دارید، مسیر درست گفت‌وگو را انتخاب کنید." : "If you have a real problem worth building around, choose the right conversation."}</h2>
            <p>
              {fa
                ? "برای همکاری محصول، شراکت، گفت‌وگوی راهبردی، موضوعات تجاری یا رسانه‌ای، از مسیر مرتبط وارد شوید تا گفتگو از همان ابتدا زمینه مشخصی داشته باشد."
                : "For product collaboration, partnerships, strategic conversations, commercial inquiries or media, use the relevant route so the context is clear from the start."}
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "شروع گفتگو" : "Start a conversation"}</Link>
            <Link href={`/${locale}/products`} className="btn btn-ghost">{fa ? "مرور محصولات" : "Review products"}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
