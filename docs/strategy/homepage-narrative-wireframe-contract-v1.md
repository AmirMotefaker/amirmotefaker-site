# Amir Motefaker Master Brand — Homepage Narrative & Wireframe Contract v1.0

> Status: Foundation contract for visual implementation
>
> Date: 2026-08-22
>
> Depends on: Portfolio Truth Reset v7.0, Audience & Decision Journey v1.0, Competitive & Reference Landscape v1.0, Website Information Architecture v7.0, Page & Content Contracts v1.0, Canonical Product State Matrix v1.0
>
> Production impact: None

## Purpose

Define the exact narrative order, information density, proof requirements and conversion roles of the AmirMotefaker.ir homepage before final UI implementation.

The homepage is not a biography page, a product directory or a generic personal-brand landing page. It is the front door to a founder-led technology portfolio.

## Core homepage job

Within the first meaningful scroll, a qualified visitor should be able to answer:

1. Who is Amir Motefaker?
2. What kind of technology work does he do?
3. What products are currently part of the active portfolio?
4. Why do these products belong together?
5. What evidence supports the founder and portfolio story?
6. What should this visitor do next?

## Narrative spine

The homepage must preserve this sequence:

```text
IDENTITY
→ THESIS
→ PORTFOLIO
→ PROOF
→ THINKING
→ ACTION
```

Visual experimentation is allowed. Narrative inversion is not.

## Section 1 — Hero / Founder identity

### Visitor question

Who is Amir, and why should I care?

### Required content

- canonical founder name;
- concise role statement;
- one founder-led technology portfolio proposition;
- one short explanatory paragraph;
- primary and secondary CTA;
- one visual system that implies a portfolio rather than a single product.

### Recommended message architecture

**Eyebrow:** Founder / Product / Technology

**Headline job:** communicate the transformation from technology to products and from products to a coherent portfolio.

**Supporting copy job:** establish operating depth across product building, platforms, AI/data and business systems without turning the hero into a resume.

### CTA hierarchy

Primary: `Explore products`

Secondary: `Read the thesis`

Tertiary text route: `About Amir`

### Proof rule

Do not place unsupported numbers in the hero. Metrics may appear only when evidence state is defined.

### Avoid

- generic “entrepreneur / visionary / innovator” language;
- a wall of job titles;
- product logos without explanatory context;
- investor-specific language above the fold;
- abstract AI imagery that does not connect to real products.

## Section 2 — Portfolio thesis preview

### Visitor question

Why do these products belong together?

### Required content

A concise 2–4 point thesis showing the recurring logic behind the portfolio. The thesis should explain patterns such as:

- technology applied to operational friction;
- AI as an enabling layer rather than decoration;
- Persian-first or local-market advantage where relevant;
- products built around measurable user or business decisions;
- reusable technology, data or distribution leverage where evidence exists.

### CTA

`Read the full thesis`

### Visual role

Use a structured belief / principle system, not a manifesto block.

## Section 3 — Active portfolio

### Visitor question

What is Amir building now?

### Source of truth

Canonical brand registry and Canonical Product State Matrix only.

### Public inclusion rule

Homepage portfolio cards may include only products with confirmed active classification.

Current active registry set:

1. LinkResan
2. Farsio
3. Fahmio
4. Zobdino
5. FilmTrack
6. IdehJo

PrimeSYS, RestYar and ShiftPay remain outside the confirmed active grid until their classification is resolved.

### Card contract

Each card must include:

- canonical display name;
- category / industry;
- current one-line product truth;
- lifecycle state;
- appropriate state-aware CTA;
- no roadmap language presented as current capability.

### Ordering rule

Use registry order unless a later founder-approved priority model explicitly overrides it. Do not sort alphabetically or by visual convenience.

### CTA

Primary per-card route: product detail.

Section-level CTA: `View all products`.

## Section 4 — Proof / operating credibility

### Visitor question

What makes this founder and portfolio credible?

### Required proof types

Use 3–5 proof modules selected from:

- verified founder chronology;
- sourced measurable outcomes;
- public product artifacts;
- repositories / technical evidence where useful;
- current live product links;
- case evidence;
- externally verifiable credentials or recognition.

### Evidence rule

Every proof element must be E1 or higher. Numeric outcomes require E4 context: definition, source and time period.

### Design rule

Proof should feel inspectable. Prefer links, dates, artifact references and concise context over decorative counters.

## Section 5 — Builder journey / founder context

### Visitor question

What kind of operator is Amir?

### Role

Provide enough career context to explain judgment and continuity without duplicating the About or Resume pages.

### Required structure

- short chronology or selected milestones;
- recurring operating themes;
- link to full About / Resume proof path.

### Avoid

- autobiographical over-expansion;
- unsourced “30+ years” or similar metrics unless evidence state is recorded;
- a timeline that overwhelms the product story.

## Section 6 — First-hand thinking / Notes

### Visitor question

How does Amir think about technology, products and markets?

### Content source

Current Notes strategy only. Legacy technology news must not define this module.

### Display contract

Show 2–3 recent or strategically selected first-hand Notes with:

- title;
- publication date;
- clear topic / decision angle;
- optional related product or thesis link.

### CTA

`Read all notes`.

### Avoid

- generic industry-news cards;
- scraped or rewritten news;
- posts without clear authorship or first-hand angle.

## Section 7 — Audience-aware action

### Visitor question

What is the right next step for me?

### Required routing

The final conversion layer should expose a limited set of high-intent routes:

- investor / strategic conversation;
- partnership / distribution;
- product inquiry;
- collaboration / specialist talent;
- media / speaking.

### Primary action model

The homepage may use one primary CTA plus contextual intent cards. It must not collapse every audience into a single generic `Contact me` button.

## Header contract

Primary navigation:

- Products
- Thesis
- Notes
- About
- Contact

Secondary utility:

- language switch;
- optional Resume access through About / footer, not primary navigation.

The header must not include Legacy News as a primary destination.

## Footer contract

Minimum footer content:

- canonical founder identity;
- primary navigation repeat;
- active product links or product index link;
- canonical social / GitHub profiles when verified;
- language switch;
- legal / privacy links when implemented;
- legacy archive access only as a secondary utility.

## Persian / English behavior

The homepage is one information architecture with two complete editorial experiences.

### Persian

- primary editorial version;
- RTL-native composition;
- Persian-first wording rather than literal translation;
- product names retain canonical brand spelling where appropriate.

### English

- complete evaluation experience;
- LTR-native layout;
- concise international framing;
- no Persian-only evidence or claims unless the English page explains them adequately.

## Responsive wireframe priority

On mobile, preserve decision sequence rather than desktop ornamentation:

1. identity;
2. hero CTA;
3. thesis preview;
4. active products;
5. proof;
6. founder context;
7. Notes;
8. contact routing.

Decorative product-orbit or matrix visuals must collapse gracefully and must not push the core proposition below the first useful viewport.

## Homepage analytics contract

Instrument at minimum:

- hero → Products;
- hero → Thesis;
- hero → About;
- product card impressions by slug;
- product card → detail;
- product detail / homepage → external product domain;
- proof artifact clicks;
- Note clicks;
- contact intent selection;
- language switch.

Do not optimize the homepage around raw CTA clicks without intent and downstream quality.

## Accessibility and performance constraints

- semantic heading hierarchy;
- keyboard-operable navigation and cards;
- visible focus states;
- meaningful link labels;
- no critical message delivered only through animation;
- decorative motion respects reduced-motion preference;
- hero media cannot materially delay LCP;
- text contrast must meet WCAG AA;
- RTL/LTR behavior must be tested independently.

## Implementation acceptance criteria

The homepage may enter final visual implementation when all of the following are true:

1. active product set matches the canonical registry;
2. each visible product has an approved current-state summary and lifecycle;
3. hero statement avoids unverified claims;
4. at least three homepage proof elements have explicit evidence states;
5. Persian and English hero / thesis / product copy are materially complete;
6. Notes module has first-hand content or an intentional pre-launch empty-state strategy;
7. contact routes match the approved intent architecture;
8. legacy News is not presented as the primary editorial proposition;
9. mobile sequence preserves identity → thesis → portfolio → proof → action;
10. no production deployment or cutover is bundled into the design implementation.

## Design direction guardrails

The target experience should feel:

- founder-led, not corporate-anonymous;
- premium and technical, not luxury-for-luxury's-sake;
- editorial enough to support thought leadership;
- product-system oriented rather than portfolio-gallery oriented;
- evidence-forward rather than self-promotional;
- distinctive in Persian while internationally legible.

Avoid cloning any reference site's visual language. Reference sites inform operating patterns, not art direction.

## Next gate

Create **Homepage Copy Deck v1.0** with Persian-first and English-complete candidate copy for:

- hero;
- thesis preview;
- active-product card summaries;
- proof-module labels;
- Notes intro;
- final audience-aware CTA.

After copy approval, proceed to the first implementation slice in `apps/web` with CI validation and no production cutover.