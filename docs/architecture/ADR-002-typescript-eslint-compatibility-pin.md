# ADR-002 — TypeScript / ESLint Compatibility Pin

## Status

Accepted for the Foundation Hardening v4.1 milestone.

## Context

The repository previously declared TypeScript as `latest`, and the v4.0.0-product-portfolio lockfile resolved TypeScript 7.0.2.

Next.js 16 uses the ESLint CLI rather than `next lint`. The official Next.js TypeScript ESLint configuration uses typescript-eslint.

At the time of this decision, typescript-eslint officially supports TypeScript versions `>=4.8.4 <6.1.0`. Installing the official Next.js ESLint TypeScript configuration therefore resolved this repository to TypeScript 6.0.3 even though package.json still said `latest`.

Leaving that state implicit would make the dependency intent misleading and could produce unstable future `npm install` behavior.

## Decision

Pin the project compiler to TypeScript 6.0.3 while the official Next.js / typescript-eslint lint toolchain does not support TypeScript 7.

Keep:

- Next.js 16.3.0
- React 19.2.8
- React DOM 19.2.8
- ESLint 9.39.5
- eslint-config-next 16.3.0
- TypeScript 6.0.3

Use `npm ci` in CI so the reviewed dependency graph remains deterministic.

## Upgrade gate

Move back to TypeScript 7 only after the TypeScript lint parser/toolchain used by the project officially supports it and the upgrade passes:

- npm ci
- zero-warning ESLint
- Next.js production build
- TypeScript validation
- repository diff hygiene

## References

- Next.js ESLint configuration: https://nextjs.org/docs/app/api-reference/config/eslint
- typescript-eslint dependency support: https://typescript-eslint.io/users/dependency-versions/

## Scope

This is a development-toolchain compatibility decision. It does not change product behavior or authorize production cutover.
