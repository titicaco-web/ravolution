# Portal contract (Yotaú, Drivally, TheCreator / WorldVisum)

Coordination document only. This project makes no changes to the portals.

| Portal | Registered URL |
|---|---|
| Yotaú | https://yotau.ravolution.se/inicio |
| Drivally | https://drivally.ravolution.se/overview |
| TheCreator / WorldVisum | https://thecreator.ravolution.se/overview |

## Now (phase 1)
- The launcher only links to the registered URL. Portals keep their own sign-in and data.
- No tokens, cookies, or user data are passed in the link.

## When SSO is enabled (each portal team)
1. Register an OIDC client: redirect URI `https://<portal>.ravolution.se/auth/callback`, PKCE S256, scopes `openid email profile`.
2. Implement authorization code + PKCE; validate `iss`, `aud`, `exp`, `state`, `nonce`.
3. Keep the session cookie host-only on the portal (no `Domain=.ravolution.se`).
4. Authorise using network role (viewer/editor/admin) from an ID-token claim or a server call to ravolution.se; deny if absent.
5. Provide a logout endpoint and honour revocation within the session lifetime.
6. Ship tests: login, denied (no membership), role downgrade, logout.

## Capability sharing
Portals may submit sanitized capability descriptions (no client data) for owner approval. Approval does not deploy anything.
