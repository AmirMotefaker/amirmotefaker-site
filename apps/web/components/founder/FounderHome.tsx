import Image from "next/image";
import Link from "next/link";
import FounderShell from "@/components/founder/FounderShell";
import { founder, products, type Locale } from "@/content/founder-site";
import { getLegacyPages, getLegacyPosts } from "@/lib/legacy-wordpress";
import { formatSiteDate } from "@/lib/locale-format";

const disciplines = {
  fa: [
    ["01", "محصول و تجربه", "تبدیل ایده به محصولی روشن، قابل استفاده و قابل رشد."],
    ["02", "هوش مصنوعی و داده", "ساخت سیستم‌هایی که از داده برای تصمیم، اتوماسیون و تجربه بهتر استفاده می‌کنند."],
    ["03", "فناوری و رشد", "پیوند معماری فنی با بازار، فروش و مدل کسب‌وکار."],
  ],
  en: [
    ["01", "Product & Experience", "Turning ideas into clear, usable and scalable products."],
    ["02", "AI & Data", "Systems that use data for decisions, automation and better experiences."],
    ["03", "Technology & Growth", "Connecting technical architecture with market, sales and business models."],
  ],
};

export default function FounderHome({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const posts = [...getLegacyPosts()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const latestPosts = posts.slice(0, 4);
  const totalPosts = posts.length;
  const totalPages = getLegacyPages().length;
  const selectedProducts = products.slice(0, 4);

  return (
    <FounderShell locale={locale}>
      <main className="mv-main">
        <section className="mv-hero">
          <div className="mv-container">
            <div className="mv-hero-meta">
              <span>{fa ? "بنیان‌گذار / محصول / هوش مصنوعی" : "Founder / Product / AI"}</span>
              <span>{fa ? "قزوین، ایران" : "Qazvin, Iran"}</span>
            </div>

            <h1 className="mv-hero-title">
              {fa ? (
                <>
                  <span>ایده را</span>
                  <span>به محصول</span>
                  <span className="mv-accent-line">تبدیل می‌کنم.</span>
                </>
              ) : (
                <>
                  <span>I turn ideas</span>
                  <span>into products</span>
                  <span className="mv-accent-line">that move.</span>
                </>
              )}
            </h1>

            <div className="mv-hero-bottom">
              <p>
                {fa
                  ? "امیر متفکر؛ سازنده محصولات و سیستم‌های دیجیتال با تمرکز بر هوش مصنوعی، داده، تجربه کاربر و رشد."
                  : "Amir Motefaker builds digital products and systems at the intersection of AI, data, user experience and growth."}
              </p>
              <div className="mv-hero-actions">
                <Link href={`/${locale}/products`} className="mv-pill mv-pill-solid">
                  {fa ? "مشاهده کارها" : "See the work"}
                  <b>↗</b>
                </Link>
                <Link href={`/${locale}/about`} className="mv-text-link">
                  {fa ? "داستان من" : "My story"} <b>→</b>
                </Link>
              </div>
            </div>

            <div className="mv-scroll-cue">
              <span>{fa ? "برای دیدن ادامه اسکرول کنید" : "Scroll to explore"}</span>
              <i />
            </div>
          </div>
        </section>

        <section className="mv-marquee" aria-label={fa ? "محصولات" : "Products"}>
          <div className="mv-marquee-track">
            {[...products, ...products].map((product, index) => (
              <span key={`${product.slug}-${index}`}>
                {product.name}
                <b>✦</b>
              </span>
            ))}
          </div>
        </section>

        <section className="mv-statement">
          <div className="mv-container mv-statement-grid">
            <span className="mv-section-index">01 / {fa ? "رویکرد" : "Approach"}</span>
            <div>
              <h2>
                {fa
                  ? "فناوری وقتی ارزش دارد که حرکت ایجاد کند."
                  : "Technology matters when it creates movement."}
              </h2>
              <p>
                {fa
                  ? "محصول خوب فقط مجموعه‌ای از قابلیت‌ها نیست. باید مسئله را حل کند، تجربه‌ای روشن بسازد و بتواند همراه بازار رشد کند."
                  : "A good product is more than a feature set. It should solve a real problem, create a clear experience and grow with its market."}
              </p>
            </div>
          </div>
        </section>

        <section className="mv-portrait-band">
          <div className="mv-container">
            <div className="mv-portrait-frame">
              <div className="mv-portrait-copy">
                <span>{fa ? "فناوری / محصول / داده" : "Technology / Product / Data"}</span>
                <h2>{fa ? founder.nameFa : founder.nameEn}</h2>
              </div>
              <Image
                src="/assets/profile/amir-motefaker.png"
                alt={fa ? founder.nameFa : founder.nameEn}
                width={900}
                height={900}
                priority
              />
              <div className="mv-portrait-caption">
                <span>SQL</span>
                <span>Python</span>
                <span>AI</span>
                <span>Product</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mv-work">
          <div className="mv-container">
            <div className="mv-section-head">
              <span className="mv-section-index">02 / {fa ? "کارهای منتخب" : "Selected work"}</span>
              <h2>{fa ? "سیستم‌هایی که ساخته‌ام." : "Systems I've built."}</h2>
              <Link href={`/${locale}/products`} className="mv-text-link">
                {fa ? "همه محصولات" : "All products"} <b>→</b>
              </Link>
            </div>

            <div className="mv-work-list">
              {selectedProducts.map((product, index) => (
                <Link
                  href={`/${locale}/products/${product.slug}`}
                  className={`mv-work-card mv-work-${(index % 4) + 1}`}
                  key={product.slug}
                >
                  <div className="mv-work-art">
                    <span className="mv-work-number">0{index + 1}</span>
                    <div className="mv-work-window">
                      <i />
                      <i />
                      <i />
                      <strong>{product.name}</strong>
                    </div>
                    <div className="mv-work-orbit" />
                  </div>

                  <div className="mv-work-copy">
                    <span>{fa ? product.categoryFa : product.categoryEn}</span>
                    <h3>{product.name}</h3>
                    <p>{fa ? product.descriptionFa : product.descriptionEn}</p>
                    <b className="mv-work-arrow">↗</b>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mv-stats">
          <div className="mv-container mv-stats-grid">
            <div>
              <strong>{products.length}</strong>
              <span>{fa ? "محصول و پلتفرم" : "Products & platforms"}</span>
            </div>
            <div>
              <strong>{totalPosts}</strong>
              <span>{fa ? "مطلب فناوری" : "Technology stories"}</span>
            </div>
            <div>
              <strong>{totalPages}</strong>
              <span>{fa ? "صفحه مهاجرت‌شده" : "Migrated pages"}</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>{fa ? "محور آینده" : "Future focus"}</span>
            </div>
          </div>
        </section>

        <section className="mv-capabilities" id="expertise">
          <div className="mv-container mv-capabilities-grid">
            <div className="mv-capabilities-title">
              <span className="mv-section-index">03 / {fa ? "توانمندی‌ها" : "Capabilities"}</span>
              <h2>{fa ? "از استراتژی تا ساخت." : "From strategy to build."}</h2>
            </div>

            <div className="mv-capability-list">
              {disciplines[locale].map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <b>↗</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mv-news">
          <div className="mv-container">
            <div className="mv-section-head">
              <span className="mv-section-index">04 / {fa ? "اخبار فناوری" : "Insights"}</span>
              <h2>{fa ? "آخرین نوشته‌ها." : "Latest thinking."}</h2>
              <Link href={`/${locale}/news`} className="mv-text-link">
                {fa ? "آرشیو کامل" : "Full archive"} <b>→</b>
              </Link>
            </div>

            <div className="mv-news-grid">
              {latestPosts.map((post, index) => (
                <Link
                  href={`/${locale}/news/${encodeURIComponent(post.slug)}`}
                  className={`mv-news-card ${index === 0 ? "mv-news-featured" : ""}`}
                  key={post.id}
                >
                  <div className="mv-news-image">
                    {post.featured_image ? (
                      <img src={post.featured_image} alt={post.title} loading="lazy" />
                    ) : (
                      <span>AM / INSIGHT</span>
                    )}
                  </div>
                  <div className="mv-news-copy">
                    <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt_text}</p>
                    <b>↗</b>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mv-cta">
          <div className="mv-container">
            <div className="mv-cta-panel">
              <span>{fa ? "ایده‌ای دارید؟" : "Have an idea?"}</span>
              <h2>{fa ? "بیایید سیستم بعدی را بسازیم." : "Let's build the next system."}</h2>
              <Link href={`/${locale}/contact`} className="mv-cta-link">
                {fa ? "شروع گفتگو" : "Start a conversation"} <b>↗</b>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </FounderShell>
  );
}