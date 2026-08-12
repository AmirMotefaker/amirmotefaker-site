import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import styles from "./FounderV6.module.css";

const inquiryTypes = {
  fa: [
    ["PRODUCT", "محصول و پلتفرم", "بررسی ایده، معماری محصول، تجربه و مسیر ساخت."],
    ["AI", "هوش مصنوعی", "محصولات AI، اتوماسیون و تجربه‌های داده‌محور."],
    ["BUSINESS", "کسب‌وکار و رشد", "فروش، توسعه بازار، شبکه‌سازی و همکاری تجاری."],
    ["TECH", "همکاری فناورانه", "نرم‌افزار، زیرساخت، تحول دیجیتال و اکوسیستم."],
  ],
  en: [
    ["PRODUCT", "Product & platform", "Product ideas, architecture, experience and build direction."],
    ["AI", "Artificial intelligence", "AI products, automation and data-driven experiences."],
    ["BUSINESS", "Business & growth", "Sales, market development, networking and partnerships."],
    ["TECH", "Technology collaboration", "Software, infrastructure, digital transformation and ecosystems."],
  ],
};

export default function ContactPageV6({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const subject = encodeURIComponent(fa ? "درخواست همکاری از AmirMotefaker.ir" : "Collaboration inquiry from AmirMotefaker.ir");

  return (
    <main className={styles.innerPage}>
      <section className={styles.contactHero}>
        <div className="wrap">
          <div className={styles.contactIntro}>
            <span>CONTACT / BUSINESS INQUIRY</span>
            <h1>{fa ? "بیایید درباره چیزی که باید ساخته شود صحبت کنیم." : "Let's talk about what should be built."}</h1>
            <p>
              {fa
                ? "برای گفتگو درباره محصول، هوش مصنوعی، همکاری تجاری، توسعه بازار یا یک مسئله فناورانه، مستقیم در ارتباط باشیم."
                : "For product, AI, business collaboration, market development or a technology challenge, get in touch directly."}
            </p>
            <div className={styles.contactActions}>
              <a href={`mailto:${founder.email}?subject=${subject}`} className="btn btn-primary">
                {fa ? "ارسال ایمیل" : "Send an email"}
              </a>
              <Link href={`/${locale}/products`} className="btn btn-ghost">
                {fa ? "مشاهده محصولات" : "Explore products"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.contactGrid}`}>
        <div className={styles.contactPanel}>
          <span className={styles.sectionEyebrow}>{fa ? "موضوع گفتگو" : "INQUIRY AREAS"}</span>
          <h2>{fa ? "چه نوع همکاری مدنظر شماست؟" : "What kind of conversation are you starting?"}</h2>
          <p>
            {fa
              ? "این دسته‌ها فقط برای سریع‌تر مشخص شدن موضوع گفتگو هستند؛ مسیر اصلی ارتباط، ایمیل مستقیم است."
              : "These categories simply help frame the conversation; the primary contact channel is direct email."}
          </p>

          <div className={styles.inquiryGrid}>
            {inquiryTypes[locale].map(([tag, title, description]) => (
              <article key={tag}>
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.contactSide}>
          <div className={styles.contactItem}>
            <span>{fa ? "ایمیل" : "Email"}</span>
            <a href={`mailto:${founder.email}`}>{founder.email}</a>
          </div>

          <div className={styles.contactItem}>
            <span>{fa ? "تلفن" : "Phone"}</span>
            <a href={`tel:${founder.phoneHref}`}>{founder.phone}</a>
          </div>

          <div className={styles.contactItem}>
            <span>{fa ? "موقعیت" : "Location"}</span>
            <strong>{fa ? founder.cityFa : founder.cityEn}</strong>
          </div>

          <div className={styles.contactItem}>
            <span>{fa ? "شبکه‌ها" : "Networks"}</span>
            <div className={styles.networks}>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={founder.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={founder.kaggle} target="_blank" rel="noopener noreferrer">Kaggle</a>
              <a href={founder.x} target="_blank" rel="noopener noreferrer">X</a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
