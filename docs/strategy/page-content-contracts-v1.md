# Amir Motefaker Master Brand — Page & Content Contracts v1.0

> Status: Foundation contract for implementation
>
> Date: 2026-08-22
>
> Depends on: Portfolio Truth Reset v7.0, Market & Reference Baseline v1.0, Audience & Decision Journey v1.0, Competitive & Reference Landscape v1.0, Website Information Architecture v7.0
>
> Production impact: None

## Purpose

Define the minimum content, evidence, CTA, SEO and governance contract for every primary page on AmirMotefaker.ir before visual implementation.

A page is considered implementation-ready only when its required fields are complete and its public claims pass the evidence rules below.

## Global content rules

1. **Canonical truth first.** Founder, brand and product names must come from the canonical registries.
2. **Current state before vision.** Current capabilities and availability must appear before roadmap or ambition.
3. **Evidence state is explicit.** Unsourced claims cannot be published as facts.
4. **Persian-first, English-complete.** `/fa` is primary; `/en` must be a complete evaluation experience, not a decorative translation.
5. **One primary job per page.** Each page must resolve a defined visitor decision and end in an appropriate next action.
6. **No generic conversion leakage.** Product users should route to product actions; investors, partners, collaborators and media should route to intent-specific contact paths.
7. **Legacy preservation.** Existing news equity remains preserved until redirect and migration evidence is approved.

## Evidence publication contract

| Evidence state | Meaning | Public rule |
|---|---|---|
| E0 | unknown / unsourced | never publish as fact |
| E1 | founder-confirmed | publish with review ownership |
| E2 | product-team-confirmed | publish after registry consistency check |
| E3 | public artifact / demo / repository / document | publish and link where useful |
| E4 | measured outcome with source and period | publish with metric context |
| E5 | independent verification | publish with source and permission where required |

Roadmap, ambition and market thesis may be published only when visibly labeled as forward-looking.

## Primary page contracts

### Home — `/{locale}`

**Primary job:** Establish who Amir is, what he builds, why the portfolio belongs together and where the visitor should go next.

**Required content:**
- canonical founder identity and role;
- concise founder-led technology portfolio thesis;
- active portfolio overview from canonical product registry;
- 2–4 proof signals with evidence state;
- a short thesis preview;
- selected first-hand Notes;
- audience-aware routes to Products, Thesis, About and Contact.

**Primary CTA:** `Explore products`.

**Secondary CTAs:** `Read thesis`, `About Amir`, intent-aware Contact entry.

**Must not contain:** unsupported traction claims, generic product counts detached from registry, roadmap presented as current capability.

**SEO/entity owner:** master founder/portfolio landing entity.

### Products — `/{locale}/products`

**Primary job:** Let visitors compare the active portfolio accurately.

**Required content per product card:**
- canonical display name;
- domain;
- category and industry;
- one-line current truth;
- lifecycle state;
- availability / CTA state;
- explicit master-brand relationship.

**Primary CTA:** product detail.

**Must not contain:** products with unresolved active/inactive classification as if confirmed live products.

### Product Detail — `/{locale}/products/{slug}`

**Primary job:** Help a visitor decide whether the product is relevant now and what action is appropriate.

**Required sections:**
1. canonical identity and one-line truth;
2. current lifecycle and availability;
3. target audience / user / buyer distinction;
4. problem;
5. current solution;
6. current capabilities;
7. evidence / demo / repository / product link where applicable;
8. roadmap or future directions, visually separated from current capabilities;
9. Amir's relationship to the product, if verified;
10. related products only when the relationship is meaningful.

**CTA mapping:**
- live → `Visit / Try / Request demo`;
- development → `Follow progress / Join waitlist / Request preview` when real;
- discovery → `Follow progress` or no conversion CTA;
- concept → no availability claim;
- to-confirm → must not expose a definitive availability CTA.

**SEO owner:** canonical product entity page on the master site; product domain remains the acquisition/product authority when live.

### Thesis — `/{locale}/thesis`

**Primary job:** Explain the recurring beliefs and selection logic behind the portfolio.

**Required content:**
- portfolio thesis;
- what kinds of problems Amir chooses to build for;
- recurring capabilities across products;
- market or technology beliefs labeled as thesis when not proven facts;
- links from each belief to product or note evidence.

**Primary CTA:** `Explore products shaped by this thesis`.

**Must not become:** a manifesto made only of untestable claims.

### Notes — `/{locale}/notes`

**Primary job:** Demonstrate first-hand thinking, decisions, experiments and evidence over time.

**Required taxonomy:**
- product decisions;
- AI / technology field notes;
- market observations;
- experiments and learnings;
- case evidence where publishable.

**Article contract:** author, publish date, updated date where relevant, clear first-hand angle, sources when external facts are used, related thesis/product links.

**Must not become:** commodity technology-news aggregation.

### About — `/{locale}/about`

**Primary job:** Verify Amir as the canonical founder/person entity.

**Required content:**
- approved short biography;
- longer founder narrative;
- verified roles and chronology;
- operating principles;
- selected evidence-backed achievements;
- canonical profiles and `sameAs` destinations;
- link to Resume / professional timeline.

**Structured data:** `Person` and `ProfilePage` only when visible content and structured claims match.

**Primary CTA:** context-dependent collaboration/contact route.

### Resume — `/{locale}/resume`

**Primary job:** Provide structured professional proof without overloading About.

**Required content:** verified chronology, roles, companies/products, selected measurable outcomes, credentials only when sourced.

**Navigation role:** secondary proof route, not primary top-level navigation.

### Contact — `/{locale}/contact`

**Primary job:** Qualify and route high-intent conversations.

**Required intent choices:**
- investor / strategic conversation;
- partnership / distribution;
- product / commercial inquiry;
- collaboration / specialist talent;
- media / speaking.

**Minimum form logic:** intent, relevant product where applicable, short context, reply channel, privacy note.

**Must not do:** treat all inquiries as a single undifferentiated `Contact me` event.

### Legacy News — `/{locale}/news/*`

**Primary job:** Preserve historical search and content equity during migration.

**Rules:**
- retain original dates;
- visibly distinguish legacy news from current Notes editorial strategy;
- do not promote it as the future master-brand publishing proposition;
- redirects only after approved URL mapping and migration validation.

## Homepage sequencing contract

The default decision sequence is:

```text
Founder identity
→ Portfolio thesis
→ Active products
→ Evidence / proof
→ First-hand thinking
→ Audience-aware action
```

The visual design may vary, but it must not invert the sequence into biography-only or product-card-only presentation.

## Bilingual contract

Every primary page requires:
- Persian title, description and CTA;
- English title, description and CTA;
- matching canonical entity and product state;
- language-specific metadata;
- hreflang pair only when both language pages are materially complete.

Do not ship a thin English page simply to satisfy URL symmetry.

## SEO ownership rules

- Home owns the founder-led portfolio proposition.
- About owns the canonical person/entity explanation.
- Product pages own master-brand product summaries, not transactional product keywords already better served by product domains.
- Thesis owns portfolio logic and authored strategic beliefs.
- Notes own first-hand topical authority.
- Legacy News retains historic URLs until migration evidence supports redirects.

## Analytics contract

At minimum instrument:
- Home → Products;
- Home → Thesis;
- Home/Product → product-domain CTA;
- Product detail → evidence/demo;
- Contact intent selected;
- qualified inquiry submitted;
- About/Resume proof-path engagement;
- language switch;
- Notes → Product / Thesis assisted navigation.

Raw pageviews are not a sufficient success metric.

## Implementation gate

A page may enter final UI implementation only when:
1. its content owner is known;
2. required canonical fields are populated;
3. all public claims have evidence state ≥ E1, or are explicitly labeled hypothesis/roadmap;
4. Persian and English completeness is defined;
5. CTA matches actual product or conversation availability;
6. no unresolved naming or lifecycle contradiction exists.

## Next gate

Use the **Canonical Product State Matrix v1.0** as the product-specific readiness ledger. After both contracts are accepted, proceed to **Homepage Narrative & Wireframe Contract v1.0** and then implementation slices.