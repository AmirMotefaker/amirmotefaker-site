# AmirMotefaker.ir — Product Portfolio & Product Pages Specification
## نسخه 1.0 — Source of Truth برای طراحی و پیاده‌سازی بخش محصولات

> **هدف:** این فایل را می‌توان مستقیماً به یک AI coding/design agent داد تا بخش Products سایت AmirMotefaker.ir را از صفر تا تولید، با معماری داده‌محور، صفحات اختصاصی، UX/UI مدرن، محتوای فارسی RTL، SEO، Accessibility و Performance پیاده‌سازی کند.

---

# 1. Brand Context

## Personal Brand
**Amir Motefaker**

**Positioning**
> Technology Entrepreneur · AI Product Builder · Business & Innovation Strategist

**فارسی**
> کارآفرین فناوری، سازنده محصولات هوش مصنوعی و استراتژیست کسب‌وکار و نوآوری

## Website
`amirmotefaker.ir`

## Core idea
> محصولات فناوری می‌سازم؛ از هوش مصنوعی و نرم‌افزار تا FinTech، FoodTech، LanguageTech و پلتفرم‌های دیجیتال.

## English positioning
> I build AI-powered technology products across FinTech, FoodTech, LanguageTech, Knowledge, Entertainment and Enterprise Technology.

---

# 2. Product Portfolio

| Product | Domain | Industry | Category | Positioning |
|---|---|---|---|---|
| PrimeSYS | PrimeSYS.ir | Enterprise Technology | Technology Company / Solutions | Enterprise Technology, AI, Hardware & Software |
| RestYar | RestYar.ir | FoodTech / RestaurantTech | Cloud SaaS | AI Operating System for Restaurants |
| ShiftPay | ShiftPay.ir | FinTech | Business Financial Platform | Business Financial Technology |
| Farsio | Farsio.ir | AI / LanguageTech | Persian AI Platform | AI & Language Technology for Persian |
| Fahmio | Fahmio.ir | EdTech / KnowledgeTech | AI Knowledge Platform | AI-Powered Knowledge & Learning |
| Idehjo | Idehjo.ir | InnovationTech | Innovation Intelligence | Innovation Intelligence Platform |
| FilmTrack | FilmTrack.ir | EntertainmentTech / MediaTech | Movie & TV Platform | Movie & TV Discovery Platform |
| LinkResan | LinkResan.ir | SaaS / MarTech / Digital Utility | Link Management | Link Management & Intelligence Platform |

## Portfolio Groups

### AI & Intelligent Products
- Farsio
- Fahmio
- Idehjo

### Business Technology
- RestYar
- ShiftPay

### Enterprise Technology
- PrimeSYS

### Digital Platforms
- FilmTrack
- LinkResan

> **Rule:** AI یک technology layer است، نه الزاماً industry همه محصولات. مثال: RestYar = FoodTech + AI؛ ShiftPay = FinTech + Automation/AI؛ FilmTrack = EntertainmentTech + AI Recommendation.

---

# 3. Global Design Direction

## Design philosophy
سایت باید مانند یک **Premium Technology Product Portfolio** باشد، نه CV معمولی.

### Keywords
- Editorial
- Premium
- Minimal
- Intelligent
- Product-first
- Spacious
- Motion-aware
- High readability
- Persian-first RTL
- Responsive
- Accessible

### Visual rules
- Dark/Light theme.
- Typography hierarchy قوی.
- Product name بزرگ + positioning کوتاه.
- Gradient/noise/grid فقط در صورت کمک به hierarchy.
- عدم استفاده افراطی از glassmorphism.
- عدم استفاده از neon AI clichés.
- کارت‌ها همه‌جا تکراری و template-like نباشند.
- هر محصول personality بصری خودش را داشته باشد، اما parent brand یکپارچه بماند.
- Motion ظریف و هدفمند.
- احترام به `prefers-reduced-motion`.

### Typography
Persian:
- Vazirmatn
- یا IRANSansX در صورت وجود license
- fallback: system sans-serif

English:
- Inter / Geist / system sans-serif

### RTL
- `dir="rtl"`
- Product names/domains در spanهای LTR ایزوله شوند.
- اعداد و متن انگلیسی پایدار نمایش داده شوند.
- از mixing کنترل‌نشده RTL/LTR جلوگیری شود.

---

# 4. Products Index Page

## URL
`/products`

## Hero
**Eyebrow:** `PRODUCTS & VENTURES`

**H1**
> محصولاتی که می‌سازم.

**Supporting text**
> مجموعه‌ای از محصولات و کسب‌وکارهای فناوری که در تقاطع هوش مصنوعی، نرم‌افزار و صنایع واقعی شکل گرفته‌اند.

**English line**
> AI-powered products for real-world problems.

## Filters
- همه
- AI & Intelligent Products
- FinTech
- FoodTech
- Enterprise Technology
- Digital Platforms
- EntertainmentTech

Optional status filters:
- Active
- In Development
- Discovery

## Product Card
هر کارت:
1. نام محصول
2. دامنه
3. Industry badge
4. One-line positioning
5. توضیح کوتاه
6. Status
7. Technology tags
8. CTA: «مشاهده محصول»
9. External-link icon

کارت‌ها باید keyboard accessible باشند.

## Featured order
1. PrimeSYS
2. RestYar
3. ShiftPay
4. Farsio
5. Fahmio
6. Idehjo
7. FilmTrack
8. LinkResan

## Closing CTA
**H2**
> یک ایده خوب، وقتی ارزشمند است که ساخته شود.

CTA:
- درباره من
- مشاهده همه محصولات

---

# 5. Reusable Product Detail Template

Recommended URLs:
- `/products/primesys`
- `/products/restyar`
- `/products/shiftpay`
- `/products/farsio`
- `/products/fahmio`
- `/products/idehjo`
- `/products/filmtrack`
- `/products/linkresan`

## Sections
1. Hero
2. Product Snapshot
3. Problem
4. Solution
5. Core Capabilities
6. Product Experience
7. AI / Technology Layer
8. Vision
9. Mission
10. Roadmap
11. Amir's Role
12. Related Products
13. CTA

### Hero requirements
- Industry
- Product name
- Positioning
- 1–2 sentence description
- Status
- Primary CTA
- Visit product CTA
- Product visual

### Snapshot
- Industry
- Category
- Business model فقط در صورت تأیید
- Status
- Target users
- Core technologies

### Product Experience
اگر screenshot واقعی وجود ندارد، از **Concept UI** با برچسب واضح استفاده شود؛ هرگز screenshot ساختگی به‌عنوان واقعی نمایش داده نشود.

---

# 6. PrimeSYS

## Identity
**PrimeSYS** — `PrimeSYS.ir`

**Industry:** Enterprise Technology  
**Category:** Technology Company / Solutions Provider  
**Positioning:** Enterprise Technology, AI, Hardware & Software

### Description
PrimeSYS یک کسب‌وکار فناوری با تمرکز بر نرم‌افزار، هوش مصنوعی، Computer Vision، سخت‌افزار، گیمینگ، رندرینگ و AIDC است.

### Core areas
- Cloud accounting & financial software
- Face recognition
- License plate recognition
- Hardware, gaming & rendering
- Barcode / RFID / AIDC
- Logistics technology

### Vision
> تبدیل‌شدن به یک مجموعه فناوری چندلایه که نرم‌افزار، هوش مصنوعی و زیرساخت سخت‌افزاری را برای حل مسائل واقعی کسب‌وکارها یکپارچه می‌کند.

### Mission
> طراحی و ارائه راهکارهای فناوری قابل اتکا که به سازمان‌ها و کسب‌وکارها کمک می‌کنند عملیات خود را هوشمندتر، سریع‌تر و مقیاس‌پذیرتر کنند.

### Hero
> فناوری برای مسئله‌های واقعی کسب‌وکار.

### Visual direction
Corporate / technical / premium. Architecture diagrams، product modules، hardware renders و case-study blocks.

---

# 7. RestYar

## Identity
**RestYar** — `RestYar.ir`

**Industry:** FoodTech / RestaurantTech  
**Category:** Cloud SaaS  
**Positioning:** AI Operating System for Restaurants

### Product
پلتفرم ابری مدیریت کافه، رستوران، فست‌فود و مجموعه‌های غذایی.

### Capabilities
- Sales
- Inventory
- Customer club / loyalty
- Branch management
- Reservations
- Analytics
- AI-assisted operations

### Hero
> مدیریت هوشمند کسب‌وکارهای غذایی.

### Vision
> ساختن زیرساخت دیجیتال هوشمند برای نسل جدید کسب‌وکارهای صنعت غذا.

### Mission
> یکپارچه‌کردن فروش، عملیات، مشتری و داده در یک پلتفرم ابری ساده و هوشمند.

### Product promise
> از فروش تا وفاداری مشتری، همه‌چیز در یک سیستم.

### CTA
> مشاهده RestYar
> درخواست دمو

### Visual direction
Warm but premium؛ dashboard، branch management، operational workflows. از stock food photography به‌عنوان visual اصلی استفاده نشود.

---

# 8. ShiftPay

## Identity
**ShiftPay** — `ShiftPay.ir`

**Industry:** FinTech  
**Category:** Business Financial Platform  
**Positioning:** Business Financial Technology

## Critical positioning
ShiftPay **فقط برای رستوران نیست** و نباید به restaurant payment محدود شود. محصول برای کسب‌وکارهای تمام صنایع طراحی می‌شود.

### Product concept
پلتفرم فناوری مالی مدرن برای انتقال پول، پرداخت، payout و settlement و جریان‌های مالی کسب‌وکار.

### Core direction
- Transfers
- Payments
- Payouts
- Settlement
- Financial APIs
- Business financial workflows
- Future financial services

### Hero
> زیرساخت مالی ساده‌تر برای کسب‌وکارها.

### English
> Business money, moving smarter.

### Vision
> تبدیل‌شدن به زیرساخت مالی دیجیتال کسب‌وکارها؛ جایی که انتقال، پرداخت، تسویه و سرویس‌های مالی در یک تجربه یکپارچه قرار می‌گیرند.

### Mission
> ساده‌کردن جریان پول برای کسب‌وکارها با استفاده از فناوری مالی، APIهای مقیاس‌پذیر و اتوماسیون هوشمند.

### Do NOT position as
- restaurant-only
- simple card-to-card app
- generic payment gateway

### Visual direction
Premium FinTech؛ trust، data visualization، transaction-flow diagrams، motion ظریف. از crypto clichés و coin graphics استفاده نشود.

---

# 9. Farsio

## Identity
**Farsio** — `Farsio.ir`

**Industry:** AI / LanguageTech  
**Category:** Persian AI Platform  
**Positioning:** AI & Language Technology for Persian

## Product family

### Farsi Smart Assistant
افزونه Chrome/Firefox برای:
- اصلاح هوشمند تایپ فارسی
- writing assistance
- knowledge assistant
- Wikipedia / Google knowledge support

### AVA
محصول در مرحله Discovery از خانواده Farsio.

هدف:
- استخراج محتوای اصلی صفحات وب
- ترجمه
- خلاصه‌سازی
- تولید خروجی صوتی فارسی

### Hero
> هوش مصنوعی، برای فارسی.

### Vision
> ساختن لایه هوشمند زبان فارسی برای تجربه‌ای طبیعی‌تر، سریع‌تر و غنی‌تر از وب و دانش دیجیتال.

### Mission
> توسعه ابزارهای هوشمند برای فهم، اصلاح، خلاصه‌سازی، ترجمه و مصرف محتوای فارسی.

### Visual direction
Language-tech؛ typography، text transformations، browser mockups، before/after writing، audio waveform.

---

# 10. Fahmio

## Identity
**Fahmio** — `Fahmio.ir`

**Industry:** EdTech / KnowledgeTech  
**Category:** AI Knowledge Platform  
**Positioning:** AI-Powered Knowledge & Learning

### Current product
خلاصه صوتی کتاب با هوش مصنوعی.

### Hero
> دانش را بفهم.

### Supporting
> خلاصه‌های هوشمند و صوتی برای اینکه در زمان کمتر، ایده‌های مهم کتاب‌ها را بهتر بفهمی.

### Vision
> تبدیل‌شدن به یک پلتفرم هوشمند برای تبدیل دانش پراکنده به تجربه‌ای قابل فهم، شخصی و قابل استفاده.

### Mission
> کمک به افراد برای کشف، فهم و مصرف سریع‌تر دانش با استفاده از هوش مصنوعی و تجربه صوتی.

### Future directions
- Audio summaries
- Knowledge cards
- AI Q&A
- Learning paths
- Personalized learning
- Knowledge discovery

### Visual direction
Editorial + audio؛ book grid، waveform، knowledge cards. از stock-photo-heavy layout اجتناب شود.

---

# 11. Idehjo

## Identity
**Idehjo** — `Idehjo.ir`

**Industry:** InnovationTech  
**Category:** Innovation Intelligence  
**Positioning:** Innovation Intelligence Platform

### Product
هر روز ۱۰ ایده/نوآوری مهم جهان با رأی واقعی، ترجمه روان، تحلیل AI و بررسی قابلیت ایجاد نسخه ایرانی.

### Hero
> ایده‌ی درست، در زمان درست.

### Vision
> ساختن یک رادار هوشمند برای کشف ایده‌ها، محصولات و روندهایی که آینده کسب‌وکار را شکل می‌دهند.

### Mission
> جمع‌آوری، پالایش، ترجمه و تحلیل نوآوری‌های جهان و تبدیل آن‌ها به بینش قابل استفاده برای بازار ایران.

### Capabilities
- Global idea discovery
- Community voting
- AI analysis
- Persian translation
- Local-market adaptation
- Trend intelligence

### Visual direction
Editorial intelligence؛ ranking، voting، trend cards، data visualization، timeline و discovery feed.

---

# 12. FilmTrack

## Identity
**FilmTrack** — `FilmTrack.ir`

**Industry:** EntertainmentTech / MediaTech  
**Category:** Movie & TV Discovery Platform

### Tagline
> فیلم‌ها و سریال‌هایت را ردیابی کن.

### Product
جامعه فارسی‌زبان عاشقان سینما برای:
- Watchlist
- Tracking
- Sharing
- Discovery
- Ratings
- Community

### Hero
> خانه شخصی تو برای سینما و سریال.

### Vision
> ساختن جامع‌ترین تجربه فارسی‌زبان برای کشف، دنبال‌کردن و اشتراک‌گذاری تجربه تماشای فیلم و سریال.

### Mission
> کمک به علاقه‌مندان سینما برای مدیریت تماشای خود، کشف آثار جدید و ارتباط با جامعه‌ای هم‌سلیقه.

### Visual direction
Cinematic but modern؛ poster/grid systems، watch progress، lists، social interactions. از assets دارای copyright بدون مجوز استفاده نشود.

---

# 13. LinkResan

## Identity
**LinkResan** — `LinkResan.ir`

**Industry:** SaaS / MarTech / Digital Utility  
**Category:** Link Management & Intelligence

### Current product
URL shortening.

### Recommended future positioning
> Link Management & Intelligence Platform

### Hero
> لینک‌هایت را کوتاه‌تر، هوشمندتر و قابل‌اندازه‌گیری کن.

### Vision
> تبدیل‌شدن به یک زیرساخت ساده و هوشمند برای مدیریت، تحلیل و توزیع لینک‌های دیجیتال.

### Mission
> ساده‌کردن اشتراک‌گذاری و اندازه‌گیری عملکرد لینک‌ها برای افراد، برندها و تیم‌های بازاریابی.

### Future capabilities
- Short links
- Analytics
- QR
- UTM
- Campaign tracking
- Smart redirects
- Deep links

### Visual direction
Clean utility SaaS؛ URL interaction، analytics dashboard، QR و campaign visuals.

---

# 14. Shared UI Components

- `ProductsHero`
- `IndustryFilter`
- `ProductGrid`
- `ProductCard`
- `ProductHero`
- `ProductSnapshot`
- `ProblemSection`
- `SolutionSection`
- `CapabilityGrid`
- `ProductShowcase`
- `TechnologyStack`
- `VisionMission`
- `Roadmap`
- `RoleSection`
- `RelatedProducts`
- `ProductCTA`
- `ProductFooter`

Build a **data-driven system**. Avoid duplicating page markup.

---

# 15. Product Status

Use:
- `LIVE` — منتشر و قابل استفاده
- `IN DEVELOPMENT` — در حال توسعه
- `DISCOVERY` — مرحله کشف/اعتبارسنجی
- `CONCEPT` — ایده/نمونه اولیه

اگر وضعیت تأیید نشده:
`STATUS TO CONFIRM`

هیچ status یا milestone ساختگی ایجاد نشود.

---

# 16. Motion

Use subtle 2026 interactions:
- Hero reveal
- Card hover
- Filter transitions
- Scroll progress
- Product microinteractions
- View transitions where supported

Rules:
- No excessive parallax.
- No constant animation.
- No autoplay audio.
- Respect reduced motion.

---

# 17. Accessibility

Target WCAG 2.2 AA:
- keyboard navigation
- visible focus
- semantic headings
- accessible buttons
- alt text
- sufficient contrast
- reduced motion
- no color-only meaning
- correct RTL/LTR

---

# 18. Performance

Targets:
- WebP/AVIF where useful
- lazy loading
- minimal JS
- code splitting
- critical font preload only
- avoid unnecessary animation libraries
- Lighthouse 90+ where practical

---

# 19. SEO

## Products index
**Title**
> محصولات فناوری | امیر متفکر

**Meta**
> مجموعه محصولات و کسب‌وکارهای فناوری امیر متفکر در حوزه‌های هوش مصنوعی، فین‌تک، فودتک، زبان، دانش و پلتفرم‌های دیجیتال.

## Product pages
Each page must have unique:
- title
- meta description
- canonical
- Open Graph
- X/Twitter card
- structured data

Recommended schema where appropriate:
- `SoftwareApplication`
- `Organization`
- `Brand`
- `BreadcrumbList`

Never invent ratings, pricing, users, awards or market claims.

---

# 20. Open Graph

Recommended size:
`1200 × 630`

Each product OG:
- product name
- industry
- positioning
- Amir Motefaker portfolio identity
- consistent parent grid
- product-specific visual language

---

# 21. Responsive

### Mobile
- one column
- readable hero
- compact sticky product nav
- swipeable galleries
- no tiny tables

### Tablet
- 2-column feature layouts where useful

### Desktop
- editorial 12-column grid
- asymmetric hero
- visual + text
- generous whitespace

---

# 22. Trust & Content Rules

AI must NOT invent:
- revenue
- customers
- market share
- funding
- awards
- partnerships
- user counts
- exact launch dates
- certifications
- testimonials

If missing:
`CONTENT TO CONFIRM`

---

# 23. Product Visual Language

| Product | Visual direction |
|---|---|
| PrimeSYS | Technical / Corporate / Infrastructure |
| RestYar | Warm / Operational / SaaS |
| ShiftPay | Financial / Trust / Data |
| Farsio | Language / Typography / AI |
| Fahmio | Knowledge / Editorial / Audio |
| Idehjo | Innovation / Discovery / Intelligence |
| FilmTrack | Cinematic / Social / Discovery |
| LinkResan | Utility / Analytics / SaaS |

---

# 24. Related Products

Related products should be selected by industry/category, not randomly.

Examples:
- ShiftPay → RestYar, PrimeSYS
- RestYar → ShiftPay, PrimeSYS
- Farsio → Fahmio, Idehjo
- Fahmio → Farsio, Idehjo
- FilmTrack → LinkResan
- PrimeSYS → ShiftPay, RestYar

---

# 25. Homepage Portfolio Block

### Heading
> محصولاتی که ساخته‌ام و می‌سازم.

### Text
> از ابزارهای هوش مصنوعی و فناوری زبان فارسی تا فین‌تک، فودتک و پلتفرم‌های دیجیتال؛ تمرکز من ساخت محصولاتی است که فناوری را به مسئله‌های واقعی کسب‌وکار و زندگی روزمره متصل می‌کنند.

### CTA
> مشاهده همه محصولات

---

# 26. Technical Recommendation

Preferred modern stack:
- Next.js / React
- TypeScript
- Tailwind CSS
- shadcn/ui or custom design system
- MDX or structured JSON/TS for product data
- Framer Motion only where necessary
- next/image
- semantic HTML
- SSR/SSG for product pages

Alternative stack is acceptable if it preserves:
- performance
- SEO
- maintainability
- accessibility
- data-driven architecture
- RTL correctness

---

# 27. Product Data Model

```ts
type Product = {
  slug: string
  name: string
  domain: string
  industry: string
  category: string
  positioning: string
  shortDescription: string
  status: "live" | "development" | "discovery" | "concept"
  featured: boolean
  tags: string[]
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta?: string
    secondaryCta?: string
  }
  problem: string[]
  solution: string
  capabilities: {
    title: string
    description: string
    icon: string
  }[]
  technology: string[]
  vision: string
  mission: string
  roadmap: {
    phase: string
    title: string
    items: string[]
  }[]
  designTheme: string
}
```

---

# 28. AI Coding Agent Instructions

When this document is provided to an AI:
1. Read the entire document before coding.
2. Treat this file as the product-content source of truth.
3. Do not invent factual claims.
4. Build `/products` first.
5. Build one reusable Product Detail Template.
6. Feed all products through the same data model.
7. Apply product-specific visual identity without breaking parent-brand consistency.
8. Make every page responsive.
9. Implement Persian RTL correctly.
10. Add SEO metadata and structured data.
11. Add accessibility.
12. Optimize performance.
13. Add tasteful motion.
14. Make content easy to update without editing layout code.
15. Use placeholders for missing assets instead of fabricated visuals.
16. Keep external product links configurable.
17. Make adding future products require only product data, not a new page architecture.

---

# 29. Acceptance Criteria

Implementation is complete only when:
- `/products` exists and is production-ready.
- Every product has a dedicated detail page.
- Every product has unique copy.
- Every product has Industry + Category + Positioning.
- Every product has Vision + Mission.
- Every product has Problem/Solution/Capabilities.
- Every product has Technology layer.
- Every page has CTA.
- Every page is SEO-ready.
- Every page is mobile-ready.
- RTL/LTR is correct.
- No fabricated facts exist.
- Content is data-driven.
- Product-specific visuals are coherent.
- Adding a ninth/tenth product requires only adding data.

---

# 30. Canonical Portfolio Summary

## Amir Motefaker
Technology Entrepreneur · AI Product Builder · Business & Innovation Strategist

### Products & Ventures
- **PrimeSYS** — Enterprise Technology
- **RestYar** — FoodTech / RestaurantTech
- **ShiftPay** — FinTech
- **Farsio** — AI / LanguageTech
- **Fahmio** — EdTech / KnowledgeTech
- **Idehjo** — InnovationTech
- **FilmTrack** — EntertainmentTech
- **LinkResan** — SaaS / Digital Utility

### Portfolio statement
> I build technology products that connect AI, software and real-world industries.

### فارسی
> محصولات فناوری می‌سازم که هوش مصنوعی و نرم‌افزار را به مسئله‌های واقعی زندگی و کسب‌وکار متصل می‌کنند.
