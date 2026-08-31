import Link from "next/link";
import type { Locale } from "@/content/founder-site";
import { localeDigits } from "@/lib/locale-format";
import styles from "./KnowledgePage.module.css";

const principles = {
  fa: [
    ["01", "مسئله قبل از فناوری", "ابتدا مسئله، رفتار و اصطکاک واقعی کاربر را می‌فهمم؛ بعد سراغ انتخاب فناوری می‌روم."],
    ["02", "محصول قبل از نمایش", "قابلیت واقعی، تجربه کاربر و شواهد ساختن مهم‌تر از ادعاهای بزرگ و زبان تبلیغاتی هستند."],
    ["03", "سیستم قبل از ویژگی", "محصول باید بتواند رشد کند، یاد بگیرد، داده تولید کند و در صورت نیاز به اکوسیستم بزرگ‌تری متصل شود."],
  ],
  en: [
    ["01", "Problem before technology", "I start with the real user problem, behavior and friction before choosing the technology."],
    ["02", "Product before presentation", "Working capability, user experience and building evidence matter more than oversized claims."],
    ["03", "Systems before features", "A product should be able to grow, learn, generate useful data and connect to a broader ecosystem when that creates value."],
  ],
};

const beliefs = {
  fa: [
    ["هوش مصنوعی باید در محصول حل شود، نه فقط در پیام بازاریابی.", "هوش مصنوعی زمانی ارزش دارد که زمان، خطا، اصطکاک یا هزینه تصمیم‌گیری را کاهش دهد."],
    ["فارسی یک لایه محصولی جدی است.", "زبان، فرهنگ، رفتار و زیرساخت بازار فارسی فرصت ساخت تجربه‌هایی را ایجاد می‌کنند که ترجمه ساده محصولات خارجی نیستند."],
    ["پرتفوی باید از یادگیری مشترک سود ببرد.", "دانش محصول، زیرساخت، داده، توزیع و تجربه عملیاتی باید بین پروژه‌ها قابل انتقال باشد؛ بدون اینکه هویت مستقل هر محصول از بین برود."],
  ],
  en: [
    ["AI should disappear into the product, not dominate the marketing.", "AI earns its place when it reduces time, error, friction or the cost of making a decision."],
    ["Persian is a serious product layer.", "Language, culture, behavior and infrastructure in Persian-speaking markets create opportunities that are not solved by translating foreign products."],
    ["A portfolio should compound learning.", "Product knowledge, infrastructure, data, distribution and operating experience should transfer across projects without erasing each product's independent identity."],
  ],
};

export default function ThesisPageV1({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="wrap">
          <span className={styles.eyebrow}>{fa ? "نگاه من به ساخت محصول" : "PRODUCT THESIS"}</span>
          <h1>{fa ? "محصول خوب از فناوری شروع نمی‌شود؛ از یک مسئله واقعی شروع می‌شود." : "Good products don't start with technology. They start with a real problem."}</h1>
          <p className={styles.lead}>{fa ? "در پروژه‌هایی که می‌سازم، فناوری زمانی ارزشمند است که اصطکاک را کم کند، تصمیم‌گیری را بهتر کند یا یک تجربه پیچیده را ساده‌تر سازد. هوش مصنوعی برای من یک برچسب بازاریابی نیست؛ یکی از ابزارهای ساختن محصول بهتر است." : "Across the products I build, technology matters when it reduces friction, improves decisions or makes a complex experience simpler. AI is not the proposition by itself; it is one of the tools for building a better product."}</p>
          <div className={styles.actions}>
            <Link href={`/${locale}/products`} className="btn btn-primary">{fa ? "مشاهده محصولات" : "Explore products"}</Link>
            <Link href={`/${locale}/notes`} className="btn btn-ghost">{fa ? "یادداشت‌ها" : "Read notes"}</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionIntro}>
            <h2>{fa ? "سه اصل برای ساختن" : "Three principles for building"}</h2>
            <p>{fa ? "این اصول قانون ثابت نیستند؛ چارچوبی برای تصمیم‌گیری‌اند و باید با شواهد، رفتار کاربر و شرایط بازار سنجیده شوند." : "These are not immutable rules. They are decision frameworks that should be tested against evidence, user behavior and market conditions."}</p>
          </div>
          <div className={styles.grid}>
            {principles[locale].map(([index, title, body]) => (
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
            <h2>{fa ? "فرضیه‌هایی که پرتفوی را شکل می‌دهند" : "Beliefs shaping the portfolio"}</h2>
            <p>{fa ? "این‌ها فرضیه‌های کاری‌اند، نه ادعاهای اثبات‌شده. هرکدام باید در طول زمان با محصول، داده و تجربه واقعی پشتیبانی یا اصلاح شوند." : "These are theses, not proven facts. Each should be supported, refined or rejected over time through products, data and first-hand experience."}</p>
          </div>
          <div className={styles.list}>
            {beliefs[locale].map(([title, body]) => (
              <div className={styles.listItem} key={title}><strong>{title}</strong><p>{body}</p></div>
            ))}
          </div>
          <div className={styles.cta}>
            <h2>{fa ? "محصولات، آزمون واقعی این نگاه هستند." : "Products are where this thesis gets tested."}</h2>
            <p>{fa ? "هر محصول باید نشان دهد این اصول در یک مسئله، بازار و تجربه واقعی چگونه اجرا می‌شوند." : "Each product should show how these principles translate into a real problem, market and user experience."}</p>
            <div className={styles.actions}><Link href={`/${locale}/products`} className="btn btn-primary">{fa ? "مرور پرتفوی" : "Review the portfolio"}</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
