import Link from "next/link";
import type { Locale } from "@/content/founder-site";
import styles from "./KnowledgePage.module.css";

const principles = {
  fa: [
    ["۰۱", "مسئله قبل از فناوری", "قبل از انتخاب ابزار، باید مسئله، رفتار کاربر، هزینه اصطکاک و دلیل واقعی نیاز به محصول روشن باشد."],
    ["۰۲", "محصول قبل از ادعا", "قابلیت قابل استفاده، تجربه روشن و شواهد اجرا از روایت بزرگ، ترند و زبان تبلیغاتی مهم‌ترند."],
    ["۰۳", "بازار هم‌زمان با محصول", "ساختن بدون فهم توزیع، قیمت‌گذاری و مسیر رسیدن به کاربر، محصول را به پروژه فنی تبدیل می‌کند نه کسب‌وکار."],
    ["۰۴", "سیستم قبل از ویژگی", "هر قابلیت باید در معماری محصول، داده، عملیات و مسیر رشد جای مشخصی داشته باشد؛ نه اینکه فقط فهرست امکانات را بلندتر کند."],
    ["۰۵", "هوش مصنوعی به‌عنوان اهرم", "AI زمانی ارزشمند است که کیفیت تصمیم، سرعت اجرا یا مقیاس‌پذیری را بهتر کند؛ نه صرفاً چون در بازار محبوب است."],
    ["۰۶", "یادگیری قابل انتقال", "ارزش یک پرتفوی فقط تعداد محصولات نیست؛ تجربه ساخت، زیرساخت، توزیع و یادگیری باید میان پروژه‌ها قابل استفاده مجدد باشد."],
  ],
  en: [
    ["01", "Problem before technology", "Before choosing a tool, the problem, user behavior, cost of friction and the real reason for the product must be clear."],
    ["02", "Product before claims", "Usable capability, clear experience and evidence of execution matter more than oversized narratives, trends or marketing language."],
    ["03", "Market alongside product", "Building without understanding distribution, pricing and the path to the user turns a product into a technical project rather than a business."],
    ["04", "Systems before features", "Every capability needs a place in the product architecture, data, operations and growth path instead of merely extending a feature list."],
    ["05", "AI as leverage", "AI earns its place when it improves decision quality, execution speed or scalability, not simply because it is fashionable."],
    ["06", "Transferable learning", "A portfolio is more than a product count. Building knowledge, infrastructure, distribution and operating lessons should compound across ventures."],
  ],
};

const beliefs = {
  fa: [
    ["کارآفرینی یعنی مدیریت مجموعه‌ای از عدم‌قطعیت‌ها.", "بازار، رفتار کاربر، فناوری، زمان و سرمایه هم‌زمان تغییر می‌کنند. تصمیم خوب الزاماً تصمیم قطعی نیست؛ تصمیمی است که با شواهد موجود، ریسک را قابل مدیریت کند."],
    ["فناوری باید در خدمت مدل ارزش باشد.", "معماری فنی، اتوماسیون و هوش مصنوعی زمانی مزیت می‌سازند که به تجربه بهتر، هزینه کمتر، سرعت بیشتر یا تصمیم دقیق‌تر منتهی شوند."],
    ["بازار فارسی نیازمند محصول بومی، نه ترجمه رابط کاربری است.", "زبان، پرداخت، اعتماد، کانال توزیع، مقررات، رفتار خرید و زیرساخت بخشی از خود محصول هستند و باید از ابتدا در تصمیم طراحی دیده شوند."],
    ["پرتفوی باید مزیت مرکب ایجاد کند.", "هر محصول هویت مستقل دارد، اما دانش فنی، تجربه عرضه، زیرساخت و شبکه یادگیری می‌تواند هزینه ساخت محصول بعدی را کاهش دهد و کیفیت تصمیم‌ها را بالا ببرد."],
  ],
  en: [
    ["Entrepreneurship is the management of multiple uncertainties.", "Markets, user behavior, technology, timing and capital move at the same time. A good decision is not necessarily certain; it makes risk manageable with the evidence available."],
    ["Technology should serve the value model.", "Architecture, automation and AI become advantages when they lead to a better experience, lower cost, greater speed or better decisions."],
    ["Persian markets require localization beyond interface translation.", "Language, payments, trust, distribution, regulation, buying behavior and infrastructure are part of the product and should shape design decisions from the start."],
    ["A portfolio should create compounding advantage.", "Each product keeps an independent identity, while technical knowledge, launch experience, infrastructure and learning networks can improve the economics and quality of the next build."],
  ],
};

const operatingModel = {
  fa: [
    ["کشف", "مسئله را با شواهد، رفتار و محدودیت‌های واقعی تعریف می‌کنم."],
    ["طراحی", "ارزش پیشنهادی، تجربه، مدل کسب‌وکار و معماری را در یک تصمیم محصولی می‌بینم."],
    ["ساخت", "نسخه قابل استفاده را با دامنه کنترل‌شده می‌سازم و از توسعه نمایشی دوری می‌کنم."],
    ["سنجش", "خروجی، رفتار کاربر و سیگنال بازار باید فرضیه اولیه را تأیید، اصلاح یا رد کنند."],
    ["توسعه", "تنها چیزی را مقیاس می‌دهم که دلیل روشن برای ادامه و سازوکار قابل نگهداری داشته باشد."],
  ],
  en: [
    ["Discover", "Define the problem through evidence, behavior and real constraints."],
    ["Design", "Treat value proposition, experience, business model and architecture as one product decision."],
    ["Build", "Ship a usable version with controlled scope instead of optimizing for theatrical complexity."],
    ["Measure", "Output, user behavior and market signals should confirm, refine or reject the initial thesis."],
    ["Scale", "Scale only what has a clear reason to continue and an operating model that can be maintained."],
  ],
};

export default function ThesisPageV1({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="wrap">
          <span className={styles.eyebrow}>{fa ? "نگاه من به کارآفرینی و ساخت محصول" : "FOUNDER PERSPECTIVE"}</span>
          <h1>{fa ? "کارآفرینی برای من، ساختن یک سیستم ارزش است؛ نه صرفاً راه‌اندازی یک محصول." : "Entrepreneurship is the work of building a value system, not merely launching a product."}</h1>
          <p className={styles.lead}>{fa ? "محصول، بازار، فناوری، فروش و عملیات را جدا از هم نمی‌بینم. یک ایده زمانی ارزش ساختن دارد که مسئله واقعی داشته باشد، بتوان برای آن تجربه قابل استفاده ساخت، مسیر رسیدن به بازار روشن باشد و شواهد بتوانند تصمیم بعدی را بهتر کنند." : "I do not separate product, market, technology, sales and operations into isolated disciplines. An idea is worth building when it addresses a real problem, can become a usable experience, has a credible path to market and generates evidence for better decisions."}</p>
          <div className={styles.actions}>
            <Link href={`/${locale}/products`} className="btn btn-primary">{fa ? "مشاهده پرتفوی" : "Explore the portfolio"}</Link>
            <Link href={`/${locale}/resume`} className="btn btn-ghost">{fa ? "مسیر حرفه‌ای" : "Professional journey"}</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionIntro}>
            <h2>{fa ? "شش اصل تصمیم‌گیری" : "Six operating principles"}</h2>
            <p>{fa ? "این اصول شعار نیستند؛ چارچوب‌هایی هستند که باید در برابر شواهد، رفتار کاربر و واقعیت بازار پاسخ‌گو بمانند." : "These are not slogans. They are operating frameworks that remain accountable to evidence, user behavior and market reality."}</p>
          </div>
          <div className={styles.grid}>
            {principles[locale].map(([index, title, body]) => (
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
            <h2>{fa ? "مدل کاری من از مسئله تا رشد" : "My operating model from problem to growth"}</h2>
            <p>{fa ? "هدف این مسیر، کم‌کردن فاصله میان ایده و یادگیری واقعی است؛ هر مرحله باید تصمیم مرحله بعد را بهتر کند." : "The goal is to shorten the distance between an idea and real learning. Each stage should improve the quality of the next decision."}</p>
          </div>
          <div className={styles.list}>
            {operatingModel[locale].map(([title, body]) => (
              <div className={styles.listItem} key={title}><strong>{title}</strong><p>{body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionIntro}>
            <h2>{fa ? "فرضیه‌هایی که پرتفوی را شکل می‌دهند" : "Beliefs shaping the portfolio"}</h2>
            <p>{fa ? "این‌ها دیدگاه‌های کاری‌اند، نه ادعاهای اثبات‌شده؛ با محصول، داده و تجربه واقعی باید دائماً بازبینی شوند." : "These are operating beliefs rather than proven facts; products, data and first-hand experience should continuously refine them."}</p>
          </div>
          <div className={styles.list}>
            {beliefs[locale].map(([title, body]) => (
              <div className={styles.listItem} key={title}><strong>{title}</strong><p>{body}</p></div>
            ))}
          </div>
          <div className={styles.cta}>
            <h2>{fa ? "پرتفوی، آزمایشگاه واقعی این نگاه است." : "The portfolio is where this perspective is tested."}</h2>
            <p>{fa ? "هر محصول باید مستقل از روایت، در یک مسئله واقعی ارزش بسازد و شواهد کافی برای تصمیم بعدی ایجاد کند." : "Each product must create value against a real problem and generate enough evidence for the next decision, independent of the narrative around it."}</p>
            <div className={styles.actions}><Link href={`/${locale}/products`} className="btn btn-primary">{fa ? "مرور محصولات" : "Review the products"}</Link><Link href={`/${locale}/contact`} className="btn btn-ghost">{fa ? "گفتگو" : "Start a conversation"}</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
