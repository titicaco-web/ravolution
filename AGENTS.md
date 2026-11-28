# Project notes

- Homepage social images are defined in both homepage leaf route heads, not the root, so other pages do not inherit a misleading homepage cover.

- The landing invitation uses a dedicated shared Zod schema and server function, with existing owner email routing; sender-copy success is reported separately so restricted email delivery never produces a false inbox promise.

- Dark surfaces built outside `.editorial` (standalone hero bars, landing pages) must carry the `edit-tokens` class: the brand colour tokens (`--accent-edit`, `--text-primary`, …) are declared on `.editorial` only, so without it `edit-eyebrow` colour and `edit-outline` stroke resolve to nothing and render invisible.

- The public MCP server lives in `src/lib/mcp/` (one tool per file, public data only, no database or admin keys); numerology math is shared from `src/lib/numerology.ts` so the site and MCP never diverge.

- TheCreator platform UI (`/login`, `/network`, `/network/admin`, `src/lib/network/`) is invite-only: signup disabled, admin rights only via `network_admins` rows granted by a verified-email DB trigger — never by frontend email checks. Why: owner access must survive client tampering.
- Project registry URLs must be HTTPS `*.ravolution.se` (DB CHECK + `isAllowedProjectUrl`); cross-portal SSO stays pending per `docs/network/README.md`. Why: no open redirects or shared cookies across subdomains.
- TheCreator public page copy lives in `src/components/thecreator/thecreator-page-copy.ts` and reuses `thecreator-apply-copy.ts` for lifecycle/pricing; `public/llms-full.txt` is generated from these via `bun run scripts/build-llms-full.ts` (rerun after copy changes). Why: page, JSON-LD, FAQ and AI files never diverge.
- Ravolution makes no cash investments (owner decision): copy, JSON-LD and AI files say build/IP/brand/go-to-market for equity; `thecreator-seo.test.ts` guards llms files. Why: avoid false investment claims.
