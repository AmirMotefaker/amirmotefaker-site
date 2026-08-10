# Architecture

The foundation is a native WordPress block theme.

## Principles

- `theme.json` owns global settings and visual tokens.
- `/templates` owns page-level block templates.
- `/parts` owns reusable header, footer and sidebar structures.
- `/patterns` owns approved product and content sections.
- `/inc` contains small, purpose-specific PHP modules.
- Runtime assets are local and versioned.
- No remote frontend framework or automatic publishing dependency is included.
