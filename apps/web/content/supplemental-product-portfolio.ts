import { portfolioAssets, type Product } from "@/content/product-portfolio";

const pendingNamedProducts = portfolioAssets
  .filter((product) => product.slug === "primesys" || product.slug === "restyar")
  .map((product) => ({ ...product, related: product.related.filter((slug) => slug !== "shiftpay") })) as Product[];

const farsio = portfolioAssets.find((product) => product.slug === "farsio");

const neveshtyar: Product | undefined = farsio
  ? ({
      ...farsio,
      slug: "neveshtyar",
      name: "NeveshtYar",
      domain: "",
      industry: "Persian AI / Writing Technology",
      industryFa: "هوش مصنوعی فارسی / فناوری نوشتن",
      industryEn: "Persian AI / Writing Technology",
      category: "Browser Writing Assistant",
      categoryFa: "دستیار نوشتن فارسی در مرورگر",
      categoryEn: "Browser Writing Assistant",
      positioning: "Persian writing assistant for the browser",
      filterGroup: "AI & Intelligent Products",
      status: "development",
      featured: false,
      tags: ["Persian AI", "Writing", "Browser Extension", "Language Technology"],
      shortDescriptionFa:
        "نوشت‌یار محصولی از اکوسیستم فارسیو برای کمک به نوشتن، اصلاح و بهبود متن فارسی در محیط مرورگر است.",
      shortDescriptionEn:
        "NeveshtYar is a Farsio product focused on helping users write, correct and improve Persian text in the browser.",
      descriptionFa:
        "نوشت‌یار محصولی از اکوسیستم فارسیو برای کمک به نوشتن، اصلاح و بهبود متن فارسی در محیط مرورگر است.",
      descriptionEn:
        "NeveshtYar is a Farsio product focused on helping users write, correct and improve Persian text in the browser.",
      hero: {
        eyebrow: "FARSIO / PERSIAN WRITING AI",
        titleFa: "نوشتن فارسی، روان‌تر و دقیق‌تر در مرورگر.",
        titleEn: "A focused Persian writing assistant for the browser.",
        descriptionFa:
          "نوشت‌یار برای کاهش اصطکاک نوشتن و اصلاح متن فارسی در جریان روزمره کاربر طراحی می‌شود.",
        descriptionEn:
          "NeveshtYar is designed to reduce friction when writing and refining Persian text during everyday browser workflows.",
        primaryCtaFa: "شناخت نوشت‌یار",
        primaryCtaEn: "Explore NeveshtYar",
        secondaryCtaFa: "مشاهده فارسیو",
        secondaryCtaEn: "Explore Farsio",
      },
      audienceFa: "کاربران فارسی‌زبان که در مرورگر می‌نویسند و به کمک زبانی سریع و در دسترس نیاز دارند",
      audienceEn: "Persian-speaking users who write in the browser and need fast, accessible language assistance",
      capabilities: ["Persian writing assistance", "Text correction", "Browser workflow", "Language assistance"],
      capabilitiesFa: ["کمک به نوشتن فارسی", "اصلاح متن", "تجربه در مرورگر", "کمک زبانی"],
      capabilitiesEn: ["Persian writing assistance", "Text correction", "Browser workflow", "Language assistance"],
      problemFa: [
        "نوشتن و اصلاح متن فارسی در مرورگر معمولاً نیازمند جابه‌جایی میان ابزارهای جداگانه است.",
        "ابزارهای عمومی همیشه تجربه و ظرافت‌های زبان فارسی را در مرکز محصول قرار نمی‌دهند.",
      ],
      problemEn: [
        "Writing and correcting Persian text in the browser often requires switching between separate tools.",
        "General-purpose tools do not always center Persian-language quality and workflow needs.",
      ],
      solutionFa:
        "نوشت‌یار کمک زبانی فارسی را به همان محیطی می‌آورد که کاربر در آن می‌نویسد تا اصلاح و بهبود متن با اصطکاک کمتری انجام شود.",
      solutionEn:
        "NeveshtYar brings Persian-language assistance into the browser workflow so users can refine text with less context switching.",
      currentProductFa: "دستیار نوشتن فارسی در قالب تجربه مرورگر؛ توسعه و آماده‌سازی انتشار ادامه دارد.",
      currentProductEn: "A Persian writing assistant for browser workflows; development and release preparation continue.",
      visionFa: "تبدیل‌شدن به یک لایه ساده و قابل اتکا برای نوشتن بهتر فارسی در ابزارهای روزمره دیجیتال.",
      visionEn: "Become a simple, dependable layer for better Persian writing across everyday digital workflows.",
      missionFa: "کاهش اصطکاک نوشتن و اصلاح فارسی با آوردن کمک زبانی به جریان واقعی کاربر.",
      missionEn: "Reduce friction in Persian writing and correction by bringing language assistance into real user workflows.",
      roadmapFa: ["پایدارسازی تجربه مرورگر", "بهبود کیفیت کمک به نوشتن و اصلاح فارسی", "آماده‌سازی انتشار عمومی و چرخه بازخورد کاربران"],
      roadmapEn: ["Stabilize the browser experience", "Improve Persian writing and correction quality", "Prepare public distribution and a user-feedback loop"],
      amirRoleFa: "بنیان‌گذار فارسیو و هدایت‌کننده استراتژی محصول و تجربه نوشت‌یار.",
      amirRoleEn: "Founder of Farsio, directing NeveshtYar product strategy and experience.",
      technology: ["Persian NLP", "Browser Extension", "AI-assisted Writing"],
      technologies: ["Persian NLP", "Browser Extension", "AI-assisted Writing"],
      related: ["farsio"],
    } as Product)
  : undefined;

const avayar: Product | undefined = farsio
  ? ({
      ...farsio,
      slug: "avayar",
      name: "AvaYar",
      domain: "",
      industry: "Persian AI / Voice & Content Intelligence",
      industryFa: "هوش مصنوعی فارسی / صوت و هوشمندی محتوا",
      industryEn: "Persian AI / Voice & Content Intelligence",
      category: "Content & Voice Assistant",
      categoryFa: "دستیار محتوا و صوت",
      categoryEn: "Content & Voice Assistant",
      positioning: "Persian-first reading, summarization, translation and voice experience",
      filterGroup: "AI & Intelligent Products",
      status: "development",
      featured: false,
      tags: ["Persian AI", "Summarization", "Translation", "TTS", "Browser Extension"],
      shortDescriptionFa:
        "آوایار محصولی از اکوسیستم فارسیو برای استخراج، خلاصه‌سازی، ترجمه و تجربه صوتی محتوای فارسی و انگلیسی است.",
      shortDescriptionEn:
        "AvaYar is a Farsio product for extracting, summarizing, translating and listening to Persian and English content.",
      descriptionFa:
        "آوایار محصولی از اکوسیستم فارسیو برای استخراج، خلاصه‌سازی، ترجمه و تجربه صوتی محتوای فارسی و انگلیسی است.",
      descriptionEn:
        "AvaYar is a Farsio product for extracting, summarizing, translating and listening to Persian and English content.",
      hero: {
        eyebrow: "FARSIO / CONTENT & VOICE AI",
        titleFa: "محتوا را بخوان، بفهم، خلاصه کن و بشنو.",
        titleEn: "Read, understand, summarize and listen to content.",
        descriptionFa:
          "آوایار برای تبدیل محتوای وب به تجربه‌ای قابل فهم‌تر و شنیدنی‌تر با تمرکز ویژه بر کیفیت فارسی توسعه می‌یابد.",
        descriptionEn:
          "AvaYar is being developed to turn web content into a more understandable and listenable experience, with a strong focus on Persian quality.",
        primaryCtaFa: "شناخت آوایار",
        primaryCtaEn: "Explore AvaYar",
        secondaryCtaFa: "مشاهده فارسیو",
        secondaryCtaEn: "Explore Farsio",
      },
      audienceFa: "کاربرانی که می‌خواهند محتوای فارسی و انگلیسی وب را سریع‌تر بفهمند، خلاصه کنند، ترجمه کنند یا بشنوند",
      audienceEn: "Users who want to understand, summarize, translate or listen to Persian and English web content more efficiently",
      capabilities: ["Content extraction", "Summarization", "Translation", "Read aloud", "Persian voice experience"],
      capabilitiesFa: ["استخراج محتوا", "خلاصه‌سازی", "ترجمه", "خواندن با صدا", "تجربه صوتی فارسی"],
      capabilitiesEn: ["Content extraction", "Summarization", "Translation", "Read aloud", "Persian voice experience"],
      problemFa: [
        "خواندن و فهم محتوای طولانی وب زمان‌بر است و کاربر برای خلاصه‌سازی، ترجمه و صوت معمولاً میان چند ابزار جابه‌جا می‌شود.",
        "کیفیت تجربه صوتی فارسی و لحن طبیعی برای استفاده روزمره یک چالش محصولی مهم است.",
      ],
      problemEn: [
        "Reading and understanding long web content takes time, while summarization, translation and audio often require separate tools.",
        "Natural Persian voice quality remains an important product challenge for everyday listening experiences.",
      ],
      solutionFa:
        "آوایار استخراج، خلاصه‌سازی، ترجمه و خواندن صوتی را در یک جریان واحد جمع می‌کند تا مصرف محتوای وب ساده‌تر شود.",
      solutionEn:
        "AvaYar combines extraction, summarization, translation and spoken output in one workflow to make web content easier to consume.",
      currentProductFa: "تجربه مرورگر برای خواندن، خلاصه‌سازی، ترجمه و صوت؛ بهبود کیفیت و تجربه فارسی در حال توسعه است.",
      currentProductEn: "A browser experience for reading, summarization, translation and audio; Persian quality and UX are still being improved.",
      visionFa: "ساختن یک همراه محتوایی فارسی‌محور برای فهم و مصرف سریع‌تر محتوای دیجیتال.",
      visionEn: "Build a Persian-first content companion for understanding and consuming digital information more efficiently.",
      missionFa: "یکپارچه‌کردن فهم متن، خلاصه، ترجمه و صوت در تجربه‌ای ساده و قابل استفاده برای کاربر فارسی‌زبان.",
      missionEn: "Unify text understanding, summarization, translation and audio in a simple experience for Persian-speaking users.",
      roadmapFa: ["بهبود کیفیت صدای فارسی و تجربه شنیداری", "پایدارسازی استخراج و خلاصه‌سازی محتوای وب", "تکمیل تجربه مرورگر و آماده‌سازی چرخه انتشار"],
      roadmapEn: ["Improve Persian voice quality and listening UX", "Stabilize web-content extraction and summarization", "Complete the browser experience and release workflow"],
      amirRoleFa: "بنیان‌گذار فارسیو و هدایت‌کننده استراتژی محصول، تجربه فارسی و یکپارچگی صوت آوایار.",
      amirRoleEn: "Founder of Farsio, directing AvaYar product strategy, Persian experience and voice integration.",
      technology: ["Persian NLP", "Summarization", "Translation", "Text-to-Speech", "Browser Extension"],
      technologies: ["Persian NLP", "Summarization", "Translation", "Text-to-Speech", "Browser Extension"],
      related: ["farsio", "zobdino"],
    } as Product)
  : undefined;

export const supplementalProductPortfolio: Product[] = [
  ...pendingNamedProducts,
  ...(neveshtyar ? [neveshtyar] : []),
  ...(avayar ? [avayar] : []),
];

export function getSupplementalProduct(slug: string) {
  return supplementalProductPortfolio.find((product) => product.slug === slug);
}
