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

const TO_CONFIRM = "";

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

/* founder-v6-final-public-content-2026-08-13 */
type PublicContentCompletion = {
  categoryFa: string;
  industryFa: string;
  shortDescriptionEn: string;
  heroTitleEn: string;
  heroDescriptionEn: string;
  audienceFa: string;
  audienceEn: string;
  capabilitiesFa: string[];
  problemFa: string[];
  problemEn: string[];
  solutionFa: string;
  solutionEn: string;
  visionEn: string;
  missionEn: string;
  currentProductEn?: string;
  productPromiseEn?: string;
  criticalPositioningEn?: string;
};

const publicContentBySlug: Record<string, PublicContentCompletion> = {
  restyar: {
    categoryFa: "نرم‌افزار ابری مدیریت کسب‌وکار غذایی",
    industryFa: "فودتک / فناوری رستوران",
    shortDescriptionEn: "A cloud platform for cafés, restaurants and food groups, connecting sales, inventory, loyalty, branches, reservations and analytics.",
    heroTitleEn: "An intelligent operating layer for food businesses.",
    heroDescriptionEn: "RestYar brings sales, inventory, customers, branches, reservations and analytics into one connected cloud experience.",
    audienceFa: "کافه‌ها، رستوران‌ها، فست‌فودها و مجموعه‌های غذایی تک‌شعبه و چندشعبه",
    audienceEn: "Cafés, restaurants, fast-food businesses and single- or multi-branch food groups",
    capabilitiesFa: ["فروش و عملیات صندوق","مدیریت موجودی","باشگاه مشتریان و وفاداری","مدیریت شعب","رزرو","تحلیل و گزارش‌گیری","عملیات مبتنی بر هوش مصنوعی"],
    problemFa: ["فروش، موجودی، مشتری، رزرو و شعب معمولاً در ابزارهای جدا از هم مدیریت می‌شوند.","نبود دید یکپارچه از عملیات و داده، تصمیم‌گیری روزانه و مدیریت چندشعبه را دشوار می‌کند."],
    problemEn: ["Sales, inventory, customer, reservation and branch operations are often split across disconnected tools.","Without one operational view, daily decisions and multi-branch management become harder."],
    solutionFa: "رستیار این جریان‌ها را در یک پلتفرم ابری واحد متصل می‌کند تا عملیات، مشتری و داده از یک نقطه مدیریت و تحلیل شوند.",
    solutionEn: "RestYar connects these workflows in one cloud platform so operations, customers and data can be managed and analyzed from one place.",
    visionEn: "Build the intelligent digital infrastructure for the next generation of food businesses.",
    missionEn: "Unify sales, operations, customers and data in a simple, intelligent cloud platform.",
    productPromiseEn: "From sales to customer loyalty, one connected system."
  },
  primesys: {
    categoryFa: "شرکت فناوری و راهکارهای سازمانی",
    industryFa: "فناوری سازمانی",
    shortDescriptionEn: "A technology business spanning software, AI, computer vision, hardware, gaming and rendering, AIDC and practical enterprise solutions.",
    heroTitleEn: "Technology for real business problems.",
    heroDescriptionEn: "PrimeSYS combines software, AI, computer vision and hardware infrastructure to address real operational and business needs.",
    audienceFa: "سازمان‌ها و کسب‌وکارهایی که به راهکارهای یکپارچه نرم‌افزار، هوش مصنوعی و زیرساخت نیاز دارند",
    audienceEn: "Organizations and businesses that need integrated software, AI and infrastructure solutions",
    capabilitiesFa: ["نرم‌افزار مالی و حسابداری ابری","تشخیص چهره","تشخیص پلاک خودرو","سخت‌افزار، گیمینگ و رندرینگ","بارکد، RFID و AIDC","فناوری لجستیک"],
    problemFa: ["سازمان‌ها اغلب برای نرم‌افزار، سخت‌افزار و شناسایی هوشمند از راهکارهای پراکنده استفاده می‌کنند.","پراکنده‌بودن زیرساخت و داده، یکپارچگی عملیات و توسعه راهکارهای جدید را دشوار می‌کند."],
    problemEn: ["Organizations often rely on fragmented solutions across software, hardware and intelligent identification.","Fragmented infrastructure and data make operational integration and future expansion harder."],
    solutionFa: "PrimeSYS نرم‌افزار، هوش مصنوعی، Computer Vision، سخت‌افزار و AIDC را در قالب راهکارهای قابل اتصال به نیاز واقعی سازمان کنار هم قرار می‌دهد.",
    solutionEn: "PrimeSYS brings together software, AI, computer vision, hardware and AIDC as technology solutions designed around real organizational needs.",
    visionEn: "Become a multi-layer technology company integrating software, AI and hardware infrastructure to solve real business problems.",
    missionEn: "Design and deliver dependable technology solutions that help organizations operate more intelligently, quickly and at greater scale."
  },
  linkresan: {
    categoryFa: "مدیریت و تحلیل لینک",
    industryFa: "SaaS / مارتک / ابزار دیجیتال",
    shortDescriptionEn: "URL shortening today, evolving toward smarter link management, analytics, QR, UTM and campaign workflows.",
    heroTitleEn: "Make links shorter, smarter and measurable.",
    heroDescriptionEn: "The current product focuses on URL shortening, with a direction toward intelligent link management, analytics and distribution.",
    audienceFa: "افراد، برندها و تیم‌های بازاریابی یا محصول که لینک‌های دیجیتال را منتشر و اندازه‌گیری می‌کنند",
    audienceEn: "Individuals, brands, marketing teams and product teams that publish and measure digital links",
    capabilitiesFa: ["لینک کوتاه","تحلیل عملکرد لینک","QR","UTM","ردیابی کمپین","هدایت هوشمند","Deep Link"],
    problemFa: ["اشتراک‌گذاری لینک بدون ابزار اندازه‌گیری، دید محدودی از عملکرد کانال‌ها و کمپین‌ها ایجاد می‌کند.","لینک‌های طولانی، UTM و مقصدهای متعدد می‌توانند مدیریت انتشار را پیچیده کنند."],
    problemEn: ["Sharing links without measurement provides limited visibility into channel and campaign performance.","Long URLs, UTM parameters and multiple destinations make publishing workflows harder to manage."],
    solutionFa: "LinkResan از کوتاه‌سازی URL شروع می‌کند و مدیریت، تحلیل، QR، UTM و هدایت هوشمند را در یک مسیر محصول یکپارچه قرار می‌دهد.",
    solutionEn: "LinkResan starts with URL shortening and extends toward management, analytics, QR, UTM and smarter routing in one link workflow.",
    visionEn: "Become a simple, intelligent infrastructure for managing, analyzing and distributing digital links.",
    missionEn: "Make link sharing and performance measurement simpler for individuals, brands and marketing teams.",
    currentProductEn: "URL shortening."
  },
  farsio: {
    categoryFa: "پلتفرم هوش مصنوعی فارسی",
    industryFa: "هوش مصنوعی / فناوری زبان",
    shortDescriptionEn: "A family of Persian AI tools for writing assistance, knowledge support, content extraction, translation, summarization and audio output.",
    heroTitleEn: "AI and language technology for Persian.",
    heroDescriptionEn: "Farsio brings Farsi Smart Assistant and AVA together for writing, understanding and consuming Persian content more intelligently.",
    audienceFa: "کاربران فارسی‌زبان، نویسندگان، پژوهشگران و افرادی که با محتوای فارسی در وب کار می‌کنند",
    audienceEn: "Persian-speaking users, writers, researchers and people working with Persian content on the web",
    capabilitiesFa: ["اصلاح تایپ فارسی","دستیار نوشتن","دستیار دانش","پشتیبانی دانش Wikipedia / Google","استخراج محتوای وب","ترجمه","خلاصه‌سازی","خروجی صوتی فارسی"],
    problemFa: ["کار با متن فارسی در وب میان ابزارهای جداگانه برای اصلاح، جست‌وجو، ترجمه، خلاصه‌سازی و صوت تقسیم شده است.","ابزارهای عمومی AI همیشه تجربه زبان فارسی را در مرکز طراحی خود قرار نمی‌دهند."],
    problemEn: ["Working with Persian content is split across separate tools for correction, knowledge, translation, summarization and audio.","General-purpose AI tools do not always place Persian-language experience at the center of the product."],
    solutionFa: "Farsio قابلیت‌های زبان و هوش مصنوعی فارسی را در یک خانواده محصولی جمع می‌کند تا نوشتن، فهمیدن، استخراج، ترجمه، خلاصه‌سازی و شنیدن محتوا ساده‌تر شود.",
    solutionEn: "Farsio groups Persian-language AI capabilities into one product family to make writing, understanding, extracting, translating, summarizing and listening easier.",
    visionEn: "Build an intelligent Persian-language layer for a more natural, faster and richer digital knowledge experience.",
    missionEn: "Develop intelligent tools for understanding, correcting, summarizing, translating and consuming Persian content.",
    currentProductEn: "Farsi Smart Assistant focuses on Persian typing correction, writing assistance and knowledge support; AVA focuses on extraction, translation, summarization and Persian audio output."
  },
  idehjo: {
    categoryFa: "هوشمندی و رصد نوآوری",
    industryFa: "فناوری نوآوری",
    shortDescriptionEn: "A daily innovation feed combining global idea discovery, community voting, Persian translation, AI analysis and local-market adaptation.",
    heroTitleEn: "The right idea, at the right time.",
    heroDescriptionEn: "IdeaJoo turns global idea discovery, voting, Persian translation and AI analysis into a daily innovation-intelligence experience.",
    audienceFa: "کارآفرینان، سازندگان محصول، تیم‌های نوآوری و افرادی که روندها و ایده‌های جهانی را دنبال می‌کنند",
    audienceEn: "Entrepreneurs, product builders, innovation teams and people tracking global ideas and trends",
    capabilitiesFa: ["کشف ایده‌های جهانی","رأی کاربران","تحلیل با هوش مصنوعی","ترجمه فارسی","بررسی انطباق با بازار ایران","رصد روندها"],
    problemFa: ["حجم بالای ایده‌ها و خبرهای جهانی تشخیص نوآوری‌های واقعاً مهم را زمان‌بر می‌کند.","ترجمه صرف، بدون تحلیل و زمینه بازار، برای تصمیم‌گیری درباره یک ایده کافی نیست."],
    problemEn: ["The volume of global ideas and product news makes it time-consuming to identify what actually matters.","Translation alone is not enough without analysis and market context."],
    solutionFa: "IdeaJoo کشف، رأی، ترجمه و تحلیل را در یک جریان روزانه ترکیب می‌کند تا ایده‌های مهم سریع‌تر دیده و از زاویه بازار ایران بررسی شوند.",
    solutionEn: "IdeaJoo combines discovery, voting, translation and analysis in one daily flow so important ideas can be surfaced faster and considered through a local-market lens.",
    visionEn: "Build an intelligent radar for ideas, products and trends that may shape the future of business.",
    missionEn: "Collect, filter, translate and analyze global innovation and turn it into usable insight for the Iranian market."
  },
  fahmio: {
    categoryFa: "پلتفرم هوشمند دانش",
    industryFa: "فناوری آموزش / دانش",
    shortDescriptionEn: "AI-assisted text and audio summaries designed to help people understand key ideas from books and knowledge sources in less time.",
    heroTitleEn: "Understand knowledge faster.",
    heroDescriptionEn: "Fahmio uses AI and audio experiences to turn knowledge content into summaries, knowledge cards and more usable learning paths.",
    audienceFa: "یادگیرندگان، کتاب‌خوان‌ها و افرادی که می‌خواهند دانش را سریع‌تر کشف، خلاصه و مرور کنند",
    audienceEn: "Learners, readers and people who want to discover, summarize and review knowledge faster",
    capabilitiesFa: ["خلاصه صوتی","کارت‌های دانش","پرسش و پاسخ با AI","مسیرهای یادگیری","یادگیری شخصی‌سازی‌شده","کشف دانش"],
    problemFa: ["زمان محدود، مطالعه عمیق همه منابع را برای بسیاری از افراد دشوار می‌کند.","یادگیرنده برای حرکت از خلاصه به پرسش، کشف و مسیر یادگیری به تجربه‌ای پیوسته‌تر نیاز دارد."],
    problemEn: ["Limited time makes deep reading of every useful source difficult.","Learners need a smoother path from summary to questions, discovery and continued learning."],
    solutionFa: "Fahmio محتوای دانشی را به تجربه‌ای فشرده‌تر و قابل مصرف در متن و صوت تبدیل می‌کند و مسیر محصول را به سمت کارت دانش، پرسش و پاسخ و یادگیری شخصی‌تر می‌برد.",
    solutionEn: "Fahmio turns knowledge content into a more compact text-and-audio experience, with a direction toward knowledge cards, Q&A and more personalized learning.",
    visionEn: "Become an intelligent platform that turns scattered knowledge into an understandable, personal and usable experience.",
    missionEn: "Help people discover, understand and consume knowledge faster through AI and audio experiences.",
    currentProductEn: "AI-assisted audio book summaries."
  },
  filmtrack: {
    categoryFa: "پلتفرم فیلم و سریال",
    industryFa: "فناوری سرگرمی / رسانه",
    shortDescriptionEn: "A Persian-language movie and TV community for watchlists, tracking, sharing, discovery, ratings and social interaction.",
    heroTitleEn: "Your personal home for movies and TV.",
    heroDescriptionEn: "FilmTark is designed for managing what you watch, discovering new titles, rating them and connecting with people who share similar tastes.",
    audienceFa: "کاربران فارسی‌زبان علاقه‌مند به فیلم و سریال که می‌خواهند تماشا، کشف و تعامل اجتماعی را در یک تجربه نگه دارند",
    audienceEn: "Persian-speaking movie and TV fans who want tracking, discovery and social interaction in one experience",
    capabilitiesFa: ["فهرست تماشا","ردیابی تماشا","اشتراک‌گذاری","کشف آثار","امتیازدهی","جامعه کاربری"],
    problemFa: ["فهرست تماشا، وضعیت دیدن آثار و امتیازها معمولاً میان چند سرویس یا یادداشت شخصی پراکنده می‌شوند.","کاربر فارسی‌زبان به تجربه‌ای بومی‌تر برای دنبال‌کردن و اشتراک‌گذاری علاقه‌مندی‌های سینمایی نیاز دارد."],
    problemEn: ["Watchlists, viewing progress and ratings are often scattered across separate services or personal notes.","Persian-speaking users benefit from a more localized experience for tracking and sharing film interests."],
    solutionFa: "FilmTark مدیریت تماشا، کشف، امتیازدهی و تعامل اجتماعی را در یک تجربه فارسی‌زبان برای فیلم و سریال کنار هم قرار می‌دهد.",
    solutionEn: "FilmTark combines watch tracking, discovery, ratings and social interaction in one Persian-language movie and TV experience.",
    visionEn: "Build a comprehensive Persian-language experience for discovering, tracking and sharing movies and TV.",
    missionEn: "Help film fans manage what they watch, discover new titles and connect with people who share similar tastes.",
    productPromiseEn: "Track the movies and series you watch."
  },
  shiftpay: {
    categoryFa: "پلتفرم مالی کسب‌وکار",
    industryFa: "فین‌تک",
    shortDescriptionEn: "A business financial-technology platform for transfers, payments, payouts, settlement, financial APIs and money workflows across industries.",
    heroTitleEn: "Business money, moving smarter.",
    heroDescriptionEn: "ShiftPay brings transfers, payments, payouts, settlement and financial APIs together as a financial-technology layer for real business workflows.",
    audienceFa: "کسب‌وکارها و تیم‌های عملیاتی در صنایع مختلف که انتقال، پرداخت و تسویه بخشی از جریان روزانه آن‌هاست",
    audienceEn: "Businesses and operations teams across industries that manage transfers, payments and settlement as part of daily workflows",
    capabilitiesFa: ["انتقال پول","پرداخت","Payout","تسویه","APIهای مالی","جریان‌های مالی کسب‌وکار","سرویس‌های مالی قابل توسعه"],
    problemFa: ["انتقال، پرداخت، payout و تسویه در بسیاری از کسب‌وکارها میان سرویس‌ها و فرایندهای جداگانه تقسیم می‌شود.","تیم‌های مالی و عملیاتی برای خودکارسازی جریان پول به API و جریان‌های قابل اتصال نیاز دارند."],
    problemEn: ["Transfers, payments, payouts and settlement are often split across separate services and operational processes.","Finance and operations teams need connectable APIs and workflows to automate how money moves."],
    solutionFa: "ShiftPay یک لایه مالی قابل توسعه برای انتقال، پرداخت، تسویه و APIهای مالی طراحی می‌کند تا جریان پول در سناریوهای مختلف کسب‌وکار ساده‌تر شود.",
    solutionEn: "ShiftPay is designed as an extensible financial layer for transfers, payments, settlement and APIs, simplifying business money movement across use cases.",
    visionEn: "Become a digital financial infrastructure for businesses where transfers, payments, settlement and financial services come together in one experience.",
    missionEn: "Simplify business money flows through financial technology, scalable APIs and intelligent automation.",
    criticalPositioningEn: "ShiftPay is not restaurant-only; it is positioned for business financial workflows across industries."
  },
};

export const productPortfolio = rawProductPortfolio.map((product) => {
  const completed = publicContentBySlug[product.slug];
  if (!completed) throw new Error(`Missing public content completion for ${product.slug}`);

  return {
    ...product,
    ...completed,
    hero: {
      ...product.hero,
      titleEn: completed.heroTitleEn,
      descriptionEn: completed.heroDescriptionEn,
    },
    categoryFa: completed.categoryFa,
    categoryEn: product.category,
    industryFa: completed.industryFa,
    industryEn: product.industry,
    descriptionFa: product.shortDescriptionFa,
    descriptionEn: completed.shortDescriptionEn,
    shortDescriptionEn: completed.shortDescriptionEn,
    audienceFa: completed.audienceFa,
    audienceEn: completed.audienceEn,
    capabilitiesFa: completed.capabilitiesFa,
    capabilitiesEn: product.capabilities,
    problemFa: completed.problemFa,
    problemEn: completed.problemEn,
    solutionFa: completed.solutionFa,
    solutionEn: completed.solutionEn,
    visionEn: completed.visionEn,
    missionEn: completed.missionEn,
    currentProductEn: completed.currentProductEn,
    productPromiseEn: completed.productPromiseEn,
    criticalPositioningEn: completed.criticalPositioningEn,
    website: `https://${product.domain.toLowerCase()}`,
    technologies: product.technology,
  };
});
const preferredProductOrder = [
  "restyar",
  "primesys",
  "linkresan",
  "farsio",
  "idehjo",
  "fahmio",
  "filmtrack",
  "shiftpay",
] as const;

const preferredProductOrderMap = new Map<string, number>(
  preferredProductOrder.map((slug, index) => [slug, index]),
);

function normalizeProductKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

productPortfolio.sort((a, b) => {
  const aRank = preferredProductOrderMap.get(normalizeProductKey(a.slug)) ?? Number.MAX_SAFE_INTEGER;
  const bRank = preferredProductOrderMap.get(normalizeProductKey(b.slug)) ?? Number.MAX_SAFE_INTEGER;
  return aRank - bRank || a.name.localeCompare(b.name);
});

const localizedProductNames = {
  restyar: { fa: "رستیار", en: "RestYar" },
  primesys: { fa: "پرایم سیستم", en: "PrimeSYS" },
  linkresan: { fa: "لینک رسان", en: "LinkResan" },
  farsio: { fa: "فارسیو", en: "Farsio" },
  idehjo: { fa: "ایده جو", en: "IdeaJoo" },
  fahmio: { fa: "فهمیو", en: "Fahmio" },
  filmtrack: { fa: "فیلم ترک", en: "FilmTark" },
  shiftpay: { fa: "شیفت پی", en: "ShiftPay" },
} as const;

export function getProductDisplayName(
  product: { slug: string; name: string },
  locale: "fa" | "en",
) {
  const key = normalizeProductKey(product.slug) as keyof typeof localizedProductNames;
  return localizedProductNames[key]?.[locale] ?? product.name;
}

/* founder-visual-system-v6-preferred-order */

export function getProductCategory(product: Product, locale: "fa" | "en") {
  return locale === "fa" ? product.categoryFa : product.categoryEn;
}

export function getProductIndustry(product: Product, locale: "fa" | "en") {
  return locale === "fa" ? product.industryFa : product.industryEn;
}
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
  if (status === "to-confirm") return locale === "fa" ? "محصول / پلتفرم" : "Product / Platform";
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
