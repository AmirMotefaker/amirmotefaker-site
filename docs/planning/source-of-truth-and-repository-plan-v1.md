# Source-of-Truth and Repository Plan V1

## وضعیت فعلی

```text
WordPress Production: Live content system
Git connection: Not established
Official source repository: Not established
```

## پیشنهاد

Repository خصوصی پیشنهادی:

```text
AmirMotefaker/amirmotefaker-site
```

Local path پیشنهادی:

```text
C:\Projects\Active\AmirMotefaker-Site
```

این نام‌ها تا اجرای Repository Gate صرفاً پیشنهاد هستند.

## ساختار

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

## Repository Gate

قبل از ایجاد Repository:

1. بسته‌شدن رسمی Observation لینک‌رسان ثبت شود.
2. نام Repository تأیید شود.
3. Private بودن تأیید شود.
4. Backup و Staging strategy مشخص باشد.
5. Secrets policy ثبت شود.
6. `.gitignore` و secret scanning فعال باشد.

## Branch model

```text
main
feature/amirmotefaker-site-foundation
feature/amirmotefaker-design-system
feature/amirmotefaker-core-pages
feature/amirmotefaker-tech-news-pilot
```

## ممنوع

- Export کردن رمزها
- Commit کردن `wp-config.php`
- Commit کردن Uploadهای خصوصی
- Push کردن Database dump بدون Sanitization
- استفاده از Production به‌عنوان محیط توسعه
