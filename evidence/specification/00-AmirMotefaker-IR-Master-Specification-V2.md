---
title: AmirMotefaker.ir — Master Design, Content, Functional & Technical Specification
version: 2.0.0-draft
date: 2026-08-05
language: fa
direction: rtl
status: آماده بازبینی مالک
owner: امیر متفکر
domain: amirmotefaker.ir
production_change_authorized: false
---

# AmirMotefaker.ir — Master Specification V2

## 0. وضعیت و مرز اجرایی

این سند، مبنای طراحی، محتوا، معماری اطلاعات، قابلیت‌های تجاری، مدل داده، پیاده‌سازی فنی، تست و انتشار نسخه جدید `AmirMotefaker.ir` است.

**این سند مجوز تغییر Production نیست.**

وضعیت فعلی:

```text
Positioning V1: APPROVED
Public profile/news baseline: PASS
About page: WordPress ID 122
Resume page: WordPress ID 622
Design direction: APPROVED IN PRINCIPLE
Production change authorized: FALSE
Next gate: OWNER REVIEW OF MASTER SPECIFICATION V2
```

مبنای داخلی این سند:

- `07-about-profile.txt`
- `09-resume-profile.txt`
- `01-home-navigation.txt`
- `11-tech-news-candidates.txt`
- `13-tech-news-workflow-input-register.md`
- سند اولیه `AmirMotefaker.MD`
- عکس پرتره ارسال‌شده با ابعاد `1024 × 1024`
- لوگوی شخصی ارسال‌شده با ابعاد `1080 × 810`
- تصمیم‌های تأییدشده در مکالمه پروژه

---

# 1. تصمیم راهبردی

## 1.1 نقش سایت

سایت جدید یک «سایت شخصی معمولی» یا «رزومه آنلاین ساده» نیست. سایت باید هم‌زمان این نقش‌ها را ایفا کند:

1. مرکز رسمی برند شخصی امیر متفکر
2. پرتفوی محصولات و Case Studyها
3. رزومه حرفه‌ای و قابل استناد
4. کانال جذب همکاری، مشاوره، شریک و سرمایه‌گذار
5. رسانه تخصصی برای اخبار و تحلیل فناوری
6. مرجع معرفی محصولات و وضعیت واقعی آن‌ها
7. زیرساخت ایجاد اعتماد و تبدیل بازدیدکننده به Lead

## 1.2 پیام مرکزی تأییدشده

> **فناوری را می‌سازم، به بازار می‌برم و به کسب‌وکار تبدیل می‌کنم.**

## 1.3 جایگاه تأییدشده

> **امیر متفکر — بنیان‌گذار محصولات دیجیتال، مهندس نرم‌افزار و مدیر بازاریابی و فروش**

## 1.4 اصل برند

داستان اصلی سایت باید نشان دهد که امیر در یک نقطه تخصصی منحصربه‌فرد قرار دارد:

```text
فناوری + محصول + داده + فروش + بازاریابی + کارآفرینی
```

سایت نباید امیر را فقط به‌عنوان برنامه‌نویس، فقط مدیر فروش یا فقط تولیدکننده محتوا معرفی کند.

---

# 2. یافته‌های قطعی از محتوای فعلی

## 2.1 درباره من

Baseline تأییدشده:

```text
WordPress Page ID: 122
Words: 793
Headings: 15
Public H1: 0
Content images: 0
```

نقاط ارزشمند موجود:

- شروع ارتباط با کامپیوتر و DOS از سال ۱۳۷۰
- تحصیل در مهندسی سخت‌افزار و معماری سیستم‌های کامپیوتری
- تجربه IT Support، شبکه، Active Directory و ServiceDesk Plus
- علاقه هم‌زمان به فناوری و فروش
- شروع مسیر برنامه‌نویسی و داده از سال ۲۰۱۸
- تجربه Excel، SQL، Python، R، Power BI و Tableau
- تجربه طراحی سیستم فروش، CRM، B2B و B2G
- تجربه مشاوره، تیم‌سازی و آموزش
- همکاری با Datamoon، BonAsia، KarjooPlus و محصولات آموزشی نسل Z
- تأکید بر سیستم‌سازی، اثرگذاری و رشد بدون وابستگی به حضور فرد

مشکلات محتوای فعلی:

- نبود H1
- نبود تصویر
- تکرار بخش «تخصص‌های کلیدی من»
- تراکم زیاد متن
- ترکیب ناهماهنگ فارسی و انگلیسی
- ادعای تعداد دنبال‌کننده و تعداد پست که باید قبل از انتشار دوباره تأیید شود
- تعدادی عدد و دستاورد نیازمند Evidence Register
- CTA ضعیف و بدون مسیر تبدیل روشن

## 2.2 رزومه

Baseline تأییدشده:

```text
WordPress Page ID: 622
Words: 2876
Headings: 76
Public H1: 0
Content images: 0
```

رزومه فعلی حداقل ۱۸ تجربه شغلی یکتا را پوشش می‌دهد:

1. PrimeSYS — Founder & CEO
2. Datamoon — Business Consultant
3. BonAsia — Business Consultant
4. LernZI — Founder
5. KarjooPlus — Sales Marketing Manager
6. EvanAB — Sales Marketing Manager
7. ImenPlus — Sales Marketing Manager
8. ImenPlus — Sales Data Analyst
9. Shahr Fanavari — Sales Marketing Manager
10. Ashna Hesab — Sales Marketing Manager
11. MizKhedmat — Sales Marketing Manager
12. MizKhedmat — Sales Engineer
13. MizKhedmat — IT Support Engineer
14. NikStarter — Sales Marketing Manager
15. Imen Rayan Net Tadbir — Founder & CEO
16. Qazvin Electricity Distribution Company — IT Support Engineer
17. Tahvieh Damavand — Regional Sales Manager
18. Amir Computer Center — IT Support Technician

مشکلات رزومه فعلی:

- بخش بزرگی از Experience بعد از Education تکرار شده است
- ۷۶ Heading برای یک صفحه، اسکن‌پذیری را کاهش می‌دهد
- نقش‌ها و دوره‌ها به‌صورت خطی و طولانی نمایش داده شده‌اند
- دستاوردهای عددی بدون Evidence Link یا سطح اطمینان هستند
- نسخه چاپی و PDF استاندارد تعریف نشده است
- تفکیک «نقش اصلی»، «مشاوره»، «پروژه کوتاه» و «فعالیت هم‌زمان» روشن نیست
- H1 وجود ندارد
- Timeline، Filter و Summary حرفه‌ای وجود ندارد

## 2.3 اخبار فناوری

وضعیت فعلی:

```text
Top-level menu label: اخبار فناوری
Current URL: /بلاگ/
Sampled latest posts: 100
Matching taxonomy candidates: 9
Exact canonical news category: NOT CONCLUSIVELY IDENTIFIED
```

دسته‌های مهم فعلی:

- هوش مصنوعی
- فناوری
- تکنولوژی
- هوش مصنوعی مولد
- فناوری مالی
- عامل‌های مستقل هوش مصنوعی
- اخبار

الگوی قابل مشاهده فعلی در نمونه محتوا:

- پنج نوشته در روز
- انتشار در بازه تقریبی 08:00 تا 08:30
- فاصله چند دقیقه‌ای میان خبرها
- تمرکز بالا روی AI، تراشه، سخت‌افزار، CES و کسب‌وکار فناوری

هشدار:

`100/100` بودن Candidateها نتیجه Matcher گسترده V5 است و به معنی News بودن قطعی تمام نوشته‌ها نیست.

---

# 3. مخاطبان و مسیرهای تبدیل

## 3.1 مخاطب اصلی

- مشتری بالقوه محصول یا همکاری
- شریک تجاری
- سرمایه‌گذار یا شتاب‌دهنده
- مدیر کسب‌وکار یا تصمیم‌گیرنده فناوری

## 3.2 مخاطب ثانویه

- توسعه‌دهنده و همکار فنی
- مدیر محصول و بازاریابی
- رسانه و برگزارکننده رویداد
- مخاطب فناوری، AI و کسب‌وکار
- شرکت یا کارفرمایی که رزومه حرفه‌ای را بررسی می‌کند

## 3.3 اهداف تبدیل

هر صفحه باید حداقل یک مسیر روشن داشته باشد:

```text
درخواست همکاری
رزرو جلسه
مشاهده محصولات
مشاهده Case Study
دانلود رزومه
ارسال پیام
عضویت در خبرنامه
مشاهده اخبار فناوری
```

## 3.4 قیف اصلی سایت

```text
ورود
  ↓
درک جایگاه امیر در کمتر از چند ثانیه
  ↓
مشاهده شواهد، محصولات یا تجربه
  ↓
انتخاب مسیر متناسب
  ↓
رزرو جلسه / ارسال درخواست / مشاهده محصول / دانلود رزومه
  ↓
ثبت Lead و پیگیری
```

---

# 4. معماری اطلاعات نهایی

## 4.1 منوی اصلی

```text
خانه
درباره امیر
محصولات
رزومه
اخبار فناوری
همکاری با من
```

## 4.2 منوی «بیشتر»

```text
دیدگاه‌ها و تحلیل‌ها
رسانه‌ها و حضور عمومی
منابع
تماس
```

## 4.3 مسیرها

```text
/
├── /درباره-من/
├── /رزومه-امیر/
├── /products/
│   ├── /products/linkresan/
│   ├── /products/farsi-smart/
│   ├── /products/farsi-smart-assistant/
│   └── /products/ava/
├── /case-studies/
│   └── /case-studies/linkresan/
├── /بلاگ/                       ← برچسب نمایشی: اخبار فناوری
├── /insights/                   ← دیدگاه‌ها و تحلیل‌های امیر
├── /services/
├── /media/
├── /resources/
├── /contact/
├── /privacy/
├── /thank-you/
└── /404/
```

اصل مهاجرت URL:

- URLهای قدیمی بدون بررسی Search Console و Redirect Matrix حذف نمی‌شوند.
- مسیر `/بلاگ/` در V1 حفظ می‌شود.
- تغییر احتمالی آن به `/اخبار-فناوری/` فقط پس از تحلیل SEO و تعریف 301 مجاز است.

---

# 5. صفحه اصلی

## 5.1 ترتیب بخش‌ها

1. Header
2. Hero
3. Trust / Proof Strip
4. About Summary
5. Featured Products
6. LinkResan Case Study
7. Expertise & Operating Model
8. Resume Preview
9. Technology News Today
10. Selected Insights
11. Collaboration Paths
12. Media / Social Proof
13. Newsletter / Resource
14. Final CTA
15. Footer

## 5.2 Hero

Eyebrow:

```text
Founder · Product · Software · Growth
```

H1:

> **فناوری را می‌سازم، به بازار می‌برم و به کسب‌وکار تبدیل می‌کنم.**

Lead پیشنهادی:

> من امیر متفکر هستم؛ مسیرم از کار با DOS، سخت‌افزار و زیرساخت شروع شد و به ساخت محصول، تحلیل داده، فروش، بازاریابی و کارآفرینی رسید. در تقاطع فناوری و بازار، سیستم‌هایی می‌سازم که مسئله واقعی را حل کنند و قابلیت رشد داشته باشند.

CTAها:

```text
Primary: درخواست همکاری
Secondary: مشاهده محصولات
Tertiary: رزرو جلسه
```

تصویر:

- استفاده از پرتره واقعی ارسال‌شده
- Crop اصلی `4:5`
- Crop موبایل `1:1`
- بدون تغییر چهره
- بدون تولید چهره جایگزین
- پس‌زمینه اختصاصی Dark با نور سبز/بنفش بسیار ملایم
- امکان استفاده از Cutout شفاف
- Alt پیشنهادی: «امیر متفکر، بنیان‌گذار محصولات دیجیتال»

## 5.3 Trust Strip

تا پیش از تأیید Evidence عددی، از Proofهای غیرعددی استفاده شود:

```text
از فناوری تا بازار
ساخت محصول واقعی
تجربه IT، فروش و داده
سیستم‌سازی و رشد
تمرکز بر کاربران فارسی‌زبان
```

اعداد فقط بعد از Evidence Gate نمایش داده می‌شوند.

## 5.4 درباره من خلاصه

تیتر:

> **از DOS و سخت‌افزار تا محصول، داده و رشد**

متن:

> علاقه من به فناوری از سال ۱۳۷۰ شروع شد. تجربه حرفه‌ای من از پشتیبانی IT و فروش تجهیزات آغاز شد، به مدیریت فروش، تحلیل داده و مشاوره کسب‌وکار رسید و امروز در ساخت و رشد محصولات دیجیتال ادامه دارد.

سه Value:

```text
فناوری را کاربردی می‌کنم
فروش را سیستم‌پذیر می‌کنم
محصول را با بازار پیوند می‌دهم
```

## 5.5 محصولات منتخب

ترتیب تأییدشده:

1. LinkResan
2. Farsi Smart / Farsi Smart Assistant
3. Ava — FarsiSmart Listen

هر کارت باید شامل این موارد باشد:

- لوگوی رسمی
- تصویر واقعی یا Mockup تأییدشده
- نام محصول
- مسئله‌ای که حل می‌کند
- وضعیت واقعی
- حداکثر سه Tag
- CTA
- بدون KPI ساختگی

## 5.6 اخبار فناوری امروز

ساختار Desktop:

```text
[خبر اصلی با تصویر بزرگ]
[خبر 2] [خبر 3]
[خبر 4] [خبر 5]
```

ساختار Mobile:

```text
خبر اصلی
اسکرول افقی یا Stack برای چهار خبر بعدی
```

هر کارت:

- عنوان
- دسته
- زمان انتشار
- منبع یا تعداد منابع
- تصویر
- خلاصه یک‌خطی
- CTA «مطالعه خبر»

---

# 6. صفحه درباره امیر

## 6.1 هدف

ساخت اعتماد عمیق، روایت مسیر واقعی و توضیح اینکه این ترکیب تجربه چگونه برای مخاطب ارزش ایجاد می‌کند.

## 6.2 ساختار

1. Hero شخصی
2. داستان شروع
3. مسیر حرفه‌ای در شش نقطه
4. ترکیب تخصص‌ها
5. سبک و منش کاری
6. برندها و همکاری‌های قابل انتشار
7. گواهینامه‌ها
8. حضور محتوایی و رسانه‌ای
9. چشم‌انداز
10. CTA

## 6.3 روایت پیشنهادی

فصل‌های داستان:

```text
۱۳۷۰ — آشنایی با IBM و DOS
۱۳۷۷ — شروع تجربه حرفه‌ای IT
۱۳۸۴ — ورود جدی به فروش و مدیریت منطقه‌ای
۱۳۸۹ — تجربه بنیان‌گذاری و مدیریت شرکت
۱۳۹۸ — پیوند IT، فروش و داده
از ۲۰۱۸ — توسعه مهارت برنامه‌نویسی و تحلیل داده
۱۴۰۱ به بعد — تمرکز بیشتر بر محصول و کارآفرینی
امروز — ساخت و رشد محصولات دیجیتال
```

این Timeline قبل از انتشار باید با تاریخ‌های مالک تطبیق نهایی شود.

## 6.4 ادعای سابقه

عبارت مجاز فعلی:

> **بیش از سه دهه همراه فناوری**

عبارت نیازمند Evidence بیشتر:

> «بیش از ۳۰ سال تجربه حرفه‌ای»

دلیل: ارتباط با فناوری از سال ۱۳۷۰ مستند است، اما شروع تجربه حرفه‌ای ثبت‌شده در رزومه از سال ۱۳۷۷ است.

## 6.5 لحن

- انسانی
- دقیق
- بدون اغراق
- نتیجه‌محور
- دارای مثال واقعی
- پرهیز از فهرست طولانی ابزارها در متن اصلی

---

# 7. صفحه رزومه

## 7.1 ساختار بالای صفحه

```text
نام و جایگاه
خلاصه حرفه‌ای 80 تا 120 کلمه
موقعیت
زبان‌ها
CTA دانلود رزومه
CTA درخواست همکاری
```

## 7.2 فیلتر تجربه

```text
همه
Founder & Product
Sales & Growth
IT & Engineering
Data & AI
Consulting
```

## 7.3 مدل هر Experience

```text
Role
Organization
Start date
End date
Location
Employment type
One-line context
3 تا 5 Responsibility
حداکثر 3 Achievement
Evidence state
Related product/case study
```

## 7.4 Evidence State

هر ادعای عددی یکی از این وضعیت‌ها را می‌گیرد:

```text
VERIFIED
OWNER_CONFIRMED
SOURCE_AVAILABLE
NEEDS_EVIDENCE
DO_NOT_PUBLISH
```

ادعاهایی مانند افزایش فروش، کاهش هزینه، نرخ تبدیل و رشد شبکه توزیع بدون Evidence State مناسب منتشر نمی‌شوند.

## 7.5 نسخه PDF

- نسخه فارسی
- نسخه انگلیسی در فاز بعد
- ATS-friendly
- Print-friendly
- حداکثر ۲ تا ۳ صفحه برای نسخه خلاصه
- نسخه کامل آنلاین بدون محدودیت سخت
- تاریخ آخرین به‌روزرسانی
- QR یا لینک Canonical رزومه

## 7.6 پاک‌سازی ضروری

- حذف Experience تکرارشده بعد از Education
- ایجاد فقط یک H1
- کاهش Headingهای غیرضروری
- استانداردکردن نیم‌فاصله و نام شرکت‌ها
- یکسان‌سازی تاریخ شمسی و میلادی
- تفکیک فعالیت‌های هم‌زمان
- بررسی زمان‌های «تا کنون»
- بازبینی گواهینامه‌ها و لینک معتبر هرکدام

---

# 8. محصولات و Case Study

## 8.1 محصول Launch Tier

### LinkResan

```text
Status: Production · Active
Priority: 1
Role: محصول شاخص و Case Study اصلی
```

تصاویر لازم:

- صفحه اصلی محصول
- Dashboard
- Link creation
- Analytics
- Mobile view
- Billing یا plan view فقط در صورت مجازبودن
- تصویر Architecture ساده

### Farsi Smart

```text
Status: Brand / Product Family
Priority: 2
```

### Farsi Smart Assistant

```text
Status: Build & Validate
Position: Featured product under Farsi Smart
```

تصاویر لازم:

- Browser extension
- اصلاح متن فارسی
- حالت Local-first
- Before / After
- Settings
- Product icon

### Ava — FarsiSmart Listen

```text
Status: Discovery / Pre-MVP
Priority: 3
```

تصاویر لازم:

- Concept UI
- Listen controls
- Transcript
- Summary
- Voice options
- Browser integration concept

تصاویر Ava باید صریحاً «Concept» یا «Prototype» علامت‌گذاری شوند.

## 8.2 محصول Evidence Tier

این محصولات تنها پس از تأیید دارایی و وضعیت عمومی وارد سایت می‌شوند:

- PrimeSYS
- LernZI
- FilmTrack
- Football product
- ShiftPay
- سایر پروژه‌ها

## 8.3 ساختار صفحه محصول

1. Product Hero
2. تصویر یا ویدیوی اصلی
3. مسئله
4. مخاطب
5. راه‌حل
6. قابلیت‌های اصلی
7. وضعیت واقعی
8. نقش امیر
9. تکنولوژی‌ها
10. Gallery
11. Lessons learned
12. Roadmap عمومی
13. Related case study
14. CTA

## 8.4 ساختار Case Study

```text
Context
Challenge
Constraints
Role
Discovery
Decision
Implementation
Go-to-market
Operations
Evidence
Results
What changed
What I learned
Next step
```

## 8.5 قانون تصویر محصول

- اولویت با Screenshot واقعی است.
- Screenshot باید از اطلاعات حساس پاک‌سازی شود.
- تصویر ساختگی نباید به‌عنوان UI واقعی معرفی شود.
- Mockup تولیدشده با AI یا ابزار طراحی باید برچسب Concept داشته باشد.
- تصاویر سایت محصول فقط با مجوز و Source ثبت‌شده استفاده می‌شوند.
- همه تصاویر AVIF/WebP و دارای Alt دقیق باشند.

---

# 9. هویت بصری و Design System

## 9.1 جهت بصری

> **Dark Founder Technology System**

ترکیب:

- حرفه‌ای و سازمانی
- آینده‌نگر
- محصول‌محور
- عمیق اما خوانا
- دارای هویت سبز/بنفش
- فاقد کلیشه ربات و مغز نورانی
- مناسب مطالعه طولانی اخبار و رزومه

## 9.2 Dark Mode

حالت پیش‌فرض بازدید اول:

```text
Dark
```

پس از انتخاب کاربر:

```text
Preference persisted
```

Light Mode باید کامل باشد و فقط Invert ساده نباشد.

## 9.3 جلوگیری از خستگی بصری

نسبت استفاده:

```text
75% رنگ‌های خنثی تیره
20% Surface و Border
4% سبز برند
1% بنفش / Gradient / Glow
```

قواعد:

- از مشکی مطلق برای سطح اصلی استفاده نشود.
- متن اصلی سفید خالص نباشد.
- متن طولانی رنگی نشود.
- در هر Viewport حداکثر یک عنصر Glow اصلی وجود داشته باشد.
- Gradient روی متن‌های طولانی ممنوع است.
- Cardها همگی Neon Border ندارند.
- Purple فقط برای Highlight ثانویه است.
- Cyan تنها برای Data/Information قابل استفاده است.
- تصاویر خبری پررنگ با Background خنثی متعادل شوند.

## 9.4 Color Tokens

### Dark

```css
--bg-base: #070A12;
--bg-surface: #0D1322;
--bg-surface-2: #121A2C;
--text-primary: #F4F7FB;
--text-secondary: #C2CAD6;
--text-muted: #8F9AAC;
--brand-green: #45D483;
--brand-green-strong: #25B866;
--brand-purple: #8B5CF6;
--brand-purple-strong: #7442E8;
--data-cyan: #2FC3E8;
--border-default: rgba(255,255,255,0.10);
--border-strong: rgba(255,255,255,0.18);
```

### Light

```css
--bg-base: #F5F7FB;
--bg-surface: #FFFFFF;
--bg-surface-2: #EEF2F7;
--text-primary: #111827;
--text-secondary: #334155;
--text-muted: #64748B;
--brand-green: #168A48;
--brand-purple: #6D28D9;
--data-cyan: #087EA4;
--border-default: rgba(15,23,42,0.10);
```

## 9.5 تایپوگرافی

پیشنهاد:

```text
Persian: Vazirmatn Variable
Latin/Numeric: Inter یا system UI
```

قواعد:

- فونت از مسیر قانونی و بهینه ارائه شود.
- Subset فارسی
- `font-display: swap`
- اعداد در Data Cardها یکدست
- طول خط متن فارسی حدود 55 تا 75 کاراکتر
- Body line-height حداقل 1.8 برای فارسی

## 9.6 لوگوی شخصی

تصمیم:

```text
Current concept: KEEP
Execution: REFINE
```

اصلاحات:

- بازطراحی تمیز در SVG
- بهبود خوانایی بخش `Motefaker`
- کاهش پیچیدگی Stroke در اندازه کوچک
- اصلاح Kerning
- حفظ هویت سبز و بنفش
- ساخت Monogram `AM`
- نسخه تک‌رنگ سفید
- نسخه تک‌رنگ تیره
- نسخه افقی
- Favicon
- Social avatar
- Clear-space و Minimum-size rules

لوگوی موجود حذف نمی‌شود مگر اینکه بازطراحی جدید در Owner Review برتری روشن داشته باشد.

## 9.7 Motion

- 150 تا 260 میلی‌ثانیه
- Fade / Translate محدود
- Hover با تغییر Border و Elevation
- بدون Scroll Hijacking
- بدون Parallax سنگین
- بدون Loop دائمی
- پشتیبانی کامل `prefers-reduced-motion`

---

# 10. Components

## 10.1 عمومی

- Header
- Mega / More menu
- Theme switch
- Language switch placeholder
- Breadcrumb
- CTA button
- Filter chips
- Search input
- Modal
- Toast
- Form state
- Skeleton
- Empty state
- Error state
- Pagination
- Footer

## 10.2 برند شخصی

- Founder Hero
- Proof Strip
- Value Card
- Timeline
- Experience Card
- Skill Cluster
- Certificate Card
- Brand Logo Strip

## 10.3 محصولات

- Product Card
- Product Hero
- Status Badge
- Screenshot Gallery
- Device Mockup
- Architecture Diagram
- Case Study Section
- Outcome Card

## 10.4 اخبار

- Lead News Card
- Standard News Card
- Source Badge
- Confidence Badge داخلی
- Related News
- Correction Notice
- Source List
- Daily Digest
- Topic Filter

---

# 11. قابلیت‌های تجاری

## 11.1 درخواست همکاری

فرم کوتاه:

```text
نام
راه ارتباطی
نوع همکاری
شرکت / محصول
توضیح کوتاه
رضایت حریم خصوصی
```

نوع همکاری:

- محصول
- توسعه نرم‌افزار
- فروش و رشد
- مشاوره
- همکاری رسانه‌ای
- سرمایه‌گذاری / شراکت
- سایر

## 11.2 رزرو جلسه

نیازمندی:

- تقویم قابل اتصال
- Zone-aware
- تأیید ایمیل
- جلوگیری از Spam
- Event tracking
- Thank-you page
- امکان غیرفعال‌کردن Slotها

Provider هنوز انتخاب نشده است.

## 11.3 دانلود رزومه

- فارسی
- انگلیسی در فاز بعد
- Event tracking
- نسخه و تاریخ
- فایل قابل دسترسی
- لینک Canonical

## 11.4 CRM

در V1، Interface مستقل از Provider تعریف شود:

```text
Lead ID
Created at
Source page
Campaign
Request type
Name
Contact
Company
Message
Consent
Status
Owner
Follow-up date
```

---

# 12. اخبار فناوری: مدل محصول

## 12.1 اصل

اخبار فناوری یک قابلیت تجاری و رسانه‌ای مستقل است؛ نه صرفاً آرشیو Postها.

هدف:

- افزایش بازگشت روزانه
- تقویت اعتبار تخصصی
- ورودی SEO و Discover
- ایجاد Newsletter
- جذب مخاطب مرتبط با محصولات
- ساخت بستری برای تحلیل‌های امیر

## 12.2 تفکیک محتوا

```text
NewsArticle:
گزارش رویداد، منبع‌محور، زمان‌دار

Insight:
تحلیل، دیدگاه یا تجربه امیر، ماندگارتر

Daily Digest:
جمع‌بندی پنج خبر روز
```

## 12.3 Taxonomy پیشنهادی

حداکثر هشت دسته اصلی:

1. هوش مصنوعی
2. نرم‌افزار و Cloud
3. امنیت و حریم خصوصی
4. سخت‌افزار و تراشه
5. داده و تحلیل
6. محصول و کسب‌وکار فناوری
7. رباتیک و فناوری‌های نو
8. سیاست، اقتصاد و حکمرانی فناوری

قانون:

```text
1 Primary Category
0 تا 2 Secondary Category
حداکثر 5 Tag
```

۲۰۷ Category و ۲۰۷۲ Tag فعلی قبل از مهاجرت باید Audit و Mapping شوند.

## 12.4 استاندارد هر خبر

- عنوان دقیق
- Deck
- خلاصه
- واقعیت‌های تأییدشده
- چرا مهم است؟
- تأثیر برای مخاطب فارسی‌زبان
- منابع
- تاریخ انتشار منبع
- تاریخ آخرین بررسی
- Disclosure استفاده از Automation
- Correction status
- تصویر مجاز
- Structured data

## 12.5 قانون تحلیل امیر

Automation مجاز نیست بدون تأیید مالک، متنی را با عنوان «تحلیل امیر متفکر» منتشر کند.

حالت‌های مجاز:

```text
تحلیل امیر — Owner supplied/approved
جمع‌بندی تحریریه — Automated/editorial
چرا مهم است؟ — Source-grounded explanatory section
```

---

# 13. معماری فنی

## 13.1 گزینه پیشنهادی برای V1

> **Modern Native WordPress Architecture**

اجزا:

```text
WordPress editorial CMS
Custom block theme
theme.json design tokens
Custom blocks for products, resume and news
Custom core plugin for content models and metadata
REST API for controlled automation
Staging + Preview
Git-based source control
Automated product tests
```

## 13.2 دلیل انتخاب

سایت فعلی دارای حجم بزرگ محتوا و وابستگی‌های WordPress است:

- ۸۹۵ نوشته عمومی در baseline قبلی
- ۱۴ صفحه
- ۲۰۷ Category
- ۲۰۷۲ Tag
- Rank Math
- WooCommerce
- Elementor / Elementor Pro
- Astra و افزونه‌های مرتبط

Big-bang مهاجرت به Headless، ریسک URL، Preview، Plugin compatibility، SEO، فرم، Sitemap و عملیات محتوا را بالا می‌برد.

## 13.3 تکنولوژی پیاده‌سازی پیشنهادی

### Theme

- WordPress Block Theme
- `theme.json` نسخه جدید پشتیبانی‌شده
- HTML templates / patterns
- CSS custom properties
- CSS Layers
- Container Queries
- Progressive enhancement
- حداقل JavaScript

### Custom blocks

- React
- TypeScript
- WordPress Block API
- `block.json`
- Dynamic rendering برای داده‌های ساختاریافته
- Server-side fallback

### Core plugin

نام پیشنهادی:

```text
amirmotefaker-core
```

مسئولیت‌ها:

- Custom Post Types
- Custom Taxonomies
- Meta schema
- REST permissions
- News workflow fields
- Product status
- Experience records
- Redirect helpers
- Audit logs
- Feature flags

### Build & Quality

- Git
- private repository
- lint
- formatting
- type checking
- PHP coding standards
- unit tests
- integration tests
- Playwright
- accessibility tests
- Lighthouse CI
- security/dependency audit

## 13.4 گزینه Headless

Next.js App Router فقط پس از یک Feasibility Spike بررسی شود.

Spike باید ثابت کند:

- Preview قابل اعتماد
- Draft rendering
- ۲۰ URL نماینده بدون Regression
- Sitemap و Canonical صحیح
- Rank Math metadata قابل بازیابی
- Search و Pagination
- Redirect mapping
- News freshness
- Cache invalidation
- فرم و CRM
- Rollback

تا قبل از PASS این Spike، Headless تصمیم نهایی نیست.

## 13.5 ساختار Repository پیشنهادی

```text
amirmotefaker-site/
├── theme/
├── plugins/
│   └── amirmotefaker-core/
├── automation/
│   └── tech-news/
├── tests/
│   ├── product/
│   ├── accessibility/
│   ├── seo/
│   └── smoke/
├── docs/
├── scripts/
└── .github/workflows/
```

Source-of-truth repository هنوز باید رسماً ایجاد یا شناسایی شود.

---

# 14. مدل داده WordPress

## 14.1 Post Types

```text
page
post
product
case_study
experience
service
media_appearance
resource
testimonial
```

`news` می‌تواند:

- Post Type مستقل باشد؛ یا
- Post با Content Type Metadata باشد.

تصمیم نهایی پس از Audit Plugin/SEO گرفته شود.

## 14.2 Product fields

```text
name
slug
short_description
full_description
status
product_family
logo
hero_image
gallery
product_url
repository_visibility
role
audience
problem
solution
features
technology
launch_date
last_verified_at
case_study
cta
```

## 14.3 Experience fields

```text
role
organization
start_date
end_date
is_current
location
employment_type
domain_cluster
summary
responsibilities
achievements
evidence_state
related_products
display_order
```

## 14.4 News fields

```text
source_urls
primary_source_url
source_publish_at
source_tier
trend_score
confidence_score
duplicate_cluster_id
fact_check_status
automation_version
generated_at
reviewed_by
reviewed_at
correction_status
correction_note
image_license
disclosure
```

---

# 15. SEO و Structured Data

## 15.1 پایه

- Title یکتا
- Meta description
- دقیقاً یک H1
- Canonical
- Open Graph
- Twitter/X cards
- Breadcrumb
- Sitemap
- Robots
- Redirect matrix
- Image metadata
- Author pages
- Date published / modified

## 15.2 Schema

```text
Home: WebSite + Person
About: ProfilePage + Person
Resume: ProfilePage
Product: SoftwareApplication / Product where applicable
Case Study: Article
News: NewsArticle
Insight: BlogPosting / Article
Breadcrumb: BreadcrumbList
Organization relationships: only when verified
```

Structured Data باید محتوای قابل مشاهده صفحه را بازتاب دهد و Claim پنهان نداشته باشد.

## 15.3 URL migration

برای هر URL:

```text
Current URL
New URL
Action
Canonical
Redirect
Owner
Test
Rollback
```

---

# 16. Performance

## 16.1 اهداف Field

```text
LCP ≤ 2.5s
INP ≤ 200ms
CLS ≤ 0.1
```

هدف داخلی برای Templateهای اصلی:

```text
Lighthouse Performance ≥ 90
Accessibility ≥ 95
SEO ≥ 95
Best Practices ≥ 90
```

## 16.2 قوانین

- AVIF/WebP
- Responsive images
- Width/height attributes
- Lazy loading برای تصاویر غیر بحرانی
- Hero image priority کنترل‌شده
- Font subset
- حداقل Script
- no autoplay heavy video
- CDN/cache policy
- CSS critical path
- Third-party budget
- News cards بدون Layout Shift

---

# 17. Accessibility

هدف:

```text
WCAG 2.2 AA
```

الزامات:

- Keyboard navigation
- Visible focus
- Skip link
- Semantic landmarks
- Heading hierarchy
- Form labels
- Error summary
- Status messages
- Contrast
- 200% zoom
- Reduced motion
- RTL screen reader testing
- Alt text
- No information by color alone
- Touch target مناسب
- Theme toggle accessible

Dark و Light هر دو باید تست شوند.

---

# 18. Analytics

## 18.1 Event contract

```text
cta_click
collaboration_start
form_submit
meeting_booking
resume_download
product_open
case_study_open
news_open
news_source_open
news_filter
newsletter_signup
resource_download
outbound_click
theme_change
search
```

## 18.2 Funnel dashboards

- Home → Product
- Home → Collaboration
- Product → Contact
- Resume → Download
- News → Return visit
- News → Product
- Source → Lead

Provider Analytics هنوز Owner Decision است.

---

# 19. امنیت و حریم خصوصی

- HTTPS
- Minimum data collection
- Explicit consent
- Anti-spam
- Rate limiting
- No credentials in source
- Separate Application Password
- Least-privilege WordPress user
- Environment secrets
- Audit log
- Credential rotation
- Dependency update process
- Backup before release
- Restore test
- Privacy page
- Cookie disclosure
- Correction policy for news
- No automatic medical/legal/financial claims without review

---

# 20. مهاجرت محتوا

## 20.1 اصل

هیچ محتوایی خودکار حذف نمی‌شود.

Dispositionها:

```text
KEEP
REWRITE
MERGE
ARCHIVE
REDIRECT
REMOVE_AFTER_APPROVAL
```

## 20.2 اولویت

1. Home
2. About
3. Resume
4. Products
5. Contact
6. News archive
7. Top traffic posts
8. Taxonomy
9. Historical archive

## 20.3 Taxonomy cleanup

برای ۲۰۷ Category و ۲۰۷۲ Tag:

- Usage count
- Search traffic
- Semantic overlap
- spelling normalization
- parent/child relation
- redirect target
- keep/archive decision

---

# 21. Workflow اخبار فناوری

## 21.1 مراحل

```text
Schedule
→ Source collection
→ Normalize
→ Duplicate clustering
→ Fact extraction
→ Source corroboration
→ Trend ranking
→ Diversity selection
→ Persian drafting
→ Copyright/image check
→ SEO/schema
→ WordPress Draft
→ Human review
→ Schedule/publish
→ Monitoring/correction
```

## 21.2 قانون تعداد

هدف روزانه:

```text
5 خبر واجد شرایط
```

اگر پنج خبر از Quality Gate عبور نکنند:

- خبر ضعیف برای تکمیل عدد منتشر نمی‌شود.
- Daily Digest می‌تواند کمتر از پنج خبر داشته باشد.
- Incident ثبت می‌شود.

## 21.3 Pilot

```text
Duration: 14 days
Write mode: Draft
Publish mode: Human approval
Blind auto-publish: Not authorized
```

## 21.4 پس از Pilot

Auto-publish فقط برای خبرهای کم‌ریسک و دارای:

- منبع اولیه
- corroboration
- confidence بالا
- بدون ادعای حساس
- بدون اختلاف منبع
- تصویر مجاز
- duplicate check
- schema pass

---

# 22. تست محصول

## 22.1 Design

- Dark mode
- Light mode
- responsive
- Persian typography
- Product imagery
- no visual fatigue
- CTA hierarchy
- no overflow

## 22.2 Content

- Positioning exact
- No unsupported claims
- Resume deduplicated
- dates normalized
- product status accurate
- news sources present
- analysis labels accurate

## 22.3 Functional

- forms
- validation
- spam prevention
- booking
- resume download
- filters
- search
- theme persistence
- news pagination
- source links
- error and success states

## 22.4 SEO

- one H1
- titles
- descriptions
- canonical
- schema
- sitemap
- robots
- redirects
- no accidental noindex
- dateModified

## 22.5 Accessibility

- axe
- keyboard
- screen reader spot check
- contrast
- reduced motion
- zoom
- RTL order

## 22.6 Performance

- Core Web Vitals
- Lighthouse
- image budget
- JS budget
- third-party budget
- cache behavior

## 22.7 News workflow

- source allowlist
- duplicate cluster
- five-item diversity
- unsupported claim rejection
- WordPress Draft
- no accidental publish
- credential redaction
- correction update
- rollback

---

# 23. Release Process

Golden Path:

```text
Issue
→ Branch
→ Implementation
→ Relevant tests
→ Preview/Staging
→ PR
→ Review
→ Merge
→ Exact SHA deploy
→ Production smoke
→ Monitoring
→ Observation
→ Tag
→ GitHub Release
```

قواعد:

- هر Milestone دارای Product Test Script
- هیچ تغییر مستقیم Production
- Backup و rollback قبل از Release
- Exact SHA
- یک High/Critical Production release در Portfolio
- Tag و GitHub Release همان روز
- Evidence archive

---

# 24. Roadmap

## M0 — Specification

- Master Specification V2
- Decision Register
- Asset Matrix
- Source and claim register
- Architecture decision

## M1 — Brand & Assets

- personal logo refinement
- portrait crops
- product logo audit
- product screenshot capture
- image licensing register

## M2 — UX/UI

- sitemap
- desktop wireframes
- mobile wireframes
- design system
- interactive prototype
- owner visual approval

## M3 — Technical Foundation

- source repository
- staging clone
- custom theme scaffold
- core plugin scaffold
- CI
- product tests

## M4 — Core Pages

- Home
- About
- Resume
- Products
- Contact

## M5 — News

- taxonomy
- archive
- article template
- workflow pilot
- correction system

## M6 — Migration

- selected content
- redirects
- media
- SEO
- archive QA

## M7 — Release

- full QA
- preview sign-off
- controlled deploy
- smoke
- observation
- tag/release

---

# 25. تصمیم‌های باز

| ID | تصمیم | وضعیت |
|---|---|---|
| D-01 | Modern WordPress Block Theme یا Headless | پیشنهاد Block Theme؛ تأیید مالک لازم |
| D-02 | ایمیل و شماره تماس عمومی | باز |
| D-03 | ابزار رزرو جلسه | باز |
| D-04 | Provider Analytics | باز |
| D-05 | CRM / Lead destination | باز |
| D-06 | نسخه نهایی ادعای سابقه | باز |
| D-07 | Evidence دستاوردهای عددی | باز |
| D-08 | Category نهایی اخبار فناوری | باز |
| D-09 | Source Registry اخبار | باز |
| D-10 | ساعت جمع‌آوری و انتشار اخبار | باز |
| D-11 | مجوز لوگو و Screenshot محصولات | باز |
| D-12 | محصولات Tier 2 قابل انتشار | باز |
| D-13 | نسخه انگلیسی V1 یا V2 | باز |
| D-14 | Newsletter provider | باز |
| D-15 | Privacy/cookie policy | باز |

---

# 26. معیار پذیرش Master Specification

این سند زمانی تأیید است که مالک به‌صورت روشن این موارد را بپذیرد:

- Positioning
- Information Architecture
- Dark/Light Design Direction
- Personal logo strategy
- Product order
- News strategy
- Resume cleanup policy
- Architecture recommendation
- Pilot draft-only news policy
- Open decision register
- Release boundary

## Final state

```text
Classification:
DRAFT_MASTER_SPECIFICATION_V2_GENERATED

Ready for owner review:
True

Ready for implementation:
False

Ready for Production:
False

Production change authorized:
False
```
