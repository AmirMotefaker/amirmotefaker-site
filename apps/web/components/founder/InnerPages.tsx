import Image from "next/image";
import Link from "next/link";
import FounderShell from "@/components/founder/FounderShell";
import LegacyPageContent from "@/components/founder/LegacyPageContent";
import { founder, storyEn, storyFa, timeline, type Locale } from "@/content/founder-site";
import { productPortfolio as products } from "@/content/product-portfolio";

export function AboutPageView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const story = fa ? storyFa : storyEn;

  return (
    <FounderShell locale={locale}>
      <main className="inner-page">
        <section className="wrap story-hero">
          <div className="story-hero-copy">
            <span className="sec-tag">{fa ? "داستان من" : "MY STORY"}</span>
            <h1>{fa ? "داستان امیر؛ از فناوری تا ساخت اکوسیستم" : "Amir's story: from technology to building ecosystems"}</h1>
            <p>{fa ? "یک روایت تصویری از مسیر من در فناوری، محصول، داده و رشد؛ با تمرکز بر ساخت چیزهایی که واقعاً ارزش می‌آفرینند." : "A visual story of my journey across technology, product, data and growth — focused on building things that truly create value."}</p>
            <div className="hero-actions">
              <Link href={`/${locale}/resume`} className="btn btn-primary">{fa ? "مشاهده رزومه" : "View resume"}</Link>
              <Link href={`/${locale}/contact`} className="btn btn-ghost">{fa ? "همکاری کنیم" : "Let's work together"}</Link>
            </div>
          </div>
          <div className="story-hero-visual">
            <div className="story-image-card">
              <Image src="/assets/profile/amir-motefaker.png" alt={fa ? founder.nameFa : founder.nameEn} width={540} height={540} priority />
            </div>
          </div>
        </section>

        <section className="wrap story-card-grid">
          {story.map((paragraph, index) => (
            <article className="story-card" key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{paragraph}</p>
            </article>
          ))}
        </section>

        <section className="wrap vision-strip">
          <article>
            <strong>{fa ? "فناوری" : "Technology"}</strong>
            <p>{fa ? "زیرساخت، سیستم، نرم‌افزار و معماری." : "Infrastructure, systems, software and architecture."}</p>
          </article>
          <article>
            <strong>{fa ? "محصول" : "Product"}</strong>
            <p>{fa ? "طراحی، تجربه، ارزش و مقیاس‌پذیری." : "Design, experience, value and scalability."}</p>
          </article>
          <article>
            <strong>{fa ? "رشد" : "Growth"}</strong>
            <p>{fa ? "داده، فروش، بازار و اکوسیستم." : "Data, sales, market and ecosystems."}</p>
          </article>
        </section>

        <LegacyPageContent locale={locale} pageId={122} />
      </main>
    </FounderShell>
  );
}

export function ResumePageView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  return (
    <FounderShell locale={locale}>
      <main className="inner-page">
        <section className="wrap inner-hero rich-hero">
          <span className="sec-tag">{fa ? "رزومه" : "RESUME"}</span>
          <h1>{fa ? "مسیر حرفه‌ای و نقاط عطف" : "Professional journey & milestones"}</h1>
          <p>{fa ? "مروری بر تجربه‌های کلیدی، تحصیلات، داده، زیرساخت، فروش، محصول و فناوری." : "A curated view of education, infrastructure, data, sales, product and technology milestones."}</p>
        </section>

        <section className="wrap timeline-grid">
          {timeline.map((item) => (
            <article className="timeline-card" key={item[3]}>
              <span className="timeline-year">{fa ? item[0] : item[1]}</span>
              <h3>{fa ? item[2] : item[3]}</h3>
              <p>{fa ? item[4] : item[5]}</p>
            </article>
          ))}
        </section>

        <LegacyPageContent locale={locale} pageId={622} />
      </main>
    </FounderShell>
  );
}

export function ProductsPageView({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  return (
    <FounderShell locale={locale}>
      <main className="inner-page">
        <section className="wrap inner-hero rich-hero">
          <span className="sec-tag">{fa ? "اکوسیستم محصولات" : "PRODUCT ECOSYSTEM"}</span>
          <h1>{fa ? "محصولات من با طراحی جذاب‌تر" : "Products with a richer visual design"}</h1>
          <p>{fa ? "هر محصول با یک هویت بصری پویا و یک توضیح روشن معرفی شده تا تجربه مرور محصولات حرفه‌ای‌تر و جذاب‌تر باشد." : "Each product is presented with a dynamic visual identity and a clearer presentation."}</p>
        </section>

        <section className="wrap products-showcase-grid">
          {products.map((product, index) => (
            <Link href={`/${locale}/products/${product.slug}`} className="product-spotlight-card" key={product.slug}>
              <div className={`product-visual pv-${(index % 4) + 1}`}>
                <span className="pulse-ring ring-1" />
                <span className="pulse-ring ring-2" />
                <span className="product-badge">{fa ? product.categoryFa : product.categoryEn}</span>
                <strong>{product.name}</strong>
              </div>
              <div className="product-spotlight-body">
                <h3>{product.name}</h3>
                <p>{fa ? product.descriptionFa : product.descriptionEn}</p>
                <div className="chip-row">
                  {product.technologies.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
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
      <main className="inner-page">
        <section className="wrap product-detail-shell">
          <div className="product-detail-copy">
            <span className="sec-tag">{fa ? product.categoryFa : product.categoryEn}</span>
            <h1 className="ltr">{product.name}</h1>
            <p>{fa ? product.descriptionFa : product.descriptionEn}</p>
            <div className="chip-row big-chips">
              {product.technologies.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <div className="hero-actions">
              {productWebsite ? (
                <a className="btn btn-primary" href={productWebsite} target="_blank" rel="noopener noreferrer">
                  {fa ? "مشاهده وب‌سایت محصول" : "Visit product website"}
                </a>
              ) : null}
              <Link className="btn btn-ghost" href={`/${locale}/contact`}>
                {fa ? "درخواست همکاری" : "Start a conversation"}
              </Link>
            </div>
          </div>
          <div className="product-detail-visual">
            <div className="product-hero-orbit">
              <span className="core">{product.name}</span>
              <span className="node n1" />
              <span className="node n2" />
              <span className="node n3" />
              <span className="node n4" />
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
      <main className="inner-page">
        <section className="wrap contact-shell">
          <div className="contact-main-card">
            <span className="sec-tag">{fa ? "تماس" : "CONTACT"}</span>
            <h1>{fa ? "بیایید درباره آینده صحبت کنیم" : "Let's talk about the future"}</h1>
            <p>{fa ? "اگر درباره محصول، هوش مصنوعی، همکاری، توسعه کسب‌وکار یا ساخت یک تجربه دیجیتال جدید ایده‌ای دارید، خوشحال می‌شوم در ارتباط باشیم." : "If you want to discuss product, AI, collaboration, business development or a new digital experience, let's connect."}</p>
            <div className="hero-actions">
              <a href={`mailto:${founder.email}`} className="btn btn-primary">{fa ? "ارسال ایمیل" : "Send email"}</a>
              <a href={`tel:${founder.phoneHref}`} className="btn btn-ghost">{fa ? "تماس تلفنی" : "Call now"}</a>
            </div>
          </div>

          <div className="contact-side-grid">
            <article className="contact-info-card">
              <strong>{fa ? "ایمیل" : "Email"}</strong>
              <a href={`mailto:${founder.email}`}>{founder.email}</a>
            </article>
            <article className="contact-info-card">
              <strong>{fa ? "تلفن" : "Phone"}</strong>
              <a href={`tel:${founder.phoneHref}`}>{founder.phone}</a>
            </article>
            <article className="contact-info-card">
              <strong>{fa ? "موقعیت" : "Location"}</strong>
              <span>{fa ? founder.cityFa : founder.cityEn}</span>
            </article>
            <article className="contact-info-card">
              <strong>{fa ? "شبکه‌ها" : "Networks"}</strong>
              <div className="social-links">
                <a href={founder.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={founder.x} target="_blank" rel="noopener noreferrer">X</a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </FounderShell>
  );
}
