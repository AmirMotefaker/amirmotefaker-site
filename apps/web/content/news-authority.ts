import { canonicalProductPortfolio } from "@/content/canonical-product-portfolio";

/**
 * Conservative topic matcher for Technology News → portfolio context.
 *
 * Terms are intentionally domain-specific. Generic words such as product,
 * platform, system, analytics or founder are excluded because they create
 * misleading cross-links across unrelated technology articles.
 */
const productKeywords: Record<string, string[]> = {
  linkresan: ["url shortener", "url shortening", "utm", "qr code", "deep link", "link management", "کوتاه‌سازی لینک", "لینک کوتاه", "مدیریت لینک", "کیوآر", "دیپ لینک"],
  farsio: ["persian language", "persian writing", "translation", "text to speech", "tts", "nlp", "فارسی", "زبان فارسی", "نوشتن فارسی", "ترجمه", "تبدیل متن به گفتار", "گفتار"],
  fahmio: ["education technology", "edtech", "adaptive learning", "student learning", "school", "teacher", "آموزش", "یادگیری تطبیقی", "دانش‌آموز", "مدرسه", "معلم"],
  zobdino: ["ebook", "epub", "book summary", "summarization", "digital reading", "کتاب", "کتاب الکترونیکی", "خلاصه کتاب", "خلاصه‌سازی", "مطالعه"],
  filmtrack: ["movie", "film", "cinema", "tv series", "streaming", "imdb", "فیلم", "سینما", "سریال", "استریم"],
  idehjo: ["product hunt", "startup ideas", "startup discovery", "entrepreneurship", "marketplace", "استارتاپ", "ایده استارتاپ", "کارآفرینی", "بازار ایده"],
  tasvia: ["fintech", "payment settlement", "merchant payment", "sub-merchant", "banking", "فین تک", "فین‌تک", "تسویه پرداخت", "پرداخت پذیرنده", "بانکداری"],
  restyar: ["restaurant technology", "restaurant management", "cafe management", "hospitality technology", "foodtech", "مدیریت رستوران", "مدیریت کافه", "فودتک"],
  primesys: ["enterprise technology", "computer vision", "face recognition", "license plate recognition", "aidc", "rfid", "فناوری سازمانی", "بینایی ماشین", "تشخیص چهره", "پلاک‌خوان", "آراف‌آیدی"],
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
    .sort((a, b) => b.score - a.score || a.product.slug.localeCompare(b.product.slug))
    .slice(0, limit)
    .map((entry) => entry.product);
}
