import Link from "next/link";
import LegacyPageContent from "@/components/founder/LegacyPageContent";
import {
  certifications,
  education,
  founderCareerProfile,
  historicalMilestones,
  historicalResumeExperience,
  primaryExperience,
  professionalLicenses,
  salesRepresentations,
  selectedAchievements,
} from "@/content/founder";
import type { Locale } from "@/content/founder-site";
import { localeDigits } from "@/lib/locale-format";
import styles from "./CareerPage.module.css";

function localized(locale: Locale, value: { fa: string; en: string }) {
  return locale === "fa" ? value.fa : value.en;
}

function formatCount(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US").format(value);
}

const skillsFa = [
  "راهبرد محصول",
  "معماری سیستم",
  "هوش مصنوعی",
  "تحلیل داده",
  "توسعه کسب‌وکار",
  "فروش سازمانی",
  "تجربه کاربری",
  "مدیریت محصول",
  "زیرساخت فناوری",
  "تفکر سیستمی",
];

export default function CareerPage({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const verifiedRecords = primaryExperience.length + historicalResumeExperience.length + salesRepresentations.length + historicalMilestones.length;

  return (
    <main className={styles.page}>
      <section className={`wrap ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>{fa ? "مسیر حرفه‌ای" : "PROFESSIONAL JOURNEY"}</span>
          <h1>{fa ? "از زیرساخت فناوری تا فروش، داده، هوش مصنوعی و ساخت محصول" : "From technology infrastructure to sales, data, AI and product building"}</h1>
          <p className={styles.lead}>{fa ? founderCareerProfile.technologySinceFa : founderCareerProfile.technologySinceEn}</p>
          <p className={styles.headline}>{fa ? founderCareerProfile.headlineFa : founderCareerProfile.headlineEn}</p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href={`/${locale}/contact`}>{fa ? "گفت‌وگو برای همکاری" : "Start a conversation"}</Link>
            <Link className={styles.secondaryAction} href={`/${locale}/about`}>{fa ? "داستان من" : "My story"}</Link>
          </div>
        </div>

        <div className={styles.metrics} aria-label={fa ? "خلاصه مسیر حرفه‌ای" : "Career summary"}>
          <article><strong>{fa ? "۳۰+" : "30+"}</strong><span>{fa ? "سال همراهی با فناوری" : "Years in technology"}</span></article>
          <article><strong>{formatCount(verifiedRecords, locale)}+</strong><span>{fa ? "سابقه و شاهد ثبت‌شده" : "Recorded roles and evidence"}</span></article>
          <article><strong>{formatCount(certifications.length, locale)}</strong><span>{fa ? "گواهی و دوره ثبت‌شده" : "Recorded certificates and courses"}</span></article>
          <article><strong>{formatCount(professionalLicenses.length, locale)}</strong><span>{fa ? "مجوز و صلاحیت حرفه‌ای" : "Professional licenses / qualifications"}</span></article>
        </div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <div className={styles.sectionHead}>
          <span>{fa ? "پروفایل" : "PROFILE"}</span>
          <h2>{fa ? "ترکیب فناوری، فروش و تفکر سیستمی" : "Technology, sales and systems thinking"}</h2>
        </div>
        <div className={styles.narrativeGrid}>
          {(fa ? founderCareerProfile.narrativeFa : founderCareerProfile.narrativeEn).map((paragraph, index) => (
            <article key={paragraph} className={styles.narrativeCard}>
              <span>{localeDigits(String(index + 1).padStart(2, "0"), locale)}</span>
              <p>{paragraph}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <div className={styles.sectionHead}>
          <span>{fa ? "تجربه" : "EXPERIENCE"}</span>
          <h2>{fa ? "خط زمانی اصلی تجربه‌های حرفه‌ای" : "Primary timeline from the current professional record"}</h2>
          <p>{fa ? "نقش‌های جدید و هم‌پوشان بر اساس سوابق حرفه‌ای فعلی نمایش داده می‌شوند؛ سوابق قدیمی‌تر رزومه در آرشیو جداگانه پایین صفحه حفظ شده‌اند." : "Current and overlapping roles use the latest professional record. Resume-only historical records are preserved separately below rather than silently reconciled."}</p>
        </div>

        <div className={styles.timeline}>
          {primaryExperience.map((item) => (
            <article className={styles.timelineCard} key={item.id}>
              <div className={styles.timelineMeta}><span>{localized(locale, item.period)}</span><small>{localized(locale, item.location)}</small></div>
              <div className={styles.timelineBody}>
                <h3>{localized(locale, item.company)}</h3>
                <strong>{localized(locale, item.role)}</strong>
                <p>{localized(locale, item.summary)}</p>
                {item.responsibilities?.length ? <div className={styles.detailBlock}><h4>{fa ? "مسئولیت‌ها" : "Responsibilities"}</h4><ul>{item.responsibilities.map((entry) => <li key={entry.en}>{localized(locale, entry)}</li>)}</ul></div> : null}
                {item.achievements?.length ? <div className={styles.detailBlock}><h4>{fa ? "دستاوردهای ثبت‌شده" : "Recorded achievements"}</h4><ul>{item.achievements.map((entry) => <li key={entry.en}>{localized(locale, entry)}</li>)}</ul></div> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <div className={styles.sectionHead}><span>{fa ? "دستاوردها" : "IMPACT"}</span><h2>{fa ? "چند شاخص قابل استناد از تجربه‌های کاری" : "Selected source-backed outcomes"}</h2></div>
        <div className={styles.achievementGrid}>
          {selectedAchievements.map((item) => (
            <article key={`${item.value}-${item.titleEn}`} className={styles.achievementCard}>
              <strong>{fa ? localeDigits(item.value, locale) : item.value}</strong>
              <h3>{fa ? item.titleFa : item.titleEn}</h3>
              <p>{fa ? item.detailFa : item.detailEn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <div className={styles.twoColumn}>
          <div>
            <div className={styles.sectionHead}><span>{fa ? "تحصیلات" : "EDUCATION"}</span><h2>{fa ? "پایه دانشگاهی و مهندسی" : "Academic foundation"}</h2></div>
            <div className={styles.stack}>{education.map((item) => <article className={styles.compactCard} key={item.id}><h3>{fa ? item.degreeFa : item.degreeEn}</h3><p>{fa ? item.institutionFa : item.institutionEn}</p><small>{fa ? item.periodFa : item.periodEn}</small></article>)}</div>
          </div>
          <div>
            <div className={styles.sectionHead}><span>{fa ? "مهارت و زبان" : "SKILLS & LANGUAGES"}</span><h2>{fa ? "توانمندی‌های محوری" : "Core capabilities"}</h2></div>
            <div className={styles.skillCloud}>{(fa ? skillsFa : founderCareerProfile.coreSkills).map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div className={styles.languageList}>{founderCareerProfile.languages.map((language) => <div key={language.nameEn}><strong>{fa ? language.nameFa : language.nameEn}</strong><span>{fa ? language.levelFa : language.levelEn}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <div className={styles.sectionHead}>
          <span>{fa ? "گواهی‌نامه‌ها" : "CERTIFICATIONS"}</span>
          <h2>{fa ? "داده، فناوری اطلاعات، شبکه، رایانش ابری، فروش و امنیت اطلاعات" : "Data, IT, networking, cloud, sales and information security"}</h2>
          <p>{fa ? "نام مدارک از سوابق حرفه‌ای و رزومه مهر ۱۴۰۲ استخراج شده است. تصاویر اسکن‌شده مدارک در رزومه قدیمی وجود دارد، اما پرونده خام آن به مخزن عمومی اضافه نمی‌شود." : "Certificate names are sourced from the current professional record and the Mehr 1402 resume. Scanned certificate images exist in the old resume, but the raw PDF is not added to the public repository."}</p>
        </div>
        <div className={styles.credentialGrid}>
          {certifications.map((item) => (
            <article className={styles.credentialCard} key={`${item.nameEn}-${item.issuer}`}>
              <span>{fa ? "گواهی حرفه‌ای" : item.group.toUpperCase()}</span>
              <h3>{fa ? item.nameFa : item.nameEn}</h3>
              {!fa ? <p>{item.issuer}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <div className={styles.sectionHead}><span>{fa ? "مجوزها" : "LICENSES"}</span><h2>{fa ? "صلاحیت‌ها و مجوزهای حرفه‌ای ثبت‌شده" : "Recorded professional qualifications and licenses"}</h2></div>
        <div className={styles.credentialGrid}>{professionalLicenses.map((item) => <article className={styles.credentialCard} key={item.titleEn}><h3>{fa ? item.titleFa : item.titleEn}</h3><p>{fa ? item.issuerFa : item.issuerEn}</p></article>)}</div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <div className={styles.sectionHead}>
          <span>{fa ? "آرشیو تاریخی" : "HISTORICAL ARCHIVE"}</span>
          <h2>{fa ? "سوابق تکمیلی رزومه مهر ۱۴۰۲" : "Additional records from the Mehr 1402 resume"}</h2>
          <p>{fa ? "این رکوردها با همان تاریخ‌های ثبت‌شده در رزومه قدیمی نگهداری شده‌اند. هرجا با سوابق حرفه‌ای جدید اختلاف وجود دارد، ادغام یا اصلاح خودکار انجام نشده است." : "These entries preserve the dates recorded in the older resume. Where they differ from the latest professional record, no automatic reconciliation or correction is performed."}</p>
        </div>
        <div className={styles.archiveGrid}>{historicalResumeExperience.map((item) => <article className={styles.archiveCard} key={item.id}><span>{localized(locale, item.period)}</span><h3>{localized(locale, item.company)}</h3><strong>{localized(locale, item.role)}</strong><p>{localized(locale, item.summary)}</p></article>)}</div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <div className={styles.twoColumn}>
          <div>
            <div className={styles.sectionHead}><span>{fa ? "نمایندگی‌ها" : "REPRESENTATIONS"}</span><h2>{fa ? "سابقه فروش و نمایندگی برندها" : "Historical brand representations"}</h2></div>
            <div className={styles.representationList}>{salesRepresentations.map((item) => <div key={`${item.brand}-${item.periodEn}`}><strong>{item.brand}</strong><span>{fa ? item.periodFa : item.periodEn}</span></div>)}</div>
          </div>
          <div>
            <div className={styles.sectionHead}><span>{fa ? "نقاط عطف" : "MILESTONES"}</span><h2>{fa ? "فعالیت‌های تاریخی تکمیلی" : "Additional historical milestones"}</h2></div>
            <div className={styles.stack}>{historicalMilestones.map((item) => <article className={styles.compactCard} key={item.titleEn}><h3>{fa ? item.titleFa : item.titleEn}</h3><p>{fa ? item.detailFa : item.detailEn}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.legacySection}`}>
        <details><summary>{fa ? "نمایش محتوای آرشیوی رزومه از سایت قبلی" : "Show legacy resume content from the previous site"}</summary><LegacyPageContent locale={locale} pageId={622} /></details>
      </section>

      <section className={`wrap ${styles.cta}`}>
        <div><span>{fa ? "همکاری" : "COLLABORATION"}</span><h2>{fa ? "برای ساخت محصول، سیستم فروش یا تحول دیجیتال گفت‌وگو کنیم." : "Let's talk about products, sales systems or digital transformation."}</h2></div>
        <Link className={styles.primaryAction} href={`/${locale}/contact`}>{fa ? "تماس با من" : "Contact me"}</Link>
      </section>
    </main>
  );
}
