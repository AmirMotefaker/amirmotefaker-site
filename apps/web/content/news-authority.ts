import type { Locale } from "@/content/founder-site";
import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";
import { getProductDisplayName } from "@/content/product-portfolio";

const productKeywords: Record<string, string[]> = {
  linkresan: ["link", "url", "shortener", "shortening", "utm", "qr", "deep link", "analytics", "لینک", "کوتاه", "کیوآر", "تحلیل لینک"],
  farsio: ["persian", "language", "writing", "translation", "speech", "voice", "tts", "nlp", "فارسی", "زبان", "نوشتن", "ترجمه", "صوت", "گفتار"],
  fahmio: ["education", "learning", "student", "school", "teacher", "adaptive", "edtech", "آموزش", "یادگیری", "دانش‌آموز", "مدرسه", "معلم"],
  zobdino: ["book", "ebook", "epub", "pdf", "reading", "summary", "summarization", "کتاب", "مطالعه", "خلاصه", "پی‌دی‌اف"],
  filmtrack: ["movie", "film", "cinema", "series", "streaming", "imdb", "فیلم", "سینما", "سریال", "استریم"],
  idehjo: ["startup", "product hunt", "idea", "founder", "entrepreneur", "marketplace", "استارتاپ", "ایده", "کارآفرین", "محصول"],
  tasvia: ["fintech", "payment", "settlement", "merchant", "banking", "finance", "فین تک", "فین‌تک", "پرداخت", "تسویه", "مالی", "بانک"],
  restyar: ["restaurant", "cafe", "hospitality", "foodtech", "رستوران", "کافه", "فودتک"],
  primesys: ["infrastructure", "system", "enterprise", "platform", "زیرساخت", "سیستم", "سازمانی"],
};

function normalize(value: string) {
  return value.toLocaleLowerCase("en-US").replace(/\s+/g, " ").trim();
}

export function getRelatedNewsProducts(input: {
  title?: string;
  excerpt?: string;
  categories?: string[];
}, limit = 3) {
  const haystack = normalize([input.title, input.excerpt, ...(input.categories ?? [])].filter(Boolean).join(" "));
  if (!haystack) return [];

  return canonicalProductPortfolio
    .map((product) => ({
      product,
      score: (productKeywords[product.slug] ?? []).reduce(
        (total, keyword) => total + (haystack.includes(normalize(keyword)) ? 1 : 0),
        0,
      ),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.product);
}

export function getNewsProductLinkLabel(slug: string, locale: Locale) {
  const product = canonicalProductPortfolio.find((item) => item.slug === slug);
  return product ? getProductDisplayName(product, locale) : slug;
}
