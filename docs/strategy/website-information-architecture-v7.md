# Amir Motefaker Master Brand — Website Information Architecture v7.0

> Status: Strategic IA decision for implementation planning
>
> Date: 2026-08-22
>
> Inputs: Portfolio Truth Reset v7.0, Market & Reference Baseline v1.0, Audience & Decision Journey v1.0, Competitive & Reference Landscape v1.0
>
> Production impact: None
>
> Decision boundary: URL cutover, redirects, production navigation and WordPress decommissioning remain gated behind staging QA and migration approval

## Purpose

Define the canonical information architecture for AmirMotefaker.ir so the website functions as the trust and routing layer for the Amir Motefaker technology portfolio.

The architecture must answer, in order:

1. Who is Amir?
2. What is he building?
3. Why do these products belong together?
4. What is proven today?
5. Which path is relevant to this visitor?
6. What should the visitor do next?

The site is not a corporate conglomerate homepage, a resume archive or a general technology-news publication. It is a **founder-led technology portfolio** with product routing, evidence and first-hand thinking.

## IA principles

1. **Founder → Thesis → Products → Proof → Action** is the primary decision flow.
2. Product acquisition remains on product-owned destinations where available; AmirMotefaker.ir transfers trust and routes qualified intent.
3. Every public claim must inherit an evidence state from the canonical content model.
4. Persian is the primary editorial language; English must be a complete decision experience, not decorative translation.
5. Navigation labels must describe user jobs, not internal organization.
6. Legacy content remains accessible until redirects are validated; legacy structure does not dictate the new navigation.
7. Founder identity, product identity and article authorship must form one consistent entity graph for users, search engines and AI discovery systems.
8. Unavailable, experimental or provisional products must never appear equivalent to live products.

## Canonical top-level architecture

```text
/{locale}
├── /products
│   └── /products/{product-slug}
├── /thesis
├── /notes
│   └── /notes/{slug}
├── /about
├── /resume
├── /contact
└── /news               [legacy archive; not primary navigation]
    └── /news/{slug}
```

Supported locale roots:

- `/fa` — primary Persian experience
- `/en` — English experience

The root `/` should resolve by an explicit locale strategy defined during implementation. It must not create indexable duplicate content.

## Primary navigation

### Persian

1. محصولات
2. دیدگاه
3. یادداشت‌ها
4. درباره من
5. همکاری / تماس

### English

1. Products
2. Thesis
3. Notes
4. About
5. Contact

`Resume / مسیر حرفه‌ای` remains an important utility route but should not compete with the five primary navigation jobs. It belongs under About and may also appear in the header utility layer or footer.

`News / اخبار` moves out of primary navigation and becomes a clearly labeled legacy archive.

## Homepage contract

### URL

- `/fa`
- `/en`

### Primary audience jobs

- establish founder identity quickly;
- communicate portfolio coherence;
- route visitors to products, thesis or founder proof;
- expose evidence before conversion;
- support multiple audience intents without becoming generic.

### Recommended section order

#### 1. Identity Hero

Must answer in one viewport:

- Amir Motefaker is a founder / product builder / technology operator;
- the site represents a portfolio of technology products;
- what recurring problem-space or operating thesis connects the work.

Primary CTA: `Explore products / مشاهده محصولات`

Secondary CTA: `Read the thesis / دیدگاه`

Utility CTA: `About / داستان و سابقه`

Avoid:

- vague inspirational slogans without portfolio meaning;
- unsupported scale claims;
- making PrimeSYS the sole identity of the master brand;
- product counts that are not derived from the canonical registry.

#### 2. Portfolio Snapshot

Show only confirmed public products from the canonical registry.

Each card must expose:

- canonical name;
- category;
- target audience or problem;
- current lifecycle / availability;
- one-line verified truth;
- appropriate CTA.

Product cards are routing objects, not miniature landing pages.

#### 3. Portfolio Thesis Preview

Explain why the portfolio is coherent. The homepage should surface three to five principles or recurring beliefs and link to `/thesis` for depth.

Examples of thesis dimensions to validate:

- Persian-first AI and software experiences;
- automation of high-friction knowledge and operating workflows;
- product systems that turn complexity into usable decision support;
- independent brands sharing founder judgment, technology leverage and operating infrastructure.

These are strategic hypotheses until founder-approved language is locked.

#### 4. Proof Layer

Use evidence types rather than vanity counters.

Candidate proof modules:

- selected product demos;
- public repositories;
- verified operating outcomes;
- dated milestones;
- certifications or first-party records;
- selected case evidence;
- founder career evidence.

No metric appears without definition, period and source ownership.

#### 5. Notes / Thinking Preview

Surface authored first-hand material, not commodity news.

Preferred content:

- product decisions;
- market analysis;
- experiments;
- architecture or AI implementation lessons;
- operator notes;
- postmortems and case studies.

This section establishes repeat-value and topical authority.

#### 6. Audience Routing / Qualified CTA

Do not end with one generic `Contact me` action.

Provide intent-aware routes for:

- strategic / investor conversation;
- partnership;
- product inquiry;
- collaboration / talent;
- media / speaking.

The final form design is a later implementation decision, but the IA must preserve distinct intent states.

## Products index

### URL

- `/fa/products`
- `/en/products`

### Job

Allow a visitor to understand and compare the active portfolio without decoding internal brand history.

### Required product attributes

Every product object must include:

- canonical slug;
- Persian display name;
- English display name;
- domain / destination URL;
- category;
- industry / problem-space;
- primary audience;
- one-line current truth;
- lifecycle state;
- availability state;
- evidence state;
- CTA type;
- portfolio relationship;
- last reviewed date.

### Product state taxonomy

Use explicit states such as:

- `live`
- `beta`
- `private-beta`
- `development`
- `discovery`
- `paused`
- `legacy`

Public UI labels may be localized, but source values must remain controlled vocabulary.

### Sorting principle

Default ordering must be strategic and canonical, not alphabetical and not derived from visual convenience.

Recommended future sort inputs:

1. active strategic priority;
2. lifecycle / availability;
3. audience relevance;
4. founder-approved ordering.

The canonical registry must own this order.

## Product detail template

### URL

`/{locale}/products/{product-slug}`

### Job

Answer whether this product is relevant, credible and usable now, then route the visitor to the correct destination.

### Required content sequence

1. Product identity and state
2. Problem / audience
3. Current solution
4. Current capabilities
5. Evidence / demo / artifacts
6. What is not available yet
7. Relationship to Amir Motefaker portfolio
8. Product-specific CTA
9. Related notes or proof

### Claim boundary

Roadmap items must be visually and semantically separated from current capabilities.

Never use future capability language in metadata or structured data as though it were live.

### CTA examples by state

- live → `Visit product`, `Try now`, `Request demo`
- beta → `Join beta`, `Request access`
- development → `Follow progress`, `Partner with the team`
- discovery → generally no acquisition CTA; expose only if public positioning is intentional
- paused / legacy → clearly label status and route to relevant alternatives where applicable

## Thesis

### URL

- `/fa/thesis`
- `/en/thesis`

### Job

Explain the founder's recurring beliefs, selection logic and portfolio coherence.

### Content contract

The page should contain:

- portfolio thesis statement;
- recurring problem classes;
- product selection principles;
- shared technology / operating leverage where verified;
- what the portfolio deliberately does not pursue;
- current hypotheses clearly labeled as hypotheses;
- links to products and notes that provide evidence.

### SEO role

This is a first-party entity and expertise page, not a keyword-stuffed market landing page.

It should strengthen topical relationships between Amir, the portfolio and authored work.

### Persian label

`دیدگاه` is the current preferred navigation label because it is understandable and does not overstate certainty. Alternatives such as `تز`, `تز سرمایه‌گذاری`, or `نگاه` remain editorial options but should not be changed casually after launch.

## Notes

### URL

- `/fa/notes`
- `/en/notes`
- `/{locale}/notes/{slug}`

### Job

Show first-hand thinking over time and compound authority.

### Editorial categories

Use a restrained taxonomy such as:

- Product
- AI
- Engineering
- Market
- Operating
- Portfolio

Do not recreate a broad technology-news taxonomy.

### Article contract

Every Note should have:

- clear author;
- publication date;
- updated date where applicable;
- category;
- first-hand thesis or observation;
- source links where factual claims require them;
- related product or thesis links where relevant;
- canonical URL;
- localized alternate only when a real translation exists.

### Structured data

Use appropriate `Article` / `BlogPosting` markup with Amir as author where true, connected to the canonical Person entity.

## About

### URL

- `/fa/about`
- `/en/about`

### Job

Serve as the canonical founder entity page.

### Required content

- approved short biography;
- longer founder story;
- operating principles;
- verified career milestones;
- selected achievements with evidence state;
- current roles;
- canonical profile links;
- links to Resume, Products, Thesis and Contact.

### Entity role

This page should be the primary target for `Person` / `ProfilePage` structured data.

Names, dates and roles must be sourced from the Founder Fact Base before final publication.

## Resume

### URL

- `/fa/resume`
- `/en/resume`

### Job

Provide chronological professional evidence for high-intent evaluation without forcing the whole site into resume mode.

### Content contract

- roles and organizations;
- dates;
- responsibilities only where useful;
- selected outcomes;
- credentials and certifications where verified;
- no inflated title normalization;
- machine-readable print/export support may be added later.

The Resume is subordinate to the master-brand narrative but critical proof for investors, partners, media and senior collaborators.

## Contact and intent routing

### URL

- `/fa/contact`
- `/en/contact`

### Job

Qualify intent before collecting a generic message.

### First-step intent taxonomy

1. Strategic / investor conversation
2. Partnership
3. Product inquiry
4. Collaboration / talent
5. Media / speaking
6. Other

### Minimum routing fields

Shared:

- name;
- email;
- organization, where relevant;
- intent;
- message.

Contextual fields may appear conditionally:

- relevant product;
- partnership type;
- collaboration discipline;
- media deadline;
- company / fund / role;
- preferred next step.

### Privacy and expectation

The page must explain how submitted information is used and avoid promising response times that operations cannot support.

## Legacy News archive

### URLs

Existing news URLs remain available during migration.

New canonical archive surface:

- `/fa/news`
- `/en/news` only where English legacy content actually exists

### Navigation role

Legacy News is excluded from primary navigation.

It may be accessible through:

- footer;
- archive links;
- search;
- existing indexed URLs.

### Presentation

Label clearly as an archive of earlier technology publishing so users do not mistake it for the current Notes strategy.

### Migration rule

No redirect or deletion occurs until:

- URL inventory is complete;
- traffic and backlink value are reviewed;
- destination equivalence is validated;
- redirect map is staged;
- crawl and regression tests pass;
- rollback plan exists.

## Footer architecture

Recommended groups:

### Explore

- Products
- Thesis
- Notes
- About

### Work with Amir

- Contact
- Partnership
- Collaboration
- Media / speaking

These may route into preselected contact intents rather than separate top-level pages.

### Evidence & utility

- Resume
- GitHub
- LinkedIn / canonical social profiles
- Legacy News archive

### Legal / system

- Privacy
- language switch
- sitemap where useful

Only real legal pages should be linked; do not generate boilerplate legal claims without review.

## Internal linking rules

### Home

Must link to Products, Thesis, About, Notes and Contact.

### Product detail

Must link back to Products and optionally to relevant Notes / Thesis evidence.

### Note

Should link to related product, thesis topic and author entity where relevant.

### About

Must link to Resume, Products and Contact.

### Thesis

Must connect claims to products and Notes that demonstrate them.

The goal is a visible knowledge graph, not isolated content silos.

## SEO and entity boundaries

### Canonical entity pages

- Person / founder: `/about`
- Portfolio overview: `/products`
- Individual product: `/products/{slug}` unless canonical ownership belongs solely to the product domain; implementation must define canonical behavior carefully
- Thought model: `/thesis`
- Authored knowledge: `/notes/{slug}`

### hreflang

Persian and English alternates should only be declared when equivalent pages exist.

Do not point unrelated Persian and English content at each other for the sake of symmetry.

### Structured data priorities

1. Person / ProfilePage on About
2. WebSite and WebPage primitives
3. BreadcrumbList on hierarchical pages
4. Article / BlogPosting on Notes
5. product-related structured data only when schema semantics match the actual page and claims

### Naming integrity

Structured data, metadata, visible headings and canonical registry must use the same approved product and founder names.

## Search and on-site discovery

Site search is optional for the first implementation phase. It should not delay the core IA.

If added later, search must cover:

- Notes;
- products;
- legacy News where preserved;
- founder / resume content where useful.

Search analytics should distinguish legacy-news discovery from current strategic content.

## Analytics event model

The IA requires intent-aware instrumentation.

Recommended event families:

- `nav_select`
- `product_view`
- `product_cta`
- `proof_open`
- `note_view`
- `thesis_engage`
- `contact_intent_select`
- `contact_submit`
- `external_product_visit`
- `resume_view`

Each event should include locale, source page, destination or product where applicable.

Do not ship numeric business targets until baseline measurement exists.

## Implementation sequencing

### Phase 1 — Content model and route readiness

- finalize product registry fields and strategic order;
- build Founder Fact Base;
- define evidence-state mechanics;
- lock locale routing rules;
- map current routes against v7 routes.

### Phase 2 — Core IA implementation in Next.js

- Home;
- Products index;
- Product detail template;
- Thesis;
- Notes index/detail;
- About;
- Resume;
- Contact intent routing.

### Phase 3 — SEO and entity layer

- metadata system;
- canonical rules;
- hreflang;
- breadcrumbs;
- Person/ProfilePage;
- Article structured data;
- sitemap and robots validation.

### Phase 4 — Legacy migration preparation

- complete URL inventory;
- classify legacy pages;
- redirect design;
- content preservation decisions;
- Search Console baseline;
- staging crawl.

### Phase 5 — Production cutover gate

Only after:

- staging visual QA;
- bilingual content QA;
- accessibility QA;
- automated build/lint/type checks;
- structured-data validation;
- redirect tests;
- analytics verification;
- backup confirmation;
- rollback rehearsal.

## Decisions locked by IA v7

1. AmirMotefaker.ir is the portfolio trust layer, not the primary acquisition site for every product.
2. The primary navigation is Products, Thesis, Notes, About and Contact.
3. Resume is a secondary proof route, not a top-level narrative pillar.
4. Legacy News leaves primary navigation but remains preserved during migration.
5. Product detail pages explicitly separate current capability from roadmap.
6. Contact architecture preserves visitor intent before conversion.
7. About becomes the canonical founder entity page.
8. Notes replace commodity news as the future editorial authority strategy.
9. Internal linking must expose the relationship among founder, thesis, products, proof and authored work.
10. Production URL changes remain blocked until a measured migration gate passes.

## Decisions still open

- final founder positioning statement and hero copy;
- approved Persian translation choices for selected labels;
- exact active product set and strategic order after final Product Input Packs;
- public visibility of investor-specific CTA;
- exact Product detail canonical strategy when a separate product domain exists;
- final contact routing operations and CRM destination;
- final visual design system;
- final legacy redirect map;
- numeric conversion targets.

## Next gate

Build **Page & Content Contracts v1.0** and a **Canonical Product State Matrix**.

Those artifacts should translate this IA into implementation-ready requirements for each route and close the remaining ambiguity around product lifecycle, CTA, evidence, SEO ownership and portfolio priority before major UI work begins.
