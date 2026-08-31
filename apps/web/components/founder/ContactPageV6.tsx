import Link from "next/link";
import { contactIntents } from "@/content/contact-intents";
import { founder, type Locale } from "@/content/founder-site";
import { getProductDisplayName } from "@/content/product-portfolio";
import { canonicalProductPortfolio as products } from "@/content/canonical-product-portfolio";
import { localeDigits } from "@/lib/locale-format";
import styles from "./FounderV6.module.css";

function mailtoForIntent(locale: Locale, intent: (typeof contactIntents)[number]) {
  const fa = locale === "fa";
  const subject = encodeURIComponent(fa ? intent.subjectFa : intent.subjectEn);
  const productPrompt = intent.productContext
    ? fa
      ? `\n\nمحصول مرتبط: ${products.map((product) => getProductDisplayName(product, locale)).join("، ")}`
      : `\n\nRelevant product: ${products.map((product) => getProductDisplayName(product, locale)).join(", ")}`
    : "";
  const body = encodeURIComponent(`${fa ? intent.bodyPromptFa : intent.bodyPromptEn}${productPrompt}`);
  return `mailto:${founder.email}?subject=${subject}&body=${body}`;
}

export default function ContactPageV6({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const generalSubject = encodeURIComponent(fa ? "گفت‌وگو از وب‌سایت امیر متفکر" : "Conversation from AmirMotefaker.ir");

  return (
    <main className={styles.innerPage}>
      <section className={styles.contactHero}>
        <div className="wrap">
          <div className={styles.contactIntro}>
            <span>{fa ? "ارتباط و همکاری" : "CONTACT / COLLABORATION"}</span>
            <h1>{fa ? "برای یک گفت‌وگوی بهتر، از مسیر درست شروع کنیم." : "Start with the right context for a better conversation."}</h1>
            <p>{fa ? "سرمایه‌گذاری، شراکت، محصول، همکاری تخصصی و رسانه هرکدام زمینه متفاوتی دارند. مسیر مرتبط را انتخاب کنید تا موضوع از همان ابتدا روشن باشد." : "Investment, partnerships, product inquiries, specialist collaboration and media requests each need different context. Choose the relevant route so the conversation starts clearly."}</p>
            <div className={styles.contactActions}>
              <a href={`mailto:${founder.email}?subject=${generalSubject}`} className="btn btn-primary">{fa ? "ارسال ایمیل" : "General email"}</a>
              <Link href={`/${locale}/products`} className="btn btn-ghost">{fa ? "مرور محصولات" : "Review products"}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.contactGrid}`}>
        <div className={styles.contactPanel}>
          <span className={styles.sectionEyebrow}>{fa ? "مسیر گفتگو" : "CONVERSATION ROUTES"}</span>
          <h2>{fa ? "موضوع شما به کدام مسیر نزدیک‌تر است؟" : "Which route best matches your intent?"}</h2>
          <p>{fa ? "هر مسیر یک ایمیل آماده با موضوع و راهنمای مناسب برای شروع گفتگو ایجاد می‌کند." : "Each route opens an email with the right subject and context prompt."}</p>

          <div className={styles.inquiryGrid}>
            {contactIntents.map((intent) => (
              <article key={intent.id}>
                <span>{fa ? "مسیر ارتباط" : intent.tag}</span>
                <h3>{fa ? intent.titleFa : intent.titleEn}</h3>
                <p>{fa ? intent.descriptionFa : intent.descriptionEn}</p>
                <a href={mailtoForIntent(locale, intent)} className={styles.textLink}>{fa ? "شروع گفتگو ↗" : "Start this conversation ↗"}</a>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.contactSide}>
          <div className={styles.contactItem}>
            <span>{fa ? "ایمیل" : "Email"}</span>
            <a href={`mailto:${founder.email}`} dir="ltr">{founder.email}</a>
          </div>
          <div className={styles.contactItem}>
            <span>{fa ? "تلفن" : "Phone"}</span>
            <a href={`tel:${founder.phoneHref}`} dir="ltr">{fa ? localeDigits(founder.phone, locale) : founder.phone}</a>
          </div>
          <div className={styles.contactItem}>
            <span>{fa ? "موقعیت" : "Location"}</span>
            <strong>{fa ? founder.cityFa : founder.cityEn}</strong>
          </div>
          <div className={styles.contactItem}>
            <span>{fa ? "شبکه‌های حرفه‌ای" : "Networks"}</span>
            <div className={styles.networks}>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">{fa ? "لینکدین" : "LinkedIn"}</a>
              <a href={founder.github} target="_blank" rel="noopener noreferrer">{fa ? "گیت‌هاب" : "GitHub"}</a>
              <a href={founder.kaggle} target="_blank" rel="noopener noreferrer">{fa ? "کگل" : "Kaggle"}</a>
              <a href={founder.x} target="_blank" rel="noopener noreferrer">{fa ? "ایکس" : "X"}</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span>{fa ? "محصولات" : "Products"}</span>
            <div className={styles.networks}>
              {products.map((product) => (
                <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>{getProductDisplayName(product, locale)}</Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
