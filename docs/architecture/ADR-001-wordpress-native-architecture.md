# ADR-001 Draft — معماری AmirMotefaker.ir V1

## Status

```text
PROPOSED_BY_APPROVED_SPECIFICATION
OWNER_APPROVED_DIRECTION
NOT_YET_ACCEPTED_IN_REPOSITORY
```

## Decision

نسخه اول با معماری زیر ساخته شود:

```text
WordPress editorial CMS
+ Custom Block Theme
+ theme.json
+ Custom Blocks
+ amirmotefaker-core plugin
+ REST interfaces
+ Git-based source control
+ Staging/Preview
```

## Context

سایت فعلی دارای حجم قابل توجه محتوای WordPress، URLهای موجود، Rank Math، WooCommerce، Elementor و افزونه‌های وابسته است.

## Why

- کاهش ریسک مهاجرت محتوا و SEO
- حفظ Workflow تحریریه
- امکان Preview و Draft
- Rollback ساده‌تر
- امکان توسعه تدریجی
- کنترل Source در Git

## Consequences

- Elementor به‌صورت Big Bang حذف نمی‌شود.
- Templateها مرحله‌ای جایگزین می‌شوند.
- Data Model در Core Plugin متمرکز می‌شود.
- Headless فقط پس از Feasibility Spike بررسی می‌شود.
- Production edit مستقیم ممنوع است.

## Acceptance gate

این ADR فقط بعد از ایجاد Repository و PR رسمی به وضعیت `ACCEPTED` می‌رسد.
