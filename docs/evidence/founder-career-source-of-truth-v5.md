# Founder Career Source of Truth v5 — Validation Evidence

- Generated: 1405-05-21T16:08:53+03:30
- GitHub Issue: #33
- Base PR: #32
- Base PR head SHA: 45d33af3ad9d00b9a10e898b3ad1cea17415d5dd
- Branch: agent/founder-career-source-of-truth-v5

## Source policy

- Current LinkedIn PDF is primary for current/recent roles.
- Mehr 1402 resume supplements older roles, education, credentials, licenses and representations.
- Conflicting historical dates/employers are preserved separately rather than silently reconciled.
- Sensitive personal details from the old resume are not published.
- Raw source PDFs are not committed.

## Content delivered

- pps/web/content/founder/profile.ts
- pps/web/content/founder/experience.ts
- pps/web/content/founder/education.ts
- pps/web/content/founder/certifications.ts
- pps/web/content/founder/licenses.ts
- pps/web/content/founder/representatives.ts
- pps/web/content/founder/achievements.ts
- pps/web/content/founder/index.ts
- pps/web/components/founder/CareerPage.tsx
- pps/web/components/founder/CareerPage.module.css
- pps/web/app/[locale]/resume/page.tsx

## Validation

-
pm ci: PASS
-
pm run lint: PASS
-
pm run build: PASS
- git diff --check: PASS

## Deployment boundary

No production deployment or DNS change is included.