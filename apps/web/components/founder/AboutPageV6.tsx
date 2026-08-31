import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { founderCareerProfile } from "@/content/founder/profile";
import { selectedAchievements } from "@/content/founder/achievements";
import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";
import { getProductDisplayName } from "@/content/product-portfolio";
import { localeDigits } from "@/lib/locale-format";
import styles from "./FounderV6.module.css";

const principles = {
  fa: [
    ["سیستم", "سیستم قبل از هیاهو", "محصول خوب باید قابل استفاده، قابل نگهداری و قابل توسعه باشد."],
    ["داده", "داده برای تصمیم", "داده زمانی ارزش دارد که تصمیم را روشن‌تر و اجرا را سریع‌تر کند."],
    ["بازار", "فناوری و بازار", "فناوری بدون شناخت مشتری و بازار، به‌تنهایی محصول نمی‌سازد."],
    ["ساخت", "ساختن مداوم", "ایده با اجرا، اندازه‌گیری و تکرار به محصول واقعی تبدیل می‌شود."],
  ],
  en: [
    ["SYSTEMS", "Systems before hype", "A strong product should be usable, maintainable and extensible."],
    ["DATA", "Data for decisions", "Data matters when it makes decisions clearer and execution faster."],
    ["MARKET", "Technology + market", "Technology alone does not create a product without customers and market context."],
    ["BUILD", "Keep building", "Ideas become real products through execution, measurement and iteration."],
  ],
};

export default function AboutPageV6({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const narrative = fa ? founderCareerProfile.narrativeFa : founderCareerProfile.narrativeEn;

  return (
    <main className={styles.innerPage}>
      <section className={styles.aboutHero}>
        <div className={`wrap ${styles.aboutHeroGrid}`}>
          <div className={styles.aboutCopy}>
            <span>{fa ? "درباره من / داستان مسیر" : "ABOUT / FOUNDER STORY"}</span>
            <h1>{fa ? <>امیر متفکر کیست؟<br />کارآفرین و سازنده محصولات فناوری.</> : <>Who is Amir Motefaker?<br /><span>Entrepreneur and technology product builder.</span></>}</h1>
            <p>{fa ? founderCareerProfile.technologySinceFa : founderCareerProfile.technologySinceEn}</p>
            <div className={styles.aboutActions}>
              <Link href={`/${locale}/resume`} className="btn btn-primary">{fa ? "مسیر حرفه‌ای کامل" : "Full professional journey"}</Link>
              <Link href={`/${locale}/products`} className="btn btn-ghost">{fa ? "محصولات" : "Products"}</Link>
            </div>
          </div>
          <div className={styles.aboutPortrait}>
            <Image src="/assets/profile/amir-motefaker.png" alt={fa ? founder.nameFa : founder.nameEn} width={700} height={760} priority />
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.principles}`}>
        <div className={styles.principlesHead}>
          <span className={styles.sectionEyebrow}>{fa ? "معرفی کوتاه" : "ENTITY SUMMARY"}</span>
          <h2>{fa ? "امیر متفکر؛ بیش از ۳۰ سال در مسیر فناوری و سازنده یک پرتفوی چندصنعتی." : "Amir Motefaker: 30+ years in technology and a multi-industry product portfolio."}</h2>
        </div>
        <div className={styles.aboutNarrative}>
          <article>
            <span>{localeDigits("01", locale)}</span>
            <p>{fa ? "امیر متفکر کارآفرین و سازنده محصولات فناوری است. تمرکز او بر تبدیل مسئله‌های واقعی به محصولات دیجیتال قابل استفاده و توسعه‌پذیر در حوزه‌هایی مانند هوش مصنوعی، فناوری مالی، آموزش، سلامت، گردشگری، رسانه و زیرساخت نرم‌افزار است." : "Amir Motefaker is an entrepreneur and technology product builder focused on turning real problems into usable, extensible digital products across AI, FinTech, education, health, tourism, media and software infrastructure."}</p>
          </article>
          <article>
            <span>{localeDigits("02", locale)}</span>
            <p>{fa ? "پرتفوی رسمی او شامل ۱۱ محصول مستقل است: رستیار، پرایم سیستم، لینک رسان، فارسیو، فهمیو، زبدینو، ایده جو، تسوین، وایران، دارمیک و فیلم ترک. هر محصول صفحه اختصاصی و مسیر توسعه مستقل دارد." : "His official portfolio includes 11 independent products: RestYar, PrimeSYS, LinkResan, Farsio, Fahmio, Zobdino, IdehJo, Tasvin, Vayran, Darmic and FilmTrack. Each product has its own dedicated page and development path."}</p>
          </article>
          <article>
            <span>{localeDigits("03", locale)}</span>
            <p>{fa ? "این وب‌سایت مرجع رسمی برای معرفی امیر متفکر، مسیر حرفه‌ای، دیدگاه‌ها، محصولات و شواهد فعالیت اوست و اطلاعات هر محصول از صفحه اختصاصی همان محصول قابل بررسی است." : "This website is the official reference for Amir Motefaker's profile, professional journey, views, products and evidence of work, with dedicated pages for each product."}</p>
          </article>
        </div>
      </section>

      <section className={`wrap ${styles.principles}`}>
        <div className={styles.principlesHead}>
          <span className={styles.sectionEyebrow}>{fa ? "پرتفوی رسمی" : "OFFICIAL PORTFOLIO"}</span>
          <h2>{fa ? "۱۱ محصول مستقل در بیش از ۱۰ حوزه فناوری." : "11 independent products across 10+ technology sectors."}</h2>
        </div>
        <div className={styles.principlesGrid}>
          {canonicalProductPortfolio.map((product) => (
            <article key={product.slug}>
              <strong>{getProductDisplayName(product, locale)}</strong>
              <h3>{fa ? product.shortDescriptionFa : product.shortDescriptionEn}</h3>
              <p><Link href={`/${locale}/products/${product.slug}`}>{fa ? "صفحه اختصاصی محصول" : "Product profile"}</Link></p>
            </article>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.aboutNarrative}`}>
        {narrative.map((paragraph, index) => (
          <article key={paragraph}><span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span><p>{paragraph}</p></article>
        ))}
      </section>

      <section className={`wrap ${styles.principles}`}>
        <div className={styles.principlesHead}>
          <span className={styles.sectionEyebrow}>{fa ? "شیوه کار" : "HOW I THINK"}</span>
          <h2>{fa ? "محصول، داده، بازار و اجرا باید کنار هم باشند." : "Product, data, market and execution belong together."}</h2>
        </div>
        <div className={styles.principlesGrid}>
          {principles[locale].map(([tag, title, description]) => (
            <article key={tag}><strong>{tag}</strong><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.outcomes}`}>
        {selectedAchievements.slice(0, 3).map((item) => (
          <article key={`${item.value}-${item.titleEn}`}><strong>{localeDigits(item.value, locale)}</strong><div><h3>{fa ? item.titleFa : item.titleEn}</h3><p>{fa ? item.detailFa : item.detailEn}</p></div></article>
        ))}
      </section>

      <section className={`wrap ${styles.finalCta}`} style={{ paddingBottom: 0 }}>
        <div className={styles.finalCtaInner}>
          <span>{fa ? "مسیر بعدی" : "WHAT'S NEXT"}</span>
          <h2>{fa ? "ساختن، یاد گرفتن و وصل کردن فناوری به مسئله‌های واقعی." : "Build, learn and connect technology to real problems."}</h2>
          <div>
            <Link href={`/${locale}/contact`} className="btn btn-primary">{fa ? "در ارتباط باشیم" : "Let's connect"}</Link>
            <Link href={`/${locale}/resume`} className="btn btn-ghost">{fa ? "مسیر حرفه‌ای کامل" : "Full career"}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
