import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { applyCopy } from "./apply-copy";
import { approximateUsd, formatApproxUsd, theCreatorApplyCopy, USD_SEK } from "./thecreator-apply-copy";

const langs = ["en", "sv", "es"] as const;
const expectedLookingForValues = [
  "Tech build",
  "Brand & identity",
  "Sales & go-to-market",
  "Concept refinement",
  "Investor readiness",
  "TheCreator platform",
  "All of the above",
];

describe("Apply no-cash offering", () => {
  test("English hero and AI summary use the owner-approved no-cash wording", () => {
    const expected = "Ravolution is a Swedish venture studio that invests engineering, product, IP and go-to-market into early-stage startups — in exchange for equity, not invoices. We do not make cash investments. Apply below. We respond to every application within 10 working days.";
    assert.equal(applyCopy.en.intro, expected);
    assert.equal(applyCopy.en.aiSummary, expected);
  });

  test("every language rejects cash investment in the capital FAQ", () => {
    for (const lang of langs) {
      const answer = applyCopy[lang].faqs[3]?.a;
      assert.ok(answer, `${lang} capital FAQ missing`);
      assert.match(answer, /^(No|Nej)\./, `${lang} must open with a clear no`);
    }
    assert.equal(
      applyCopy.en.faqs[3]?.a,
      "No. Ravolution does not make cash investments. We invest work — engineering, product, IP, brand and go-to-market — for equity, and help you become investor-ready for your own raise.",
    );
  });

  test("Apply metadata, FAQs and investment list contain no angel-capital offer", () => {
    for (const lang of langs) {
      const copy = JSON.stringify(applyCopy[lang]);
      assert.doesNotMatch(copy, /angel capital|angel investor|Cash \+ equity|cash plus equity/i, lang);
      assert.match(copy, /28/);
      assert.match(copy, /369/);
    }
  });
});

describe("Apply form compatibility", () => {
  test("Capital is replaced by Investor readiness in every language", () => {
    for (const lang of langs) {
      const values: string[] = applyCopy[lang].lookingForOptions.map((option) => option.value);
      assert.deepEqual(values, expectedLookingForValues, lang);
      assert.ok(!values.includes("Capital"));
    }
  });

  test("localized labels preserve the existing stored select values", () => {
    for (const lang of ["sv", "es"] as const) {
      assert.deepEqual(
        applyCopy[lang].stageOptions.map((option) => option.value),
        applyCopy.en.stageOptions.map((option) => option.value),
      );
      assert.deepEqual(
        applyCopy[lang].sectorOptions.map((option) => option.value),
        applyCopy.en.sectorOptions.map((option) => option.value),
      );
      assert.deepEqual(
        applyCopy[lang].sourceOptions.map((option) => option.value),
        applyCopy.en.sourceOptions.map((option) => option.value),
      );
    }
  });
});

describe("TheCreator Apply exhibits and pricing", () => {
  test("USD helper uses the approved ECB rate and rounded display values", () => {
    assert.equal(USD_SEK, 10.207);
    const expected = new Map([[0, 0], [1000, 98], [2300, 225], [23000, 2253], [9800, 960], [1500, 147], [15000, 1470]]);
    for (const [sek, usd] of expected) assert.equal(approximateUsd(sek), usd, `${sek} SEK`);
    assert.equal(formatApproxUsd(23000), "≈ $2,253");
  });

  test("all languages include Protect, phased AI advisory, and equity-only venture terms", () => {
    for (const lang of langs) {
      const c = theCreatorApplyCopy[lang];
      assert.equal(c.stages.length, 6);
      assert.equal(c.parallelRows.length, 2);
      assert.equal(c.parallelRows[1]?.title, lang === "en" ? "Protect" : lang === "sv" ? "Skydda" : "Protección");
      assert.match(c.parallelRows[1]?.description ?? "", /28/);
      assert.match(c.parallelRows[1]?.description ?? "", /369/);
      assert.ok(c.advisoryTag.length > 0);
      assert.match(c.advisoryDescription, /commitment|åtagande|compromiso/i);
      assert.doesNotMatch(c.models[2]?.price ?? "", /cash|kontant|efectivo/i);
      assert.equal(c.models.length, 3);
    }
    assert.equal(theCreatorApplyCopy.en.advisoryLine, "TheCreator helps you build the company, not your AI bill.");
    assert.equal(theCreatorApplyCopy.en.models[2]?.price, "Equity · by agreement");
  });

  test("TheCreator legal links point to the approved portal destinations", () => {
    for (const lang of langs) {
      assert.deepEqual(
        theCreatorApplyCopy[lang].legalLinks.map((link) => link.href),
        [
          "https://thecreator.ravolution.se/terms",
          "https://thecreator.ravolution.se/refunds",
          "https://thecreator.ravolution.se/privacy",
        ],
      );
    }
  });
});
