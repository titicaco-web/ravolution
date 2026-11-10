# Ravolution portfolio: search indexing and structured-data standard

Scope: each public site operated by the group. Apply **per project**, never copy a domain, sitemap, schema or private-page policy from another website. Owner: site team / developer. Version 2026-11-10.

## 1. Crawlability and real HTTP statuses (P0)
- Public, approved pages must return 200 **with substantive page-specific HTML**: unique H1, title, meta description, canonical, summary and internal links already in the initial response (SSR/SSG/prerender with appropriate invalidation).
- Missing content returns actual HTTP **404**; permanently removed content **410** where supported; permanently moved pages **301/308**. React-only “not found” displayed after a 200 is insufficient.
- Do not indiscriminately block Googlebot, CSS or JavaScript. Use `noindex` only for intentional exclusions; don't force-index unfinished/empty pages.
- Private dashboards, application forms, account pages, admin tools, staging sites, tokens, unapproved profiles, sensitive/medical data and expired content must not leak into search. Access controls must be enforced by the backend; robots.txt is not an access control.
- Preserve user consent and removal: revoke visibility immediately, remove from sitemaps and prevent cache/snapshot leakage. Never prerender or index private content.

## 2. Canonical URL policy (P0)
- Choose one public canonical URL for each content item. Same canonical in page head, Open Graph URL, internal links and sitemap.
- Alternative listing/interactive/application URLs should point via canonical to the real content page if equivalent; don't redirect flows that serve different user tasks.
- Canonical tags must be absolute, self-referencing on primary pages, stable for queries, language, trailing slash, host and protocol.
- Normalize http -> https, www -> chosen host, old paths -> new. Avoid chains and loops. Use hreflang for genuinely localized alternate content.
- Do not rely on `noindex` to consolidate duplicates.

## 3. XML sitemap quality (P0)
- Serve `/robots.txt` and `/sitemap.xml`; include only valid, canonical, 200, indexable, consented public pages.
- Paginate large dynamic sources and split into <=50,000 URLs per sitemap or <=50 MB uncompressed; sitemap index as required.
- Use accurate `lastmod` only on material content change; never invent dates.
- Fail closed **without overwriting last known good sitemaps** on database/API errors; alert administrators, check deployed sitemap URLs after build.
- Don't treat a submitted sitemap as a guarantee of indexing.

## 4. Content and structured data (P1)
- One descriptive primary title and H1 per important page, unique meta description and naturally helpful copy reflecting the user's search intent. No boilerplate generated for hundreds of identical thin pages.
- JSON-LD should describe **content actually visible**: Organization, WebSite, BreadcrumbList, Article/NewsArticle, JobPosting, SoftwareApplication, Event, Product where appropriate. No fabricated ratings, testimonials, prices, salaries, addresses, certifications or medical claims.
- Jobs: real employmentType when known, visible employer-confirmed baseSalary only, correct work location/country, application deadline, active job status. Expire closed jobs appropriately. JobPosting only on single detailed job pages, not results lists.
- Events: honest date/time/time zone, location or online mode, ticket status and organiser; remove old event offers.
- News/publications: author, publish/modified dates, original sources, editorial corrections, canonical articles; don't publish duplicate imported material as original.
- Healthcare: do not imply medical diagnosis, approval or validated performance where not established.
- Use factual, accessible alt text and actual fast images; avoid watermark and generic duplicate hero images as primary content.

## 5. Rendering/performance (P1)
- Verify `curl -I` status and **raw View Source** for a public sample page. Google can run JavaScript but initial HTML should convey the essential content and metadata.
- Measure Core Web Vitals, mobile usability and accessibility; lazy-load nonessential assets. Keep canonical and robots directives consistent between raw/rendered HTML.
- Check that JS exceptions, consent scripts, lazy loading or client API requests do not hide public content from crawlers.
- Validate representative URLs with Google Rich Results Test and Search Console URL Inspection; sample both newly published and old/expired URLs.

## 6. Search Console triage (P0)
For each domain export example URLs for: **Duplicate without user-selected canonical**, **Soft 404**, **Excluded by noindex**, **Discovered – currently not indexed**, **Crawled – currently not indexed**.
For each URL record: intent to index Y/N, HTTP status, raw/rendered H1, canonical, robots, sitemap membership, inbound internal links, source freshness, consent, schema, index status and a concrete fix.
- Duplicate: compare Google-selected versus declared canonical, internal links and redirects.
- Soft 404: restore meaningful content, or return 404/410, remove from sitemap.
- noindex: preserve intentional privacy exclusions; remove accidental meta tag only if public/approved.
- Discovered: diagnose sitemap scale, internal linking, server availability and usefulness/duplication; avoid requesting indexing of every low-value page.
- Crawled not indexed: inspect rendered content, quality, duplicates and canonical selection.
After publishing: submit live sitemap, validate only fixed issue groups, review indexing trend weekly for 4 weeks. Indexing/ranking is controlled by Google and never guaranteed.

## Site-specific controls
- **iApply / IT-Karriär**: per-job canonical, paid/organic separation, dynamic postings, actual JobPosting data and expiry, candidate publication consent, paginated public directories.
- **EyeHealthIntel**: medical/preclinical claim review; science/publication sources and language variants; no indexable patient data.
- **Healthcare Hackathon**: Event schedule and correct local time, sponsor/publication pages, historical event status, private ticket and admin routes excluded.
- **Ravolution**: service pages, inventor/venture profiles, publications, languages and canonical portfolio links.
- **NewsToast / CommentOK**: articles/comments authorship, moderation and duplicate syndication, user-generated content quality, safe noindex for thin/removed pages.
- **MecaniCraft / other apps**: meaningful public feature/game pages; keep private builds, accounts and UGC opt-in.
- For other repositories, inspect technology/domain and run exactly the same checklist with site-appropriate schema, access policy, and server-side response support.

## Implementation task for each connected site (copy into development ticket)
"Audit all public routes, sitemaps, HTTP statuses, canonicals, meta robots, public content rendering and structured data. Fix genuinely indexable pages using SSR/SSG where possible; return real 404/410 for missing URLs; ensure only approved/canonical pages in sitemap; preserve private data and user consent. Add regression tests, perform build and live verification, record before/after Search Console examples, then open a PR and deploy only with passing checks. Never claim Google indexing or ranking guaranteed."

Sources: Google Search Central canonicalization, JavaScript SEO and crawl-error guidance.
