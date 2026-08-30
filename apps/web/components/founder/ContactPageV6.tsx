import Link from "next/link";
import { contactIntents } from "@/content/contact-intents";
import { founder, type Locale } from "@/content/founder-site";
import { getProductDisplayName, productPortfolio as products } from "@/content/product-portfolio";
import styles from "./FounderV6.module.css";
import { localeDigits } from "@/lib/locale-format";

function mailtoForIntent(
  locale: Locale,
  intent: (typeof contactIntents)[number],
) {
  const fa = locale === "fa";
  const subject = encodeURIComponent(fa ? intent.subjectFa : intent.subjectEn);
  const productPrompt = intent.productContext
    ? fa
      ? `\n\nمحصول مرتبط: ${products.map((product) => getProductDisplayName(product, locale)).join(" / ")}`
      : `\n\nRelevant product: ${products.map((product) => getProductDisplayName(product, locale)).join(" / ")}`
    : "";
  const body = encodeURIComponent(
    `${fa ? intent.bodyPromptFa : intent.bodyPromptEn}${productPrompt}`,
  );

  return `mailto:${founder.email}?subject=${subject}&body=${body}`;
}

export default function ContactPageV6({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const generalSubject = encodeURIComponent(
    fa ? "گفت‌وگو از AmirMotefaker.ir" : "Conversation from AmirMotefaker.ir",
  );

  return (
    <main className={styles.innerPage}>
      <section className={styles.contactHero}>
        <div className="wrap">
          <div className={styles.contactIntro}>
            <span>{fa ? "تماس با من" : "CONTACT"}</span>
            <h1>
              {fa
                ? "تماس با من"
                : "Contact me"}
            </h1>
            <p>
              {fa
                ? "سؤال یا پیشنهادی دارید؟ خوشحال می‌شوم بشنوم. برای ارتباط مستقیم از راه‌های زیر استفاده کنید یا مسیر گفت‌وگوی مرتبط را انتخاب کنید."
                : "Have a question or proposal? I would be glad to hear from you. Use the direct contact details below or choose the most relevant conversation route."}
            </p>
            <div className={styles.contactActions}>
              <a href={`mailto:${founder.email}?subject=${generalSubject}`} className="btn btn-primary">
                {fa ? "ایمیل عمومی" : "General email"}
              </a>
              <Link href={`/${locale}/products`} className="btn btn-ghost">
                {fa ? "مرور محصولات" : "Review products"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.contactGrid}`}>
        <div className={styles.contactPanel}>
          <span className={styles.sectionEyebrow}>{fa ? "مسیر گفتگو" : "CONVERSATION ROUTES"}</span>
          <h2>{fa ? "موضوع شما به کدام مسیر نزدیک‌تر است؟" : "Which route best matches your intent?"}</h2>
          <p>
            {fa
              ? "هر مسیر یک ایمیل با Subject و راهنمای Context مناسب ایجاد می‌کند. هنوز هیچ فرم یا Backend جدیدی به Production متصل نشده است."
              : "Each route opens an email with the right subject and context prompt. No new form or backend is connected to production yet."}
          </p>

          <div className={styles.inquiryGrid}>
            {contactIntents.map((intent) => (
              <article key={intent.id}>
                <span>{intent.tag}</span>
                <h3>{fa ? intent.titleFa : intent.titleEn}</h3>
                <p>{fa ? intent.descriptionFa : intent.descriptionEn}</p>
                <a href={mailtoForIntent(locale, intent)} className={styles.textLink}>
                  {fa ? "شروع این گفتگو ↗" : "Start this conversation ↗"}
                </a>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.contactSide}>
          <div className={styles.contactSideHeading}>
            <span>{fa ? "راه‌های ارتباطی" : "CONTACT DETAILS"}</span>
            <h2>{fa ? "مستقیم در ارتباط باشید." : "Get in touch directly."}</h2>
          </div>
          <div className={styles.contactItem}>
            <span>{fa ? "ایمیل" : "Email"}</span>
            <a href={`mailto:${founder.email}`}>{founder.email}</a>
          </div>

          <div className={styles.contactItem}>
            <span>{fa ? "تلفن تماس" : "Phone"}</span>
            <a href={`tel:${founder.phoneHref}`} className={styles.phoneNumber}>{localeDigits(founder.phone, locale)}</a>
          </div>

          <div className={styles.contactItem}>
            <span>{fa ? "آدرس" : "Address"}</span>
            <strong>{fa ? founder.addressFa : founder.addressEn}</strong>
          </div>

          <div className={styles.contactItem}>
            <span>{fa ? "کد پستی" : "Postal code"}</span>
            <strong className={styles.phoneNumber}>{localeDigits(founder.postalCode, locale)}</strong>
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

          <div className={styles.contactItem}>
            <span>{fa ? "محصولات فعال" : "Active products"}</span>
            <div className={styles.networks}>
              {products.map((product) => (
                <Link key={product.slug} href={`/${locale}/products/${product.slug}`}>
                  {getProductDisplayName(product, locale)}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
