/* eslint-disable @next/next/no-img-element -- Legacy WordPress media can originate from arbitrary external hosts. */
import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { founderCareerProfile } from "@/content/founder/profile";
import { selectedAchievements } from "@/content/founder/achievements";
import { productPortfolio as products } from "@/content/product-portfolio";
import { getLegacyPosts } from "@/lib/legacy-wordpress";
import { formatSiteDate } from "@/lib/locale-format";
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

export default function FounderHome({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const narrative = fa ? founderCareerProfile.narrativeFa : founderCareerProfile.narrativeEn;
  const posts = [...getLegacyPosts()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const latestPosts = posts.slice(0, 3);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.heroKicker}>
              <span>FOUNDER / PRODUCT / AI</span>
              <span className={styles.liveDot}>{fa ? "در حال ساخت" : "Building now"}</span>
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
                ? "بنیان‌گذار و مدیرعامل PrimeSYS؛ با مسیری که از سخت‌افزار و زیرساخت شروع شد و امروز به داده، هوش مصنوعی، محصول و رشد رسیده است."
                : "Founder & CEO at PrimeSYS — a journey from hardware and infrastructure to data, AI, product building and growth."}
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
              <div>
                <strong>{products.length}</strong>
                <span>{fa ? "محصول و پلتفرم" : "Products & platforms"}</span>
              </div>
              <div>
                <strong>1990</strong>
                <span>{fa ? "شروع مسیر فناوری" : "Technology journey began"}</span>
              </div>
              <div>
                <strong>PrimeSYS</strong>
                <span>{fa ? "Founder & CEO" : "Founder & CEO"}</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.portraitFrame}>
              <div className={styles.portraitGlow} />
              <Image
                src="/assets/profile/amir-motefaker.png"
                alt={fa ? founder.nameFa : founder.nameEn}
                width={760}
                height={880}
                priority
              />
              <div className={styles.portraitCaption}>
                <span>{fa ? "امیر متفکر" : "Amir Motefaker"}</span>
                <strong>{fa ? "Founder • Product Builder • Technology" : "Founder • Product Builder • Technology"}</strong>
              </div>
            </div>

            <div className={`${styles.orbitCard} ${styles.orbitCardOne}`}>
              <span>AI</span>
              <small>{fa ? "محصول هوشمند" : "Intelligent products"}</small>
            </div>
            <div className={`${styles.orbitCard} ${styles.orbitCardTwo}`}>
              <span>DATA</span>
              <small>{fa ? "تصمیم داده‌محور" : "Data-led decisions"}</small>
            </div>
            <div className={`${styles.orbitCard} ${styles.orbitCardThree}`}>
              <span>GROWTH</span>
              <small>{fa ? "فناوری + بازار" : "Technology + market"}</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.operatorStrip}>
        <div className={`wrap ${styles.operatorGrid}`}>
          {["AI PRODUCTS", "SOFTWARE", "DATA", "GROWTH"].map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
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
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className={`wrap ${styles.outcomes}`}>
          {selectedAchievements.slice(0, 3).map((item) => (
            <article key={`${item.value}-${item.titleEn}`}>
              <strong>{item.value}</strong>
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
          {products.map((product, index) => (
            <Link
              href={`/${locale}/products/${product.slug}`}
              className={styles.productCard}
              key={product.slug}
            >
              <div className={styles.productCardTop}>
                <span>0{index + 1}</span>
                <small>{product.industry}</small>
              </div>
              <div className={styles.productMark}>
                <strong className="ltr">{product.name}</strong>
              </div>
              <div className={styles.productCardBody}>
                <span>{fa ? product.categoryFa : product.categoryEn}</span>
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
            {vision[locale].map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsSection}>
        <div className={`wrap ${styles.sectionIntro}`}>
          <div>
            <span className={styles.sectionEyebrow}>{fa ? "اخبار فناوری" : "TECHNOLOGY NEWS"}</span>
            <h2>{fa ? "آخرین مطالب از آرشیو فناوری." : "Latest stories from the technology archive."}</h2>
          </div>
          <Link href={`/${locale}/news`} className={styles.textLink}>
            {fa ? "همه اخبار ↗" : "All stories ↗"}
          </Link>
        </div>

        <div className={`wrap ${styles.newsGrid}`}>
          {latestPosts.map((post) => (
            <Link
              href={`/${locale}/news/${encodeURIComponent(post.slug)}`}
              className={styles.newsCard}
              key={post.id}
            >
              <div className={styles.newsCover}>
                {post.featured_image ? (
                  <img src={post.featured_image} alt={post.title} loading="lazy" />
                ) : (
                  <div>AM / TECHNOLOGY</div>
                )}
              </div>
              <div className={styles.newsBody}>
                <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
                <h3>{post.title}</h3>
                <p>{post.excerpt_text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={`wrap ${styles.finalCtaInner}`}>
          <span>{fa ? "محصول • فناوری • همکاری" : "PRODUCT • TECHNOLOGY • COLLABORATION"}</span>
          <h2>{fa ? "اگر قرار است چیزی ساخته شود، از یک گفت‌وگوی خوب شروع کنیم." : "If something should be built, start with a good conversation."}</h2>
          <div>
            <Link href={`/${locale}/contact`} className="btn btn-primary">
              {fa ? "شروع گفتگو" : "Start a conversation"}
            </Link>
            <Link href={`/${locale}/resume`} className="btn btn-ghost">
              {fa ? "مشاهده رزومه" : "View career"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
