# Staging, Preview and Rollback Plan V1

## Staging requirements

- دامنه یا Subdomain جدا
- `noindex`
- Basic Auth یا Access Control
- Database جدا
- Uploads clone کنترل‌شده
- Mail delivery غیرفعال یا Sandbox
- Payment/Commerce غیرفعال
- Analytics Production غیرفعال
- Credentialهای مستقل
- Backup پیش از هر Migration

## Preview requirements

- Preview برای هر PR یا Release Candidate
- Exact commit SHA
- Product Test report
- Visual comparison
- Dark/Light
- Desktop/Mobile
- RTL
- SEO metadata
- Accessibility scan

## Backup requirements

- Database backup
- `wp-content` backup
- Theme/plugin source snapshot
- Redirect export
- Plugin inventory
- Version inventory
- Restore instructions
- Restore test evidence

## Rollback trigger

- HTTP/asset failure
- Login/editor failure
- Critical visual regression
- SEO/canonical regression
- Form failure
- News publishing failure
- Security incident
- Performance regression خارج از Budget

## Rollback method

```text
Exact previous release artifact
+ previous database state when migration occurred
+ verified smoke
+ incident evidence
```

## Production boundary

Staging planning مجاز است؛ ساخت یا تغییر Production بدون Release Gate مجاز نیست.
