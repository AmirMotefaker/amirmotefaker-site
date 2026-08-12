import Image from "next/image";
import Link from "next/link";
import FounderShell from "@/components/founder/FounderShell";
import { founder, type Locale } from "@/content/founder-site";
import { productPortfolio as products } from "@/content/product-portfolio";
import { getLegacyPages, getLegacyPosts } from "@/lib/legacy-wordpress";
import { formatSiteDate } from "@/lib/locale-format";

const focusCards = {
  fa: [
    ["AI", "محصولات هوش مصنوعی", "از ایده تا ساخت پلتفرم‌های واقعی با تمرکز بر فارسی، تجربه کاربر و ارزش بازار."],
    ["DATA", "داده و بینش", "تبدیل داده، تحلیل و ابزار گزارش‌گیری به تصمیم‌هایی که رشد را سریع‌تر می‌کنند."],
    ["GROWTH", "فناوری + رشد", "ترکیب معماری محصول، فروش، اتوماسیون و استراتژی برای ساخت اکوسیستم‌های ماندگار."],
  ],
  en: [
    ["AI", "AI Products", "From idea to launch for real AI platforms with a focus on Persian language, UX and market value."],
    ["DATA", "Data & Insight", "Turning data, analytics and reporting into decisions that accelerate growth."],
    ["GROWTH", "Technology + Growth", "Combining product architecture, sales, automation and strategy for lasting ecosystems."],
  ],
};

export default function FounderHome({ locale }: { locale: Locale }) {
  const fa = locale === "fa";
  const posts = [...getLegacyPosts()].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latestPosts = posts.slice(0, 6);
  const totalPosts = posts.length;
  const totalPages = getLegacyPages().length;

  return (
    <FounderShell locale={locale}>
      <main>
        <section className="hero-section">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="hero-pill">{fa ? "بنیان‌گذار • محصول • داده • هوش مصنوعی" : "Founder • Product • Data • AI"}</span>
              <h1>
                {fa ? (
                  <>
                    ساختن آینده
                    <br />
                    <span>با هوش مصنوعی</span>
                  </>
                ) : (
                  <>
                    Building the Future
                    <br />
                    <span>with AI</span>
                  </>
                )}
              </h1>
              <p>
                {fa
                  ? "امیر متفکر — معمار محصولات و پلتفرم‌های هوشمند. از تحلیل داده تا ساخت اکوسیستم‌های دیجیتال؛ ترکیبی از فناوری، محصول و رشد برای ساختن چیزهایی که واقعاً کار می‌کنند."
                  : "Amir Motefaker — architect of intelligent products and platforms. From data insight to digital ecosystems, combining technology, product and growth to build things that truly work."}
              </p>

              <div className="hero-actions">
                <Link href={`/${locale}/products`} className="btn btn-primary">{fa ? "اکوسیستم محصولات" : "Explore products"}</Link>
                <Link href={`/${locale}/about`} className="btn btn-ghost">{fa ? "داستان من" : "My story"}</Link>
              </div>

              <div className="hero-stats">
                <div className="stat-card">
                  <strong>{products.length}</strong>
                  <span>{fa ? "محصول" : "Products"}</span>
                </div>
                <div className="stat-card">
                  <strong>{totalPosts}</strong>
                  <span>{fa ? "مطلب فناوری" : "Tech articles"}</span>
                </div>
                <div className="stat-card">
                  <strong>{totalPages}</strong>
                  <span>{fa ? "صفحه آرشیوی" : "Legacy pages"}</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-showcase">
                <div className="profile-card">
                  <Image src="/assets/profile/amir-motefaker.png" alt={fa ? founder.nameFa : founder.nameEn} width={480} height={480} priority />
                </div>
                <div className="floating-chip chip-top">{fa ? "علاقه‌مند به فناوری" : "Technology Enthusiast"}</div>
                <div className="floating-chip chip-mid">{fa ? "محصولات هوشمند" : "Intelligent Products"}</div>
                <div className="floating-chip chip-bottom">SQL • Python • AI</div>
              </div>
            </div>
          </div>
        </section>

        <section className="pad" id="expertise">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="sec-tag">{fa ? "تخصص" : "EXPERTISE"}</span>
                <h2 className="sec-title">{fa ? "ترکیبی از محصول، فناوری و رشد" : "A blend of product, technology and growth"}</h2>
                <p className="sec-sub">{fa ? "سه لایه‌ای که رویکرد کاری من را شکل می‌دهند." : "The three layers that define how I work."}</p>
              </div>
            </div>
            <div className="focus-grid">
              {focusCards[locale].map(([tag, title, desc]) => (
                <article className="focus-card" key={tag}>
                  <span className="focus-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pad product-showcase-section">
          <div className="wrap">
            <div className="sec-head products-head">
              <div>
                <span className="sec-tag">{fa ? "محصولات" : "PRODUCTS"}</span>
                <h2 className="sec-title">{fa ? "محصولاتی که ساخته‌ام و می‌سازم." : "My products & platforms"}</h2>
                <p className="sec-sub">{fa ? "از ابزارهای هوش مصنوعی و فناوری زبان فارسی تا فین‌تک، فودتک و پلتفرم‌های دیجیتال؛ تمرکز من ساخت محصولاتی است که فناوری را به مسئله‌های واقعی کسب‌وکار و زندگی روزمره متصل می‌کنند." : "Each product has a clear identity, a defined need and a scalable experience."}</p>
              </div>
              <Link href={`/${locale}/products`} className="btn btn-ghost">{fa ? "مشاهده همه محصولات" : "See all products"}</Link>
            </div>

            <div className="showcase-grid">
              {products.map((product, index) => (
                <Link href={`/${locale}/products/${product.slug}`} className="showcase-card" key={product.slug}>
                  <div className={`showcase-art art-${(index % 4) + 1}`}>
                    <span className="orb orb-a" />
                    <span className="orb orb-b" />
                    <span className="gridline" />
                    <strong>{product.name}</strong>
                  </div>
                  <div className="showcase-body">
                    <span className="p-cat">{fa ? product.categoryFa : product.categoryEn}</span>
                    <h3>{product.name}</h3>
                    <p>{fa ? product.descriptionFa : product.descriptionEn}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pad home-news" data-home-news="wordpress">
          <div className="wrap">
            <div className="sec-head home-news-head">
              <div>
                <span className="sec-tag">{fa ? "اخبار فناوری" : "TECHNOLOGY NEWS"}</span>
                <h2 className="sec-title">{fa ? "تازه‌ترین مطالب" : "Latest stories"}</h2>
                <p className="sec-sub">{fa ? "آخرین مطالب واقعی منتقل‌شده از سایت قبلی." : "Recent stories migrated from the legacy site."}</p>
              </div>
              <Link href={`/${locale}/news`} className="btn btn-ghost">{fa ? "مشاهده همه اخبار" : "View all news"}</Link>
            </div>

            <div className="home-news-grid">
              {latestPosts.map((post) => (
                <Link href={`/${locale}/news/${encodeURIComponent(post.slug)}`} className="home-news-card" key={post.id}>
                  <div className="home-news-cover">
                    {post.featured_image ? <img src={post.featured_image} alt={post.title} loading="lazy" /> : <div className="home-news-placeholder">AM / NEWS</div>}
                  </div>
                  <div className="home-news-body">
                    <time dateTime={post.date}>{formatSiteDate(post.date, locale)}</time>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt_text}</p>
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
