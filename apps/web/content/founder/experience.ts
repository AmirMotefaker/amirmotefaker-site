export type LocalizedEntry = {
  fa: string;
  en: string;
};

export type CareerExperience = {
  id: string;
  company: LocalizedEntry;
  role: LocalizedEntry;
  period: LocalizedEntry;
  location: LocalizedEntry;
  summary: LocalizedEntry;
  responsibilities?: LocalizedEntry[];
  achievements?: LocalizedEntry[];
  source: "linkedin-2026" | "resume-1402";
};

export const primaryExperience: CareerExperience[] = [
  {
    id: "primesys-founder-ceo",
    company: { fa: "پرایم سیستم | PrimeSYS", en: "PrimeSYS" },
    role: { fa: "بنیان‌گذار و مدیرعامل", en: "Founder & CEO" },
    period: { fa: "مارس ۲۰۲۵ – اکنون", en: "March 2025 – Present" },
    location: { fa: "استان قزوین، ایران", en: "Qazvin Province, Iran" },
    summary: {
      fa: "شریک فناوری برای کسب‌وکارها با تمرکز بر افزایش بهره‌وری و تحول دیجیتال؛ تلفیقی از راهکارهای سخت‌افزاری، SaaS و اتوماسیون زنجیره تأمین و لجستیک.",
      en: "A technology-partner model focused on business productivity and digital transformation across specialized hardware, SaaS, and supply-chain/logistics automation.",
    },
    responsibilities: [
      { fa: "ارائه راهکارهای تحول دیجیتال و افزایش بهره‌وری کسب‌وکار.", en: "Deliver digital-transformation and productivity solutions." },
      { fa: "ترکیب راهکارهای نرم‌افزاری، سخت‌افزاری و AIDC در یک پیشنهاد تجاری جامع.", en: "Combine software, hardware and AIDC solutions in a broader technology offering." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "datamoon-sales-marketing-manager",
    company: { fa: "دیتامون | DataMoon", en: "DataMoon" },
    role: { fa: "مدیر فروش و بازاریابی", en: "Sales Marketing Manager" },
    period: { fa: "ژوئیه ۲۰۲۴ – اکنون", en: "July 2024 – Present" },
    location: { fa: "استان قزوین، ایران", en: "Qazvin Province, Iran" },
    summary: {
      fa: "فعالیت در شرکت دانش‌بنیان هوش مصنوعی با محصولات تشخیص پلاک، چهره و کد کانتینر در حوزه سیستم‌های حمل‌ونقل هوشمند.",
      en: "Sales and marketing leadership for an AI company developing license-plate, face and container-code recognition products for intelligent transportation systems.",
    },
    responsibilities: [
      { fa: "تحقیق بازار برای کشف روندها و فرصت‌های حوزه ITS.", en: "Conduct market research to uncover trends and opportunities in ITS." },
      { fa: "توسعه و اجرای استراتژی‌های بازاریابی هدفمند برای ذی‌نفعان ITS.", en: "Develop and execute targeted marketing strategies for ITS stakeholders." },
      { fa: "بهینه‌سازی فرایندها و ابزارهای فروش برای افزایش تبدیل سرنخ و درآمد.", en: "Optimize sales processes and materials to improve lead conversion and revenue." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "karjooplus-sales-marketing-manager",
    company: { fa: "کارجوپلاس | KARJOO+", en: "KARJOO+" },
    role: { fa: "مدیر فروش و بازاریابی", en: "Sales Marketing Manager" },
    period: { fa: "ژوئن ۲۰۲۴ – اوت ۲۰۲۵", en: "June 2024 – August 2025" },
    location: { fa: "استان قزوین، ایران", en: "Qazvin Province, Iran" },
    summary: {
      fa: "فعالیت در استودیوی منابع انسانی و اکوسیستم بازار کار با تمرکز بر محصولات و خدمات تخصصی منابع انسانی و رویدادهای کاریابی.",
      en: "Sales and marketing work within an HR studio and labor-market ecosystem focused on specialized HR products, services and job-fair experiences.",
    },
    source: "linkedin-2026",
  },
  {
    id: "bonasia-business-consultant",
    company: { fa: "بُناسیا | Bonasia", en: "Bonasia" },
    role: { fa: "مشاور کسب‌وکار", en: "Business Consultant" },
    period: { fa: "اوت ۲۰۲۴ – ژوئیه ۲۰۲۵", en: "August 2024 – July 2025" },
    location: { fa: "استان قزوین، ایران", en: "Qazvin Province, Iran" },
    summary: {
      fa: "مشاوره کسب‌وکار در بازار نهاده‌های کشاورزی و زنجیره تأمین، با تمرکز بر مذاکره، ارزیابی استراتژی و پیش‌بینی رشد.",
      en: "Business consulting in the agricultural-input market and supply chain, focused on negotiation, strategy evaluation and growth forecasting.",
    },
    responsibilities: [
      { fa: "مذاکره در بازار نهاده‌های کشاورزی و شناخت تأمین‌کنندگان چندملیتی.", en: "Negotiate within the agricultural-input market and understand multinational suppliers." },
      { fa: "ارزیابی استراتژی‌های کسب‌وکار و پیش‌بینی رشد.", en: "Evaluate business strategies and forecast growth." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "lernzi-founder",
    company: { fa: "lernZI", en: "lernZI" },
    role: { fa: "بنیان‌گذار", en: "Founder" },
    period: { fa: "مه ۲۰۲۳ – ژوئیه ۲۰۲۵", en: "May 2023 – July 2025" },
    location: { fa: "تهران، ایران", en: "Tehran, Iran" },
    summary: {
      fa: "محصول آموزشی برای نسل Z بر پایه میکرو-یادگیری و گیمیفیکیشن؛ توسعه‌یافته پس از پژوهش درباره علایق، انگیزه‌ها، سبک یادگیری و چالش‌های این نسل.",
      en: "A Gen Z educational product based on micro-learning and gamification, developed after research into the generation's interests, motivations, learning styles and challenges.",
    },
    responsibilities: [
      { fa: "پژوهش و جمع‌آوری داده درباره نسل Z و طراحی تجربه یادگیری متناسب با آن.", en: "Research Gen Z behavior and design a learning experience around those findings." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "ab-evan-sales-marketing-manager",
    company: { fa: "اندیشه نوین آب اوان | AB EVAN", en: "AB EVAN" },
    role: { fa: "مدیر فروش و بازاریابی", en: "Sales Marketing Manager" },
    period: { fa: "ژوئیه ۲۰۲۳ – اوت ۲۰۲۴", en: "July 2023 – August 2024" },
    location: { fa: "استان قزوین، ایران", en: "Qazvin Province, Iran" },
    summary: {
      fa: "تمرکز بر افزایش فروش، نرخ تبدیل، وفاداری برند، تحقیقات بازار، تیم‌سازی و بهبود بهره‌وری.",
      en: "Focused on sales growth, conversion, brand loyalty, market research, team building and operational productivity.",
    },
    achievements: [
      { fa: "افزایش ۱۰۰٪ فروش در پایان ماه چهارم.", en: "100% increase in sales by the end of the fourth month." },
      { fa: "افزایش ۴۰٪ نرخ تبدیل مشتری با استقرار CRM.", en: "40% increase in customer conversion rate using CRM deployment." },
      { fa: "افزایش ۳۵٪ فروش به مشتریان قدیمی با ارتباط مؤثر.", en: "35% increase in sales to existing customers through stronger communication." },
      { fa: "کاهش ۳۰٪ هزینه‌های فروش و بازاریابی از طریق شبکه‌سازی در LinkedIn و Instagram.", en: "30% reduction in marketing and sales costs through networking on LinkedIn and Instagram." },
      { fa: "افزایش ۲۵٪ سرنخ‌های جدید با جلسات هفتگی تیم فروش و بازاریابی.", en: "25% increase in new leads through ongoing weekly sales and marketing meetings." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "imenplus-sales-marketing-manager-2023",
    company: { fa: "ایمن پلاس | ImenPlus", en: "ImenPlus" },
    role: { fa: "مدیر فروش و بازاریابی", en: "Sales Marketing Manager" },
    period: { fa: "مارس ۲۰۲۳ – آوریل ۲۰۲۴", en: "March 2023 – April 2024" },
    location: { fa: "استان تهران، ایران", en: "Tehran Province, Iran" },
    summary: {
      fa: "تحلیل بازار، انتخاب راهکار متناسب با نیاز مشتری و تقویت روابط با مشتریان موجود.",
      en: "Analyze market insights, find solutions aligned with customer needs and strengthen existing client relationships.",
    },
    achievements: [
      { fa: "افزایش ۲۸٪ ارتباط با مشتریان با استفاده از تحلیل داده‌های فروش.", en: "28% increase in client communication using sales data analysis." },
      { fa: "افزایش ۳۵٪ فروش با اجرای برنامه فروش نسبت به ۲۰۲۲.", en: "35% increase in sales by implementing the sales plan compared with 2022." },
      { fa: "افزایش ۴۵٪ رضایت مشتری با تحلیل داده‌های پرسونای مشتری.", en: "45% increase in customer satisfaction using persona data analysis." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "imenplus-sales-data-analyst",
    company: { fa: "ایمن پلاس | ImenPlus", en: "ImenPlus" },
    role: { fa: "تحلیلگر داده فروش", en: "Sales Data Analyst" },
    period: { fa: "ژانویه ۲۰۲۳ – سپتامبر ۲۰۲۳", en: "January 2023 – September 2023" },
    location: { fa: "استان تهران، ایران", en: "Tehran Province, Iran" },
    summary: {
      fa: "استخراج خودکار داده فروش، تحلیل آماری برای پیش‌بینی و تهیه گزارش‌های تحلیلی.",
      en: "Automated sales-data extraction, statistical analysis for prediction and analytical reporting.",
    },
    achievements: [
      { fa: "افزایش ۲۵٪ فروش با تحلیل مؤثر تعاملات مشتری در CRM.", en: "25% increase in sales through effective analysis of CRM customer interactions." },
      { fa: "دستیابی به ۹۰٪ نرخ تکمیل سفارش همراه با کاهش نرخ رد سفارش.", en: "Achieved a 90% order fill rate while reducing the order rejection rate." },
      { fa: "افزایش ۲۰٪ مشتریان جدید از طریق ارتباطات B2B.", en: "20% increase in new customers through B2B contacts with potential customers." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "city-it-sales-marketing-manager",
    company: { fa: "شهر فناوری | City IT", en: "City IT" },
    role: { fa: "مدیر فروش و بازاریابی", en: "Sales Marketing Manager" },
    period: { fa: "مارس ۲۰۲۲ – آوریل ۲۰۲۳", en: "March 2022 – April 2023" },
    location: { fa: "استان قزوین، ایران", en: "Qazvin Province, Iran" },
    summary: {
      fa: "تحقیق بازار، طراحی و اجرای استراتژی بازاریابی و گزارش عملکرد به مدیریت.",
      en: "Market research, marketing-strategy execution and performance reporting to management.",
    },
    achievements: [
      { fa: "افزایش ۳۶٪ رضایت فروش با استقرار CRM.", en: "36% increase in sales satisfaction with CRM deployment." },
      { fa: "افزایش ۴۳٪ فروش از طریق ارتباط بیشتر با مشتریان قدیمی.", en: "43% increase in sales through stronger communication with existing customers." },
      { fa: "افزایش ۲۵٪ تبدیل سرنخ به مشتری جدید.", en: "25% increase in lead-to-new-customer conversion." },
      { fa: "افزایش ۲۷٪ سرنخ‌های جدید با ایمیل و SMS مارکتینگ.", en: "27% increase in new leads through email and SMS marketing." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "ashena-hesab-sales-marketing-manager",
    company: { fa: "آشناحساب | AshenaHesab", en: "AshenaHesab" },
    role: { fa: "مدیر فروش و بازاریابی", en: "Sales Marketing Manager" },
    period: { fa: "ژانویه ۲۰۲۱ – فوریه ۲۰۲۲", en: "January 2021 – February 2022" },
    location: { fa: "استان قزوین، ایران", en: "Qazvin Province, Iran" },
    summary: {
      fa: "رهبری و توسعه تیم، مدیریت ارتباط با مشتری و مذاکره و نهایی‌سازی قراردادها.",
      en: "Team leadership, client relationship management, negotiation and closing deals.",
    },
    achievements: [
      { fa: "دستیابی به ۸۰٪ اهداف فروش با تحلیل داده فروش.", en: "80% sales achievement using sales data analysis." },
      { fa: "افزایش ۲۰٪ فروش با پیگیری مشتریان قبلی.", en: "20% increase in sales by following up with previous customers." },
      { fa: "افزایش ۳۰٪ فروش با مذاکرات حضوری.", en: "30% increase in sales using face-to-face negotiations." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "mizekhedmat-sales-marketing-manager",
    company: { fa: "میز خدمت | MizeKhedmat", en: "MizeKhedmat" },
    role: { fa: "مدیر فروش و بازاریابی", en: "Sales Marketing Manager" },
    period: { fa: "نوامبر ۲۰۱۹ – دسامبر ۲۰۲۰", en: "November 2019 – December 2020" },
    location: { fa: "استان قزوین، ایران", en: "Qazvin Province, Iran" },
    summary: {
      fa: "جمع‌آوری و تحلیل داده فروش، مصورسازی داده و استفاده از KPI برای ارزیابی تصمیم‌های کسب‌وکار.",
      en: "Collect and analyze sales data, visualize it and use KPIs to measure business decisions.",
    },
    achievements: [
      { fa: "دستیابی ۱۰۰٪ به KPA در شش ماه.", en: "100% achievement of KPA within six months." },
      { fa: "افزایش ۴۵٪ فروش از طریق شبکه‌سازی در LinkedIn.", en: "45% increase in sales through LinkedIn networking." },
      { fa: "افزایش ۳۵٪ فروش با برگزاری وبینارهای تخصصی.", en: "35% increase in sales through specialized webinars." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "mizekhedmat-sales-engineer",
    company: { fa: "میز خدمت | MizeKhedmat", en: "MizeKhedmat" },
    role: { fa: "مهندس فروش", en: "Sales Engineer" },
    period: { fa: "سپتامبر ۲۰۱۹ – نوامبر ۲۰۱۹", en: "September 2019 – November 2019" },
    location: { fa: "قزوین، ایران", en: "Qazvin, Iran" },
    summary: {
      fa: "پشتیبانی فنی پیش از فروش، تحقق اهداف فروش و ارائه خدمات پس از فروش.",
      en: "Pre-sales technical assistance, sales-target execution and after-sales support.",
    },
    source: "linkedin-2026",
  },
  {
    id: "mizekhedmat-it-support",
    company: { fa: "میز خدمت | MizeKhedmat", en: "MizeKhedmat" },
    role: { fa: "مهندس پشتیبانی فناوری اطلاعات", en: "IT Support Engineer" },
    period: { fa: "ژوئیه ۲۰۱۹ – سپتامبر ۲۰۱۹", en: "July 2019 – September 2019" },
    location: { fa: "قزوین، ایران", en: "Qazvin, Iran" },
    summary: {
      fa: "پشتیبانی Help Desk و مدیریت دارایی با ServiceDesk Plus و نصب و مدیریت Microsoft SQL Server و PostgreSQL.",
      en: "IT help desk and asset management with ServiceDesk Plus, plus Microsoft SQL Server and PostgreSQL installation and administration.",
    },
    source: "linkedin-2026",
  },
  {
    id: "nikstarter-sales-marketing-manager",
    company: { fa: "نیک استارتر | NikstarterOfficial", en: "NikstarterOfficial" },
    role: { fa: "مدیر فروش و بازاریابی", en: "Sales Marketing Manager" },
    period: { fa: "مارس ۲۰۱۷ – اوت ۲۰۱۹", en: "March 2017 – August 2019" },
    location: { fa: "تهران، ایران", en: "Tehran, Iran" },
    summary: {
      fa: "شناسایی فرصت‌های جدید کسب‌وکار، حل مسائل فنی و تولید سرنخ.",
      en: "Identify new business opportunities, resolve technical issues and generate leads.",
    },
    achievements: [
      { fa: "افزایش ۳۰٪ فروش در یک سال با شبکه‌سازی.", en: "30% increase in sales in one year using networking." },
      { fa: "صرفه‌جویی ۲۵٪ در بودجه IT با پیاده‌سازی میزبانی ابری بر دارایی‌های موجود.", en: "25% IT-budget saving by implementing cloud hosting using existing IT assets." },
      { fa: "افزایش ۴۰٪ تنوع محصول با تحقیقات بازار.", en: "40% increase in product variety through market research." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "imenplus-founder-ceo",
    company: { fa: "ایمن پلاس | ImenPlus", en: "ImenPlus" },
    role: { fa: "بنیان‌گذار و مدیرعامل", en: "Founder and CEO" },
    period: { fa: "فوریه ۲۰۱۱ – آوریل ۲۰۱۷", en: "February 2011 – April 2017" },
    location: { fa: "قزوین، ایران", en: "Qazvin, Iran" },
    summary: {
      fa: "برنامه‌ریزی، سازمان‌دهی، رهبری، هماهنگی و کنترل تیم با رویکرد تفکر سیستمی و مدیریت منابع.",
      en: "Planning, organizing, leading and coordinating the team with a systems-thinking and resource-management approach.",
    },
    achievements: [
      { fa: "افزایش ۳۰٪ مشارکت کارکنان در تعیین اهداف شرکت.", en: "30% increase in employee participation in defining company goals." },
      { fa: "افزایش ۲۵٪ توانمندسازی و انگیزش همکاران.", en: "25% increase in colleague empowerment and motivation." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "great-tehran-electricity-it-support",
    company: { fa: "شرکت توزیع نیروی برق تهران بزرگ", en: "Great Tehran Electricity Distribution Company" },
    role: { fa: "مهندس پشتیبانی فناوری اطلاعات", en: "IT Support Engineer" },
    period: { fa: "اوت ۲۰۰۹ – آوریل ۲۰۱۱", en: "August 2009 – April 2011" },
    location: { fa: "قزوین، ایران", en: "Qazvin, Iran" },
    summary: {
      fa: "مونتاژ و عیب‌یابی سیستم‌ها، پیگیری درخواست کاربران با Ticketing و نصب و نگهداری اجزای IT.",
      en: "Computer assembly/troubleshooting, ticket-based user support and installation/maintenance of IT components.",
    },
    achievements: [
      { fa: "بستن متوسط ۳۰٪ مسائل IT روزانه با راه‌اندازی نرم‌افزار Help Desk.", en: "Closed an average of 30% of daily IT issues by implementing help desk software." },
      { fa: "آزادسازی ۲۰٪ پهنای باند اینترنت با راه‌اندازی Microsoft WSUS.", en: "Freed 20% of internet-bandwidth usage by setting up Microsoft WSUS." },
      { fa: "کاهش ۳۰٪ مصرف کاغذ در فرایندهای داخلی با استفاده از Webmail.", en: "Reduced paper usage for internal processes by 30% through webmail." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "damavand-hvac-regional-sales-manager",
    company: { fa: "تهویه دماوند | Damavand HVAC", en: "Damavand HVAC" },
    role: { fa: "مدیر فروش منطقه‌ای", en: "Regional Sales Manager" },
    period: { fa: "اکتبر ۲۰۰۵ – ژوئیه ۲۰۰۹", en: "October 2005 – July 2009" },
    location: { fa: "استان تهران، ایران", en: "Tehran Province, Iran" },
    summary: {
      fa: "توسعه استراتژی بازاریابی منطقه‌ای، حضور در نمایشگاه‌ها، تحلیل رقبا، آموزش مشتری و گزارش‌دهی فروش و بازاریابی.",
      en: "Regional marketing strategy, trade fairs, competitor research, customer training, and sales/marketing reporting.",
    },
    achievements: [
      { fa: "افزایش ۱۲٪ سود ناخالص منطقه که به افزایش ۲۰٪ سود منجر شد.", en: "12% increase in regional gross profit, resulting in a 20% profit increase." },
      { fa: "افزایش ۲۵٪ تیم فروش و نرخ نگهداشت ۱۰٪ بالاتر از میانگین صنعت.", en: "25% increase in the sales team and a retention rate 10% above the industry average." },
    ],
    source: "linkedin-2026",
  },
  {
    id: "amir-computer-center-it-support",
    company: { fa: "مرکز کامپیوتر امیر", en: "Amir Computer Center" },
    role: { fa: "کارشناس پشتیبانی فناوری اطلاعات", en: "IT Support Technician" },
    period: { fa: "مه ۱۹۹۸ – اکتبر ۲۰۰۵", en: "May 1998 – October 2005" },
    location: { fa: "قزوین، ایران", en: "Qazvin, Iran" },
    summary: {
      fa: "تأمین، نصب و پشتیبانی تجهیزات IT، پشتیبانی کاربران خانگی و رفع مشکلات پیکربندی و اتصال رایانه.",
      en: "Procurement, installation and support of IT equipment, home-user support and PC configuration/connectivity troubleshooting.",
    },
    achievements: [
      { fa: "کمک به جایگزینی ۴۰٪ رایانه‌های فرسوده، ۳۰٪ لپ‌تاپ‌ها و ۲۰٪ پرینترهای دفتر مرکزی.", en: "Facilitated replacement of 40% of aged PCs, 30% of laptops and 20% of printers in the central office." },
      { fa: "ارتقای سیستم‌عامل بیش از ۶۰٪ رایانه‌ها از Windows XP به Windows Vista.", en: "Upgraded more than 60% of computer operating systems from Windows XP to Windows Vista." },
    ],
    source: "linkedin-2026",
  },
];

export const historicalResumeExperience: CareerExperience[] = [
  {
    id: "resume-yegane-ertebatat",
    company: { fa: "شرکت یگانه ارتباطات پیشرو", en: "Yegane Ertebatat Pishro" },
    role: { fa: "مدیر فروش", en: "Sales Manager" },
    period: { fa: "آذر ۱۴۰۰ – دی ۱۴۰۱", en: "Azar 1400 – Dey 1401 (as recorded in the 1402 resume)" },
    location: { fa: "ثبت‌شده در رزومه مهر ۱۴۰۲", en: "Recorded in the Mehr 1402 resume" },
    summary: { fa: "سابقه تاریخی ثبت‌شده در رزومه مهر ۱۴۰۲؛ بدون همسان‌سازی تاریخ با LinkedIn.", en: "Historical record preserved from the Mehr 1402 resume without reconciling dates against LinkedIn." },
    source: "resume-1402",
  },
  {
    id: "resume-yalda-kavir-kashan",
    company: { fa: "شرکت یلدای کویر کاشان", en: "Yalda Kavir Kashan" },
    role: { fa: "کارشناس ارشد فروش", en: "Senior Sales Specialist" },
    period: { fa: "دی ۱۳۹۶ – اسفند ۱۳۹۸", en: "Dey 1396 – Esfand 1398 (as recorded in the 1402 resume)" },
    location: { fa: "ثبت‌شده در رزومه مهر ۱۴۰۲", en: "Recorded in the Mehr 1402 resume" },
    summary: { fa: "سابقه تاریخی ثبت‌شده در رزومه مهر ۱۴۰۲.", en: "Historical record preserved from the Mehr 1402 resume." },
    source: "resume-1402",
  },
  {
    id: "resume-emam-khomeini-relief-it",
    company: { fa: "کمیته امداد حضرت امام خمینی (ره) استان قزوین", en: "Imam Khomeini Relief Committee — Qazvin" },
    role: { fa: "کارشناس ارشد پشتیبانی فناوری اطلاعات", en: "Senior IT Support Specialist" },
    period: { fa: "۱۳۹۷ – ۱۳۹۸", en: "1397 – 1398 (as recorded in the 1402 resume)" },
    location: { fa: "قزوین", en: "Qazvin" },
    summary: { fa: "سابقه تاریخی پشتیبانی فناوری اطلاعات.", en: "Historical IT support record." },
    source: "resume-1402",
  },
  {
    id: "resume-karvan-andishe-ebara",
    company: { fa: "شرکت کارواندیشه – EBARA", en: "Karvan Andisheh — EBARA" },
    role: { fa: "مدیر فروش استان قزوین", en: "Qazvin Provincial Sales Manager" },
    period: { fa: "۱۳۹۳ – ۱۳۹۷", en: "1393 – 1397 (as recorded in the 1402 resume)" },
    location: { fa: "قزوین", en: "Qazvin" },
    summary: { fa: "سابقه تاریخی مدیریت فروش استانی.", en: "Historical provincial sales-management record." },
    source: "resume-1402",
  },
  {
    id: "resume-imen-rayan-net-tadbir",
    company: { fa: "شرکت ایمن رایان نت تدبیر", en: "Imen Rayan Net Tadbir" },
    role: { fa: "مهندس پشتیبانی فناوری اطلاعات", en: "IT Support Engineer" },
    period: { fa: "۱۳۹۱ – ۱۳۹۶", en: "1391 – 1396 (as recorded in the 1402 resume)" },
    location: { fa: "ثبت‌شده در رزومه مهر ۱۴۰۲", en: "Recorded in the Mehr 1402 resume" },
    summary: { fa: "سابقه تاریخی پشتیبانی فناوری اطلاعات.", en: "Historical IT support record." },
    source: "resume-1402",
  },
  {
    id: "resume-qazvin-electricity",
    company: { fa: "شرکت توزیع نیروی برق استان قزوین", en: "Qazvin Electricity Distribution Company" },
    role: { fa: "مهندس پشتیبانی فناوری اطلاعات", en: "IT Support Engineer" },
    period: { fa: "۱۳۹۰ – ۱۳۹۱", en: "1390 – 1391 (as recorded in the 1402 resume)" },
    location: { fa: "قزوین", en: "Qazvin" },
    summary: { fa: "این عنوان/تاریخ همان‌طور که در رزومه ۱۴۰۲ ثبت شده حفظ شده و با رکورد LinkedIn ادغام نشده است.", en: "This employer/date combination is preserved exactly as a separate 1402-resume record and is not merged with the LinkedIn entry." },
    source: "resume-1402",
  },
  {
    id: "resume-zero-one",
    company: { fa: "دفتر فنی و مهندسی صفر و یک", en: "Zero & One Technical Engineering Office" },
    role: { fa: "مهندس پشتیبانی فناوری اطلاعات", en: "IT Support Engineer" },
    period: { fa: "۱۳۸۸ – ۱۳۹۰", en: "1388 – 1390 (as recorded in the 1402 resume)" },
    location: { fa: "ثبت‌شده در رزومه مهر ۱۴۰۲", en: "Recorded in the Mehr 1402 resume" },
    summary: { fa: "سابقه تاریخی پشتیبانی فناوری اطلاعات.", en: "Historical IT support record." },
    source: "resume-1402",
  },
  {
    id: "resume-negin-pardaz-alborz",
    company: { fa: "شرکت نگین پرداز البرز", en: "Negin Pardaz Alborz" },
    role: { fa: "مهندس پشتیبانی فناوری اطلاعات", en: "IT Support Engineer" },
    period: { fa: "۱۳۸۵ – ۱۳۸۸", en: "1385 – 1388 (as recorded in the 1402 resume)" },
    location: { fa: "ثبت‌شده در رزومه مهر ۱۴۰۲", en: "Recorded in the Mehr 1402 resume" },
    summary: { fa: "سابقه تاریخی پشتیبانی فناوری اطلاعات.", en: "Historical IT support record." },
    source: "resume-1402",
  },
  {
    id: "resume-sigma-system",
    company: { fa: "فروشگاه سیگما سیستم", en: "Sigma System" },
    role: { fa: "کارشناس پشتیبانی فناوری اطلاعات", en: "IT Support Specialist" },
    period: { fa: "۱۳۸۱ – ۱۳۸۵", en: "1381 – 1385 (as recorded in the 1402 resume)" },
    location: { fa: "ثبت‌شده در رزومه مهر ۱۴۰۲", en: "Recorded in the Mehr 1402 resume" },
    summary: { fa: "سابقه تاریخی پشتیبانی فناوری اطلاعات.", en: "Historical IT support record." },
    source: "resume-1402",
  },
  {
    id: "resume-amir-computer",
    company: { fa: "مرکز کامپیوتر امیر", en: "Amir Computer Center" },
    role: { fa: "کارشناس پشتیبانی فناوری اطلاعات", en: "IT Support Specialist" },
    period: { fa: "۱۳۷۶ – ۱۳۸۱", en: "1376 – 1381 (as recorded in the 1402 resume)" },
    location: { fa: "قزوین", en: "Qazvin" },
    summary: { fa: "رکورد تاریخی رزومه ۱۴۰۲؛ تاریخ آن جدا از تاریخ ثبت‌شده در LinkedIn نمایش داده می‌شود.", en: "Historical 1402-resume record; its dates are shown separately from the LinkedIn entry." },
    source: "resume-1402",
  },
];
