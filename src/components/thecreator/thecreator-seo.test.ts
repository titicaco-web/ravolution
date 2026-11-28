import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { applyCopy } from "../apply/apply-copy";
import { getTheCreatorJsonLd, getTheCreatorRouteHead, theCreatorPageCopy, THECREATOR_LANGS } from "./thecreator-page-copy";

const BASE = process.env["SSR_BASE_URL"] ?? "http://localhost:8080";
const CASH_CLAIMS = [/angel/i, /takes cash/i, /invests directly/i, /investerar kapital/i, /kontanter och aktier/i, /ängelinvestering/i];

describe("TheCreator page copy", () => {
  for (const lang of THECREATOR_LANGS) {
    const c = theCreatorPageCopy[lang];
    test(`${lang}: title ≤ 60, description ≤ 155, 6–8 FAQs`, () => {
      assert.ok(c.title.length <= 60, c.title);
      assert.ok(c.title.includes("Ravolution AB"));
      assert.ok(c.description.length <= 155, `${c.description.length}`);
      assert.ok(c.faqs.length >= 6 && c.faqs.length <= 8);
    });
    test(`${lang}: JSON-LD parses and FAQPage matches the visible FAQ`, () => {
      const scripts = getTheCreatorRouteHead(lang).scripts.map((s) => JSON.parse(s.children));
      const faq = scripts.find((d) => d["@type"] === "FAQPage");
      assert.deepEqual(faq.mainEntity.map((q: { name: string; acceptedAnswer: { text: string } }) => [q.name, q.acceptedAnswer.text]), c.faqs.map((f) => [f.q, f.a]));
      const app = getTheCreatorJsonLd(lang).find((d) => d["@type"] === "SoftwareApplication") as Record<string, unknown>;
      assert.equal(app["applicationCategory"], "BusinessApplication");
      const prices = (app["offers"] as { name: string; price: string; priceCurrency: string }[]).map((o) => `${o.name}:${o.price}:${o.priceCurrency}`);
      assert.deepEqual(prices, ["Flex:0:SEK", "Pro:9800:SEK"]);
    });
    test(`${lang}: cash FAQ answers no`, () => {
      assert.ok(c.faqs.some((f) => /^(No|Nej)\. Ravolution/.test(f.a)));
    });
  }
  test("apply meta descriptions ≤ 160 and titles ≤ 60", () => {
    for (const lang of THECREATOR_LANGS) {
      assert.ok(applyCopy[lang].meta.title.length <= 60);
      assert.ok(applyCopy[lang].meta.description.length <= 160);
    }
  });
});

describe("Sitemap and AI files", () => {
  test("sitemap lists the three TheCreator URLs with hreflang alternates", () => {
    const xml = readFileSync("public/sitemap.xml", "utf8");
    for (const lang of THECREATOR_LANGS) {
      assert.ok(xml.includes(`<loc>https://ravolution.se/${lang}/thecreator</loc>`), lang);
    }
    assert.ok(xml.includes('hreflang="x-default" href="https://ravolution.se/en/thecreator"'));
  });
  test("llms.txt, llm.txt and llms-full.txt make no cash/angel investment claims", () => {
    const llms = readFileSync("public/llms.txt", "utf8");
    assert.equal(readFileSync("public/llm.txt", "utf8"), llms);
    for (const file of ["public/llms.txt", "public/llms-full.txt"]) {
      const text = readFileSync(file, "utf8");
      for (const re of CASH_CLAIMS) assert.ok(!re.test(text), `${file} matches ${re}`);
    }
    assert.ok(llms.includes("/en/thecreator"));
    assert.ok(!llms.includes("/en/angel-investor"));
  });
  test("llms-full.txt carries every TheCreator and apply FAQ", () => {
    const full = readFileSync("public/llms-full.txt", "utf8");
    for (const f of [...theCreatorPageCopy.en.faqs, ...applyCopy.en.faqs]) assert.ok(full.includes(f.q), f.q);
  });
});

describe("TheCreator SSR (needs the dev server)", () => {
  for (const lang of THECREATOR_LANGS) {
    test(`/${lang}/thecreator returns 200 with H1, canonical and hreflang in initial HTML`, async () => {
      const res = await fetch(`${BASE}/${lang}/thecreator`);
      assert.equal(res.status, 200);
      const html = await res.text();
      const h1s = html.match(/<h1[\s>]/g) ?? [];
      assert.equal(h1s.length, 1);
      assert.ok(html.includes(theCreatorPageCopy[lang].h1));
      assert.match(html, new RegExp(`rel="canonical" href="https://ravolution.se/${lang}/thecreator"`));
      for (const l of [...THECREATOR_LANGS, "x-default"]) assert.match(html, new RegExp(`hrefLang="${l}"|hreflang="${l}"`));
      assert.ok(html.includes('"@type":"FAQPage"'));
    });
  }
  test("unknown language returns 404", async () => {
    const res = await fetch(`${BASE}/fr/thecreator`);
    assert.equal(res.status, 404);
  });
});
