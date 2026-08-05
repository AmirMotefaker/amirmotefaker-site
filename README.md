# AmirMotefaker.ir

Private source of truth for the AmirMotefaker.ir website.

## Product direction

A modern Persian founder website built around:

- Product leadership
- Software engineering
- Growth, marketing and sales
- Evidence-backed product case studies
- Editorial technology publishing

## Repository structure

- docs/ — approved strategy, architecture, design and operations
- prototype/ — reviewed offline Persian RTL prototype
- src/wp-content/themes/amirmotefaker-v1/ — WordPress Block Theme scaffold
- src/wp-content/plugins/amirmotefaker-core/ — core plugin scaffold
- scripts/Test-Product.ps1 — reusable Foundation Product Test
- .github/workflows/foundation-gate.yml — GitHub CI

## Current release boundary

This Foundation milestone does not deploy to Production.

It performs no:

- WordPress mutation
- Hosting mutation
- DNS, SSL or nameserver change
- Mail configuration
- Database operation
- Production content publication

## Legacy repository

AmirMotefaker/amirmotefaker.github.io is historical reference only and is not the source authority for this website.
