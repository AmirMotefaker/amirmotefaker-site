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
## Toolchain compatibility review

Remote PR review detected that the original `typescript: latest` declaration had resolved to TypeScript 7.0.2 on the v4 base, while installing the official Next.js TypeScript ESLint configuration resolved TypeScript 6.0.3.

The compatibility choice is now explicit:

- TypeScript is pinned to 6.0.3.
- Next.js remains 16.3.0.
- React and React DOM remain 19.2.8.
- ESLint remains 9.39.5.
- eslint-config-next remains 16.3.0.
- ADR: docs/architecture/ADR-002-typescript-eslint-compatibility-pin.md

The pin is temporary until the official typescript-eslint support range includes TypeScript 7.

## Line-ending review

Several touched legacy files were normalized from CRLF to LF, which inflates the displayed PR line count. This is consistent with the repository's pre-existing root `.editorconfig`, which requires `end_of_line = lf`. The semantic changes remain limited to the Foundation Hardening scope.
