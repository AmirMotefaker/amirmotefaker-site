export type ContactIntentId =
  | "investor"
  | "partnership"
  | "product"
  | "collaboration"
  | "media";

export type ContactIntent = {
  id: ContactIntentId;
  tag: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  subjectFa: string;
  subjectEn: string;
  bodyPromptFa: string;
  bodyPromptEn: string;
  productContext: boolean;
};

export const contactIntents: readonly ContactIntent[] = [
  {
    id: "investor",
    tag: "INVESTOR",
    titleFa: "گفت‌وگوی سرمایه‌گذاری و راهبردی",
    titleEn: "Investor & strategic conversation",
    descriptionFa:
      "برای گفتگو درباره پرتفوی، مدل کسب‌وکار، بازار، سرمایه‌گذاری یا فرصت‌های راهبردی بلندمدت.",
    descriptionEn:
      "For portfolio, business model, market, investment and long-term strategic conversations.",
    subjectFa: "گفت‌وگوی سرمایه‌گذاری / راهبردی — AmirMotefaker.ir",
    subjectEn: "Investor / strategic conversation — AmirMotefaker.ir",
    bodyPromptFa: "زمینه گفتگو، سازمان یا صندوق، و موضوع اصلی را کوتاه توضیح دهید.",
    bodyPromptEn: "Briefly share your organization or fund, context and the main topic you want to discuss.",
    productContext: false,
  },
  {
    id: "partnership",
    tag: "PARTNERSHIP",
    titleFa: "شراکت و توسعه بازار",
    titleEn: "Partnership & distribution",
    descriptionFa:
      "برای همکاری تجاری، کانال توزیع، هم‌افزایی محصول، دسترسی به بازار یا همکاری سازمانی.",
    descriptionEn:
      "For commercial partnerships, distribution, product synergies, market access and organizational collaboration.",
    subjectFa: "درخواست شراکت — AmirMotefaker.ir",
    subjectEn: "Partnership inquiry — AmirMotefaker.ir",
    bodyPromptFa: "نوع شراکت، بازار هدف و محصول مرتبط را مشخص کنید.",
    bodyPromptEn: "Please identify the partnership type, target market and relevant product.",
    productContext: true,
  },
  {
    id: "product",
    tag: "PRODUCT",
    titleFa: "محصول و همکاری تجاری",
    titleEn: "Product & commercial inquiry",
    descriptionFa:
      "برای دمو، همکاری محصولی، نیاز سازمانی، خرید، استفاده تجاری یا گفت‌وگو درباره یکی از محصولات.",
    descriptionEn:
      "For demos, product collaboration, organizational needs, commercial use or a specific portfolio product.",
    subjectFa: "درخواست محصول / همکاری تجاری — AmirMotefaker.ir",
    subjectEn: "Product / commercial inquiry — AmirMotefaker.ir",
    bodyPromptFa: "محصول موردنظر، مسئله‌ای که می‌خواهید حل کنید و نوع همکاری را بنویسید.",
    bodyPromptEn: "Please include the relevant product, the problem you are solving and the type of collaboration you need.",
    productContext: true,
  },
  {
    id: "collaboration",
    tag: "COLLABORATION",
    titleFa: "همکاری تخصصی و ساخت محصول",
    titleEn: "Collaboration & specialist talent",
    descriptionFa:
      "برای همکاری در محصول، طراحی، مهندسی، هوش مصنوعی، رشد یا نقش‌های تخصصی مرتبط با پروژه‌ها.",
    descriptionEn:
      "For product, design, engineering, AI, growth and other specialist collaboration around the portfolio.",
    subjectFa: "همکاری تخصصی — AmirMotefaker.ir",
    subjectEn: "Specialist collaboration — AmirMotefaker.ir",
    bodyPromptFa: "حوزه تخصص، نمونه کار یا پروفایل و نوع همکاری پیشنهادی را ارسال کنید.",
    bodyPromptEn: "Please share your specialty, portfolio or profile, and the type of collaboration you propose.",
    productContext: false,
  },
  {
    id: "media",
    tag: "MEDIA",
    titleFa: "رسانه، سخنرانی و مصاحبه",
    titleEn: "Media, speaking & interviews",
    descriptionFa:
      "برای مصاحبه، پادکست، رویداد، پنل، سخنرانی یا درخواست رسانه‌ای مرتبط با امیر یا محصولات.",
    descriptionEn:
      "For interviews, podcasts, events, panels, speaking invitations and media requests about Amir or the portfolio.",
    subjectFa: "درخواست رسانه / سخنرانی — AmirMotefaker.ir",
    subjectEn: "Media / speaking inquiry — AmirMotefaker.ir",
    bodyPromptFa: "نام رسانه یا رویداد، موضوع، فرمت و بازه زمانی را ذکر کنید.",
    bodyPromptEn: "Please include the publication or event, topic, format and expected timing.",
    productContext: false,
  },
] as const;

export function getContactIntent(id: string) {
  return contactIntents.find((intent) => intent.id === id);
}
