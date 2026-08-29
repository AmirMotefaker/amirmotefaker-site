import Link from "next/link";
import { contactIntents } from "@/content/contact-intents";
import { founder, type Locale } from "@/content/founder-site";
import { getProductDisplayName, productPortfolio as products } from "@/content/product-portfolio";
import { localeDigits } from "@/lib/locale-format";
import styles from "./FounderV6.module.css";

function mailtoForIntent(locale: Locale, intent: (typeof contactIntents)[number]) {
  const fa = locale === "fa";
  const subject = encodeURIComponent(fa ? intent.subjectFa : intent.subjectEn);
  const productPrompt = intent.productContext
    ? fa
      ? `\n\nمحصول مرتبط: ${products.map((product) => getProductDisplayName(product, locale)).join(" / ")}`
      : `\n\nRelevant product: ${products.map((product) => getProductDisplayName(product, locale)).join(" / ")}`
    : "";
  const body = encodeURIComponent(`${fa ? intent.bodyPromptFa : intent.bodyPromptEn}${productPrompt}`);
  return `mailto:${founder.email}?subject=${subject}&body=${body}`;
}

export default function ContactPageV6({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const phone = fa ? localeDigits(founder.phone, locale) : founder.phone;
  const postalCode = fa ? localeDigits(founder.postalCode, locale) : founder.postalCode;
  const address = fa ? founder.addressFa : founder.addressEn;
  const socialLinks = [
    [fa ? "واتساپ" : "WhatsApp", founder.whatsapp],
    [fa ? "تلگرام" : "Telegram", founder.telegram],
    ["LinkedIn", founder.linkedin],
    ["Instagram", founder.instagram],
    ["X", founder.x],
    ["GitHub", founder.github],
    ["Facebook", founder.facebook],
    ["Kaggle", founder.kaggle],
  ] as const;

  return (
    <main className={styles.innerPage}>
      <section className={styles.contactHero}>
        <div className="wrap">
          <div className={styles.contactIntro}>
            <span>{fa ? "ارتباط مستقیم" : "DIRECT CONTACT"}</span>
            <h1>{fa ? "تماس با امیر متفکر" : "Contact Amir Motefaker"}</h1>
            <p>
              {fa
                ? "برای گفتگو درباره محصولات، همکاری، سرمایه‌گذاری، توسعه بازار، رسانه یا فرصت‌های حرفه‌ای می‌توانید از راه‌های زیر مستقیماً در ارتباط باشید."
                : "For product conversations, collaboration, investment, market development, media or professional opportunities, use the verified contact channels below."}
            </p>
            <div className={styles.contactActions}>
              <a href={`tel:${founder.phoneHref}`} className="btn btn-primary">
                {fa ? "تماس تلفنی" : "Call"}
              </a>
              <a href={`mailto:${founder.email}`} className="btn btn-ghost">
                {fa ? "ارسال ایمیل" : "Send email"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.contactGrid}`}>
        <div className={styles.contactPanel}>
          <span className={styles.sectionEyebrow}>{fa ? "راه‌های ارتباط" : "CONTACT DETAILS"}</span>
          <h2>{fa ? "اطلاعات تماس" : "Contact information"}</h2>
          <p>
            {fa
              ? "اطلاعات زیر کانال‌های رسمی ارتباطی این وب‌سایت هستند."
              : "The details below are the official contact channels published on this website."}
          </p>

          <div className={styles.inquiryGrid}>
            <article>
              <span>{fa ? "تلفن" : "PHONE"}</span>
              <h3><a href={`tel:${founder.phoneHref}`}><bdi dir="ltr">{phone}</bdi></a></h3>
              <p>{fa ? "تماس مستقیم" : "Direct phone contact"}</p>
            </article>
            <article>
              <span>{fa ? "ایمیل" : "EMAIL"}</span>
              <h3><a href={`mailto:${founder.email}`}>{founder.email}</a></h3>
              <p>{fa ? "برای مکاتبات و درخواست‌های رسمی" : "For formal inquiries and correspondence"}</p>
            </article>
            <article>
              <span>{fa ? "آدرس" : "ADDRESS"}</span>
              <h3>{address}</h3>
              <p>{fa ? "قزوین، ایران" : "Qazvin, Iran"}</p>
            </article>
            <article>
              <span>{fa ? "کد پستی" : "POSTAL CODE"}</span>
              <h3><bdi dir="ltr">{postalCode}</bdi></h3>
              <p>{fa ? "نشانی پستی دفتر" : "Office postal code"}</p>
            </article>
          </div>

          <div className={styles.contactItem}>
            <span>{fa ? "شبکه‌های اجتماعی" : "Social networks"}</span>
            <div className={styles.networks}>
              {socialLinks.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
              ))}
            </div>
          </div>
        </div>

        <aside className={styles.contactSide}>
          <span className={styles.sectionEyebrow}>{fa ? "موضوع گفتگو" : "CONVERSATION ROUTES"}</span>
          <h2>{fa ? "برای هر موضوع، مسیر روشن‌تری داشته باشیم." : "Choose the clearest route for your topic."}</h2>
          <p>
            {fa
              ? "انتخاب موضوع فقط عنوان و متن اولیه ایمیل را آماده می‌کند تا گفتگو سریع‌تر و دقیق‌تر شروع شود."
              : "Choosing a topic prepares an email subject and context prompt so the conversation can start with the right information."}
          </p>
          <div className={styles.inquiryGrid}>
            {contactIntents.map((intent, index) => (
              <article key={intent.id}>
                <span>{fa ? localeDigits(String(index + 1).padStart(2, "0"), locale) : String(index + 1).padStart(2, "0")}</span>
                <h3>{fa ? intent.titleFa : intent.titleEn}</h3>
                <p>{fa ? intent.descriptionFa : intent.descriptionEn}</p>
                <a href={mailtoForIntent(locale, intent)} className={styles.textLink}>
                  {fa ? "شروع گفتگو ↗" : "Start conversation ↗"}
                </a>
              </article>
            ))}
          </div>
          <div className={styles.contactItem}>
            <span>{fa ? "محصولات" : "Products"}</span>
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
