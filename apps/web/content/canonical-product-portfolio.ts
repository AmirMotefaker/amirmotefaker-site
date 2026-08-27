import { getBrandOrder } from "@/content/brand-registry";
import { portfolioAssets, productPortfolio, type Product } from "@/content/product-portfolio";

/**
 * Canonical public portfolio adapter.
 *
 * v9 keeps the historical dataset intact while public surfaces consume a
 * founder-confirmed, truth-safe view of the portfolio. This avoids rewriting
 * legacy source data in one risky step and gives us one place to enforce
 * canonical names, lifecycle, depth and cross-product context.
 */
const authorityOverrides: Record<string, Partial<Product>> = {
  linkresan: {
    status: "live",
    positioning: "Link Management & Intelligence Platform",
    shortDescriptionFa:
      "لینک‌رسان از کوتاه‌سازی لینک شروع می‌کند و آن را به مدیریت، اندازه‌گیری و توزیع هوشمند لینک‌های دیجیتال برای افراد، برندها و تیم‌ها گسترش می‌دهد.",
    shortDescriptionEn:
      "LinkResan starts with URL shortening and expands toward measurable, intelligent link management and distribution for individuals, brands and teams.",
    problemFa: [
      "انتشار لینک بدون اندازه‌گیری، دید محدودی از عملکرد کانال‌ها و کمپین‌ها ایجاد می‌کند.",
      "لینک‌های طولانی، UTM، QR و مقصدهای متعدد می‌توانند مدیریت انتشار و گزارش‌گیری را پراکنده کنند.",
    ],
    problemEn: [
      "Publishing links without measurement creates limited visibility into channel and campaign performance.",
      "Long URLs, UTM parameters, QR codes and multiple destinations can fragment publishing and reporting workflows.",
    ],
    solutionFa:
      "LinkResan کوتاه‌سازی، تحلیل، QR، UTM و مسیر توسعه به سمت هدایت هوشمند را در یک جریان واحد مدیریت لینک جمع می‌کند.",
    solutionEn:
      "LinkResan brings shortening, analytics, QR, UTM and a path toward smarter routing into one link-management workflow.",
    roadmapFa: [
      "تقویت تحلیل عملکرد لینک و گزارش‌گیری",
      "یکپارچه‌سازی بهتر QR و UTM در جریان انتشار",
      "توسعه هدایت هوشمند و Deep Link به‌عنوان لایه‌های بعدی مدیریت لینک",
    ],
    roadmapEn: [
      "Strengthen link analytics and reporting",
      "Integrate QR and UTM more deeply into publishing workflows",
      "Extend smart routing and deep-link capabilities as the next link-management layers",
    ],
    amirRoleFa: "بنیان‌گذار و مالک محصول؛ هدایت مسیر محصول، تجربه کاربری و توسعه کسب‌وکار.",
    amirRoleEn: "Founder and product owner, directing product strategy, user experience and business development.",
    related: ["idehjo", "tasvia"],
  },
  farsio: {
    status: "live",
    positioning: "Persian AI & Language Technology Platform",
    shortDescriptionFa:
      "فارسیو یک خانواده محصول هوش مصنوعی فارسی است که نوشتن، فهمیدن، ترجمه، خلاصه‌سازی و مصرف صوتی محتوای فارسی را در تجربه‌های تخصصی‌تر گرد هم می‌آورد.",
    shortDescriptionEn:
      "Farsio is a Persian AI product family for writing, understanding, translating, summarizing and consuming Persian content through focused language experiences.",
    currentProductFa:
      "نوشت‌یار برای کمک به نوشتن و اصلاح فارسی در مرورگر؛ آوایار برای استخراج، خلاصه‌سازی، ترجمه و تجربه صوتی محتوای فارسی و انگلیسی.",
    currentProductEn:
      "NeveshtYar focuses on Persian writing assistance in the browser; AvaYar focuses on extraction, summarization, translation and spoken-content experiences for Persian and English content.",
    problemFa: [
      "کاربر فارسی‌زبان برای نوشتن، اصلاح، خلاصه‌سازی، ترجمه و شنیدن محتوا معمولاً میان ابزارهای جداگانه جابه‌جا می‌شود.",
      "ابزارهای عمومی هوش مصنوعی همیشه ظرافت‌های زبان فارسی و تجربه طبیعی کاربر فارسی‌زبان را در مرکز طراحی قرار نمی‌دهند.",
    ],
    problemEn: [
      "Persian users often move between separate tools for writing, correction, summarization, translation and listening.",
      "General AI products do not always put Persian language quality and natural Persian user experience at the center of product design.",
    ],
    solutionFa:
      "فارسیو قابلیت‌های تخصصی زبان فارسی را به مجموعه‌ای از محصولات کاربردی تبدیل می‌کند تا کاربر بتواند نوشتن، فهم و مصرف محتوا را با اصطکاک کمتر انجام دهد.",
    solutionEn:
      "Farsio turns Persian-language intelligence into focused products that reduce friction across writing, understanding and content consumption.",
    roadmapFa: [
      "تقویت نوشت‌یار برای تجربه پایدارتر در مرورگر",
      "تکمیل آوایار برای خواندن، خلاصه‌سازی و ترجمه محتوای وب",
      "یکپارچه‌سازی تجربه‌های زبانی فارسی در قالب یک اکوسیستم محصولی منسجم",
    ],
    roadmapEn: [
      "Strengthen NeveshtYar as a reliable browser writing experience",
      "Complete AvaYar for web reading, summarization and translation",
      "Connect Persian-language experiences into a coherent product ecosystem",
    ],
    amirRoleFa: "بنیان‌گذار و هدایت‌کننده استراتژی محصول و اکوسیستم فارسیو.",
    amirRoleEn: "Founder, directing product strategy and the Farsio product ecosystem.",
    related: ["zobdino", "fahmio"],
  },
  fahmio: {
    status: "development",
    positioning: "Persian-first Adaptive Learning System",
    shortDescriptionFa:
      "فهمیو یک سیستم یادگیری تطبیقی فارسی‌محور است که ارزیابی تشخیصی، گراف مهارت، تمرین تطبیقی و معلم هوشمند را برای ساخت مسیر یادگیری شخصی کنار هم قرار می‌دهد.",
    shortDescriptionEn:
      "Fahmio is a Persian-first adaptive learning system combining diagnostic assessment, skill graphs, adaptive practice and an AI teacher to build personalized learning paths.",
    problemFa: [
      "آموزش یکسان برای همه، تفاوت سطح، سرعت یادگیری و شکاف مهارتی دانش‌آموزان را نادیده می‌گیرد.",
      "خانواده و معلم برای تصمیم بهتر به تصویری پیوسته از پیشرفت، مهارت و نیازهای یادگیرنده احتیاج دارند.",
    ],
    problemEn: [
      "One-size-fits-all instruction ignores differences in learner level, pace and skill gaps.",
      "Families and teachers need a continuous view of learner progress, skills and needs to make better decisions.",
    ],
    solutionFa:
      "فهمیو با مدل‌کردن وضعیت یادگیرنده و اتصال آن به محتوای آموزشی، تمرین و بازخورد را متناسب با نیاز هر دانش‌آموز تنظیم می‌کند.",
    solutionEn:
      "Fahmio models learner state and connects it to educational content so practice and feedback can adapt to each student's needs.",
    roadmapFa: [
      "تکمیل پایه اول بر اساس محتوای سال تحصیلی ۱۴۰۵–۱۴۰۶",
      "گسترش گراف مهارت و ارزیابی تشخیصی",
      "تقویت معلم هوشمند و حلقه بازخورد برای یادگیری تطبیقی",
    ],
    roadmapEn: [
      "Complete first-grade coverage for the 2026–2027 school year",
      "Expand the skill graph and diagnostic assessment layer",
      "Strengthen the AI teacher and adaptive-learning feedback loop",
    ],
    amirRoleFa: "بنیان‌گذار و هدایت‌کننده معماری محصول، تجربه یادگیری و مسیر توسعه.",
    amirRoleEn: "Founder, directing product architecture, learning experience and development roadmap.",
    related: ["farsio", "zobdino"],
  },
  zobdino: {
    status: "development",
    positioning: "AI Book Intelligence & Audio Platform",
    shortDescriptionFa:
      "زبدینو یک پلتفرم هوشمندی کتاب است که فایل کتاب را دریافت می‌کند، محتوا را استخراج و به خلاصه فارسی و تجربه صوتی تبدیل می‌کند.",
    shortDescriptionEn:
      "Zobdino is a book-intelligence platform that ingests book files, extracts content and turns it into Persian summaries and audio experiences.",
    problemFa: [
      "مطالعه کامل و استخراج نکات کلیدی از کتاب‌های طولانی زمان‌بر است.",
      "فرمت‌های متعدد کتاب و کیفیت متفاوت فایل‌ها، تبدیل قابل اتکا به متن، خلاصه و صوت را پیچیده می‌کند.",
    ],
    problemEn: [
      "Reading long books and extracting key ideas takes significant time.",
      "Multiple book formats and inconsistent source quality make reliable text, summary and audio conversion difficult.",
    ],
    solutionFa:
      "زبدینو ورود فایل، استخراج محتوا، خلاصه‌سازی فارسی و تولید صوت را در یک جریان واحد هوشمندی کتاب کنار هم قرار می‌دهد.",
    solutionEn:
      "Zobdino combines file ingestion, content extraction, Persian summarization and audio generation in one book-intelligence workflow.",
    roadmapFa: [
      "گسترش پشتیبانی از فرمت‌های کتاب و کیفیت استخراج",
      "افزایش کتاب‌ها و دسته‌بندی محتوایی",
      "تکمیل تجربه صوتی با صداهای فارسی زن و مرد و جریان تولید پایدارتر",
    ],
    roadmapEn: [
      "Expand book-format support and extraction quality",
      "Grow the catalog and content taxonomy",
      "Complete the audio experience with Persian male/female voices and a more reliable production pipeline",
    ],
    amirRoleFa: "بنیان‌گذار و هدایت‌کننده محصول، تجربه محتوا و یکپارچگی صوت در اکوسیستم.",
    amirRoleEn: "Founder, directing product strategy, content experience and ecosystem audio integration.",
    related: ["farsio", "fahmio"],
  },
  filmtrack: {
    status: "development",
    positioning: "Persian Movie Intelligence & Tracking Platform",
    shortDescriptionFa:
      "فیلم‌ترک تجربه‌ای فارسی‌محور برای مدیریت فهرست تماشا، ردیابی فیلم و سریال، کشف آثار و ساخت ارتباط اجتماعی پیرامون سلیقه سینمایی است.",
    shortDescriptionEn:
      "FilmTrack is a Persian-first movie and TV experience for watch tracking, discovery, ratings and social context around viewing taste.",
    problemFa: [
      "فهرست تماشا، وضعیت دیدن آثار و امتیازها میان سرویس‌ها و یادداشت‌های مختلف پراکنده می‌شوند.",
      "کاربر فارسی‌زبان به تجربه‌ای محلی‌تر برای کشف، دنبال‌کردن و اشتراک‌گذاری علاقه‌مندی‌های سینمایی نیاز دارد.",
    ],
    problemEn: [
      "Watchlists, viewing progress and ratings are scattered across separate services and personal notes.",
      "Persian-speaking users benefit from a more localized experience for discovery, tracking and sharing film interests.",
    ],
    solutionFa:
      "FilmTrack مدیریت تماشا، کشف، امتیازدهی و تعامل اجتماعی را در یک تجربه منسجم برای فیلم و سریال کنار هم قرار می‌دهد.",
    solutionEn:
      "FilmTrack combines watch tracking, discovery, ratings and social interaction in one coherent movie and TV experience.",
    roadmapFa: [
      "تکمیل هسته Watchlist و Tracking",
      "تقویت Discovery و پیشنهادهای شخصی‌تر",
      "اجرای مدل درآمدی اشتراکی و قابلیت‌های ارزشمند پولی به‌جای اتکای کامل به رایگان‌بودن",
    ],
    roadmapEn: [
      "Complete the watchlist and tracking core",
      "Strengthen discovery and more personalized recommendations",
      "Implement subscription-based monetization and paid-value features instead of relying on a fully free model",
    ],
    amirRoleFa: "بنیان‌گذار و مالک محصول؛ هدایت استراتژی محصول، تجربه کاربر و مدل درآمدی.",
    amirRoleEn: "Founder and product owner, directing product strategy, user experience and monetization.",
    related: ["idehjo", "linkresan"],
  },
  idehjo: {
    status: "live",
    positioning: "Innovation Intelligence & Idea Discovery Platform",
    shortDescriptionFa:
      "ایده‌جو یک رادار روزانه نوآوری است که کشف ایده‌های جهانی، رأی کاربران، ترجمه فارسی و تحلیل هوش مصنوعی را برای بررسی فرصت‌های بازار کنار هم قرار می‌دهد.",
    shortDescriptionEn:
      "IdehJo is a daily innovation radar combining global idea discovery, user voting, Persian translation and AI analysis for market opportunity assessment.",
    problemFa: [
      "حجم بالای محصولات، ایده‌ها و خبرهای جهانی تشخیص نوآوری‌های واقعاً مهم را زمان‌بر می‌کند.",
      "ترجمه صرف بدون تحلیل، زمینه و ارزیابی بازار برای تصمیم‌گیری درباره یک ایده کافی نیست.",
    ],
    problemEn: [
      "The volume of global products, ideas and news makes it time-consuming to identify what genuinely matters.",
      "Translation alone is not enough without analysis, context and market assessment.",
    ],
    solutionFa:
      "ایده‌جو کشف، رأی، ترجمه و تحلیل را در یک جریان روزانه ترکیب می‌کند تا ایده‌های مهم سریع‌تر دیده و از زاویه فرصت بازار بررسی شوند.",
    solutionEn:
      "IdehJo combines discovery, voting, translation and analysis in one daily flow so important ideas can surface faster and be evaluated through a market-opportunity lens.",
    roadmapFa: [
      "پایدار نگه‌داشتن تازگی و اعتبار داده روزانه",
      "تقویت تحلیل ایده و مقایسه فرصت بازار",
      "توسعه از فید ایده به ابزار تصمیم‌گیری و هوشمندی نوآوری",
    ],
    roadmapEn: [
      "Keep daily data freshness and integrity reliable",
      "Strengthen idea analysis and market-opportunity comparison",
      "Evolve from an idea feed into an innovation-intelligence decision tool",
    ],
    amirRoleFa: "بنیان‌گذار و هدایت‌کننده محصول، کیفیت داده و مسیر تبدیل ایده به بینش قابل استفاده.",
    amirRoleEn: "Founder, directing product strategy, data quality and the path from idea discovery to usable insight.",
    related: ["linkresan", "filmtrack"],
  },
};

const enrichProduct = (product: Product): Product => {
  const override = authorityOverrides[product.slug];
  if (!override) return product;

  return {
    ...product,
    ...override,
    hero: {
      ...product.hero,
      ...(override.hero ?? {}),
    },
  } as Product;
};

const legacySettlementProduct = portfolioAssets.find((product) => product.slug === "shiftpay");

const tasviaProduct: Product | undefined = legacySettlementProduct
  ? ({
      ...legacySettlementProduct,
      slug: "tasvia",
      name: "Tasvia",
      domain: "",
      industry: "FinTech",
      category: "Business Settlement Platform",
      positioning: "FinTech settlement infrastructure for SMEs",
      filterGroup: "FinTech",
      status: "development",
      shortDescriptionFa:
        "تسویا یک پلتفرم فین‌تک برای مدیریت شفاف و ساختاریافته پرداخت، تسویه و جریان‌های مالی کسب‌وکارهای کوچک و متوسط است.",
      shortDescriptionEn:
        "Tasvia is a FinTech platform for structured business payments, settlement and money workflows for SMEs.",
      hero: {
        ...legacySettlementProduct.hero,
        eyebrow: "FINTECH / BUSINESS SETTLEMENT",
        titleFa: "تسویه کسب‌وکار، شفاف‌تر و ساختاریافته‌تر.",
        titleEn: "Structured settlement infrastructure for SMEs.",
        descriptionFa:
          "تسویا روی جریان‌های پرداخت و تسویه کسب‌وکار تمرکز دارد و برای ساخت زیرساخت مالی شفاف، قابل پیگیری و قابل توسعه طراحی می‌شود.",
        descriptionEn:
          "Tasvia focuses on business payment and settlement workflows, designed as transparent, traceable and extensible financial infrastructure.",
        primaryCtaFa: "شناخت تسویا",
        primaryCtaEn: "Explore Tasvia",
        secondaryCtaFa: "مسیر ساخت",
        secondaryCtaEn: "Build journey",
      },
      problemFa: [
        "تسویه با تأمین‌کنندگان و ذی‌نفعان در بسیاری از کسب‌وکارهای کوچک و متوسط به فرایندهای دستی و پراکنده وابسته است.",
        "نبود یک جریان شفاف و قابل پیگیری برای پرداخت و تسویه، کنترل مالی و عملیات روزانه را دشوار می‌کند.",
      ],
      problemEn: [
        "Supplier and stakeholder settlement in many SMEs still depends on fragmented, manual workflows.",
        "Without a transparent and traceable settlement flow, financial control and daily operations become harder to manage.",
      ],
      solutionFa:
        "تسویا پرداخت و تسویه را در یک جریان مالی ساختاریافته قرار می‌دهد تا کسب‌وکار بتواند انتقال‌ها، ذی‌نفعان و وضعیت تسویه را با دید روشن‌تری مدیریت کند.",
      solutionEn:
        "Tasvia organizes payments and settlement into a structured financial workflow so businesses can manage transfers, beneficiaries and settlement status with clearer operational visibility.",
      visionFa:
        "ساخت زیرساخت تسویه دیجیتال قابل اتکا برای کسب‌وکارهای کوچک و متوسط و ساده‌کردن جریان پول میان کسب‌وکار و ذی‌نفعان آن.",
      visionEn:
        "Build dependable digital settlement infrastructure for SMEs and simplify how money moves between businesses and their stakeholders.",
      missionFa:
        "شفاف‌تر، قابل پیگیری‌تر و قابل توسعه‌تر کردن پرداخت و تسویه کسب‌وکار با کمک فناوری مالی و اتوماسیون.",
      missionEn:
        "Make business payments and settlement more transparent, traceable and extensible through financial technology and automation.",
      roadmapFa: [
        "تثبیت مدل دامنه و جریان‌های اصلی تسویه",
        "ساخت تجربه قابل پیگیری برای کسب‌وکار و ذی‌نفعان",
        "آماده‌سازی زیرساخت برای اتصال‌های مالی و اتوماسیون بیشتر",
      ],
      roadmapEn: [
        "Stabilize the core settlement domain and workflows",
        "Build traceable experiences for businesses and beneficiaries",
        "Prepare the foundation for deeper financial integrations and automation",
      ],
      amirRoleFa: "بنیان‌گذار و هدایت‌کننده استراتژی محصول، مدل کسب‌وکار و معماری دامنه مالی.",
      amirRoleEn: "Founder, directing product strategy, business model and financial-domain architecture.",
      criticalPositioningFa:
        "تسویا یک زیرساخت تسویه و جریان مالی برای کسب‌وکارهاست و نباید به یک صنعت خاص یا یک ابزار ساده انتقال پول محدود شود.",
      criticalPositioningEn:
        "Tasvia is business settlement infrastructure and should not be positioned as an industry-specific product or a simple money-transfer utility.",
      related: ["linkresan"],
    } as Product)
  : undefined;

export const canonicalProductPortfolio: Product[] = [
  ...productPortfolio.map(enrichProduct),
  ...(tasviaProduct ? [tasviaProduct] : []),
].sort((a, b) => getBrandOrder(a.slug) - getBrandOrder(b.slug) || a.name.localeCompare(b.name));

export function getCanonicalProduct(slug: string) {
  return canonicalProductPortfolio.find((product) => product.slug === slug);
}
