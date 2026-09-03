import type { Locale } from "@/content/founder-site";

export const productTopicClusters: Record<string, { fa: string[]; en: string[] }> = {
  restyar: { fa: ["مدیریت رستوران", "مدیریت کافه", "هوش مصنوعی رستوران", "فودتک", "نرم‌افزار مدیریت رستوران"], en: ["restaurant management", "cafe management", "restaurant AI", "FoodTech", "restaurant management software"] },
  primesys: { fa: ["نرم‌افزار سازمانی", "سیستم مدیریت کسب‌وکار", "اتوماسیون سازمانی", "زیرساخت دیجیتال", "راهکار سازمانی"], en: ["enterprise software", "business management system", "enterprise automation", "digital infrastructure", "enterprise technology"] },
  linkresan: { fa: ["کوتاه‌کننده لینک", "مدیریت لینک", "لینک کوتاه", "ساخت کد QR", "UTM", "تحلیل لینک"], en: ["URL shortener", "link management", "short links", "QR code", "UTM builder", "link analytics"] },
  farsio: { fa: ["هوش مصنوعی فارسی", "دستیار نوشتن فارسی", "تبدیل متن به گفتار فارسی", "خلاصه‌سازی فارسی", "فناوری زبان فارسی"], en: ["Persian AI", "Persian writing assistant", "Persian text to speech", "Persian summarization", "Persian language technology"] },
  fahmio: { fa: ["یادگیری تطبیقی", "آموزش هوشمند", "معلم هوش مصنوعی", "یادگیری شخصی‌سازی‌شده", "فناوری آموزشی"], en: ["adaptive learning", "AI education", "AI tutor", "personalized learning", "EdTech"] },
  zobdino: { fa: ["خلاصه کتاب با هوش مصنوعی", "تبدیل کتاب به صوت", "خلاصه فارسی کتاب", "کتاب صوتی هوش مصنوعی", "هوشمندی کتاب"], en: ["AI book summary", "book to audio", "Persian book summary", "AI audiobook", "book intelligence"] },
  idehjo: { fa: ["ایده کسب‌وکار", "ایده استارتاپ", "کشف ایده محصول", "تحلیل ایده", "ایده‌های فناوری"], en: ["business ideas", "startup ideas", "product idea discovery", "idea analysis", "technology ideas"] },
  tasvia: { fa: ["فین‌تک ایران", "تسویه مالی", "تسویه کسب‌وکار", "پرداخت و تسویه", "تسویه تأمین‌کننده"], en: ["FinTech Iran", "financial settlement", "business settlement", "payments and settlement", "supplier payouts"] },
  vayran: { fa: ["گردشگری هوشمند ایران", "هوش مصنوعی گردشگری", "راهنمای سفر ایران", "برنامه‌ریزی سفر", "فناوری گردشگری"], en: ["smart tourism Iran", "AI tourism", "Iran travel guide", "trip planning", "TravelTech"] },
  darmic: { fa: ["هوش مصنوعی پزشکی", "سلامت دیجیتال", "دستیار پزشکی هوشمند", "اطلاعات پزشکی", "فناوری سلامت"], en: ["medical AI", "digital health", "AI medical assistant", "medical information", "HealthTech"] },
  filmtrack: { fa: ["ردیابی فیلم و سریال", "فهرست تماشای فیلم", "کشف فیلم", "امتیاز فیلم", "پلتفرم فیلم فارسی"], en: ["movie tracking", "movie watchlist", "movie discovery", "movie ratings", "Persian movie platform"] },
};

export function getProductTopicCluster(slug: string, locale: Locale) {
  return productTopicClusters[slug]?.[locale] ?? [];
}
