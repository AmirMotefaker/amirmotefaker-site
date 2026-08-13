# Founder Visual System V6 Evidence

## Visual milestone

V6 is intentionally a visible local-review milestone rather than a background-only architecture change.

## Home

- New founder-first hero.
- Founder & CEO / technology-journey positioning derived from the existing founder career source of truth.
- Canonical eight-product ecosystem displayed as a central visual section.
- Selected measurable career outcomes reused from the existing LinkedIn-backed career data.
- Technology Vision section for AI, software engineering, digital transformation and automation.
- Latest technology-news section retained.
- Strong contact / resume closing CTA.

## About

- Rebuilt founder-story hero.
- Career narrative reused from the V5 career source of truth.
- Working-principles section.
- Selected outcomes.
- Legacy page content remains accessible behind an archive disclosure.

## Contact

- Rebuilt business-inquiry layout.
- Direct email remains the primary action.
- Phone, location and public network links remain available.
- No fake form submission or backend behavior is introduced.

## Products

- Product index/detail receive V6 visual polish.
- Raw `CONTENT TO CONFIRM` strings are removed from public Product Detail UI.
- Missing product facts are not invented; missing states are described as not specified in the current source.
- Existing Problem / Solution / Capabilities / Technology / Vision / Mission / Roadmap / Role / Related / CTA structure remains.

## Safety

- Global header/footer architecture from v5.1 is preserved.
- Production deployment: NOT performed.
- DNS: NOT changed.
- Raw source PDFs: NOT published.

## Validation

Validated locally:
- npm ci: PASS
- ESLint: PASS
- Next.js production build: PASS
- git diff --check: PASS

## Local review refinements — recovery v3

This iteration continues the partially applied local-review refinement after the first recovery script stopped before validation.

Implemented:

- reduced Home Hero typography and retained the product-ecosystem visual from the partial refinement;
- retained the requested richer Home metrics, including technology-news count, 30+ years in technology, and 1370 / 1990 start-year presentation;
- fixed the portfolio-order patch for the current `rawProductPortfolio -> productPortfolio.map(...)` source structure;
- enforced preferred product order globally: RestYar, PrimeSYS, LinkResan, Farsio, IdeaJoo, Fahmio, FilmTark, ShiftPay;
- added Persian product display names on Persian product surfaces while retaining English names on English surfaces;
- removed DOM-wide post-render digit mutation from the global shell to prevent streamed hydration text mutation;
- preserved locale number helpers and made Persian Jalali / Shamsi and English Gregorian date formatting explicit;
- corrected Home legacy-news bindings to the actual source fields: `title` and `excerpt_text`.

Validation is executed by the recovery script before commit/push.

## Final local UI / UX / Content pass — 2026-08-13

- Local-only finalization. Vercel was explicitly not used.
- Completed the public bilingual copy for all eight canonical product pages from the existing product descriptions, capabilities, mission/vision and stated direction.
- Unknown lifecycle status is not invented; public UI uses neutral portfolio/category information instead.
- Persian product names, industries and categories are localized.
- About no longer exposes the legacy archive disclosure in the final experience.
- News index no longer contains Local/review-state wording.
- Persian founder chronology uses Shamsi years (1370 / 1397); English retains Gregorian years.
- Footer year is localized by locale.
- Home grid geometry is corrected for four story/outcome/vision/principle items and three latest-news items.
- Missing Home news-card and CTA styles referenced by the component are now present.
- PR #38 remains Draft until final local visual approval.
- Production deployment was not performed.