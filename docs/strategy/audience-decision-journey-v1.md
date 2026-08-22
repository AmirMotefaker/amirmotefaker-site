# Amir Motefaker Master Brand — Audience & Decision Journey v1.0

> Status: Foundation hypothesis for validation
>
> Date: 2026-08-21
>
> Inputs: Portfolio Truth Reset v7.0, Market & Reference Baseline v1.0, repository content audit
>
> Narrative boundary: final Founder and Investor narratives remain open pending six Product Input Packs
>
> Production impact: None

## Purpose

Define who AmirMotefaker.ir must help, what decision each audience is trying to make, which evidence is required and what a useful next action looks like.

This document does not define demographic personas. It defines **decision audiences**: people grouped by the decision they need to make on the site.

## Current-state finding

The current experience mixes biography, products, resume, technology news and broad collaboration prompts. Its Contact page groups inquiries by topic—Product, AI, Business and Technology—but does not distinguish the decision journeys of an investor, strategic partner, buyer, talent candidate or media researcher.

Consequences:

- visitors must translate a broad personal brand into their own use case;
- product proof and founder proof are not consistently connected;
- all high-intent conversations converge on a generic email action;
- analytics cannot reliably distinguish why a qualified visitor made contact;
- investor language risks leaking into public claims before evidence is approved.

## Audience hierarchy hypothesis

### Tier 1 — Strategic trust audiences

1. **Investor / capital partner**
2. **Strategic or distribution partner**

These audiences evaluate Amir and the portfolio as a system. They need portfolio logic, founder judgment, focus, evidence and a qualified conversation path.

### Tier 2 — Product and operating audiences

3. **Product user / buyer**
4. **Senior talent / specialist collaborator**

These audiences usually enter through a product, capability or problem. They need a short path from master-brand trust to the correct product or collaboration context.

### Tier 3 — Authority and discovery audiences

5. **Media / ecosystem / event organizer**
6. **Search engines and AI discovery systems**

These audiences need a reliable fact base, canonical naming, source provenance and quotable first-hand material.

This is a working hierarchy, not a final business priority. It must be checked against founder goals, Search Console, analytics and interviews.

## Audience decision contracts

### 1. Investor / capital partner

**Decision:** Is Amir a credible founder with a coherent portfolio and sufficient focus for a deeper investment conversation?

**Entry triggers:** founder referral, product traction, portfolio search, LinkedIn, an authored insight or a direct introduction.

**Questions to resolve:**

- Who is Amir and what is his relevant operating history?
- Why do these products belong together?
- Which products are active, at what stage and for whom?
- Where is shared technology, distribution or data leverage?
- What is proven, what is under development and what remains a thesis?
- What kind of capital or strategic relationship is relevant?

**Evidence contract:**

- verified founder fact base;
- portfolio architecture and selection logic;
- lifecycle stage for every active product;
- traction metrics with source, period and owner;
- current focus and capital-use boundary;
- product links, demonstrations and case evidence;
- explicit separation of fact, estimate and ambition.

**Primary next action:** `Request an investor / strategic conversation`.

**Do not publish yet:** valuation, fundraising status, revenue, user counts, market leadership, partnerships or return projections without founder approval and evidence.

### 2. Strategic or distribution partner

**Decision:** Is there a specific, credible way to create value together?

**Entry triggers:** overlapping customers, technology integration, content/data partnership, distribution opportunity or ecosystem referral.

**Questions to resolve:**

- Which product and audience does the partnership concern?
- What capability or asset does each side contribute?
- Is the product live, in development or discovery?
- What is the smallest useful pilot?
- Who owns follow-up?

**Evidence contract:**

- current product capability—not only roadmap;
- integration or distribution surface;
- target customer and problem;
- relevant case, prototype or demo;
- clear pilot scope and contact route.

**Primary next action:** `Propose a partnership` with product and partnership-type fields.

### 3. Product user / buyer

**Decision:** Does one product solve my problem now, and what should I do next?

**Entry triggers:** problem search, product name, recommendation, campaign, app link or product-domain referral.

**Questions to resolve:**

- What does the product do in one sentence?
- Is it available now?
- Who is it for and what outcome does it create?
- Which capabilities are current versus planned?
- Can I try, visit, join a waitlist or contact the team?

**Evidence contract:**

- verified one-line product truth;
- accurate lifecycle and availability state;
- current capabilities separated from future directions;
- screenshots, demo or product-domain link;
- product-specific CTA.

**Primary next action:** determined by product state: `Try`, `Visit`, `Join waitlist`, `Request demo` or `Follow progress`.

The master site must not replace product acquisition pages; it should transfer trust and route users correctly.

### 4. Senior talent / specialist collaborator

**Decision:** Is there meaningful work here, and is Amir someone I can build with?

**Entry triggers:** product challenge, GitHub activity, referral, founder note, professional network or open collaboration call.

**Questions to resolve:**

- What is being built and why does it matter?
- Which problems are technically or commercially difficult?
- What is Amir's operating style?
- Is the need employment, contract, advisory or project collaboration?
- What level of commitment is expected?

**Evidence contract:**

- real product challenges and stage;
- working principles and decision style;
- relevant repositories or technical evidence where public;
- collaboration model and expected contribution;
- no vague promise of roles that do not exist.

**Primary next action:** `Explore collaboration` with skill area, preferred product and collaboration model.

### 5. Media / ecosystem / event organizer

**Decision:** Can I verify Amir quickly and cite or invite him accurately?

**Entry triggers:** founder or product search, current topic, referral, article research or event programming.

**Questions to resolve:**

- What is Amir's accurate short biography?
- Which products and topics can he speak about credibly?
- Which claims and assets are approved for citation?
- How can a time-sensitive request reach the right person?

**Evidence contract:**

- approved short and long biography;
- canonical name, role and profile image;
- verified product fact sheets;
- authored notes and topic expertise;
- media contact path and asset usage rules.

**Primary next action:** `Media / speaking inquiry`.

### 6. Search engines and AI discovery systems

**Decision:** Which person, products, articles and relationships are canonical and trustworthy?

**Entry triggers:** crawl, indexing, entity resolution, citation retrieval and AI answer generation.

**Questions to resolve:**

- Is this the canonical page for Amir Motefaker?
- Which independent brands are part of the active portfolio?
- Who authored each note?
- Which URL and language variant should be surfaced?
- Are claims consistent across visible content and structured data?

**Evidence contract:**

- stable canonical URLs and hreflang;
- `Person` / `ProfilePage` entity on About;
- consistent brand registry and product URLs;
- author-linked `Article` structured data;
- sitemap, breadcrumbs and `sameAs` links;
- visible content matching structured data;
- legacy redirects only after an approved URL map.

**Primary next action:** crawl and index the canonical entity graph successfully.

## Cross-audience decision journey

```text
Discovery
  → Identity: Who is Amir?
  → Relevance: Why should this visitor care?
  → Portfolio: What is being built?
  → Proof: What is verified?
  → Fit: Which product, thesis or capability is relevant?
  → Action: What is the appropriate next step?
```

Every primary page should move a visitor forward by one or more stages. A page that adds biography or decoration without reducing decision uncertainty should not receive navigation priority.

## Evidence ladder

| Level | Evidence type | Public-use rule |
|---|---|---|
| E0 | unknown or unsourced statement | never publish as fact |
| E1 | founder-confirmed fact | publish with owner and review date |
| E2 | product-team-confirmed capability or stage | publish after cross-source consistency check |
| E3 | public artifact: product, repository, demo, certificate or dated document | link directly where appropriate |
| E4 | measured outcome with defined period and source | publish with metric definition and context |
| E5 | independent third-party verification | use with source and permission where required |

Ambition, vision and roadmap are allowed when explicitly labeled as forward-looking; they must not inherit the evidence level of current capabilities.

## Conversion architecture hypothesis

### Primary conversions

- qualified investor / strategic conversation;
- product-domain visit or product-state CTA;
- structured partnership inquiry;
- qualified collaboration inquiry.

### Secondary conversions

- read another evidence-led note;
- inspect a product proof page;
- verify founder profile or resume;
- media / speaking inquiry;
- follow a canonical social or GitHub profile.

### Conversion anti-patterns

- one generic `Contact me` CTA for every intent;
- forcing product users through the founder biography;
- presenting email and phone as the only qualification mechanism;
- counting raw contact clicks as business outcomes;
- using investor language on consumer product pages;
- making unavailable products appear live.

## Content requirements by page type

| Page | Audience job | Minimum content contract |
|---|---|---|
| Home | establish identity, relevance and portfolio shape | founder identity, working thesis, six active products, proof signals, audience-aware routes |
| Portfolio | compare active products accurately | category, audience, current stage, verified one-line truth, product CTA |
| Product detail | evaluate one product | problem, current solution, availability, capability evidence, roadmap separation, master-brand relationship |
| About | verify founder entity and judgment | fact-checked biography, operating principles, source-backed career evidence, canonical profiles |
| Thesis | understand portfolio logic | evidence-backed beliefs, selection logic, shared capabilities, explicit hypotheses |
| Notes | evaluate thinking over time | first-hand analysis, data, decisions, experiments and cases with authorship |
| Contact | route intent and qualify conversation | intent selection, relevant context fields, channel expectation, privacy note |
| Legacy news | preserve historical equity | archive labeling, original dates, canonical strategy, no confusion with current editorial promise |

## Measurement model

Raw traffic is not sufficient. The audience model requires intent-aware events.

| Stage | Example KPI |
|---|---|
| Identity | branded-search landing engagement; About/ProfilePage discovery |
| Relevance | Home → Portfolio/Thesis click-through by entry source |
| Proof | product-detail depth; proof/demo/GitHub clicks |
| Fit | product-specific CTA rate; selected inquiry intent |
| Action | qualified conversations by type; product-domain referral conversion |
| Return | returning qualified visitors; repeat note readership; assisted conversions |

No numeric target should be set until baseline analytics and conversion instrumentation exist.

## Validation plan

### Founder alignment

- rank the four human decision audiences by twelve-month strategic value;
- define which conversation types Amir wants more or fewer of;
- approve evidence boundaries and private/public information.

### Product-team input

Each Product Input Pack must provide:

- primary audience and buyer/user distinction;
- current lifecycle and availability;
- verified current capabilities;
- product-specific CTA;
- evidence links;
- claims that must remain private or provisional.

### Audience interviews

Run five to eight interviews across investor/partner, user/buyer, talent and media roles. Test whether participants can answer, without prompting:

1. Who is Amir?
2. What is he building?
3. Why do the products belong together?
4. Which proof increased or decreased trust?
5. What would they do next?

### Behavioral validation

- Search Console query and landing-page segmentation;
- analytics path analysis from Home to product and Contact;
- CTA intent tagging;
- first-click and five-second comprehension tests on Persian and English prototypes.

## Decisions made at Foundation level

1. Audiences are modeled by decisions, not generic demographics.
2. Product users are routed to product-specific actions; AmirMotefaker.ir remains the trust layer.
3. Contact must eventually distinguish investor, partnership, collaboration and media intent.
4. Evidence state is part of the content model, not an editorial afterthought.
5. Search and AI discovery are treated as an explicit system audience.

These decisions are reversible if analytics or interviews contradict them.

## Decisions deliberately left open

- final priority order among investor, partner, buyer and talent;
- fundraising or investor CTA visibility;
- final Persian labels for `Thesis` and `Notes`;
- final contact form fields and routing owner;
- numeric KPIs and conversion targets;
- final founder and investor narratives;
- claims dependent on Product Input Packs.

## Next gate

Build **Competitive & Reference Landscape v1.0** with a scored matrix across:

- founder clarity;
- portfolio coherence;
- evidence quality;
- editorial authority;
- investor usefulness;
- bilingual execution;
- SEO/entity clarity;
- visual distinctiveness;
- conversion design.

Only after that landscape and audience-priority approval should Website IA v7 become a final structural decision.
