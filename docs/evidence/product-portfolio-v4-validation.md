# Product Portfolio v4 — Validation Evidence

## Scope

Canonical Product Portfolio Source of Truth implementation.

## Canonical products

1. PrimeSYS
2. RestYar
3. ShiftPay
4. Farsio
5. Fahmio
6. Idehjo
7. FilmTrack
8. LinkResan

## Branch

agent/product-portfolio-source-of-truth-v4

## Safety snapshot

Pre-v4 local work was preserved on GitHub before this implementation:

- Branch: wip/pre-product-v4-local-snapshot-14050521-122408
- Commit: 09c392dd481baf877a805a14261ae4f11748f783

## Validation

- npm ci: passed
- npm audit result during install: 0 vulnerabilities
- Next.js production build: passed
- TypeScript validation: passed
- Static page generation: passed
- Canonical product routes generated for FA and EN
- git diff --check: passed
- Canonical specification preserved byte-for-byte; intentional Markdown hard-break trailing spaces are exempted from Git whitespace diagnostics via .gitattributes

## Route migration

Removed obsolete explicit portfolio routes:

- ava
- farsi-smart-assistant
- fekrava

Farsi Smart Assistant and AVA are represented under the Farsio product family according to the Product Portfolio Source of Truth.

## Trust rules

The implementation does not fabricate:

- customer counts
- revenue
- market share
- funding
- partnerships
- awards
- exact launch dates
- testimonials
- unverified product statuses

Unconfirmed factual content uses STATUS TO CONFIRM or CONTENT TO CONFIRM where applicable.

## Deployment

This validation does not deploy or mutate the production website.

Production cutover remains a separate gated milestone.
