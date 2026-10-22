# Project notes

- Homepage social images are defined in both homepage leaf route heads, not the root, so other pages do not inherit a misleading homepage cover.

- The landing invitation uses a dedicated shared Zod schema and server function, with existing owner email routing; sender-copy success is reported separately so restricted email delivery never produces a false inbox promise.

- Dark surfaces built outside `.editorial` (standalone hero bars, landing pages) must carry the `edit-tokens` class: the brand colour tokens (`--accent-edit`, `--text-primary`, …) are declared on `.editorial` only, so without it `edit-eyebrow` colour and `edit-outline` stroke resolve to nothing and render invisible.

- The public MCP server lives in `src/lib/mcp/` (one tool per file, public data only, no database or admin keys); numerology math is shared from `src/lib/numerology.ts` so the site and MCP never diverge.
