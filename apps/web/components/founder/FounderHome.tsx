import Link from "next/link";
import type { Locale } from "@/content/founder-site";
import { founderCareerProfile } from "@/content/founder/profile";
import { selectedAchievements } from "@/content/founder/achievements";
import { getProductCategory, getProductIndustry, productPortfolio as products } from "@/content/product-portfolio";
import { getLegacyPosts } from "@/lib/legacy-wordpress";
import { formatSiteDate, formatSiteNumber, localeDigits } from "@/lib/locale-format";
import styles from "./FounderV6.module.css";

const vision = {
  fa: [
    ["01", "هوش مصنوعی", "ساخت ابزارها و محصولات AI که به مسئله واقعی کاربر و کسب‌وکار متصل باشند."],
    ["02", "مهندسی نرم‌افزار", "طراحی پلتفرم‌های قابل توسعه؛ از تجربه کاربری تا معماری و عملیات."],
    ["03", "تحول دیجیتال", "اتصال فرایند، داده، محصول و فروش برای ساخت سیستم‌هایی که واقعاً استفاده می‌شوند."],
    ["04", "اتوماسیون", "حذف کار تکراری، افزایش سرعت تصمیم‌گیری و ساخت جریان‌های کاری هوشمند."],
  ],
  en: [
    ["01", "Artificial Intelligence", "Building AI products around real user and business problems."],
    ["02", "Software Engineering", "Designing scalable platforms from product experience to architecture and operations."],
    ["03", "Digital Transformation", "Connecting process, data, product and sales into systems people actually use."],
    ["04", "Automation", "Removing repetitive work and creating faster, smarter operating flows."],
  ],
};

const preferredProductOrder = [
  "restyar",
  "primesys",
  "linkresan",
  "farsio",
  "idehjo",
  "fahmio",
  "filmtrack",
  "shiftpay",
] as const;

const productNameMap = {
  restyar: { fa: "رستیار", en: "RestYar" },
  primesys: { fa: "پرایم سیستم", en: "PrimeSYS" },
  linkresan: { fa: "لینک رسان", en: "LinkResan" },
  farsio: { fa: "فارسیو", en: "Farsio" },
  idehjo: { fa: "ایده جو", en: "IdeaJoo" },
  fahmio: { fa: "فهمیو", en: "Fahmio" },
  filmtrack: { fa: "فیلم ترک", en: "FilmTark" },
  shiftpay: { fa: "شیفت پی", en: "ShiftPay" },
} as const;

const preferredOrderMap = new Map(
  preferredProductOrder.map((slug, index) => [slug, index] as const),
);

function normalizeKey(value: string | undefined | null) {
  return (value ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function getOrderRank(product: { slug: string; name: string }) {
  const slugKey = normalizeKey(product.slug);
  const nameKey = normalizeKey(product.name);
  return preferredOrderMap.get(slugKey as keyof typeof productNameMap)
    ?? preferredOrderMap.get(nameKey as keyof typeof productNameMap)
    ?? Number.MAX_SAFE_INTEGER;
}

function getProductLabel(
  product: { slug: string; name: string; nameFa?: string; nameEn?: string },
  locale: Locale,
) {
  const key = normalizeKey(product.slug || product.name);
  const mapped = productNameMap[key as keyof typeof productNameMap];

  if (locale === "fa") {
    return mapped?.fa ?? product.nameFa ?? product.name;
  }

  return mapped?.en ?? product.nameEn ?? product.name;
}

function formatOrdinal(index: number, locale: Locale) {
  return localeDigits(String(index + 1).padStart(2, "0"), locale);
}

export default function FounderHome({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const narrative = fa ? founderCareerProfile.narrativeFa : founderCareerProfile.narrativeEn;
  const posts = [...getLegacyPosts()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const latestPosts = posts.slice(0, 3);
  const orderedProducts = [...products].sort(
    (a, b) => getOrderRank(a) - getOrderRank(b) || a.name.localeCompare(b.name),
  );
  const featuredProducts = orderedProducts.slice(0, 8);

  const heroMetrics = fa
    ? [
        { value: formatSiteNumber(featuredProducts.length, locale), label: "محصول منتخب" },
        { value: formatSiteNumber(posts.length, locale), label: "خبر فناوری" },
        { value: "۳۰+", label: "سال سابقه فعالیت در حوزه فناوری" },
        { value: "۱۳۷۰", label: "شروع مسیر فناوری" },
        { value: "PrimeSYS", label: "Founder & CEO" },
      ]
    : [
        { value: formatSiteNumber(featuredProducts.length, locale), label: "Featured products" },
        { value: formatSiteNumber(posts.length, locale), label: "Technology news posts" },
        { value: "30+", label: "Years in technology" },
        { value: "1990", label: "Technology journey began" },
        { value: "PrimeSYS", label: "Founder & CEO" },
      ];

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.heroKicker}>
              <span>FOUNDER / PRODUCT / TECHNOLOGY</span>
              <span className={styles.liveDot}>{fa ? "محصول / پلتفرم / AI" : "PRODUCTS / PLATFORMS / AI"}</span>
            </div>

            <h1>
              {fa ? (
                <>
                  فناوری را به
                  <span> محصول</span>
                  <br />
                  و محصول را به
                  <span> اکوسیستم</span>
                  <br />
                  تبدیل می‌کنم.
                </>
              ) : (
                <>
                  I turn technology into
                  <span> products</span>
                  <br />
                  and products into
                  <span> ecosystems.</span>
                </>
              )}
            </h1>

            <p className={styles.heroLead}>
              {fa
                ? "بنیان‌گذار و مدیرعامل PrimeSYS؛ با بیش از سه دهه تجربه در فناوری، ساخت محصول، توسعه پلتفرم و طراحی راه‌حل‌های مبتنی بر داده و هوش مصنوعی."
                : "Founder & CEO at PrimeSYS — with more than three decades across technology, product building, platforms, data and AI-driven solutions."}
            </p>

            <div className={styles.heroActions}>
              <Link href={`/${locale}/products`} className="btn btn-primary">
                {fa ? "مشاهده اکوسیستم محصولات" : "Explore the product ecosystem"}
              </Link>
              <Link href={`/${locale}/about`} className="btn btn-ghost">
                {fa ? "داستان من" : "My story"}
              </Link>
              <Link href={`/${locale}/resume`} className={styles.textLink}>
                {fa ? "مسیر حرفه‌ای ↗" : "Professional journey ↗"}
              </Link>
            </div>

            <div className={styles.heroSignals}>
              {heroMetrics.map((item) => (
                <div key={`${item.value}-${item.label}`}>
                  <strong>{localeDigits(item.value, locale)}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.productMatrix}>
              <div className={styles.matrixGlow} />
              <div className={styles.matrixCore}>
                <span>{fa ? "اکوسیستم محصولات" : "PRODUCT ECOSYSTEM"}</span>
                <strong>{fa ? "۸ محصول" : "8 Products"}</strong>
                <small>
                  {fa
                    ? "محصولات مستقل با یک نگاه مشترک به فناوری، بازار و رشد."
                    : "Independent products shaped by one technology, market and growth mindset."}
                </small>
              </div>

              <div className={styles.matrixRing}>
                {featuredProducts.map((product, index) => (
                  <div
                    key={product.slug}
                    className={`${styles.matrixNode} ${styles[`matrixNode${index + 1}`] ?? ""}`}
                  >
                    <strong>{getProductLabel(product, locale)}</strong>
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
            ? ["محصول", "پلتفرم", "هوش مصنوعی", "اتوماسیون", "رشد"]
            : ["PRODUCT", "PLATFORM", "AI", "AUTOMATION", "GROWTH"]).map((item, index) => (
            <div key={item}>
              <span>{formatOrdinal(index, locale)}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.storySection} id="expertise">
        <div className={`wrap ${styles.sectionIntro}`}>
          <div>
            <span className={styles.sectionEyebrow}>{fa ? "مسیر ساختن" : "THE BUILDER JOURNEY"}</span>
            <h2>{fa ? "از DOS و سخت‌افزار تا AI و محصول." : "From DOS and hardware to AI and products."}</h2>
          </div>
          <p>{fa ? founderCareerProfile.technologySinceFa : founderCareerProfile.technologySinceEn}</p>
        </div>

        <div className={`wrap ${styles.storyGrid}`}>
          {narrative.map((item, index) => (
            <article key={item} className={styles.storyCard}>
              <span>{formatOrdinal(index, locale)}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className={`wrap ${styles.outcomes}`}>
          {selectedAchievements.slice(0, 4).map((item) => (
            <article key={`${item.value}-${item.titleEn}`}>
              <strong>{localeDigits(item.value, locale)}</strong>
              <div>
                <h3>{fa ? item.titleFa : item.titleEn}</h3>
                <p>{fa ? item.detailFa : item.detailEn}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={`wrap ${styles.sectionIntro}`}>
          <div>
            <span className={styles.sectionEyebrow}>{fa ? "اکوسیستم محصولات" : "PRODUCT ECOSYSTEM"}</span>
            <h2>{fa ? "محصولات مستقل؛ یک نگاه مشترک به فناوری." : "Independent products. One technology mindset."}</h2>
          </div>
          <Link href={`/${locale}/products`} className={styles.textLink}>
            {fa ? "مشاهده همه محصولات ↗" : "View all products ↗"}
          </Link>
        </div>

        <div className={`wrap ${styles.productGrid}`}>
          {featuredProducts.map((product, index) => (
            <Link
              href={`/${locale}/products/${product.slug}`}
              className={styles.productCard}
              key={product.slug}
            >
              <div className={styles.productCardTop}>
                <span>{formatSiteNumber(index + 1, locale)}</span>
                <small>{getProductIndustry(product, locale)}</small>
              </div>
              <div className={styles.productMark}>
                <strong>{getProductLabel(product, locale)}</strong>
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

      <section className={styles.visionSection}>
        <div className={`wrap ${styles.visionShell}`}>
          <div className={styles.visionHeading}>
            <span className={styles.sectionEyebrow}>{fa ? "چشم‌انداز فناوری" : "TECHNOLOGY VISION"}</span>
            <h2>
              {fa
                ? "فناوری زمانی مهم است که پیچیدگی را کم کند و توان ساختن را بیشتر."
                : "Technology matters when it reduces complexity and increases the ability to build."}
            </h2>
          </div>

          <div className={styles.visionGrid}>
            {vision[locale].map(([index, title, detail]) => (
              <article key={title}>
                <span>{localeDigits(index, locale)}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsSection}>
        <div className={`wrap ${styles.sectionIntro}`}>
          <div>
            <span className={styles.sectionEyebrow}>{fa ? "اخبار فناوری" : "TECH NEWS"}</span>
            <h2>{fa ? "آخرین نوشته‌ها و خبرهای حوزه فناوری." : "Latest articles and technology updates."}</h2>
          </div>
          <Link href={`/${locale}/news`} className={styles.textLink}>
            {fa ? "رفتن به همه خبرها ↗" : "Browse all news ↗"}
          </Link>
        </div>

        <div className={`wrap ${styles.newsGrid}`}>
          {latestPosts.map((post) => (
            <article key={post.slug} className={styles.newsCard}>
              <div className={styles.newsCardTop}>
                <span>{fa ? "خبر فناوری" : "Tech post"}</span>
                <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt_text}</p>
              <Link href={`/${locale}/news/${post.slug}`} className={styles.textLink}>
                {fa ? "ادامه مطلب ↗" : "Read more ↗"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`wrap ${styles.ctaPanel}`}>
          <div>
            <span className={styles.sectionEyebrow}>{fa ? "همکاری" : "LET'S BUILD"}</span>
            <h2>{fa ? "اگر روی مسئله واقعی کار می‌کنید، گفت‌وگو را شروع کنیم." : "If you are working on a real problem, let's start the conversation."}</h2>
            <p>
              {fa
                ? "از ساخت محصول و طراحی پلتفرم تا توسعه اکوسیستم و راه‌حل‌های AI، برای همکاری و مشاوره در تماس باشید."
                : "From product strategy and platform design to ecosystem building and AI-enabled solutions — reach out for collaboration and advisory work."}
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link href={`/${locale}/contact`} className="btn btn-primary">
              {fa ? "تماس و همکاری" : "Contact & collaboration"}
            </Link>
            <Link href={`/${locale}/products`} className="btn btn-ghost">
              {fa ? "مرور محصولات" : "Review products"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
