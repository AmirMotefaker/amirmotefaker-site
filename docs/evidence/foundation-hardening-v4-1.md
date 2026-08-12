# Foundation Hardening v4.1 — Validation Evidence

## Base

- Base main SHA: 20015eedbe886c0144543c4df393b7c554f0d847
- Tracking Issue: #31
- Branch: agent/foundation-hardening-v4-1

## Foundation changes

- FounderShell migrated to canonical product-portfolio.ts
- Obsolete founder-site.ts product export removed after usage verification
- Next.js 16 ESLint flat config enabled
- Lint runs ESLint directly with zero-warning enforcement
- Preview Validation uses deterministic npm ci
- CI runs lint + production build + repository diff hygiene
- next-env.d.ts removed from version control and ignored as generated output
- Global prefers-reduced-motion baseline added
- Global focus-visible baseline added

## Lint remediation discovered by the new gate

- ThemeToggle migrated from effect-driven state synchronization to useSyncExternalStore
- Legacy CTA JSX entity errors corrected
- PremiumNavbar internal navigation migrated to next/link
- Two intentional raw-image uses have narrowly scoped lint exemptions pending media/prototype cleanup

## Validation

- npm ci: PASS
- npm audit: 0 vulnerabilities reported
- ESLint: PASS with 0 warnings
- Next.js production build: PASS
- TypeScript: PASS through production build
- Static page generation: PASS through production build
- git diff --check: PASS
- next-env.d.ts regeneration: PASS
- next-env.d.ts Git ignore: PASS
- canonical product-source audit: PASS
- obsolete legacy product definitions: removed

## Governance follow-up

main branch protection is still a separate follow-up after stabilized check names are merged.

## Production

No production cutover or production-site mutation is included in this milestone.
