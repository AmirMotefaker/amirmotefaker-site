import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";
import type { Product } from "@/content/product-portfolio";
import { brandRegistry } from "@/content/brand-registry";

const clone = (product: Product, patch: Partial<Product>): Product => ({ ...product, ...patch } as Product);

const liveSlugs = new Set(["restyar", "primesys", "linkresan", "farsio", "fahmio", "zobdino", "idehjo", "filmtrack"]);

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
    status: "development",
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
    roadmapFa: ["تکمیل محصول", "اعتبارسنجی تجربه کاربر", "آماده‌سازی برای عرضه عمومی"],
    roadmapEn: ["Complete the product", "Validate the user experience", "Prepare for public launch"],
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
  name: "Vayran",
  domain: "vayran.ir",
  industryFa: "گردشگری هوشمند",
  industryEn: "TravelTech",
  category: "AI Tourism Platform",
  positioning: "AI-powered tourism intelligence for Iran",
  shortDescriptionFa: "وایران یک پلتفرم هوشمند گردشگری برای کشف مقصد، برنامه‌ریزی سفر و اتصال بهتر مسافر به تجربه‌های واقعی ایران است.",
  shortDescriptionEn: "Vayran is an AI-powered tourism platform for destination discovery, trip planning and better access to authentic travel experiences in Iran.",
  titleFa: "کشف هوشمند ایران، از مقصد تا تجربه.",
  titleEn: "Discover Iran intelligently, from destination to experience.",
  problemFa: ["اطلاعات سفر ایران میان منابع متعدد پراکنده است و برنامه‌ریزی یک سفر قابل اعتماد زمان می‌برد."],
  problemEn: ["Iran travel information is fragmented across sources, making reliable trip planning time-consuming."],
  solutionFa: "وایران داده مقصد، پیشنهاد هوشمند و برنامه سفر را در یک تجربه یکپارچه گردشگری کنار هم قرار می‌دهد.",
  solutionEn: "Vayran combines destination data, intelligent recommendations and trip planning in one tourism experience.",
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
  shortDescriptionFa: "دارمیک یک پلتفرم هوش مصنوعی پزشکی برای ارائه اطلاعات سلامت ساختاریافته، پاسخ‌های تحلیلی و هدایت کاربر به تصمیم آگاهانه‌تر است.",
  shortDescriptionEn: "Darmic is a medical AI platform for structured health information, analytical answers and better-informed user decisions.",
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

  const patch: Partial<Product> = {
    name: brand.name,
    domain: brand.domain,
    status: liveSlugs.has(brand.slug) ? "live" : product.status,
  };

  if (brand.slug === "primesys") {
    patch.shortDescriptionFa = "پرایم سیستم یک کسب‌وکار فناوری با تمرکز بر نرم‌افزار، هوش مصنوعی، بینایی ماشین، سخت‌افزار، بازی و پردازش گرافیکی و شناسایی خودکار است.";
    patch.hero = {
      ...product.hero,
      descriptionFa: "پرایم سیستم راهکارهای نرم‌افزاری، هوش مصنوعی، بینایی ماشین، سخت‌افزار، بازی و پردازش گرافیکی و شناسایی خودکار را برای مسائل واقعی کسب‌وکار توسعه می‌دهد.",
    };
  }

  return clone(product, patch);
});

export function getFinalPublicProduct(slug: string) {
  return finalPublicProductPortfolio.find((product) => product.slug === slug);
}
