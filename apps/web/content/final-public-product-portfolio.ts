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
  audienceFa: string;
  audienceEn: string;
  currentProductFa: string;
  currentProductEn: string;
  productPromiseFa: string;
  productPromiseEn: string;
  roadmapFa: string[];
  roadmapEn: string[];
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
      primaryCtaFa: "ورود به سایت محصول",
      primaryCtaEn: "Visit product",
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
    roadmapFa: input.roadmapFa,
    roadmapEn: input.roadmapEn,
    audienceFa: input.audienceFa,
    audienceEn: input.audienceEn,
    currentProductFa: input.currentProductFa,
    currentProductEn: input.currentProductEn,
    productPromiseFa: input.productPromiseFa,
    productPromiseEn: input.productPromiseEn,
    amirRoleFa: "بنیان‌گذار و هدایت‌کننده استراتژی، طراحی محصول و مسیر توسعه.",
    amirRoleEn: "Founder, directing strategy, product design and development roadmap.",
    visualDirectionFa: "طراحی مینیمال، حرفه‌ای و محصول‌محور متناسب با هویت برند.",
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
  positioning: "AI-powered travel companion for Iran",
  shortDescriptionFa: "وایران همراه هوشمند سفر برای کشف مقصد، برنامه‌ریزی سفر و دسترسی بهتر به تجربه‌های واقعی ایران است.",
  shortDescriptionEn: "Vairan is an AI-powered travel companion for destination discovery, trip planning and better access to authentic experiences across Iran.",
  titleFa: "کشف هوشمند ایران، از مقصد تا تجربه.",
  titleEn: "Discover Iran intelligently, from destination to experience.",
  problemFa: ["اطلاعات سفر ایران میان منابع متعدد پراکنده است.", "برنامه‌ریزی یک سفر قابل اعتماد و شخصی‌سازی‌شده زمان‌بر است."],
  problemEn: ["Iran travel information is fragmented across many sources.", "Building a reliable and personalized itinerary takes time."],
  solutionFa: "وایران داده مقصد، پیشنهاد هوشمند و برنامه سفر را در یک تجربه یکپارچه گردشگری کنار هم قرار می‌دهد.",
  solutionEn: "Vairan combines destination intelligence, recommendations and trip planning in one travel experience.",
  capabilitiesFa: ["کشف مقصد", "برنامه‌ریزی سفر", "پیشنهاد هوشمند", "اطلاعات گردشگری ایران", "ساخت تجربه سفر شخصی‌تر"],
  capabilitiesEn: ["Destination discovery", "Trip planning", "AI recommendations", "Iran travel intelligence", "Personalized travel experience"],
  audienceFa: "مسافران ایرانی و گردشگرانی که می‌خواهند ایران را دقیق‌تر و هوشمندتر کشف کنند.",
  audienceEn: "Travelers who want a clearer, smarter way to discover and plan trips across Iran.",
  currentProductFa: "تمرکز فعلی وایران روی ساخت تجربه کشف مقصد و برنامه‌ریزی سفر با داده و پیشنهاد هوشمند است.",
  currentProductEn: "Vairan currently focuses on destination discovery and trip planning powered by structured travel data and intelligent recommendations.",
  productPromiseFa: "از تصمیم برای سفر تا کشف تجربه مناسب، مسیر را کوتاه‌تر و روشن‌تر کند.",
  productPromiseEn: "Make the path from travel intent to the right experience shorter and clearer.",
  roadmapFa: ["گسترش پوشش مقصدهای ایران", "بهبود پیشنهادهای شخصی‌سازی‌شده", "تکمیل تجربه برنامه سفر"],
  roadmapEn: ["Expand destination coverage across Iran", "Improve personalized recommendations", "Complete the trip-planning experience"],
});

const darmic = syntheticProduct({
  slug: "darmic",
  name: "Darmic",
  domain: "darmic.ir",
  industryFa: "سلامت دیجیتال",
  industryEn: "HealthTech",
  category: "Personal Health Intelligence",
  positioning: "Personal health intelligence with structured medical information",
  shortDescriptionFa: "دارمیک هوش سلامت شخصی برای ارائه اطلاعات سلامت ساختاریافته، پاسخ‌های تحلیلی و کمک به درک بهتر موضوعات پزشکی است.",
  shortDescriptionEn: "Darmic is a personal health intelligence platform for structured health information, analytical answers and clearer understanding of medical topics.",
  titleFa: "اطلاعات سلامت روشن‌تر، ساختاریافته‌تر و قابل فهم‌تر.",
  titleEn: "Clearer, structured and more understandable health information.",
  problemFa: ["اطلاعات سلامت آنلاین اغلب پراکنده و بدون ساختار مناسب است.", "کاربر برای فهم یک موضوع پزشکی مجبور است میان منابع مختلف جابه‌جا شود."],
  problemEn: ["Online health information is often fragmented and poorly structured.", "Users frequently have to move across multiple sources to understand one medical topic."],
  solutionFa: "دارمیک پرسش‌های سلامت را ساختاردهی می‌کند و اطلاعات تحلیلی، محتاطانه و قابل فهم ارائه می‌دهد.",
  solutionEn: "Darmic structures health questions and presents analytical, cautious and understandable health information.",
  capabilitiesFa: ["پرسش و پاسخ سلامت", "اطلاعات سلامت ساختاریافته", "تحلیل هوشمند", "محتوای پزشکی قابل فهم", "هدایت به تصمیم آگاهانه‌تر"],
  capabilitiesEn: ["Health Q&A", "Structured health information", "AI-assisted analysis", "Understandable medical content", "Better-informed decisions"],
  audienceFa: "کاربرانی که به دنبال فهم بهتر و ساختاریافته‌تر اطلاعات سلامت هستند.",
  audienceEn: "People looking for clearer and more structured health information.",
  currentProductFa: "تمرکز فعلی دارمیک روی تجربه پرسش‌وپاسخ سلامت، ساختاردهی اطلاعات و ارائه پاسخ‌های قابل فهم است.",
  currentProductEn: "Darmic currently focuses on health Q&A, structured information and understandable analytical responses.",
  productPromiseFa: "کمک کند کاربر موضوع سلامت را بهتر بفهمد؛ بدون جایگزین‌کردن تشخیص یا مراقبت حرفه‌ای پزشکی.",
  productPromiseEn: "Help users understand health topics more clearly without replacing professional medical diagnosis or care.",
  roadmapFa: ["گسترش صفحات تخصصی سلامت", "بهبود ساختار پاسخ‌ها", "تقویت تجربه دو‌زبانه و دسترسی‌پذیری"],
  roadmapEn: ["Expand specialist health pages", "Improve response structure", "Strengthen bilingual and accessible experiences"],
});

const canonicalBySlug = new Map(canonicalProductPortfolio.map((product) => [product.slug, product]));

const contentPatches: Record<string, Partial<Product>> = {
  primesys: {
    shortDescriptionFa: "پرایم‌سیستم مجموعه‌ای از راهکارهای فناوری برای نرم‌افزار، هوش مصنوعی و بینایی ماشین، سخت‌افزار و زیرساخت‌های شناسایی و عملیات کسب‌وکار است.",
    shortDescriptionEn: "PrimeSYS delivers technology solutions across software, AI and computer vision, hardware and business identification infrastructure.",
    audienceFa: "کسب‌وکارها و سازمان‌هایی که به راهکارهای نرم‌افزاری، هوشمندسازی و زیرساخت فناوری نیاز دارند.",
    audienceEn: "Businesses and organizations that need software, intelligent automation and technology infrastructure.",
    problemFa: ["نیازهای فناوری سازمان‌ها معمولاً میان نرم‌افزار، سخت‌افزار و راهکارهای هوشمند پراکنده‌اند.", "یکپارچه‌سازی چند تامین‌کننده هزینه و پیچیدگی عملیات را بالا می‌برد."],
    problemEn: ["Enterprise technology needs are often fragmented across software, hardware and intelligent systems.", "Coordinating multiple technology vendors increases operational complexity."],
    solutionFa: "پرایم‌سیستم چند لایه فناوری را در قالب راهکارهای یکپارچه و کاربردی برای مسائل واقعی کسب‌وکار کنار هم قرار می‌دهد.",
    solutionEn: "PrimeSYS combines multiple technology layers into practical solutions for real business operations.",
    capabilitiesFa: ["نرم‌افزارهای کسب‌وکار", "هوش مصنوعی و بینایی ماشین", "تشخیص چهره و پلاک", "سخت‌افزار و پردازش", "بارکد، RFID و شناسایی خودکار", "راهکارهای عملیاتی سازمانی"],
    capabilitiesEn: ["Business software", "AI and computer vision", "Face and license-plate recognition", "Hardware and computing", "Barcode, RFID and AIDC", "Enterprise operational solutions"],
    currentProductFa: "پرایم‌سیستم به‌عنوان یک مجموعه فناوری چندمحصولی، راهکارهای نرم‌افزاری و سخت‌افزاری را در کنار فناوری‌های هوشمند ارائه می‌کند.",
    currentProductEn: "PrimeSYS operates as a multi-solution technology business spanning software, hardware and intelligent systems.",
    productPromiseFa: "فناوری مناسب را به یک راهکار قابل استفاده برای عملیات واقعی کسب‌وکار تبدیل کند.",
    productPromiseEn: "Turn the right technology into usable solutions for real business operations.",
    roadmapFa: ["تکمیل یکپارچگی پرتفوی راهکارها", "گسترش راهکارهای هوشمند", "تقویت تجربه دیجیتال مشتریان سازمانی"],
    roadmapEn: ["Unify the solution portfolio", "Expand intelligent solutions", "Improve the digital experience for enterprise customers"],
  },
  restyar: {
    shortDescriptionFa: "رستیار نرم‌افزار هوشمند مدیریت کافه و رستوران است که فروش، موجودی، مشتری، شعب و عملیات روزانه را در یک تجربه یکپارچه مدیریت می‌کند.",
    shortDescriptionEn: "RestYar is an intelligent cafe and restaurant management platform that brings sales, inventory, customers, branches and daily operations together.",
    audienceFa: "کافه‌ها، رستوران‌ها، فست‌فودها و مجموعه‌های غذایی تک‌شعبه و چندشعبه.",
    audienceEn: "Cafes, restaurants, fast-food businesses and single- or multi-branch food operators.",
    problemFa: ["فروش، موجودی، مشتری و مدیریت شعب معمولاً در ابزارهای جداگانه انجام می‌شوند.", "نبود دید یکپارچه تصمیم‌گیری عملیاتی را سخت می‌کند."],
    problemEn: ["Sales, inventory, customer management and branches are often handled in separate tools.", "Without a unified view, operational decisions become harder."],
    solutionFa: "رستیار عملیات اصلی کسب‌وکار غذایی را در یک پلتفرم ابری و داده‌محور یکپارچه می‌کند.",
    solutionEn: "RestYar unifies the core operations of food businesses in one cloud and data-driven platform.",
    capabilitiesFa: ["فروش", "مدیریت موجودی", "باشگاه مشتریان و وفاداری", "مدیریت شعب", "رزرو", "گزارش و تحلیل", "عملیات هوشمند"],
    capabilitiesEn: ["Sales", "Inventory management", "Customer loyalty", "Branch management", "Reservations", "Analytics", "Intelligent operations"],
    currentProductFa: "رستیار روی مدیریت یکپارچه عملیات رستوران و کافه با تمرکز بر داده، مشتری و بهره‌وری روزانه متمرکز است.",
    currentProductEn: "RestYar focuses on unified restaurant and cafe operations with an emphasis on data, customers and daily efficiency.",
    productPromiseFa: "از فروش تا وفاداری مشتری، عملیات اصلی مجموعه غذایی در یک سیستم دیده شود.",
    productPromiseEn: "Bring the journey from sales to customer loyalty into one operating system.",
    roadmapFa: ["تعمیق تحلیل عملیات", "گسترش قابلیت‌های هوشمند", "بهبود تجربه مجموعه‌های چندشعبه"],
    roadmapEn: ["Deepen operational analytics", "Expand intelligent capabilities", "Improve the multi-branch experience"],
  },
  linkresan: {
    shortDescriptionFa: "لینک‌رسان پلتفرم مدیریت لینک است؛ از کوتاه‌سازی و تحلیل کلیک تا لینک‌در‌بیو، QR، دامنه اختصاصی، تیم و API.",
    shortDescriptionEn: "LinkResan is a link-management platform spanning smart shortening, click analytics, link-in-bio, QR, custom domains, teams and API workflows.",
    audienceFa: "سازندگان محتوا، بازاریاب‌ها، تیم‌ها و کسب‌وکارهایی که لینک بخشی از مسیر جذب و اندازه‌گیری آنهاست.",
    audienceEn: "Creators, marketers, teams and businesses that use links as part of acquisition and measurement workflows.",
    problemFa: ["لینک‌های بازاریابی بدون تحلیل و مدیریت متمرکز ارزش داده‌ای خود را از دست می‌دهند.", "تیم‌ها برای QR، دامنه اختصاصی، لینک‌در‌بیو و API معمولاً چند ابزار جدا استفاده می‌کنند."],
    problemEn: ["Marketing links lose much of their value without centralized analytics and management.", "Teams often use separate tools for QR, custom domains, link-in-bio and API workflows."],
    solutionFa: "لینک‌رسان ابزارهای اصلی مدیریت، انتشار و تحلیل لینک را در یک پلتفرم فارسی‌محور و یکپارچه جمع می‌کند.",
    solutionEn: "LinkResan brings link publishing, management and analytics into one integrated platform.",
    capabilitiesFa: ["کوتاه‌کننده لینک", "آنالیز کلیک", "لینک‌در‌بیو", "QR کد", "دامنه اختصاصی", "مدیریت تیم", "API و Webhook"],
    capabilitiesEn: ["Smart link shortening", "Click analytics", "Link-in-bio", "QR codes", "Custom domains", "Team management", "API and webhooks"],
    currentProductFa: "لینک‌رسان یک محصول عملیاتی و آنلاین برای مدیریت چرخه کامل لینک و اندازه‌گیری تعامل کاربران است.",
    currentProductEn: "LinkResan is a live product for managing the full link lifecycle and measuring user engagement.",
    productPromiseFa: "هر لینک را از یک آدرس ساده به یک دارایی قابل مدیریت و قابل اندازه‌گیری تبدیل کند.",
    productPromiseEn: "Turn every link from a simple URL into a manageable, measurable asset.",
    roadmapFa: ["گسترش تحلیل پیشرفته", "تقویت همکاری تیمی", "گسترش API و اتوماسیون"],
    roadmapEn: ["Expand advanced analytics", "Strengthen team collaboration", "Grow API and automation capabilities"],
  },
  farsio: {
    shortDescriptionFa: "فارسیو مجموعه ابزارهای هوش مصنوعی فارسی‌محور برای نوشتن، فهم، اصلاح، ترجمه، خلاصه‌سازی و مصرف محتوای فارسی است.",
    shortDescriptionEn: "Farsio is a Persian-first AI toolkit for writing, understanding, correcting, translating, summarizing and consuming Persian content.",
    audienceFa: "کاربران فارسی‌زبان، نویسندگان، دانشجویان و افرادی که هر روز با محتوای فارسی در وب کار می‌کنند.",
    audienceEn: "Persian-speaking users, writers, students and people who work with Persian content on the web every day.",
    problemFa: ["بسیاری از ابزارهای هوش مصنوعی تجربه زبان فارسی را در اولویت طراحی قرار نمی‌دهند.", "نوشتن، فهم و مصرف محتوای فارسی میان ابزارهای پراکنده انجام می‌شود."],
    problemEn: ["Many AI products do not design around Persian as a first-class language experience.", "Writing, understanding and consuming Persian content is fragmented across tools."],
    solutionFa: "فارسیو قابلیت‌های نوشتاری و زبانی را در خانواده‌ای از ابزارهای فارسی‌محور کنار هم قرار می‌دهد.",
    solutionEn: "Farsio brings language and writing capabilities together in a Persian-first family of AI tools.",
    capabilitiesFa: ["اصلاح نوشتار فارسی", "دستیار نوشتن", "دستیار دانش", "استخراج محتوای وب", "ترجمه", "خلاصه‌سازی", "خروجی صوتی فارسی"],
    capabilitiesEn: ["Persian writing correction", "Writing assistance", "Knowledge assistance", "Web content extraction", "Translation", "Summarization", "Persian audio output"],
    currentProductFa: "فارسیو روی تجربه افزونه مرورگر و ابزارهای زبانی از جمله نویشت‌یار و آوایار متمرکز است.",
    currentProductEn: "Farsio currently focuses on browser-based Persian language tools including writing and voice-oriented experiences.",
    productPromiseFa: "کار با زبان فارسی در وب را طبیعی‌تر، سریع‌تر و هوشمندتر کند.",
    productPromiseEn: "Make working with Persian on the web more natural, faster and smarter.",
    roadmapFa: ["تکمیل تجربه افزونه‌ها", "گسترش کیفیت صوت فارسی", "یکپارچه‌سازی بیشتر ابزارهای فارسیو"],
    roadmapEn: ["Complete the extension experiences", "Improve Persian voice quality", "Unify more of the Farsio toolset"],
  },
  fahmio: {
    shortDescriptionFa: "فهمیو پلتفرم یادگیری تطبیقی با معلم هوشمند است که آموزش، تمرین و مسیر یادگیری را با نیاز هر دانش‌آموز هماهنگ می‌کند.",
    shortDescriptionEn: "Fahmio is an adaptive-learning platform with an intelligent tutor that aligns lessons, practice and learning paths with each learner.",
    audienceFa: "دانش‌آموزان، خانواده‌ها و معلمانی که به مسیر یادگیری شخصی‌تر و قابل پیگیری نیاز دارند.",
    audienceEn: "Students, families and teachers looking for a more personalized and trackable learning experience.",
    problemFa: ["یک مسیر آموزشی ثابت برای همه دانش‌آموزان مناسب نیست.", "فاصله میان آموزش، تمرین و بازخورد باعث افت پیوستگی یادگیری می‌شود."],
    problemEn: ["A single fixed learning path does not fit every student.", "Gaps between instruction, practice and feedback reduce learning continuity."],
    solutionFa: "فهمیو آموزش، تمرین، برنامه درسی و معلم هوشمند را در یک مسیر تطبیقی کنار هم قرار می‌دهد.",
    solutionEn: "Fahmio connects learning, practice, curriculum and an intelligent tutor in an adaptive path.",
    capabilitiesFa: ["یادگیری تطبیقی", "معلم هوشمند", "تمرین هدفمند", "برنامه درسی", "مسیر دانش‌آموز", "ابزارهای معلم", "بازخورد یادگیری"],
    capabilitiesEn: ["Adaptive learning", "Intelligent tutor", "Targeted practice", "Curriculum", "Student learning path", "Teacher tools", "Learning feedback"],
    currentProductFa: "فهمیو روی تجربه دانش‌آموز، یادگیری، تمرین، معلم هوشمند و پوشش برنامه درسی متمرکز است.",
    currentProductEn: "Fahmio currently focuses on the student experience, learning, practice, intelligent tutoring and curriculum coverage.",
    productPromiseFa: "هر دانش‌آموز مسیر روشن‌تر و متناسب‌تری برای یادگیری داشته باشد.",
    productPromiseEn: "Give every learner a clearer path that adapts to their learning needs.",
    roadmapFa: ["گسترش پوشش محتوای درسی", "تعمیق یادگیری تطبیقی", "بهبود ابزارهای دانش‌آموز و معلم"],
    roadmapEn: ["Expand curriculum coverage", "Deepen adaptive learning", "Improve student and teacher tools"],
  },
  zobdino: {
    shortDescriptionFa: "زبدینو پلتفرم هوش کتاب برای تبدیل کتاب و فایل‌های خواندنی به خلاصه فارسی، تجربه شنیداری و مسیر سریع‌تر فهم محتواست.",
    shortDescriptionEn: "Zobdino is a book-intelligence platform that turns reading files into Persian summaries, audio experiences and faster paths to understanding.",
    audienceFa: "خوانندگان، دانشجویان و کاربران پرمشغله‌ای که می‌خواهند کتاب را سریع‌تر بفهمند یا بشنوند.",
    audienceEn: "Readers, students and busy users who want to understand or listen to books more efficiently.",
    problemFa: ["خواندن کامل هر کتاب همیشه با زمان کاربر سازگار نیست.", "تبدیل کتاب به خلاصه قابل اعتماد و تجربه صوتی معمولاً نیازمند چند ابزار جداست."],
    problemEn: ["Reading every book in full does not always fit the user's available time.", "Turning a book into a useful summary and audio experience often requires multiple tools."],
    solutionFa: "زبدینو فایل کتاب را دریافت می‌کند و تجربه‌ای برای خلاصه‌سازی فارسی، فهم محتوا و مصرف صوتی فراهم می‌کند.",
    solutionEn: "Zobdino ingests book files and creates an experience for Persian summarization, content understanding and audio consumption.",
    capabilitiesFa: ["ورود فایل کتاب", "خلاصه‌سازی فارسی", "تجربه صوتی", "پردازش محتوای طولانی", "مدیریت امن فایل کاربر", "تجربه مطالعه سریع‌تر"],
    capabilitiesEn: ["Book-file ingestion", "Persian summarization", "Audio experience", "Long-form content processing", "Secure user-file handling", "Faster reading workflow"],
    currentProductFa: "زبدینو در حال تکمیل زنجیره امن ورود فایل، پردازش کتاب، تولید خلاصه و تجربه صوتی کاربر است.",
    currentProductEn: "Zobdino is completing the secure ingestion, book-processing, summarization and audio-user experience pipeline.",
    productPromiseFa: "کمک کند کاربر در زمان کمتر، بخش بیشتری از ارزش یک کتاب را دریافت کند.",
    productPromiseEn: "Help users capture more of a book's value in less time.",
    roadmapFa: ["تکمیل پشتیبانی فرمت‌های کتاب", "ارتقای کیفیت تجربه صوتی", "تکمیل Runtime امن فایل کاربر"],
    roadmapEn: ["Complete book-format coverage", "Improve the audio experience", "Complete the secure user-file runtime"],
  },
  idehjo: {
    shortDescriptionFa: "ایده‌جو پلتفرم کشف ایده‌های به‌روز استارتاپی دنیاست؛ برای پیدا کردن الگوهای محصول، بازار و فرصت‌های قابل بررسی.",
    shortDescriptionEn: "IdehJo is a startup-idea discovery platform for finding current product patterns, markets and opportunities worth exploring.",
    audienceFa: "کارآفرینان، سازندگان محصول و افرادی که به دنبال کشف و ارزیابی فرصت‌های استارتاپی هستند.",
    audienceEn: "Entrepreneurs, product builders and people exploring startup opportunities.",
    problemFa: ["ایده‌های استارتاپی باکیفیت میان منابع متعدد و سیگنال‌های ضعیف پراکنده‌اند.", "جمع‌آوری و مقایسه فرصت‌ها زمان زیادی می‌گیرد."],
    problemEn: ["High-quality startup ideas are scattered across many sources and noisy signals.", "Collecting and comparing opportunities takes significant time."],
    solutionFa: "ایده‌جو ایده‌ها و سیگنال‌های محصول را در یک تجربه کشف، ذخیره و بررسی متمرکز می‌کند.",
    solutionEn: "IdehJo centralizes startup ideas and product signals into a discovery, saving and evaluation experience.",
    capabilitiesFa: ["کشف ایده", "داده به‌روز", "دسته‌بندی فرصت‌ها", "ذخیره ایده‌ها", "مرور و مقایسه", "کشف بازار و محصول"],
    capabilitiesEn: ["Idea discovery", "Fresh data", "Opportunity categorization", "Saved ideas", "Review and comparison", "Market and product discovery"],
    currentProductFa: "ایده‌جو روی تازه‌بودن داده، کشف سریع‌تر و تجربه ذخیره و بازگشت به فرصت‌های منتخب متمرکز است.",
    currentProductEn: "IdehJo focuses on data freshness, faster discovery and saving selected opportunities for later review.",
    productPromiseFa: "فاصله میان «دنبال ایده بودن» و «دیدن فرصت قابل بررسی» را کوتاه‌تر کند.",
    productPromiseEn: "Shorten the distance between looking for an idea and finding an opportunity worth evaluating.",
    roadmapFa: ["بهبود کیفیت و تازگی داده", "تعمیق فیلتر و کشف", "تقویت تجربه ذخیره و ارزیابی"],
    roadmapEn: ["Improve data quality and freshness", "Deepen filtering and discovery", "Strengthen saving and evaluation workflows"],
  },
  filmtrack: {
    shortDescriptionFa: "فیلم‌ترک دستیار هوشمند فیلم و سریال برای کشف، دنبال‌کردن و ساخت تجربه شخصی‌تر از تماشای محتواست.",
    shortDescriptionEn: "FilmTrack is an intelligent movie and series assistant for discovery, tracking and a more personalized viewing experience.",
    audienceFa: "علاقه‌مندان فیلم و سریال که می‌خواهند کشف محتوا و پیگیری تجربه تماشا را در یک جا داشته باشند.",
    audienceEn: "Movie and series fans who want discovery and viewing progress in one experience.",
    problemFa: ["کشف فیلم مناسب میان حجم بالای محتوا دشوار شده است.", "اطلاعات، فهرست تماشا و تعامل اجتماعی معمولاً در سرویس‌های جدا هستند."],
    problemEn: ["Finding the right title is harder in an increasingly crowded content landscape.", "Information, watch tracking and social interaction are often split across services."],
    solutionFa: "فیلم‌ترک کشف محتوا، پیگیری فیلم و سریال و لایه‌های اجتماعی را در یک تجربه متمرکز می‌کند.",
    solutionEn: "FilmTrack combines content discovery, movie and series tracking and social layers in one experience.",
    capabilitiesFa: ["کشف فیلم و سریال", "پیگیری تماشا", "پروفایل کاربر", "فهرست‌های شخصی", "لایه اجتماعی", "پیشنهاد هوشمند"],
    capabilitiesEn: ["Movie and series discovery", "Watch tracking", "User profiles", "Personal lists", "Social layer", "Intelligent recommendations"],
    currentProductFa: "فیلم‌ترک در حال توسعه تجربه اجتماعی، پروفایل عمومی و قابلیت‌های دنبال‌کردن در کنار هسته کشف و پیگیری محتواست.",
    currentProductEn: "FilmTrack is developing public profiles, follow relationships and social features alongside its core discovery and tracking experience.",
    productPromiseFa: "انتخاب، دنبال‌کردن و گفت‌وگو درباره فیلم و سریال را در یک تجربه شخصی‌تر جمع کند.",
    productPromiseEn: "Bring choosing, tracking and discussing movies and series into a more personal experience.",
    roadmapFa: ["تکمیل پروفایل و Community", "بهبود پیشنهادهای شخصی", "تکمیل مدل اشتراک و قابلیت‌های پریمیوم"],
    roadmapEn: ["Complete profiles and community", "Improve personalized recommendations", "Complete subscription and premium capabilities"],
  },
  tasvia: {
    shortDescriptionFa: "تسوین پلتفرم دستیار مالی برای شفاف‌ترکردن جریان‌های مالی، تسویه و عملیات مالی کسب‌وکارهاست.",
    shortDescriptionEn: "Tasvin is a financial-assistant platform for clearer business money flows, settlement and financial operations.",
    audienceFa: "کسب‌وکارهای کوچک و متوسطی که به جریان مالی شفاف‌تر و ابزارهای عملیاتی مالی یکپارچه نیاز دارند.",
    audienceEn: "Small and medium businesses that need clearer money flows and integrated financial operations.",
    problemFa: ["تسویه و جریان پول میان فروش، شرکا و عملیات مالی می‌تواند پیچیده و کم‌شفاف باشد.", "فرآیندهای دستی ریسک خطا و دشواری پیگیری را افزایش می‌دهند."],
    problemEn: ["Settlement and money flows across sales, partners and operations can become complex and opaque.", "Manual processes increase error risk and make tracking harder."],
    solutionFa: "تسوین جریان‌های مالی و تسویه را در یک تجربه ساختاریافته، قابل پیگیری و مناسب عملیات کسب‌وکار سامان می‌دهد.",
    solutionEn: "Tasvin structures business financial flows and settlement into a clearer, trackable operating experience.",
    capabilitiesFa: ["تسویه", "جریان‌های مالی کسب‌وکار", "ثبت و پیگیری عملیات", "مدیریت طرف حساب", "ساختار حسابداری", "گزارش مالی"],
    capabilitiesEn: ["Settlement", "Business money flows", "Operational tracking", "Counterparty management", "Accounting structure", "Financial reporting"],
    currentProductFa: "تسوین در حال تکمیل هسته مالی، مدل حسابداری، گردش تسویه و زیرساخت احراز هویت محصول است.",
    currentProductEn: "Tasvin is completing its financial core, accounting model, settlement workflow and product authentication foundation.",
    productPromiseFa: "جریان پول کسب‌وکار را شفاف‌تر، قابل پیگیری‌تر و کم‌اصطکاک‌تر کند.",
    productPromiseEn: "Make business money movement clearer, more trackable and less operationally fragmented.",
    roadmapFa: ["تکمیل هسته مالی و تسویه", "تعمیق گزارش و هوش مالی", "آماده‌سازی عرضه کنترل‌شده"],
    roadmapEn: ["Complete the financial and settlement core", "Deepen reporting and financial intelligence", "Prepare for controlled launch"],
  },
};

export const finalPublicProductPortfolio: Product[] = brandRegistry.map((brand) => {
  if (brand.slug === "vayran") return vayran;
  if (brand.slug === "darmic") return darmic;

  const product = canonicalBySlug.get(brand.slug) || baseProduct(brand.slug);
  if (!product) throw new Error(`Missing canonical product data for ${brand.slug}`);

  const patch: Partial<Product> = {
    name: brand.name,
    domain: brand.domain,
    status: liveSlugs.has(brand.slug) ? "live" : product.status,
    ...(contentPatches[brand.slug] ?? {}),
  };

  return clone(product, patch);
});

export function getFinalPublicProduct(slug: string) {
  return finalPublicProductPortfolio.find((product) => product.slug === slug);
}
