# Global Shell / Header-Footer v5.1 Evidence

## Objective

Guarantee one shared FounderShell across every localized page and clean the crowded header before V6.

## Architecture correction

- `apps/web/app/[locale]/layout.tsx` now owns `FounderShell`.
- Manual/nested FounderShell wrappers were removed from localized page views.
- Header and footer now render once through the locale layout for Home, Resume, About, Products, Product Detail, News, Article, Contact and legacy Pages routes.

## Wrapper files normalized

- apps/web/app/[locale]/news/page.tsx
- apps/web/app/[locale]/news/[slug]/page.tsx
- apps/web/app/[locale]/pages/page.tsx
- apps/web/app/[locale]/pages/[slug]/page.tsx
- apps/web/app/[locale]/products/page.tsx
- apps/web/app/[locale]/products/[slug]/page.tsx
- apps/web/components/founder/FounderHome.tsx
- apps/web/components/founder/InnerPages.tsx

## Header cleanup

- Removed duplicate plain Contact link from the center navigation.
- Retained one primary Contact CTA in the header controls.
- Removed the redundant View Products button from header controls.
- Preserved About, Products, Expertise, Journey and Technology News navigation.
- Preserved theme and locale controls.
- Added responsive header layout for desktop, tablet and mobile.

## Validation

Validated locally:
- npm ci: PASS
- ESLint: PASS
- Next.js production build: PASS
- git diff --check: PASS

## Safety

- Production deployment: NOT performed.
- DNS: NOT changed.
- This branch is intended for local visual review before merge/release.
