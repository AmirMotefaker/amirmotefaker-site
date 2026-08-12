export type ProductStatus = "live" | "development" | "discovery" | "concept" | "to-confirm";

export type PortfolioProduct = {
  slug: string;
  name: string;
  domain: string;
  industry: string;
  category: string;
  positioning: string;
  filterGroup:
    | "AI & Intelligent Products"
    | "FinTech"
    | "FoodTech"
    | "Enterprise Technology"
    | "Digital Platforms"
    | "EntertainmentTech";
  shortDescriptionFa: string;
  shortDescriptionEn: string;
  status: ProductStatus;
  featured: boolean;
  tags: string[];
  hero: {
    eyebrow: string;
    titleFa: string;
    titleEn: string;
    descriptionFa: string;
    descriptionEn: string;
    primaryCtaFa: string;
    primaryCtaEn: string;
    secondaryCtaFa: string;
    secondaryCtaEn: string;
  };
  currentProductFa?: string;
  productPromiseFa?: string;
  criticalPositioningFa?: string;
  doNotPositionAs?: string[];
  coreAreas?: string[];
  capabilities: string[];
  futureDirections?: string[];
  problemFa: string[];
  problemEn: string[];
  solutionFa: string;
  solutionEn: string;
  technology: string[];
  visionFa: string;
  visionEn: string;
  missionFa: string;
  missionEn: string;
  roadmapFa: string[];
  roadmapEn: string[];
  amirRoleFa: string;
  amirRoleEn: string;
  visualDirectionFa: string;
  related: string[];
};

const TO_CONFIRM = "CONTENT TO CONFIRM";

const rawProductPortfolio: PortfolioProduct[] = [
  {
    slug: "primesys",
    name: "PrimeSYS",
    domain: "PrimeSYS.ir",
    industry: "Enterprise Technology",
    category: "Technology Company / Solutions",
    positioning: "Enterprise Technology, AI, Hardware & Software",
    filterGroup: "Enterprise Technology",
    shortDescriptionFa:
      "PrimeSYS یک کسب‌وکار فناوری با تمرکز بر نرم‌افزار، هوش مصنوعی، Computer Vision، سخت‌افزار، گیمینگ، رندرینگ و AIDC است.",
    shortDescriptionEn: TO_CONFIRM,
    status: "to-confirm",
    featured: true,
    tags: ["Enterprise Technology", "AI", "Computer Vision", "Hardware", "Software", "AIDC"],
    hero: {
      eyebrow: "ENTERPRISE TECHNOLOGY",
      titleFa: "فناوری برای مسئله‌های واقعی کسب‌وکار.",
      titleEn: "Enterprise Technology, AI, Hardware & Software",
      descriptionFa:
        "PrimeSYS یک کسب‌وکار فناوری با تمرکز بر نرم‌افزار، هوش مصنوعی، Computer Vision، سخت‌افزار، گیمینگ، رندرینگ و AIDC است.",
      descriptionEn: TO_CONFIRM,
      primaryCtaFa: "مشاهده جزئیات",
      primaryCtaEn: "Explore product",
      secondaryCtaFa: "مشاهده PrimeSYS",
      secondaryCtaEn: "Visit PrimeSYS",
    },
    coreAreas: [
      "Cloud accounting & financial software",
      "Face recognition",
      "License plate recognition",
      "Hardware, gaming & rendering",
      "Barcode / RFID / AIDC",
      "Logistics technology",
    ],
    capabilities: [
      "Cloud accounting & financial software",
      "Face recognition",
      "License plate recognition",
      "Hardware, gaming & rendering",
      "Barcode / RFID / AIDC",
      "Logistics technology",
    ],
    problemFa: [TO_CONFIRM],
    problemEn: [TO_CONFIRM],
    solutionFa: TO_CONFIRM,
    solutionEn: TO_CONFIRM,
    technology: ["Artificial Intelligence", "Computer Vision", "Hardware", "Software", "AIDC"],
    visionFa:
      "تبدیل‌شدن به یک مجموعه فناوری چندلایه که نرم‌افزار، هوش مصنوعی و زیرساخت سخت‌افزاری را برای حل مسائل واقعی کسب‌وکارها یکپارچه می‌کند.",
    visionEn: TO_CONFIRM,
    missionFa:
      "طراحی و ارائه راهکارهای فناوری قابل اتکا که به سازمان‌ها و کسب‌وکارها کمک می‌کنند عملیات خود را هوشمندتر، سریع‌تر و مقیاس‌پذیرتر کنند.",
    missionEn: TO_CONFIRM,
    roadmapFa: [TO_CONFIRM],
    roadmapEn: [TO_CONFIRM],
    amirRoleFa: TO_CONFIRM,
    amirRoleEn: TO_CONFIRM,
    visualDirectionFa:
      "Corporate / technical / premium. Architecture diagrams، product modules، hardware renders و case-study blocks.",
    related: ["shiftpay", "restyar"],
  },
  {
    slug: "restyar",
    name: "RestYar",
    domain: "RestYar.ir",
    industry: "FoodTech / RestaurantTech",
    category: "Cloud SaaS",
    positioning: "AI Operating System for Restaurants",
    filterGroup: "FoodTech",
    shortDescriptionFa: "پلتفرم ابری مدیریت کافه، رستوران، فست‌فود و مجموعه‌های غذایی.",
    shortDescriptionEn: TO_CONFIRM,
    status: "to-confirm",
    featured: true,
    tags: ["FoodTech", "RestaurantTech", "Cloud SaaS", "AI", "Analytics"],
    hero: {
      eyebrow: "FOODTECH / RESTAURANTTECH",
      titleFa: "مدیریت هوشمند کسب‌وکارهای غذایی.",
      titleEn: "AI Operating System for Restaurants",
      descriptionFa: "پلتفرم ابری مدیریت کافه، رستوران، فست‌فود و مجموعه‌های غذایی.",
      descriptionEn: TO_CONFIRM,
      primaryCtaFa: "مشاهده RestYar",
      primaryCtaEn: "Explore RestYar",
      secondaryCtaFa: "درخواست دمو",
      secondaryCtaEn: "Request a demo",
    },
    productPromiseFa: "از فروش تا وفاداری مشتری، همه‌چیز در یک سیستم.",
    capabilities: [
      "Sales",
      "Inventory",
      "Customer club / loyalty",
      "Branch management",
      "Reservations",
      "Analytics",
      "AI-assisted operations",
    ],
    problemFa: [TO_CONFIRM],
    problemEn: [TO_CONFIRM],
    solutionFa: TO_CONFIRM,
    solutionEn: TO_CONFIRM,
    technology: ["Cloud SaaS", "Analytics", "AI-assisted operations"],
    visionFa: "ساختن زیرساخت دیجیتال هوشمند برای نسل جدید کسب‌وکارهای صنعت غذا.",
    visionEn: TO_CONFIRM,
    missionFa: "یکپارچه‌کردن فروش، عملیات، مشتری و داده در یک پلتفرم ابری ساده و هوشمند.",
    missionEn: TO_CONFIRM,
    roadmapFa: [TO_CONFIRM],
    roadmapEn: [TO_CONFIRM],
    amirRoleFa: TO_CONFIRM,
    amirRoleEn: TO_CONFIRM,
    visualDirectionFa:
      "Warm but premium؛ dashboard، branch management، operational workflows. از stock food photography به‌عنوان visual اصلی استفاده نشود.",
    related: ["shiftpay", "primesys"],
  },
  {
    slug: "shiftpay",
    name: "ShiftPay",
    domain: "ShiftPay.ir",
    industry: "FinTech",
    category: "Business Financial Platform",
    positioning: "Business Financial Technology",
    filterGroup: "FinTech",
    shortDescriptionFa:
      "پلتفرم فناوری مالی مدرن برای انتقال پول، پرداخت، payout و settlement و جریان‌های مالی کسب‌وکار.",
    shortDescriptionEn: "Business money, moving smarter.",
    status: "to-confirm",
    featured: true,
    tags: ["FinTech", "Payments", "Payouts", "Settlement", "Financial APIs", "Automation"],
    hero: {
      eyebrow: "FINTECH",
      titleFa: "زیرساخت مالی ساده‌تر برای کسب‌وکارها.",
      titleEn: "Business money, moving smarter.",
      descriptionFa:
        "پلتفرم فناوری مالی مدرن برای انتقال پول، پرداخت، payout و settlement و جریان‌های مالی کسب‌وکار.",
      descriptionEn: "Business money, moving smarter.",
      primaryCtaFa: "مشاهده جزئیات",
      primaryCtaEn: "Explore product",
      secondaryCtaFa: "مشاهده ShiftPay",
      secondaryCtaEn: "Visit ShiftPay",
    },
    criticalPositioningFa:
      "ShiftPay فقط برای رستوران نیست و نباید به restaurant payment محدود شود. محصول برای کسب‌وکارهای تمام صنایع طراحی می‌شود.",
    doNotPositionAs: ["restaurant-only", "simple card-to-card app", "generic payment gateway"],
    capabilities: [
      "Transfers",
      "Payments",
      "Payouts",
      "Settlement",
      "Financial APIs",
      "Business financial workflows",
      "Future financial services",
    ],
    problemFa: [TO_CONFIRM],
    problemEn: [TO_CONFIRM],
    solutionFa: TO_CONFIRM,
    solutionEn: TO_CONFIRM,
    technology: ["FinTech", "Financial APIs", "Automation / AI"],
    visionFa:
      "تبدیل‌شدن به زیرساخت مالی دیجیتال کسب‌وکارها؛ جایی که انتقال، پرداخت، تسویه و سرویس‌های مالی در یک تجربه یکپارچه قرار می‌گیرند.",
    visionEn: TO_CONFIRM,
    missionFa:
      "ساده‌کردن جریان پول برای کسب‌وکارها با استفاده از فناوری مالی، APIهای مقیاس‌پذیر و اتوماسیون هوشمند.",
    missionEn: TO_CONFIRM,
    roadmapFa: [TO_CONFIRM],
    roadmapEn: [TO_CONFIRM],
    amirRoleFa: TO_CONFIRM,
    amirRoleEn: TO_CONFIRM,
    visualDirectionFa:
      "Premium FinTech؛ trust، data visualization، transaction-flow diagrams، motion ظریف. از crypto clichés و coin graphics استفاده نشود.",
    related: ["restyar", "primesys"],
  },
  {
    slug: "farsio",
    name: "Farsio",
    domain: "Farsio.ir",
    industry: "AI / LanguageTech",
    category: "Persian AI Platform",
    positioning: "AI & Language Technology for Persian",
    filterGroup: "AI & Intelligent Products",
    shortDescriptionFa:
      "پلتفرم هوش مصنوعی فارسی شامل Farsi Smart Assistant و AVA برای اصلاح، فهم، ترجمه، خلاصه‌سازی و مصرف هوشمند محتوای فارسی.",
    shortDescriptionEn: "AI & Language Technology for Persian",
    status: "to-confirm",
    featured: true,
    tags: ["AI", "LanguageTech", "Persian", "Writing Assistance", "Translation", "Summarization"],
    hero: {
      eyebrow: "AI / LANGUAGETECH",
      titleFa: "هوش مصنوعی، برای فارسی.",
      titleEn: "AI & Language Technology for Persian",
      descriptionFa:
        "خانواده‌ای از ابزارهای هوش مصنوعی فارسی برای اصلاح نوشتار، دستیار دانش، استخراج محتوا، ترجمه، خلاصه‌سازی و خروجی صوتی.",
      descriptionEn: "AI & Language Technology for Persian",
      primaryCtaFa: "مشاهده جزئیات",
      primaryCtaEn: "Explore Farsio",
      secondaryCtaFa: "مشاهده Farsio",
      secondaryCtaEn: "Visit Farsio",
    },
    currentProductFa:
      "Farsi Smart Assistant: افزونه Chrome/Firefox برای اصلاح هوشمند تایپ فارسی، writing assistance، knowledge assistant و Wikipedia / Google knowledge support. AVA: محصول در مرحله Discovery برای استخراج محتوای اصلی صفحات وب، ترجمه، خلاصه‌سازی و تولید خروجی صوتی فارسی.",
    capabilities: [
      "Persian typing correction",
      "Writing assistance",
      "Knowledge assistant",
      "Wikipedia / Google knowledge support",
      "Web content extraction",
      "Translation",
      "Summarization",
      "Persian audio output",
    ],
    problemFa: [TO_CONFIRM],
    problemEn: [TO_CONFIRM],
    solutionFa: TO_CONFIRM,
    solutionEn: TO_CONFIRM,
    technology: ["Artificial Intelligence", "Language Technology", "Browser Extensions", "Audio Output"],
    visionFa:
      "ساختن لایه هوشمند زبان فارسی برای تجربه‌ای طبیعی‌تر، سریع‌تر و غنی‌تر از وب و دانش دیجیتال.",
    visionEn: TO_CONFIRM,
    missionFa:
      "توسعه ابزارهای هوشمند برای فهم، اصلاح، خلاصه‌سازی، ترجمه و مصرف محتوای فارسی.",
    missionEn: TO_CONFIRM,
    roadmapFa: [TO_CONFIRM],
    roadmapEn: [TO_CONFIRM],
    amirRoleFa: TO_CONFIRM,
    amirRoleEn: TO_CONFIRM,
    visualDirectionFa:
      "Language-tech؛ typography، text transformations، browser mockups، before/after writing، audio waveform.",
    related: ["fahmio", "idehjo"],
  },
  {
    slug: "fahmio",
    name: "Fahmio",
    domain: "Fahmio.ir",
    industry: "EdTech / KnowledgeTech",
    category: "AI Knowledge Platform",
    positioning: "AI-Powered Knowledge & Learning",
    filterGroup: "AI & Intelligent Products",
    shortDescriptionFa:
      "خلاصه‌های هوشمند و صوتی برای اینکه در زمان کمتر، ایده‌های مهم کتاب‌ها را بهتر بفهمی.",
    shortDescriptionEn: "AI-Powered Knowledge & Learning",
    status: "to-confirm",
    featured: true,
    tags: ["EdTech", "KnowledgeTech", "AI", "Audio Summaries", "Learning"],
    hero: {
      eyebrow: "EDTECH / KNOWLEDGETECH",
      titleFa: "دانش را بفهم.",
      titleEn: "AI-Powered Knowledge & Learning",
      descriptionFa:
        "خلاصه‌های هوشمند و صوتی برای اینکه در زمان کمتر، ایده‌های مهم کتاب‌ها را بهتر بفهمی.",
      descriptionEn: "AI-Powered Knowledge & Learning",
      primaryCtaFa: "مشاهده جزئیات",
      primaryCtaEn: "Explore Fahmio",
      secondaryCtaFa: "مشاهده Fahmio",
      secondaryCtaEn: "Visit Fahmio",
    },
    currentProductFa: "خلاصه صوتی کتاب با هوش مصنوعی.",
    capabilities: ["Audio summaries", "Knowledge cards", "AI Q&A", "Learning paths", "Personalized learning", "Knowledge discovery"],
    futureDirections: ["Audio summaries", "Knowledge cards", "AI Q&A", "Learning paths", "Personalized learning", "Knowledge discovery"],
    problemFa: [TO_CONFIRM],
    problemEn: [TO_CONFIRM],
    solutionFa: TO_CONFIRM,
    solutionEn: TO_CONFIRM,
    technology: ["Artificial Intelligence", "Audio", "Knowledge Experience"],
    visionFa:
      "تبدیل‌شدن به یک پلتفرم هوشمند برای تبدیل دانش پراکنده به تجربه‌ای قابل فهم، شخصی و قابل استفاده.",
    visionEn: TO_CONFIRM,
    missionFa:
      "کمک به افراد برای کشف، فهم و مصرف سریع‌تر دانش با استفاده از هوش مصنوعی و تجربه صوتی.",
    missionEn: TO_CONFIRM,
    roadmapFa: [TO_CONFIRM],
    roadmapEn: [TO_CONFIRM],
    amirRoleFa: TO_CONFIRM,
    amirRoleEn: TO_CONFIRM,
    visualDirectionFa:
      "Editorial + audio؛ book grid، waveform، knowledge cards. از stock-photo-heavy layout اجتناب شود.",
    related: ["farsio", "idehjo"],
  },
  {
    slug: "idehjo",
    name: "Idehjo",
    domain: "Idehjo.ir",
    industry: "InnovationTech",
    category: "Innovation Intelligence",
    positioning: "Innovation Intelligence Platform",
    filterGroup: "AI & Intelligent Products",
    shortDescriptionFa:
      "هر روز ۱۰ ایده/نوآوری مهم جهان با رأی واقعی، ترجمه روان، تحلیل AI و بررسی قابلیت ایجاد نسخه ایرانی.",
    shortDescriptionEn: "Innovation Intelligence Platform",
    status: "to-confirm",
    featured: true,
    tags: ["InnovationTech", "AI Analysis", "Persian Translation", "Trend Intelligence", "Discovery"],
    hero: {
      eyebrow: "INNOVATIONTECH",
      titleFa: "ایده‌ی درست، در زمان درست.",
      titleEn: "Innovation Intelligence Platform",
      descriptionFa:
        "هر روز ۱۰ ایده/نوآوری مهم جهان با رأی واقعی، ترجمه روان، تحلیل AI و بررسی قابلیت ایجاد نسخه ایرانی.",
      descriptionEn: "Innovation Intelligence Platform",
      primaryCtaFa: "مشاهده جزئیات",
      primaryCtaEn: "Explore Idehjo",
      secondaryCtaFa: "مشاهده Idehjo",
      secondaryCtaEn: "Visit Idehjo",
    },
    capabilities: [
      "Global idea discovery",
      "Community voting",
      "AI analysis",
      "Persian translation",
      "Local-market adaptation",
      "Trend intelligence",
    ],
    problemFa: [TO_CONFIRM],
    problemEn: [TO_CONFIRM],
    solutionFa: TO_CONFIRM,
    solutionEn: TO_CONFIRM,
    technology: ["AI Analysis", "Persian Translation", "Trend Intelligence", "Discovery Feed"],
    visionFa:
      "ساختن یک رادار هوشمند برای کشف ایده‌ها، محصولات و روندهایی که آینده کسب‌وکار را شکل می‌دهند.",
    visionEn: TO_CONFIRM,
    missionFa:
      "جمع‌آوری، پالایش، ترجمه و تحلیل نوآوری‌های جهان و تبدیل آن‌ها به بینش قابل استفاده برای بازار ایران.",
    missionEn: TO_CONFIRM,
    roadmapFa: [TO_CONFIRM],
    roadmapEn: [TO_CONFIRM],
    amirRoleFa: TO_CONFIRM,
    amirRoleEn: TO_CONFIRM,
    visualDirectionFa:
      "Editorial intelligence؛ ranking، voting، trend cards، data visualization، timeline و discovery feed.",
    related: [],
  },
  {
    slug: "filmtrack",
    name: "FilmTrack",
    domain: "FilmTrack.ir",
    industry: "EntertainmentTech / MediaTech",
    category: "Movie & TV Platform",
    positioning: "Movie & TV Discovery Platform",
    filterGroup: "EntertainmentTech",
    shortDescriptionFa:
      "جامعه فارسی‌زبان عاشقان سینما برای Watchlist، Tracking، Sharing، Discovery، Ratings و Community.",
    shortDescriptionEn: "Movie & TV Discovery Platform",
    status: "to-confirm",
    featured: true,
    tags: ["EntertainmentTech", "MediaTech", "Watchlist", "Discovery", "Community", "AI Recommendation"],
    hero: {
      eyebrow: "ENTERTAINMENTTECH / MEDIATECH",
      titleFa: "خانه شخصی تو برای سینما و سریال.",
      titleEn: "Movie & TV Discovery Platform",
      descriptionFa:
        "جامعه فارسی‌زبان عاشقان سینما برای مدیریت تماشا، کشف آثار جدید و ارتباط با جامعه‌ای هم‌سلیقه.",
      descriptionEn: "Movie & TV Discovery Platform",
      primaryCtaFa: "مشاهده جزئیات",
      primaryCtaEn: "Explore FilmTrack",
      secondaryCtaFa: "مشاهده FilmTrack",
      secondaryCtaEn: "Visit FilmTrack",
    },
    productPromiseFa: "فیلم‌ها و سریال‌هایت را ردیابی کن.",
    capabilities: ["Watchlist", "Tracking", "Sharing", "Discovery", "Ratings", "Community"],
    problemFa: [TO_CONFIRM],
    problemEn: [TO_CONFIRM],
    solutionFa: TO_CONFIRM,
    solutionEn: TO_CONFIRM,
    technology: ["Entertainment Technology", "Media Technology", "AI Recommendation", "Community"],
    visionFa:
      "ساختن جامع‌ترین تجربه فارسی‌زبان برای کشف، دنبال‌کردن و اشتراک‌گذاری تجربه تماشای فیلم و سریال.",
    visionEn: TO_CONFIRM,
    missionFa:
      "کمک به علاقه‌مندان سینما برای مدیریت تماشای خود، کشف آثار جدید و ارتباط با جامعه‌ای هم‌سلیقه.",
    missionEn: TO_CONFIRM,
    roadmapFa: [TO_CONFIRM],
    roadmapEn: [TO_CONFIRM],
    amirRoleFa: TO_CONFIRM,
    amirRoleEn: TO_CONFIRM,
    visualDirectionFa:
      "Cinematic but modern؛ poster/grid systems، watch progress، lists، social interactions. از assets دارای copyright بدون مجوز استفاده نشود.",
    related: ["linkresan"],
  },
  {
    slug: "linkresan",
    name: "LinkResan",
    domain: "LinkResan.ir",
    industry: "SaaS / MarTech / Digital Utility",
    category: "Link Management",
    positioning: "Link Management & Intelligence Platform",
    filterGroup: "Digital Platforms",
    shortDescriptionFa:
      "کوتاه‌سازی لینک امروز؛ با مسیر توسعه به سمت مدیریت، تحلیل و توزیع هوشمند لینک‌های دیجیتال.",
    shortDescriptionEn: "Link Management & Intelligence Platform",
    status: "to-confirm",
    featured: true,
    tags: ["SaaS", "MarTech", "Digital Utility", "Analytics", "QR", "Campaign Tracking"],
    hero: {
      eyebrow: "SAAS / MARTECH / DIGITAL UTILITY",
      titleFa: "لینک‌هایت را کوتاه‌تر، هوشمندتر و قابل‌اندازه‌گیری کن.",
      titleEn: "Link Management & Intelligence Platform",
      descriptionFa:
        "محصول فعلی کوتاه‌سازی URL است و جایگاه پیشنهادی آینده، Link Management & Intelligence Platform.",
      descriptionEn: "Link Management & Intelligence Platform",
      primaryCtaFa: "مشاهده جزئیات",
      primaryCtaEn: "Explore LinkResan",
      secondaryCtaFa: "مشاهده LinkResan",
      secondaryCtaEn: "Visit LinkResan",
    },
    currentProductFa: "URL shortening.",
    capabilities: ["Short links", "Analytics", "QR", "UTM", "Campaign tracking", "Smart redirects", "Deep links"],
    futureDirections: ["Short links", "Analytics", "QR", "UTM", "Campaign tracking", "Smart redirects", "Deep links"],
    problemFa: [TO_CONFIRM],
    problemEn: [TO_CONFIRM],
    solutionFa: TO_CONFIRM,
    solutionEn: TO_CONFIRM,
    technology: ["SaaS", "Link Management", "Analytics", "QR", "Campaign Tracking"],
    visionFa:
      "تبدیل‌شدن به یک زیرساخت ساده و هوشمند برای مدیریت، تحلیل و توزیع لینک‌های دیجیتال.",
    visionEn: TO_CONFIRM,
    missionFa:
      "ساده‌کردن اشتراک‌گذاری و اندازه‌گیری عملکرد لینک‌ها برای افراد، برندها و تیم‌های بازاریابی.",
    missionEn: TO_CONFIRM,
    roadmapFa: [TO_CONFIRM],
    roadmapEn: [TO_CONFIRM],
    amirRoleFa: TO_CONFIRM,
    amirRoleEn: TO_CONFIRM,
    visualDirectionFa:
      "Clean utility SaaS؛ URL interaction، analytics dashboard، QR و campaign visuals.",
    related: [],
  },
];

export const productPortfolio = rawProductPortfolio.map((product) => ({
  ...product,
  // Compatibility aliases for existing homepage / legacy components.
  categoryFa: product.category,
  categoryEn: product.category,
  descriptionFa: product.shortDescriptionFa,
  descriptionEn: product.shortDescriptionEn,
  website: `https://${product.domain.toLowerCase()}`,
  technologies: product.technology,
}));

export type Product = (typeof productPortfolio)[number];

export const productFilters = [
  "همه",
  "AI & Intelligent Products",
  "FinTech",
  "FoodTech",
  "Enterprise Technology",
  "Digital Platforms",
  "EntertainmentTech",
] as const;

export function getProduct(slug: string) {
  return productPortfolio.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((item): item is Product => Boolean(item));
}

export function getStatusLabel(status: ProductStatus, locale: "fa" | "en") {
  if (status === "to-confirm") return "STATUS TO CONFIRM";
  const fa = {
    live: "منتشر و قابل استفاده",
    development: "در حال توسعه",
    discovery: "مرحله کشف/اعتبارسنجی",
    concept: "ایده/نمونه اولیه",
  } as const;
  const en = {
    live: "LIVE",
    development: "IN DEVELOPMENT",
    discovery: "DISCOVERY",
    concept: "CONCEPT",
  } as const;
  return locale === "fa" ? fa[status] : en[status];
}

export const portfolioStatementFa =
  "محصولات فناوری می‌سازم که هوش مصنوعی و نرم‌افزار را به مسئله‌های واقعی زندگی و کسب‌وکار متصل می‌کنند.";

export const portfolioStatementEn =
  "I build technology products that connect AI, software and real-world industries.";
