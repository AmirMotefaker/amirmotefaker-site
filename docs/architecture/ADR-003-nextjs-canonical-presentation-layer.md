# ADR-003 — Next.js is the canonical presentation layer

- Status: Accepted for v7 foundation
- Date: 2026-08-21
- Decision owner: AmirMotefaker Product & Brand Office

## Context

The repository contains a historical WordPress-native theme/plugin foundation and a modern Next.js application in `apps/web/`.

The Next.js application now contains the implemented founder experience, bilingual routes, portfolio model, migrated WordPress content, SEO routes, design system and CI build gates. The live domain still runs the legacy WordPress website.

Keeping both implementations as equal sources of truth creates ambiguity for contributors, automated agents, content owners and deployment planning.

## Decision

`apps/web/` is the canonical presentation implementation for the future AmirMotefaker.ir website.

WordPress is classified as:

1. the current production runtime until an explicitly authorized cutover;
2. a legacy content source for migration;
3. a rollback dependency until the new release is proven stable.

WordPress theme/plugin scaffolds are not to receive new presentation features unless a separate decision reverses this ADR.

## Consequences

- New UI, SEO, portfolio and founder work targets `apps/web/`.
- WordPress content must be inventoried and migrated with URL-preservation rules.
- Production remains untouched until backup, staging, redirect, QA and rollback gates pass.
- Earlier WordPress-native decisions remain as historical evidence and are superseded where they conflict with this decision.
- Hosting and content-authoring architecture remain separate decisions before cutover.

## Not decided here

- final hosting provider;
- whether WordPress remains as a headless CMS;
- production deployment timing;
- final portfolio membership;
- final founder or investor narrative.
