import Image from "next/image";
import Link from "next/link";
import FounderShell from "@/components/founder/FounderShell";
import LegacyPageContent from "@/components/founder/LegacyPageContent";
import { founder, products, storyEn, storyFa, timeline, type Locale } from "@/content/founder-site";

export function AboutPageView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const story = fa ? storyFa : storyEn;

  const cards = fa
    ? [
        ["AI", "هوش مصنوعی", "تمرکز بر ساخت ابزارها و تجربه‌هایی که برای فارسی‌زبانان هم معنا و کاربرد واقعی داشته باشند."],
        ["DATA", "داده و تحلیل", "استفاده از داده برای تصمیم‌گیری، گزارش‌گیری و شکل‌دادن به مسیر رشد."],
        ["PRODUCT", "محصول و تجربه", "اتصال ایده، نیاز کاربر و فناوری به یک محصول قابل استفاده و مقیاس‌پذیر."],
      ]
    : [
        ["AI", "Artificial Intelligence", "Designing tools and experiences with practical value and real-world usability."],
        ["DATA", "Data & Insight", "Using data to support reporting, decisions and growth direction."],
        ["PRODUCT", "Product & Experience", "Connecting idea, user need and technology into a usable, scalable product."],
      ];

  return (
    <FounderShell locale={locale}>
      <main className="mv-inner">
        <section className="mv-inner-hero mv-inner-hero-balanced">
          <div className="mv-container">
            <span className="mv-section-index">01 / {fa ? "درباره من" : "About me"}</span>
            <h1>
              {fa ? (
                <>
                  مسیر من در فناوری،
                  <br />
                  <em>از زیرساخت تا محصول.</em>
                </>
              ) : (
                <>
                  My path in technology,
                  <br />
                  <em>from systems to product.</em>
                </>
              )}
            </h1>
            <p>
              {fa
                ? "ترکیبی از تجربه‌های فنی، داده، محصول، فروش و رشد که امروز به ساخت اکوسیستم‌های دیجیتال و محصولات هوشمند رسیده است."
                : "A blend of technical, data, product, sales and growth experience that now shapes digital ecosystems and intelligent products."}
            </p>
          </div>
        </section>

        <section className="mv-about-storyboard">
          <div className="mv-container mv-about-storyboard-grid">
            <div className="mv-about-canvas">
              <div className="mv-about-canvas-copy">
                <span>{fa ? "امیر متفکر / فناوری / محصول / داده" : "Amir Motefaker / Technology / Product / Data"}</span>
                <strong>AM</strong>
              </div>
              <Image
                src="/assets/profile/amir-motefaker.png"
                alt={fa ? founder.nameFa : founder.nameEn}
                width={900}
                height={900}
                priority
              />
            </div>

            <div className="mv-about-metrics">
              {cards.map(([tag, title, desc]) => (
                <article className="mv-about-stat" key={tag}>
                  <span>{tag}</span>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mv-story-cards-wrap">
          <div className="mv-container mv-story-cards-grid">
            {story.map((paragraph, index) => (
              <article className="mv-story-card" key={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{paragraph}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mv-legacy-wrap">
          <div className="mv-container">
            <LegacyPageContent locale={locale} pageId={122} />
          </div>
        </section>
      </main>
    </FounderShell>
  );
}

export function ResumePageView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";

  return (
    <FounderShell locale={locale}>
      <main className="mv-inner">
        <section className="mv-inner-hero mv-inner-hero-balanced">
          <div className="mv-container">
            <span className="mv-section-index">01 / {fa ? "رزومه" : "Resume"}</span>
            <h1>{fa ? "نقاط عطف مسیر حرفه‌ای." : "Milestones of the journey."}</h1>
            <p>
              {fa
                ? "مروری ساختاریافته بر تجربه‌ها، مسئولیت‌ها و نقاط عطف کلیدی در زیرساخت، محصول، کسب‌وکار و فناوری."
                : "A structured look at the milestones and responsibilities across infrastructure, product, business and technology."}
            </p>
          </div>
        </section>

        <section className="mv-resume-list">
          <div className="mv-container">
            {timeline.map((item, index) => (
              <article className="mv-resume-row" key={item[3]}>
                <span className="mv-resume-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="mv-resume-year">{fa ? item[0] : item[1]}</span>
                <div>
                  <h2>{fa ? item[2] : item[3]}</h2>
                  <p>{fa ? item[4] : item[5]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mv-legacy-wrap">
          <div className="mv-container">
            <LegacyPageContent locale={locale} pageId={622} />
          </div>
        </section>
      </main>
    </FounderShell>
  );
}

export function ProductsPageView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const featured = products.slice(0, 3);
  const compact = products.slice(3);

  return (
    <FounderShell locale={locale}>
      <main className="mv-inner">
        <section className="mv-inner-hero mv-inner-hero-balanced">
          <div className="mv-container">
            <span className="mv-section-index">01 / {fa ? "محصولات" : "Products"}</span>
            <h1>{fa ? "محصولات با هویت بصری روشن." : "Products with a clearer visual identity."}</h1>
            <p>
              {fa
                ? "هر محصول باید هم از نظر ارائه و هم از نظر کاربرد، هویت مستقل و حرفه‌ای داشته باشد. اینجا مجموعه‌ای از پروژه‌ها و پلتفرم‌های من را می‌بینید."
                : "Each product should feel distinct, useful and professionally presented. Here is a curated collection of my platforms and projects."}
            </p>
          </div>
        </section>

        <section className="mv-product-feature-stack-wrap">
          <div className="mv-container mv-product-feature-stack">
            {featured.map((product, index) => (
              <Link
                href={`/${locale}/products/${product.slug}`}
                className={`mv-product-feature-card mv-feature-tone-${(index % 3) + 1}`}
                key={product.slug}
              >
                <div className="mv-product-feature-copy">
                  <span>{fa ? product.categoryFa : product.categoryEn}</span>
                  <h2>{product.name}</h2>
                  <p>{fa ? product.descriptionFa : product.descriptionEn}</p>
                  <div className="mv-product-feature-tech">
                    {product.technologies.slice(0, 4).map((tech) => (
                      <b key={tech}>{tech}</b>
                    ))}
                  </div>
                </div>
                <div className="mv-product-feature-art">
                  <strong>{product.name}</strong>
                  <i className="orb orb-a" />
                  <i className="orb orb-b" />
                  <i className="gridline" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mv-product-compact-wrap">
          <div className="mv-container">
            <div className="mv-product-compact-grid">
              {compact.map((product, index) => (
                <Link
                  href={`/${locale}/products/${product.slug}`}
                  className={`mv-product-compact-card mv-compact-tone-${(index % 4) + 1}`}
                  key={product.slug}
                >
                  <span>{fa ? product.categoryFa : product.categoryEn}</span>
                  <h3>{product.name}</h3>
                  <p>{fa ? product.descriptionFa : product.descriptionEn}</p>
                  <div className="mv-product-compact-tech">
                    {product.technologies.slice(0, 3).map((tech) => (
                      <b key={tech}>{tech}</b>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </FounderShell>
  );
}

export function ProductPageView({ locale, slug }: { locale: Locale; slug: string }) {
  const fa = locale === "fa";
  const product = products.find((item) => item.slug === slug);
  if (!product) return null;
  const productWebsite = "website" in product ? product.website : "";

  return (
    <FounderShell locale={locale}>
      <main className="mv-inner">
        <section className="mv-product-detail">
          <div className="mv-container">
            <div className="mv-product-detail-head">
              <span>{fa ? product.categoryFa : product.categoryEn}</span>
              <h1 className="ltr">{product.name}</h1>
            </div>

            <div className="mv-product-detail-grid">
              <div className="mv-product-detail-art">
                <span className="mv-detail-gridline" />
                <span className="mv-detail-orb mv-detail-orb-a" />
                <span className="mv-detail-orb mv-detail-orb-b" />
                <strong>{product.name}</strong>
              </div>

              <div className="mv-product-detail-copy">
                <p>{fa ? product.descriptionFa : product.descriptionEn}</p>
                <div className="mv-detail-tech">
                  {product.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="mv-detail-actions">
                  {productWebsite ? (
                    <a href={productWebsite} target="_blank" rel="noopener noreferrer" className="mv-pill mv-pill-solid">
                      {fa ? "مشاهده محصول" : "Visit product"} <b>↗</b>
                    </a>
                  ) : null}
                  <Link href={`/${locale}/contact`} className="mv-text-link">
                    {fa ? "گفتگو درباره همکاری" : "Talk collaboration"} <b>→</b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FounderShell>
  );
}

export function ContactPageView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";

  return (
    <FounderShell locale={locale}>
      <main className="mv-inner">
        <section className="mv-contact">
          <div className="mv-container">
            <span className="mv-section-index">01 / {fa ? "تماس" : "Contact"}</span>
            <h1>{fa ? "بیایید چیزی بسازیم." : "Let's build something."}</h1>

            <div className="mv-contact-grid">
              <div className="mv-contact-intro">
                <p>
                  {fa
                    ? "اگر درباره محصول، هوش مصنوعی، داده، توسعه کسب‌وکار یا یک تجربه دیجیتال جدید فکر می‌کنید، گفتگو را شروع کنیم."
                    : "If you're thinking about product, AI, data, business development or a new digital experience, let's start a conversation."}
                </p>
                <a href={`mailto:${founder.email}`} className="mv-contact-mail">
                  {founder.email}
                  <b>↗</b>
                </a>
              </div>

              <div className="mv-contact-list">
                <a href={`tel:${founder.phoneHref}`}>
                  <span>{fa ? "تلفن" : "Phone"}</span>
                  <strong>{founder.phone}</strong>
                  <b>↗</b>
                </a>
                <div>
                  <span>{fa ? "موقعیت" : "Location"}</span>
                  <strong>{fa ? founder.cityFa : founder.cityEn}</strong>
                </div>
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                  <strong>{fa ? "ارتباط حرفه‌ای" : "Professional network"}</strong>
                  <b>↗</b>
                </a>
                <a href={founder.github} target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <strong>{fa ? "پروژه‌ها و کد" : "Projects & code"}</strong>
                  <b>↗</b>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FounderShell>
  );
}