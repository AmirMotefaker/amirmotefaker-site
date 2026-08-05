# Product Test Plan V1

## Test suites

### PT-01 — Brand and positioning

- H1 پیام تأییدشده را نمایش دهد.
- Positioning دقیق باشد.
- CTAهای اصلی درست باشند.
- Claim تأییدنشده وجود نداشته باشد.

### PT-02 — Theme

- Dark Mode
- Light Mode
- persistence
- reduced motion
- focus states
- RTL
- responsive

### PT-03 — About

- یک H1
- Timeline صحیح
- تصویر واقعی
- بدون تکرار
- CTA
- Structured Data

### PT-04 — Resume

- Experience تکراری حذف شده باشد.
- Filterها کار کنند.
- تاریخ‌ها یکدست باشند.
- Evidence State برای Claimهای عددی وجود داشته باشد.
- PDF دانلود شود.

### PT-05 — Products

- ترتیب LinkResan، Farsi Smart، Ava
- وضعیت واقعی
- تصویر و Logo
- Concept label برای Ava
- لینک‌ها معتبر

### PT-06 — News

- مسیر `/بلاگ/`
- دسته‌بندی
- Source links
- Draft-only pilot
- Duplicate rejection
- no owner-analysis impersonation
- correction block

### PT-07 — Forms

- validation
- spam prevention
- privacy consent
- success/error state
- no accidental Production email

### PT-08 — SEO

- title
- meta description
- one H1
- canonical
- robots
- sitemap
- schema
- redirects

### PT-09 — Accessibility

- keyboard
- focus
- contrast
- zoom
- screen-reader landmarks
- reduced motion
- accessible forms

### PT-10 — Performance

- image budget
- JavaScript budget
- LCP
- INP
- CLS
- third-party budget

## Gate rule

هر Phase که تغییری ایجاد می‌کند باید Product Test Script مستقل داشته باشد و نتیجه آن در Evidence ذخیره شود.
