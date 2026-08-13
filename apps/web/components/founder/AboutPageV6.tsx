import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { founderCareerProfile } from "@/content/founder/profile";
import { selectedAchievements } from "@/content/founder/achievements";
import { localeDigits } from "@/lib/locale-format";
import styles from "./FounderV6.module.css";

const principles = {
  fa: [
    ["SYSTEMS", "سیستم قبل از هیاهو", "محصول خوب باید قابل استفاده، قابل نگهداری و قابل توسعه باشد."],
    ["DATA", "داده برای تصمیم", "داده زمانی ارزش دارد که تصمیم را روشن‌تر و اجرا را سریع‌تر کند."],
    ["MARKET", "فناوری + بازار", "فناوری بدون شناخت مشتری و بازار، به‌تنهایی محصول نمی‌سازد."],
    ["BUILD", "ساختن مداوم", "ایده با اجرا، اندازه‌گیری و تکرار به محصول واقعی تبدیل می‌شود."],
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
            <span>ABOUT / FOUNDER STORY</span>
            <h1>
              {fa ? (
                <>
                  از <span>DOS</span> تا ساخت
                  <br />
                  محصولات <span>AI</span>.
                </>
              ) : (
                <>
                  From <span>DOS</span> to building
                  <br />
                  <span>AI products.</span>
                </>
              )}
            </h1>
            <p>{fa ? founderCareerProfile.technologySinceFa : founderCareerProfile.technologySinceEn}</p>
            <div className={styles.aboutActions}>
              <Link href={`/${locale}/resume`} className="btn btn-primary">
                {fa ? "مسیر حرفه‌ای کامل" : "Full professional journey"}
              </Link>
              <Link href={`/${locale}/products`} className="btn btn-ghost">
                {fa ? "محصولات" : "Products"}
              </Link>
            </div>
          </div>

          <div className={styles.aboutPortrait}>
            <Image
              src="/assets/profile/amir-motefaker.png"
              alt={fa ? founder.nameFa : founder.nameEn}
              width={700}
              height={760}
              priority
            />
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.aboutNarrative}`}>
        {narrative.map((paragraph, index) => (
          <article key={paragraph}>
            <span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span>
            <p>{paragraph}</p>
          </article>
        ))}
      </section>

      <section className={`wrap ${styles.principles}`}>
        <div className={styles.principlesHead}>
          <span className={styles.sectionEyebrow}>{fa ? "شیوه کار" : "HOW I THINK"}</span>
          <h2>{fa ? "محصول، داده، بازار و اجرا باید کنار هم باشند." : "Product, data, market and execution belong together."}</h2>
        </div>

        <div className={styles.principlesGrid}>
          {principles[locale].map(([tag, title, description]) => (
            <article key={tag}>
              <strong>{tag}</strong>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.outcomes}`}>
        {selectedAchievements.slice(0, 3).map((item) => (
          <article key={`${item.value}-${item.titleEn}`}>
            <strong>{localeDigits(item.value, locale)}</strong>
            <div>
              <h3>{fa ? item.titleFa : item.titleEn}</h3>
              <p>{fa ? item.detailFa : item.detailEn}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={`wrap ${styles.finalCta}`} style={{ paddingBottom: 0 }}>
        <div className={styles.finalCtaInner}>
          <span>{fa ? "مسیر بعدی" : "WHAT'S NEXT"}</span>
          <h2>{fa ? "ساختن، یاد گرفتن و وصل کردن فناوری به مسئله‌های واقعی." : "Build, learn and connect technology to real problems."}</h2>
          <div>
            <Link href={`/${locale}/contact`} className="btn btn-primary">
              {fa ? "در ارتباط باشیم" : "Let's connect"}
            </Link>
            <Link href={`/${locale}/resume`} className="btn btn-ghost">
              {fa ? "رزومه کامل" : "Full career"}
            </Link>
          </div>
        </div>
      </section>
</main>
  );
}
