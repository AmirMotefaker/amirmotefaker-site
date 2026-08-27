# v8 Production Closeout

Issue: #42
Branch: `finalize/v8-production-closeout`
Baseline: `v7.0.0-portfolio-truth-reset`
Baseline merge SHA: `a4e340e9198873a8d6c8be2ab31c0db5f70bcc77`

## Objective
Finish AmirMotefaker.ir at production-grade quality without reopening the approved visual system.

## Scope lock
Only production-readiness defects, content-completeness gaps, measurable performance issues, localization defects, accessibility defects, and SEO/structured-data defects are in scope. New visual-system concepts and unrelated product features are deferred.

## Required QA matrix
- `/fa` and `/en`
- `/fa/news` and `/en/news`
- representative public Product Detail pages in both locales
- light/dark themes
- keyboard focus and reduced motion
- mobile widths: 360, 390, 430
- tablet and desktop layouts
- no horizontal overflow
- locale-correct digits/copy
- canonical/hreflang/sitemap/robots/structured-data verification

## Release contract
Issue #42 → focused commits → focused PR → code review → green CI/Preview → final visual QA → squash merge → exact-SHA release `v8.0.0-production-final`.

## Production safety
No DNS, registrar, infrastructure, or platform migration is part of v8. Keep the current Vercel production deployment available throughout.
