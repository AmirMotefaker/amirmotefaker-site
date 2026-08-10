# AmirMotefaker.ir Foundation Theme

Offline foundation scaffold for the approved AmirMotefaker.ir redesign.

## Product identity

- Positioning: امیر متفکر — بنیان‌گذار محصولات دیجیتال، مهندس نرم‌افزار و مدیر بازاریابی و فروش
- Central message: فناوری را می‌سازم، به بازار می‌برم و به کسب‌وکار تبدیل می‌کنم.
- Primary CTA: درخواست همکاری
- Secondary CTA: مشاهده محصولات
- Product order: LinkResan, Farsi Smart, Ava

## Boundary

This scaffold is not a Production deployment. It contains no credentials, no automatic publishing, no remote runtime dependency and no Git metadata.

## Validation

```powershell
pwsh -NoProfile -NonInteractive -ExecutionPolicy Bypass -File .\tests\Test-Foundation.ps1 -WorkspaceRoot .
pwsh -NoProfile -NonInteractive -ExecutionPolicy Bypass -File .\tests\Test-Product.ps1 -WorkspaceRoot .
pwsh -NoProfile -NonInteractive -ExecutionPolicy Bypass -File .\tests\Test-Security.ps1 -WorkspaceRoot .
```
