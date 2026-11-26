# TheCreator — Project Intelligence by Ravolution — Phase 1

## Naming and hierarchy (owner-approved)
- TheCreator is the whole platform, never a peer project. Initial subprojects: Drivally, Yotaú, WorldVisum.
- ravolution.se `/login` is the entry to TheCreator. Target: thecreator.ravolution.se becomes the central authenticated hub.
- Migration blocker: thecreator.ravolution.se/overview currently serves WorldVisum and must keep working. Moving WorldVisum to its own host and turning the thecreator host into the hub needs changes in that portal and DNS, both outside this project. Until then the registry keeps WorldVisum at thecreator.ravolution.se/overview.
- Shared capabilities are branded "TheCreator Shared Intelligence". Subprojects keep their local brand.
- Internal code/table names (`network_*`, `/network`) are unchanged to avoid a breaking migration; only labels changed.

## Auth inventory (before this change)
- ravolution.se had **no user sign-in**. The header "Login" was a static dropdown linking to yotau/drivally portals (public listing).
- Existing gated pages use non-account access codes (Gyrocraft code, profesora rating code/moderation key). These are untouched.
- Backend: Lovable Cloud (Supabase Auth + Postgres). Each portal (yotau, drivally, thecreator) runs its own app and its own auth; nothing shared.

## What phase 1 ships
- `/login`: invite-only email magic link (`signInWithOtp`, `shouldCreateUser: false`). Public signup is disabled in auth settings.
- `/network`: authenticated launcher; lists only projects the user is a member of (RLS). Network admins see all.
- `/network/admin`: registry add/edit/archive (HTTPS `*.ravolution.se` only, enforced by DB CHECK + Zod), invite/revoke, per-project viewer/editor/admin roles, audit log, recommendation accept/dismiss.
- Identity (`auth.users`, `network_admins`) is separate from project data (portals keep their own databases).
- Owner bootstrap: `network_owner_bootstrap` holds `ivan.daza@ravolution.se`. A trigger on `auth.users` inserts an explicit `network_admins` row only once that email is **verified**. The login page asks the server to send a one-time invite to that fixed address only if no account exists yet. No frontend email checks grant anything.
- Audit: DB triggers record every insert/update/delete on all network tables with the acting user.

## Cross-portal SSO — PENDING (not implemented)
Requirement: OIDC authorization code + PKCE via a mature IdP. No shared cookies/tokens across subdomains, no shared passwords, no custom identity server.

Options:
1. **Lovable Cloud auth as OAuth 2.1 provider** (Supabase OAuth server). Needs: enable OAuth server, consent page `/.lovable/oauth/consent` on ravolution.se, one registered client per portal with exact redirect URIs (e.g. `https://yotau.ravolution.se/auth/callback`), public clients with PKCE (S256), scopes `openid email profile`.
2. **External IdP** (Auth0 / Entra ID / Okta / Keycloak): issuer URL, one client per portal + one for ravolution.se, redirect URIs per portal, PKCE required, refresh-token rotation, RP-initiated logout URLs.

Each portal must: validate `iss`, `aud`, `exp`, nonce/state; map `sub` to its local user; check network membership via a signed claim or a server-to-server call; keep its own session cookie on its own host.
Blockers: IdP choice, client IDs/secrets, portal-side code changes (owned by those projects), end-to-end tests per portal.

## Shared AI gateway — PLAN
- Server-only route on ravolution.se; Anthropic/OpenAI keys stored as backend secrets, never sent to portals or browsers.
- Per-project credential: portal authenticates with a project-scoped token; table `network_ai_quotas(project_id, model_allowlist, monthly_token_cap, used)`; usage logged per call; hard stop at cap.
- Not built yet: requires secrets and quota tables. Lovable AI Gateway can serve OpenAI/Anthropic-class models without managing keys.

## Authenticated MCP project tools — PLAN
- Existing `/mcp` is public (company overview, portfolio, numerology) and stays public.
- Project tools (list my projects, view recommendations) need the OAuth server above and `auth.oauth.issuer` token verification; tools use the caller's RLS. Pending SSO/OAuth activation.

## Capability catalog
- Tables `network_capabilities` (kind method/artifact/agent, sanitized summary, source project, version, approved) and `network_recommendations` (target project, reason, expected benefit, risks, status).
- Rule: only approved, sanitized metadata; never client data. Accept only records a decision — no automatic deployment or data sharing.

## Rollout
1. Publish ravolution.se (not done by this change). DNS untouched.
2. Owner opens `/login`, enters owner email, clicks emailed invite → verified → admin.
3. Owner invites members per project. Portals keep working with their own logins.

## Rollback
- UI: restore previous `src/components/editorial/LoginMenu.tsx` from git; remove `/login`, `/network*` routes.
- Data: tables are additive; leave in place or drop `network_*` tables, trigger `network_user_verified` on `auth.users`, functions `is_network_admin`, `network_audit`, `network_on_user_verified`.
- Auth: re-enable signup in auth settings only if needed (no prior app sign-in existed).
