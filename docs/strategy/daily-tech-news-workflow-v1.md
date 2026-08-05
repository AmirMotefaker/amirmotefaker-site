---
title: AmirMotefaker.ir — Daily Technology News Workflow
version: 1.0.0-draft
date: 2026-08-05
status: آماده بازبینی مالک
production_change_authorized: false
---

# Workflow روزانه اخبار فناوری

## 1. هدف

هر روز حداکثر پنج خبر مهم، معتبر، غیرتکراری و مرتبط با فناوری اطلاعات و هوش مصنوعی شناسایی، پردازش و برای انتشار در `AmirMotefaker.ir` آماده شود.

منوی Top-Level:

```text
اخبار فناوری
```

مسیر فعلی:

```text
/بلاگ/
```

## 2. اصل انتشار

```text
کیفیت > اجبار عددی
اعتبار > سرعت
منبع اولیه > بازنشر
شفافیت > تقلید
Draft pilot > Blind auto-publish
```

## 3. الگوی فعلی مشاهده‌شده

در نمونه ۱۰۰ نوشته اخیر، الگوی پنج انتشار در روز و بازه تقریبی `08:00 تا 08:30` دیده شد.

این الگو فقط Baseline است و زمان نهایی Workflow هنوز تصمیم مالک است.

## 4. معماری

```text
GitHub Actions / Scheduler
        ↓
Source Adapters
        ↓
Candidate Store
        ↓
Deduplication
        ↓
Fact & Source Verification
        ↓
Trend Ranking
        ↓
Diversity Selector
        ↓
Persian Editorial Generator
        ↓
Quality Gates
        ↓
WordPress Draft API
        ↓
Human Review
        ↓
Publish/Schedule
        ↓
Monitoring & Correction
```

## 5. Source Registry

### Tier A — منبع اولیه

- وبلاگ رسمی شرکت
- Newsroom رسمی
- Release note
- مستندات رسمی
- مقاله پژوهشی اصلی
- نهاد تنظیم‌گر
- صفحه محصول
- گزارش مالی رسمی

### Tier B — منبع خبری معتبر

- خبرگزاری بین‌المللی
- رسانه تخصصی فناوری
- رسانه تخصصی امنیت
- رسانه تخصصی Cloud/Data/AI

### Tier C — Discovery only

- شبکه اجتماعی
- Aggregator
- Newsletter
- Forum
- وبلاگ شخصی
- ویدیو یا پادکست

Tier C به‌تنهایی مجوز انتشار نیست.

## 6. Candidate Schema

```json
{
  "candidate_id": "",
  "event_cluster_id": "",
  "title_original": "",
  "title_normalized": "",
  "source_url": "",
  "canonical_url": "",
  "source_name": "",
  "source_tier": "A|B|C",
  "published_at": "",
  "discovered_at": "",
  "entities": [],
  "topics": [],
  "language": "",
  "claims": [],
  "image_candidates": [],
  "trend_score": 0,
  "confidence_score": 0,
  "risk_level": "LOW|MEDIUM|HIGH",
  "status": "DISCOVERED"
}
```

## 7. Deduplication

سیگنال‌ها:

- Canonical URL
- normalized URL
- title fingerprint
- entity overlap
- time window
- semantic similarity
- same announcement/product/event

خروجی:

```text
یک Event Cluster
چند Source
یک خبر نهایی
```

پنجره پیشنهادی اولیه:

```text
72 ساعت
```

برای خبرهای ادامه‌دار، Cluster باز می‌ماند و Update منتشر می‌شود.

## 8. امتیازدهی

```text
Source quality       25
Corroboration        20
Freshness            15
Audience relevance   15
Business impact      10
Technical impact     10
Novelty               5
------------------------
Total                100
```

Gate پیشنهادی:

```text
Candidate ≥ 70
Draft ≥ 80
Auto-publish eligibility ≥ 95
```

Auto-publish eligibility به معنی مجوز فعلی نیست.

## 9. Diversity Selector

پنج خبر نباید همگی یک موضوع یا شرکت باشند.

قواعد پیشنهادی:

- حداکثر دو خبر از یک شرکت
- حداکثر سه خبر از AI عمومی
- حداقل یک خبر کسب‌وکار/بازار
- حداقل یک خبر فنی
- حداقل یک خبر خارج از موج اصلی روز، در صورت ارزش
- عدم تکرار Event Cluster

## 10. Fact Model

هر Fact:

```json
{
  "claim": "",
  "source_url": "",
  "source_quote_pointer": "",
  "confidence": 0,
  "is_primary_source": false,
  "requires_human_review": false
}
```

موضوعات Human Review اجباری:

- هک و نشت
- پزشکی
- حقوقی
- اخراج
- تحریم
- ادغام و خرید
- ادعای مالی
- سیاست
- امنیت ملی
- شایعه و Leak

## 11. قالب خبر

1. عنوان فارسی
2. Deck
3. چه اتفاقی افتاد؟
4. نکات کلیدی
5. چرا مهم است؟
6. تأثیر برای مخاطب فارسی‌زبان
7. منابع
8. تاریخ انتشار منبع
9. تاریخ آخرین بررسی
10. Disclosure
11. Correction block

## 12. تحلیل

ممنوع:

```text
انتشار خودکار با برچسب «تحلیل امیر متفکر»
```

مجاز:

- «تحلیل امیر» فقط با متن یا تأیید مالک
- «جمع‌بندی تحریریه» برای متن خودکار
- «چرا مهم است؟» با استناد به Factها

## 13. تصویر

ترتیب:

1. Press kit رسمی
2. تصویر رسمی محصول با مجوز
3. Screenshot رسمی
4. نمودار اختصاصی
5. کاور گرافیکی اختصاصی
6. تصویر تولیدشده با AI با Disclosure

ممنوع:

- برداشت تصادفی از Google Images
- حذف Watermark
- تصویر بدون Source
- لوگوی تغییرشکل‌یافته
- ساخت Screenshot جعلی بدون برچسب Concept

## 14. WordPress

Pilot user:

```text
Role: dedicated least-privilege editorial user
Authentication: Application Password
Post status: draft
```

Fields:

```text
title
slug
excerpt
content
featured_media
categories
tags
status
source_urls
primary_source_url
source_publish_at
trend_score
confidence_score
fact_check_status
duplicate_cluster_id
automation_version
correction_status
disclosure
```

## 15. State Machine

```text
DISCOVERED
→ NORMALIZED
→ CLUSTERED
→ VERIFIED
→ SELECTED
→ DRAFTED
→ QA_PASSED
→ WP_DRAFT
→ OWNER_APPROVED
→ SCHEDULED
→ PUBLISHED
→ MONITORED
→ CORRECTED
```

Reject states:

```text
REJECTED_LOW_QUALITY
REJECTED_DUPLICATE
REJECTED_COPYRIGHT
REJECTED_UNVERIFIED
REJECTED_RISK
```

## 16. Pilot 14 روزه

- Draft only
- پنج Candidate واجد شرایط
- Owner review
- ثبت Reject reason
- اندازه‌گیری زمان review
- اندازه‌گیری خطای Fact
- اندازه‌گیری Duplicate
- بررسی کیفیت فارسی
- بررسی CTR
- بدون Publish خودکار

## 17. Auto-publish Gate

پس از Pilot، فقط Low-risk:

- Tier A
- حداقل یک corroborating source
- Confidence ≥ 95
- no sensitive claim
- image license pass
- duplicate pass
- schema pass
- no owner-analysis label
- rollback ready

## 18. Monitoring

- HTTP status
- indexability
- source link health
- schema validation
- image load
- correction reports
- duplicate report
- sudden traffic anomaly
- spam/comment
- broken canonical

## 19. Correction

هر اصلاح:

```text
Correction ID
Article ID
Detected at
Reason
Old value
New value
Source
Approved by
Published at
```

Correction banner روی صفحه نمایش داده شود.

## 20. Tests

- Scheduler
- source adapters
- timeout/retry
- allowlist
- dedup
- ranking
- diversity
- claim sourcing
- Persian output
- copyright
- image metadata
- draft status
- secret redaction
- API failure
- idempotency
- correction
- rollback

## 21. وضعیت

```text
Classification:
DRAFT_DAILY_TECH_NEWS_WORKFLOW_V1

Ready for implementation:
False

Required before implementation:
Source Registry
Category decision
Publishing time
Staging
Application Password
Review owner
Copyright policy
Rollback plan

Production change authorized:
False
```
