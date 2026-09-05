import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";
import type { Product } from "@/content/product-portfolio";
import { brandRegistry } from "@/content/brand-registry";

const clone = (product: Product, patch: Partial<Product>): Product => ({ ...product, ...patch } as Product);

const liveSlugs = new Set([
  "restyar",
  "primesys",
  "linkresan",
  "farsio",
  "fahmio",
  "zobdino",
  "idehjo",
  "tasvia",
  "vayran",
  "darmic",
  "filmtrack",
]);

const publicSummaries: Record<string, { fa: string; en: string }> = {
  primesys: {
    fa: "پرایم‌سیستم پلتفرم فروش آنلاین و مجموعه‌ای از راهکارهای نرم‌افزاری، هوش مصنوعی، بینایی ماشین، سخت‌افزار و تجهیزات سازمانی است.",
    en: "PrimeSYS combines online commerce with software, AI, computer vision, hardware and enterprise technology solutions.",
  },
  restyar: {
    fa: "رستیار نرم‌افزار هوشمند مدیریت کافه و رستوران برای ساده‌تر کردن عملیات، فروش و تصمیم‌گیری روزمره است.",
    en: "RestYar is an intelligent cafe and restaurant management platform for simpler operations, sales and day-to-day decisions.",
  },
  linkresan: {
    fa: "لینک‌رسان پلتفرم مدیریت لینک، کوتاه‌کننده هوشمند، کد QR، لینک بیو و تحلیل کمپین با ابزارهای تیمی و توسعه‌دهندگان است.",
    en: "LinkResan is a link-management platform for smart short links, QR codes, link-in-bio, campaign analytics, teams and developer tools.",
  },
  farsio: {
    fa: "فارسیو مجموعه ابزارهای هوش مصنوعی فارسی‌محور برای نوشتن، بازنویسی، خواندن و کار با زبان فارسی است.",
    en: "Farsio is a Persian-first AI toolset for writing, rewriting, reading and working with Persian language content.",
  },
  fahmio: {
    fa: "فهمیو پلتفرم یادگیری تطبیقی با معلم هوشمند برای تجربه آموزشی شخصی‌تر و تمرین هدفمند است.",
    en: "Fahmio is an adaptive-learning platform with an intelligent tutor for more personalized learning and targeted practice.",
  },
  zobdino: {
    fa: "زبدینو تجربه هوشمند کتاب برای خلاصه فارسی، درک سریع‌تر محتوا و تجربه صوتی از فایل‌های کتاب و سند است.",
    en: "Zobdino turns books and documents into Persian summaries, faster understanding and intelligent audio experiences.",
  },
  idehjo: {
    fa: "ایده‌جو برترین ایده‌های به‌روز استارتاپی دنیا را برای کشف فرصت، تحلیل روند و الهام‌گیری محصول گردآوری می‌کند.",
    en: "IdehJo surfaces current startup ideas from around the world for opportunity discovery, trend analysis and product inspiration.",
  },
  filmtrack: {
    fa: "فیلم‌ترک دستیار هوشمند فیلم و سریال برای کشف، پیگیری و ساخت تجربه شخصی‌تر از محتوای سرگرمی است.",
    en: "FilmTrack is an intelligent movie and TV companion for discovery, tracking and a more personalized entertainment experience.",
  },
  tasvia: {
    fa: "تسوین پلتفرم دستیار مالی برای شفاف‌تر کردن جریان‌های مالی، پیگیری وضعیت و پشتیبانی از تصمیم‌گیری کسب‌وکار است.",
    en: "Tasvin is a financial-assistant platform for clearer financial flows, status tracking and better business decisions.",
  },
  darmic: {
    fa: "دارمیک هوش سلامت شخصی برای ارائه اطلاعات سلامت ساختاریافته، پاسخ‌های تحلیلی و کمک به تصمیم آگاهانه‌تر است.",
    en: "Darmic is personal health intelligence for structured health information, analytical answers and better-informed decisions.",
  },
  vayran: {
    fa: "وایران همراه هوشمند سفر برای کشف مقصد، برنامه‌ریزی سفر و دسترسی بهتر به تجربه‌های واقعی ایران است.",
    en: "Vairan is an intelligent travel companion for destination discovery, trip planning and authentic experiences across Iran.",
  },
};

function baseProduct(slug: string) {
  return canonicalProductPortfolio.find((product) => product.slug === slug);
}

function syntheticProduct(input: {
  slug: string;
  name: string;
  domain: string;
  industryFa: string;
  industryEn: string;
  category: string;
  positioning: string;
  shortDescriptionFa: string;
  shortDescriptionEn: string;
  titleFa: string;
  titleEn: string;
  problemFa: string[];
  problemEn: string[];
  solutionFa: string;
  solutionEn: string;
  capabilitiesFa: string[];
  capabilitiesEn: string[];
}): Product {
  const template = canonicalProductPortfolio[0];
  if (!template) throw new Error("Canonical product template is unavailable");

  const filterGroup: Product["filterGroup"] =
    input.slug === "darmic" ? "AI & Intelligent Products" : "Digital Platforms";

  return clone(template, {
    slug: input.slug,
    name: input.name,
    domain: input.domain,
    status: "live",
    featured: true,
    industry: input.industryEn,
    industryFa: input.industryFa,
    industryEn: input.industryEn,
    category: input.category,
    categoryFa: input.industryFa,
    categoryEn: input.category,
    positioning: input.positioning,
    filterGroup,
    shortDescriptionFa: input.shortDescriptionFa,
    shortDescriptionEn: input.shortDescriptionEn,
    tags: [],
    hero: {
      ...template.hero,
      eyebrow: input.industryEn.toUpperCase(),
      titleFa: input.titleFa,
      titleEn: input.titleEn,
      descriptionFa: input.shortDescriptionFa,
      descriptionEn: input.shortDescriptionEn,
      primaryCtaFa: "مشاهده جزئیات",
      primaryCtaEn: "Explore product",
      secondaryCtaFa: "تماس و همکاری",
      secondaryCtaEn: "Contact",
    },
    problemFa: input.problemFa,
    problemEn: input.problemEn,
    solutionFa: input.solutionFa,
    solutionEn: input.solutionEn,
    capabilities: input.capabilitiesEn,
    capabilitiesFa: input.capabilitiesFa,
    capabilitiesEn: input.capabilitiesEn,
    technology: [],
    visionFa: input.titleFa,
    visionEn: input.titleEn,
    missionFa: input.solutionFa,
    missionEn: input.solutionEn,
    roadmapFa: ["تکمیل تجربه محصول", "اعتبارسنجی تجربه کاربر", "گسترش قابلیت‌های هوشمند"],
    roadmapEn: ["Complete the product experience", "Validate the user experience", "Expand intelligent capabilities"],
    amirRoleFa: "بنیان‌گذار و هدایت‌کننده استراتژی، طراحی محصول و مسیر توسعه.",
    amirRoleEn: "Founder, directing strategy, product design and development roadmap.",
    visualDirectionFa: "طراحی مینیمال و حرفه‌ای متناسب با هویت محصول.",
    currentProductFa: undefined,
    currentProductEn: undefined,
    productPromiseFa: undefined,
    productPromiseEn: undefined,
    audienceFa: undefined,
    audienceEn: undefined,
    futureDirections: [],
    related: [],
  });
}

const vayran = syntheticProduct({
  slug: "vayran",
  name: "Vairan",
  domain: "vairan.ir",
  industryFa: "گردشگری هوشمند",
  industryEn: "TravelTech",
  category: "AI Tourism Platform",
  positioning: "AI-powered tourism intelligence for Iran",
  shortDescriptionFa: publicSummaries.vayran.fa,
  shortDescriptionEn: publicSummaries.vayran.en,
  titleFa: "کشف هوشمند ایران، از مقصد تا تجربه.",
  titleEn: "Discover Iran intelligently, from destination to experience.",
  problemFa: ["اطلاعات سفر ایران میان منابع متعدد پراکنده است و برنامه‌ریزی یک سفر قابل اعتماد زمان می‌برد."],
  problemEn: ["Iran travel information is fragmented across sources, making reliable trip planning time-consuming."],
  solutionFa: "وایران داده مقصد، پیشنهاد هوشمند و برنامه سفر را در یک تجربه یکپارچه گردشگری کنار هم قرار می‌دهد.",
  solutionEn: "Vairan combines destination data, intelligent recommendations and trip planning in one tourism experience.",
  capabilitiesFa: ["کشف مقصد", "برنامه‌ریزی سفر", "پیشنهاد هوشمند", "اطلاعات گردشگری ایران"],
  capabilitiesEn: ["Destination discovery", "Trip planning", "AI recommendations", "Iran travel intelligence"],
});

const darmic = syntheticProduct({
  slug: "darmic",
  name: "Darmic",
  domain: "darmic.ir",
  industryFa: "سلامت دیجیتال",
  industryEn: "HealthTech",
  category: "Medical AI Platform",
  positioning: "AI-assisted medical information and specialist guidance",
  shortDescriptionFa: publicSummaries.darmic.fa,
  shortDescriptionEn: publicSummaries.darmic.en,
  titleFa: "اطلاعات پزشکی روشن‌تر، ساختاریافته‌تر و قابل فهم‌تر.",
  titleEn: "Clearer, structured and more understandable medical information.",
  problemFa: ["اطلاعات پزشکی آنلاین اغلب پراکنده، عمومی یا فاقد ساختار مناسب برای فهم کاربر است."],
  problemEn: ["Online medical information is often fragmented, generic or poorly structured for users."],
  solutionFa: "دارمیک پرسش‌های سلامت را ساختاردهی می‌کند و پاسخ تحلیلی، محتاطانه و قابل فهم ارائه می‌دهد.",
  solutionEn: "Darmic structures health questions and provides analytical, cautious and understandable responses.",
  capabilitiesFa: ["پرسش و پاسخ پزشکی", "اطلاعات سلامت ساختاریافته", "تحلیل هوشمند", "محتوای سلامت"],
  capabilitiesEn: ["Medical Q&A", "Structured health information", "AI analysis", "Health content"],
});

const canonicalBySlug = new Map(canonicalProductPortfolio.map((product) => [product.slug, product]));

export const finalPublicProductPortfolio: Product[] = brandRegistry.map((brand) => {
  if (brand.slug === "vayran") return vayran;
  if (brand.slug === "darmic") return darmic;

  const product = canonicalBySlug.get(brand.slug) || baseProduct(brand.slug);
  if (!product) throw new Error(`Missing canonical product data for ${brand.slug}`);

  const summary = publicSummaries[brand.slug];
  const patch: Partial<Product> = {
    name: brand.name,
    domain: brand.domain,
    status: liveSlugs.has(brand.slug) ? "live" : product.status,
    ...(summary ? { shortDescriptionFa: summary.fa, shortDescriptionEn: summary.en } : {}),
  };

  if (brand.slug === "primesys") {
    patch.hero = {
      ...product.hero,
      descriptionFa: publicSummaries.primesys.fa,
      descriptionEn: publicSummaries.primesys.en,
    };
    patch.capabilitiesFa = [
      "فروش آنلاین و تجهیزات سازمانی",
      "نرم‌افزار و راهکارهای کسب‌وکار",
      "هوش مصنوعی و بینایی ماشین",
      "راهکارهای شناسایی و پردازش داده",
      "سخت‌افزار و تجهیزات تخصصی",
    ];
    patch.capabilitiesEn = [
      "Online commerce and enterprise equipment",
      "Business software and solutions",
      "AI and computer vision",
      "Identification and data-capture solutions",
      "Specialist hardware and devices",
    ];
  }

  if (brand.slug === "linkresan") {
    patch.hero = {
      ...product.hero,
      descriptionFa: publicSummaries.linkresan.fa,
      descriptionEn: publicSummaries.linkresan.en,
    };
    patch.capabilitiesFa = [
      "کوتاه‌کننده لینک هوشمند",
      "آمار و تحلیل کلیک و کمپین",
      "صفحه بیو و لینک در بیو",
      "تولید و مدیریت کد QR",
      "دامنه اختصاصی و مدیریت تیمی",
      "API، وب‌هوک و ابزارهای توسعه‌دهندگان",
    ];
    patch.capabilitiesEn = [
      "Smart URL shortening",
      "Click and campaign analytics",
      "Link-in-bio pages",
      "QR code generation and management",
      "Custom domains and team management",
      "API, webhooks and developer tooling",
    ];
  }

  return clone(product, patch);
});

export function getFinalPublicProduct(slug: string) {
  return finalPublicProductPortfolio.find((product) => product.slug === slug);
}
