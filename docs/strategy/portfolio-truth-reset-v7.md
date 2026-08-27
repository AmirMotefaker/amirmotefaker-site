# AmirMotefaker Portfolio Truth Reset v7.0

> Status: Working source-of-truth reset
>
> Date: 2026-08-21
>
> Production impact: None
>
> Final narrative: Open pending product-team inputs

## Objective

Create one verified source of truth for AmirMotefaker.ir before the final brand and visual-design phase.

The website must present Amir Motefaker as a technology-focused founder and product builder, a coherent founder-led technology portfolio, every product with correct naming/category/stage/evidence, and a clear relationship between the master brand and independent product brands.

## Master-brand foundation

- Working category: **Founder-led Technology Portfolio**
- Working architecture: **Endorsed House of Brands**
- Primary roles: trust, founder narrative, portfolio discovery, evidence, and qualified entry points for investors, partners, talent and media
- Not positioned as: generic personal blog, technology-news portal, software agency or unverified legal holding company

These are foundation decisions, not legal-entity claims.

## Active product-team inputs

| Product | Working category | Truth status | Required correction/input |
|---|---|---|---|
| LinkResan | Digital presence and business platform | Team input pending | ICP, verified capabilities, stage, traction |
| Farsio | Persian AI products | Team input pending | NavisYar/AvaYar architecture and public promise |
| Fahmio | Adaptive Learning System | Critical correction required | Remove book-summary positioning; define AI Teacher/Learning Twin |
| Zobdino | AI Book Intelligence | Missing from canonical portfolio UI | Connect existing source; validate formats, audio and content pipeline |
| FilmTrack | Movie Intelligence Platform | Naming/positioning correction required | Normalize FilmTrack; verify stage and data proposition |
| IdehJo | Idea Validation Platform | Naming/marketplace definition required | Normalize IdehJo; verify marketplace/community scope |

## Assets pending portfolio classification

The repository and earlier portfolio material also contain:

| Asset | Current state | v7 rule |
|---|---|---|
| PrimeSYS | Presented as a canonical product and founder role | Preserve until owner classification |
| RestYar | Presented as a canonical product | Preserve until owner classification |
| ShiftPay | Presented as a canonical product | Preserve until owner classification |
| Football Fan App | Exists in a secondary product source | Do not publish as canonical without confirmation |

Allowed classifications: `active`, `operating-company`, `incubating`, `paused`, `archived`, `not-portfolio`.

No asset may be silently deleted or presented as active while unresolved.

## Confirmed repository contradictions

### P0 — Product truth

1. Fahmio is described with audio-book-summary language that belongs to Zobdino.
2. Zobdino has an existing source file but is absent from the canonical portfolio model used by the UI.
3. The public UI claims eight products before current portfolio classification is resolved.

### P1 — Naming

1. `FilmTark` must become `FilmTrack` on public surfaces.
2. `IdeaJoo` and other variants must normalize to `IdehJo` unless another spelling is approved.
3. Product names are duplicated across component maps and content models.

### P1 — Architecture and operations

1. README described the public repository as private.
2. README presented WordPress scaffolds as canonical although Next.js is implemented.
3. WordPress-native and Next.js decisions coexisted without a superseding ADR.
4. The live WordPress site and future Next.js site are not release-aligned.

### P1 — SEO and content

1. The live site is indexed primarily as a technology-news publication.
2. The future experience is a founder portfolio.
3. URL inventory, redirect ownership and per-page metadata validation are incomplete.

## Canonical Brand Registry requirement

The next implementation must replace duplicated name/order maps with one typed registry containing:

```yaml
id:
slug:
name:
name_fa:
canonical_domain:
relationship_to_master_brand:
portfolio_classification:
lifecycle_stage:
category_fa:
category_en:
one_line_truth_fa:
one_line_truth_en:
primary_audience:
verified_capabilities:
proof_links:
website:
github:
claim_status:
claim_owner:
last_verified_at:
```

Public claims may use only `verified` and `founder-confirmed`. `estimated`, `team-draft` and `unknown` are internal-only.

## Founder narrative framework

The final website must answer, in order:

1. Who is Amir?
2. What does he believe about technology and products?
3. What has he built or helped build?
4. Why do these products belong together?
5. What is being built now?
6. How can a partner, investor, team member or user engage?

Final narrative remains open until the Founder Fact Base, product-team inputs, portfolio classifications and public proof points are approved.

## Website IA v7 hypothesis

Primary navigation:

```text
Home · Portfolio · Thesis · Notes · About · Contact
```

| Route | Job |
|---|---|
| `/fa` and `/en` | Explain founder, portfolio and proof quickly |
| `/[locale]/portfolio` | Present classified products and stages |
| `/[locale]/portfolio/[slug]` | Bridge master-brand trust to product truth |
| `/[locale]/thesis` | Explain portfolio selection and technology beliefs |
| `/[locale]/notes` | Publish evidence-led field notes, not commodity news |
| `/[locale]/about` | Present verified founder narrative |
| `/[locale]/contact` | Route investor, partner, talent, media and general intents |

Existing `/products` and `/news` routes require a compatibility/redirect decision and must not be removed without an SEO migration map.

## Visual-design principles

The experience should be founder-led, precise, evidence-backed, Persian-first, globally credible, editorial/product-oriented, calm and highly legible. It must avoid generic neon/AI styling.

The signature interaction should explain the relationship between founder thesis, shared capabilities and products rather than act as decoration.

## SEO reset principles

1. Preserve valuable legacy URLs through an explicit inventory.
2. Move from commodity news to founder insight and product proof.
3. Generate canonical and hreflang metadata per page.
4. Connect `Person`, `Organization`, `WebSite`, `Article` and product structured data correctly.
5. Build authority around verified founder experience and portfolio categories.
6. Never publish unverified traction, awards, partnerships or market claims.

## Execution gates

### Gate A — Truth

- [ ] Six Product Input Packs received
- [ ] PrimeSYS classification approved
- [ ] RestYar classification approved
- [ ] ShiftPay classification approved
- [ ] Founder Fact Base approved
- [ ] Canonical Brand Registry implemented

### Gate B — Strategy

- [ ] Master-brand positioning approved
- [ ] Portfolio thesis approved
- [ ] Audience priority approved
- [ ] Founder narrative approved
- [ ] Investor narrative boundary approved

### Gate C — Experience

- [ ] IA v7 validated
- [ ] Content model implemented
- [ ] Distinct design directions reviewed
- [ ] Selected direction converted to a design system
- [ ] Responsive prototype tested

### Gate D — Release safety

- [ ] WordPress files/database backups verified
- [ ] Isolated staging restore verified
- [ ] URL inventory and redirects verified
- [ ] Accessibility/performance/SEO QA passed
- [ ] Rollback rehearsal passed
- [ ] Explicit production authorization received

## Immediate implementation order

1. Create the typed Canonical Brand Registry.
2. Correct Fahmio/Zobdino truth and FilmTrack/IdehJo naming.
3. Classify unresolved portfolio assets without deleting history.
4. Refactor Home and Portfolio to use the registry.
5. Build IA v7 while retaining compatibility routes.
6. Produce two or three genuinely distinct visual directions.
7. Validate content, design and conversion paths.
8. Prepare staging, migration and release gates.

## Definition of done

v7.0 is complete when every public portfolio claim comes from one typed, reviewed registry; every product has a confirmed classification and stage; founder and portfolio narratives are approved; and the new experience can be tested in staging without changing Production.
