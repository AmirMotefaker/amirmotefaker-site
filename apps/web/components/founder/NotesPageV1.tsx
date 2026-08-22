import Link from "next/link";
import type { Locale } from "@/content/founder-site";
import styles from "./KnowledgePage.module.css";

const noteTypes = {
  fa: [
    ["01", "تصمیم‌های محصول", "چرا یک قابلیت ساخته شد، حذف شد یا به تعویق افتاد و چه چیزی از آن تصمیم یاد گرفتیم."],
    ["02", "یادداشت‌های AI و فناوری", "مشاهده‌های دست‌اول از ابزارها، مدل‌ها، معماری‌ها و محدودیت‌هایی که در ساخت محصول واقعی دیده می‌شوند."],
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
          <p className={styles.lead}>{fa ? "Notes محل انتشار تجربه دست‌اول از ساخت محصول، هوش مصنوعی، بازار و تصمیم‌هایی است که پشت پروژه‌ها قرار دارند. این بخش جایگزین فید عمومی اخبار فناوری نیست؛ هدف آن ثبت دانشی است که از ساختن به‌دست می‌آید." : "Notes captures first-hand product decisions, AI fieldwork, market observations and lessons behind the portfolio. It is not a generic technology news feed; its job is to document knowledge earned through building."}</p>
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
            <p>{fa ? "هر یادداشت باید یک زاویه دست‌اول روشن، تاریخ انتشار، منابع لازم برای واقعیت‌های بیرونی و ارتباط مشخص با یک Thesis یا محصول داشته باشد." : "Every note should have a clear first-hand angle, publication date, sources for external facts and an explicit connection to a thesis or product when relevant."}</p>
          </div>
          <div className={styles.grid}>
            {noteTypes[locale].map(([index, title, body]) => (
              <article className={styles.card} key={title}>
                <span>{index}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionIntro}>
            <h2>{fa ? "آرشیو قدیمی خبرها چه می‌شود؟" : "What happens to the legacy news archive?"}</h2>
            <p>{fa ? "محتوای قدیمی برای حفظ سابقه و ارزش جست‌وجو باقی می‌ماند، اما از نظر تحریریه با Notes یکی نیست. خبرهای قدیمی آرشیو هستند؛ Notes محتوای دست‌اول جدید است." : "Legacy content remains available for historical and search continuity, but it is editorially distinct from Notes. Old technology posts are an archive; Notes is the new first-hand publishing layer."}</p>
          </div>
          <div className={styles.cta}>
            <h2>{fa ? "Notes باید با تجربه واقعی رشد کند." : "Notes should grow from real operating experience."}</h2>
            <p>{fa ? "تا زمانی که یادداشت دست‌اول آماده انتشار نباشد، این صفحه با مقاله‌های ساختگی یا بازنویسی اخبار پر نمی‌شود." : "Until first-hand notes are ready, this page will not be padded with fabricated articles or rewritten news."}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
