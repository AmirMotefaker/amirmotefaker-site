# Amir Motefaker Master Brand — Canonical Product State Matrix v1.0

> Status: Working canonical readiness ledger
>
> Date: 2026-08-22
>
> Source of record: `apps/web/content/product-portfolio.ts` on `strategy/portfolio-truth-reset-v7`
>
> Production impact: None

## Purpose

Keep product lifecycle, positioning, availability, evidence and CTA state synchronized across AmirMotefaker.ir.

This matrix is not a replacement for the code registry. It is a decision/readiness view derived from the current canonical product registry and must be updated when product teams confirm new facts.

## Lifecycle vocabulary

| State | Meaning | Public treatment |
|---|---|---|
| `live` | usable product with verified availability | may use Visit / Try / Request demo CTA |
| `development` | actively being built; some capability may exist | describe current implemented capability precisely; separate future directions |
| `discovery` | problem/solution exploration or early prototype | do not imply market availability |
| `concept` | portfolio concept without validated product state | keep clearly conceptual |
| `to-confirm` | registry contains positioning, but lifecycle has not been formally verified for master-brand publication | no definitive availability claim until confirmed |

## Current registry snapshot

| Product | Domain | Current registry state | Current master-brand positioning | Publication readiness | Required confirmation before definitive public state |
|---|---|---|---|---|---|
| PrimeSYS | PrimeSYS.ir | `to-confirm` | Enterprise Technology / Solutions | Partial | current lifecycle, active solution set, founder role, product/team evidence, product CTA |
| RestYar | RestYar.ir | `to-confirm` | FoodTech / RestaurantTech cloud SaaS | Partial | live availability, supported modules, buyer/user, demo route, current evidence |
| ShiftPay | ShiftPay.ir | `to-confirm` | Business Financial Technology | Low–Partial | legal/commercial state, current capabilities, target market, availability, compliance-safe claims, CTA |
| Farsio | Farsio.ir | `to-confirm` | Persian AI / LanguageTech platform | Partial | state of each sub-product, current availability, product-specific CTAs, current-vs-discovery boundaries |
| Fahmio | Fahmio.ir | `to-confirm` | Persian-first Adaptive Learning System | Partial | current implemented modules, target learner/buyer, deployment state, product CTA, evidence |
| Zobdino | Zobdino.ir | `development` | Persian AI Book Intelligence & Audio Summaries | Highest current clarity | implemented extractor/summary/audio scope, supported formats, public demo/waitlist state, evidence links |
| IdehJo | IdehJo.ir | `to-confirm` | Innovation Intelligence Platform | Partial | current feed/data state, source cadence, user availability, CTA, evidence |
| FilmTrack | FilmTrack.ir | `to-confirm` | Movie & TV Discovery Platform | Partial | current live feature set, community/account availability, monetization/public access state, CTA |
| LinkResan | LinkResan.ir | `to-confirm` | Link Management & Intelligence Platform | Partial | current production capabilities vs future analytics/QR/UTM direction, commercial CTA, evidence |

## Product-specific truth boundaries

### PrimeSYS

**Safe current framing:** multi-layer enterprise technology business spanning software, AI/computer vision, hardware and AIDC.

**Do not imply without evidence:** market leadership, unified platform availability, customer counts, deployment scale or productized availability of every listed capability.

### RestYar

**Safe current framing:** cloud management proposition for cafés, restaurants and food groups.

**Do not imply without evidence:** every listed module is live for every customer, AI automation is production-grade, multi-branch scale claims, traction or commercial availability.

### ShiftPay

**Safe current framing:** business financial technology direction covering transfers, payments, payouts and settlement workflows.

**Critical boundary:** it is not restaurant-only.

**Do not imply without evidence:** regulated financial status, banking capability, payment-gateway status, active settlement rails, customer funds handling or specific financial services.

### Farsio

**Safe current framing:** Persian AI/LanguageTech family.

**Known registry distinction:** Farsi Smart Assistant is described as a browser-extension product; AVA is explicitly described as Discovery in the current registry.

**Do not collapse:** live/current browser capabilities and discovery-stage extraction/translation/summarization/audio capabilities into one undifferentiated availability claim.

### Fahmio

**Safe current framing:** adaptive-learning system direction using diagnostic assessment, skill graph, learning twin, adaptive practice and AI teacher concepts/modules.

**Do not imply without evidence:** full curriculum coverage, school deployment, proven learning outcomes, production learner scale or every future module being live.

### Zobdino

**Registry state:** `development`.

**Safe current framing:** book-file ingestion/extraction, Persian summarization and audio-generation product under active development.

**Do not imply without evidence:** every ebook format is production-supported, complete catalog ingestion, rights to third-party book content, or universal extraction quality.

### IdehJo

**Safe current framing:** innovation-intelligence proposition around discovery, Persian translation and AI analysis.

**Do not imply without evidence:** guaranteed daily completeness, exhaustive global coverage, validated business-opportunity scoring or a live community unless confirmed.

### FilmTrack

**Safe current framing:** Persian-language movie/TV tracking and discovery platform direction with watchlist, tracking, ratings and community concepts/capabilities.

**Do not imply without evidence:** active community scale, catalog completeness, recommendation performance, paid availability or rights to copyrighted media assets.

### LinkResan

**Safe current framing:** current product is URL shortening, with a strategic direction toward broader link-management intelligence.

**Critical boundary:** analytics, QR, UTM, campaign tracking, smart redirects and deep links must be labeled current only when confirmed implemented; otherwise they remain future direction.

## CTA state rules

Until lifecycle is confirmed, master-brand pages should prefer neutral actions:
- `Explore product` for a product detail page;
- `Visit product` only when the external domain is verified usable;
- `Follow progress` for development/discovery states;
- `Request demo` only when a real demo process exists;
- `Join waitlist` only when an actual waitlist is implemented.

A CTA must describe a real action the visitor can complete today.

## Evidence pack required per product

Every product team should supply one Product Input Pack with:
1. canonical product name and domain;
2. lifecycle state and review date;
3. primary user and buyer;
4. one-line current truth;
5. current implemented capabilities;
6. unavailable/future capabilities;
7. current CTA and destination;
8. public demo/screenshots/repository where applicable;
9. metric claims with period and source;
10. founder relationship/role;
11. claims that must remain private;
12. product owner responsible for updates.

## Readiness tiers

### R0 — Not publishable as a definitive product state
Missing lifecycle or ownership evidence.

### R1 — Profile-ready
Name, one-line truth, category, lifecycle and safe CTA confirmed.

### R2 — Evaluation-ready
R1 plus audience, problem, solution, capabilities and current evidence.

### R3 — Proof-ready
R2 plus demos, artifacts, metrics/cases where relevant and reviewed bilingual content.

### R4 — Conversion-ready
R3 plus tested product-specific CTA, analytics and intent attribution.

No product should receive strong homepage prominence solely because its prose is more complete than its evidence.

## Immediate priorities

1. Preserve Zobdino's `development` distinction and gather evidence for R2/R3.
2. Resolve `to-confirm` lifecycle states for all other portfolio entries.
3. Separate Farsio sub-product states so AVA Discovery does not inherit availability from Farsi Smart Assistant.
4. Separate LinkResan's current URL-shortening truth from future Link Management & Intelligence capabilities.
5. Treat ShiftPay claims with an elevated legal/compliance review threshold.
6. Confirm FilmTrack's actual live/community/monetization state before final CTA design.

## Implementation rule

The UI must derive names, ordering and lifecycle labels from canonical data rather than hard-coded component maps. Content documents may explain the state, but they cannot silently override the registry.

## Next gate

Combine this matrix with the Page & Content Contracts to produce **Homepage Narrative & Wireframe Contract v1.0**, including:
- message hierarchy;
- product prominence rules;
- proof placement;
- thesis preview;
- audience routing;
- bilingual content slots;
- exact implementation acceptance criteria.