# AmirMotefaker.ir

Canonical source repository for the AmirMotefaker.ir founder-led technology portfolio website.

## Product direction

AmirMotefaker.ir is the trust, narrative and discovery layer for Amir Motefaker and his product portfolio. It answers three questions:

1. Who is Amir Motefaker?
2. What products is he building?
3. Why do these products belong in one portfolio?

It is not positioned as a generic personal blog, technology news portal, software agency or legal holding-company website.

## Canonical application

- Runtime: Next.js / React / TypeScript
- Application root: `apps/web/`
- Default locale: Persian (`fa`, RTL)
- Secondary locale: English (`en`, LTR)
- Current production: legacy WordPress website at `https://amirmotefaker.ir`
- Production cutover: not yet authorized or completed

WordPress source and migration material are historical inputs under `archive/` and `apps/web/content/legacy/wordpress/`; they are not the canonical presentation implementation.

## Repository map

- `apps/web/` — canonical website application
- `apps/web/content/` — founder, portfolio and migrated editorial content
- `docs/strategy/` — brand, portfolio and content strategy
- `docs/architecture/` — architecture decision records
- `docs/design/` — approved design and information architecture
- `docs/evidence/` — milestone validation evidence
- `docs/operations/` — staging, cutover and rollback planning
- `archive/` — historical WordPress material

## Current priority

`Portfolio Truth Reset v7.0` aligns the product portfolio, founder narrative, naming, lifecycle states and website information architecture before the next visual-design milestone.

## Quality gates

Run from `apps/web/`:

```bash
npm ci
npm run lint
npm run build
```

GitHub Actions also runs Foundation Gate and Preview Validation.

## Production safety boundary

Repository work does not authorize production deployment. Production mutation requires a separate release gate after verified backups, isolated staging restore, redirect and SEO validation, visual/accessibility/performance QA and rollback rehearsal.

Never commit credentials, private source documents, unsanitized database exports or production secrets.
