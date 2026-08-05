# AmirMotefaker.ir — Implementation Plan V1

## 1. وضعیت

```text
Master Specification V2: APPROVED
Owner decisions: 15 / 15
Ready for implementation planning: TRUE
Ready for source implementation: FALSE
Ready for Production: FALSE
```

## 2. هدف Milestone بعدی

ایجاد یک Source-of-Truth قابل کنترل، محیط Staging/Preview، اسکلت Theme و Plugin و Product Testها؛ بدون تغییر مستقیم Production.

## 3. ترتیب اجرایی

### Phase A — Read-only completion

1. ثبت بسته Implementation Planning
2. بررسی نهایی بسته‌شدن Observation لینک‌رسان
3. تعیین Repository رسمی
4. تعیین روش دریافت Backup و Clone از WordPress
5. تعیین مالکیت Hosting، DNS و Mail
6. تکمیل Asset و Claim Register

### Phase B — Repository foundation

1. ایجاد یا تأیید Private Repository
2. ایجاد Issue اصلی Milestone
3. ساخت Feature Branch
4. ثبت ADR معماری
5. Scaffold کردن Theme
6. Scaffold کردن `amirmotefaker-core`
7. افزودن CI و Test scripts

### Phase C — Staging foundation

1. Backup قابل بازیابی
2. Staging ایزوله
3. Search-engine blocking
4. Credential isolation
5. Preview URL
6. Rollback rehearsal
7. Baseline comparison

### Phase D — Design system

1. Dark tokens
2. Light tokens
3. Typography
4. Logo system placeholders
5. Hero portrait treatment
6. Component primitives
7. Accessibility baseline

### Phase E — Core templates

1. Header/Footer
2. Home
3. About
4. Resume
5. Product
6. Case Study
7. News archive
8. News article
9. Contact
10. 404

### Phase F — Content and product evidence

1. About rewrite
2. Resume deduplication
3. Product asset capture
4. LinkResan case study
5. Farsi Smart product page
6. Ava concept page
7. Claim evidence verification
8. SEO metadata

### Phase G — News pilot

1. Source Registry
2. Taxonomy mapping
3. Candidate collector
4. Deduplication
5. Ranking
6. Draft generator
7. WordPress Draft integration
8. 14-day owner-reviewed pilot

## 4. Milestone Definition of Done

- Repository مشخص است.
- Issue و Branch مشخص‌اند.
- Staging و rollback مستند و تست شده‌اند.
- Theme و Core Plugin در CI Build می‌شوند.
- Product Tests اجرا می‌شوند.
- هیچ Claim بدون Evidence منتشر نمی‌شود.
- Preview مورد تأیید مالک قرار می‌گیرد.
- Production تا عبور همه Gateها دست‌نخورده می‌ماند.
