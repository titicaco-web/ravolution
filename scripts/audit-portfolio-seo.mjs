#!/usr/bin/env node
/**
 * Public portfolio SEO diagnostics. Read-only; never attempts to manipulate rankings.
 * Usage: node scripts/audit-portfolio-seo.mjs
 * Requires Node 20+ and public network access. No credentials.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const registry = JSON.parse(readFileSync(new URL("../docs/PORTFOLIO_SEO_REGISTRY.json", import.meta.url), "utf8"));
const sites = registry.sites.filter((s) => s.status === "public" && s.site);
const controllerTimeoutMs = 12000;
async function fetchText(url) {
  const signal = AbortSignal.timeout(controllerTimeoutMs);
  try {
    const response = await fetch(url, { signal, redirect: "follow", headers: { "User-Agent": "RavolutionPortfolioSEOAudit/1.0 (+https://ravolution.se)" } });
    return { status: response.status, url: response.url, body: (await response.text()).slice(0, 200000), contentType: response.headers.get("content-type") || "" };
  } catch (e) { return { status: null, url, body: "", error: String(e) }; }
}
const match = (source, pattern) => source.match(pattern)?.[1]?.trim() || null;
function canonical(html) {
  return match(html, /<link\\b(?=[^>]*\\brel=["']canonical["'])(?=[^>]*\\bhref=["']([^"']+)["'])[^>]*>/i)
      || match(html, /<link\\b(?=[^>]*\\bhref=["']([^"']+)["'])(?=[^>]*\\brel=["']canonical["'])[^>]*>/i);
}
const results = [];
for (const s of sites) {
  const root = s.site.endsWith("/") ? s.site : s.site + "/";
  const [home, robots, sitemap] = await Promise.all([
    fetchText(root), fetchText(root + "robots.txt"), fetchText(root + "sitemap.xml")
  ]);
  const title = match(home.body, /<title[^>]*>([\\s\\S]*?)<\\/title>/i);
  const h1 = match(home.body, /<h1[^>]*>([\\s\\S]*?)<\\/h1>/i)?.replace(/<[^>]+>/g, " ").replace(/\\s+/g, " ") || null;
  const siteMapEntries = [...sitemap.body.matchAll(/<loc>\\s*([^<]+)<\\/loc>/g)].map((m) => m[1]);
  const warnings = [];
  if (home.status !== 200) warnings.push("homepage-not-200");
  if (!title) warnings.push("missing-raw-title");
  if (!h1) warnings.push("missing-raw-h1-check-SSR");
  if (robots.status !== 200) warnings.push("robots-missing-or-inaccessible");
  if (sitemap.status !== 200 || !/<(?:sitemapindex|urlset)\\b/.test(sitemap.body)) warnings.push("sitemap-inaccessible-or-invalid");
  if (/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(home.body)) warnings.push("homepage-noindex");
  const knownCanonical = canonical(home.body);
  if (knownCanonical && new URL(knownCanonical, home.url).origin !== new URL(root).origin) warnings.push("canonical-cross-domain-review");
  if (!/application\\/ld\\+json/i.test(home.body)) warnings.push("no-raw-jsonld-check-other-routes");
  results.push({ project: s.project, repo: s.repo, site: s.site, homeStatus: home.status, resolvedUrl: home.url, title, rawH1: h1,
    canonical: knownCanonical, robotsStatus: robots.status, sitemapStatus: sitemap.status, topLevelSitemapUrls: siteMapEntries.length,
    warnings });
  console.log(s.project + ": " + (warnings.length ? warnings.join(", ") : "baseline passed"));
}
mkdirSync("seo-audit", { recursive: true });
writeFileSync("seo-audit/portfolio-seo-report.json", JSON.stringify({ auditedAt: new Date().toISOString(), results }, null, 2) + "\\n");
console.log("Saved seo-audit/portfolio-seo-report.json; next: inspect representative content URLs and Google Search Console.");
