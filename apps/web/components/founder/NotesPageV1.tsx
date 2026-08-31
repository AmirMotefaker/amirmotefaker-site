import Link from "next/link";
import type { Locale } from "@/content/founder-site";
import { noteCategoryLabels, publishedNotes } from "@/content/notes";
import { localeDigits } from "@/lib/locale-format";
import styles from "./KnowledgePage.module.css";

const noteTypes = {
  fa: [
    ["01", "تصمیم‌های محصول", "چرا یک قابلیت ساخته شد، حذف شد یا به تعویق افتاد و چه چیزی از آن تصمیم یاد گرفتیم."],
    ["02", "هوش مصنوعی و فناوری", "مشاهده‌های دست‌اول از ابزارها، مدل‌ها، معماری‌ها و محدودیت‌هایی که در ساخت محصول واقعی دیده می‌شوند."],
    ["03", "بازار و رفتار کاربر", "فرضیه‌ها و مشاهداتی درباره بازار، توزیع، قیمت‌گذاری، اعتماد و رفتار کاربران فارسی‌زبان."],
    ["04", "آزمایش‌ها و یادگیری", "نتیجه آزمایش‌ها، شکست‌ها و تغییر مسیرهایی که بتوانند برای تصمیم بعدی مفید باشند."],
  ],
  en: [
    ["01", "Product decisions", "Why a capability was built, removed or delayed, and what that decision taught us."],
    ["02", "AI and technology field notes", "First-hand observations from tools, models, architectures and constraints encountered while building real products."],
    ["03", "Market and user behavior", "Hypotheses and observations about markets, distribution, pricing, trust and Persian-speaking user behavior."],
    ["04", "Experiments and learning", "Results from experiments, failures and changes of direction that can improve the next decision."],
  ],
};

export default function NotesPageV1({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="wrap">
          <span className={styles.eyebrow}>{fa ? "یادداشت‌ها" : "NOTES"}</span>
          <h1>{fa ? "تصمیم‌ها، آزمایش‌ها و چیزهایی که در مسیر ساختن یاد می‌گیرم." : "Decisions, experiments and lessons from building."}</h1>
          <p className={styles.lead}>{fa ? "این بخش محل انتشار تجربه دست‌اول از ساخت محصول، هوش مصنوعی، بازار و تصمیم‌هایی است که پشت پروژه‌ها قرار دارند. هدف آن ثبت دانشی است که از ساختن به‌دست می‌آید، نه بازنشر خبرهای عمومی." : "Notes captures first-hand product decisions, AI fieldwork, market observations and lessons behind the portfolio. It is not a generic technology news feed; its job is to document knowledge earned through building."}</p>
          <div className={styles.actions}>
            <Link href={`/${locale}/thesis`} className="btn btn-primary">{fa ? "نگاه من به ساخت محصول" : "Read the thesis"}</Link>
            <Link href={`/${locale}/products`} className="btn btn-ghost">{fa ? "مشاهده محصولات" : "Explore products"}</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionIntro}>
            <h2>{fa ? "چه چیزهایی اینجا منتشر می‌شود" : "What belongs here"}</h2>
            <p>{fa ? "هر یادداشت باید زاویه دست‌اول روشن، تاریخ انتشار، منابع لازم برای واقعیت‌های بیرونی و ارتباط مشخص با یک دیدگاه یا محصول داشته باشد." : "Every note should have a clear first-hand angle, publication date, sources for external facts and an explicit connection to a thesis or product when relevant."}</p>
          </div>
          <div className={styles.grid}>
            {noteTypes[locale].map(([index, title, body]) => (
              <article className={styles.card} key={title}>
                <span>{fa ? localeDigits(index, locale) : index}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionIntro}>
            <h2>{fa ? "یادداشت‌های منتشرشده" : "Published notes"}</h2>
            <p>{fa ? "فقط یادداشت‌هایی که از فرایند محتوایی نهایی عبور کرده و وضعیت انتشار گرفته‌اند اینجا نمایش داده می‌شوند." : "Only notes that pass through the canonical content model with Published status appear here."}</p>
          </div>
          {publishedNotes.length > 0 ? (
            <div className={styles.grid}>
              {publishedNotes.map((note) => (
                <article className={styles.card} key={note.slug}>
                  <span>{noteCategoryLabels[locale][note.category]}</span>
                  <h3>{fa ? note.titleFa : note.titleEn}</h3>
                  <p>{fa ? note.summaryFa : note.summaryEn}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.cta}>
              <h2>{fa ? "هنوز یادداشت دست‌اولی منتشر نشده است." : "No first-hand notes have been published yet."}</h2>
              <p>{fa ? "این وضعیت عمداً خالی است؛ صفحه با مقاله ساختگی، بازنویسی خبر یا محتوای پرکننده پر نمی‌شود." : "This state is intentionally empty. The page will not be filled with fabricated articles, rewritten news or placeholder content."}</p>
            </div>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionIntro}>
            <h2>{fa ? "آرشیو قدیمی خبرها چه می‌شود؟" : "What happens to the legacy news archive?"}</h2>
            <p>{fa ? "محتوای قدیمی برای حفظ سابقه و ارزش جست‌وجو باقی می‌ماند، اما از نظر تحریریه با یادداشت‌های جدید یکی نیست. خبرهای قدیمی آرشیو هستند و یادداشت‌ها محتوای دست‌اول جدیدند." : "Legacy content remains available for historical and search continuity, but it is editorially distinct from Notes. Old technology posts are an archive; Notes is the new first-hand publishing layer."}</p>
          </div>
          <div className={styles.cta}>
            <h2>{fa ? "یادداشت‌ها باید با تجربه واقعی رشد کنند." : "Notes should grow from real operating experience."}</h2>
            <p>{fa ? "هر مطلب جدید باید زاویه دست‌اول، مالک محتوا، تاریخ، ارتباط با محصول یا دیدگاه و منبع برای واقعیت‌های بیرونی داشته باشد." : "Every new note needs a first-hand angle, content owner, date, product or thesis relationship, and sources for external facts."}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
