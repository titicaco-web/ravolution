import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";

// Rule: sign-in for every project workspace (Drivally, Yotaú, WorldVisum) lives
// centrally in TheCreator, so the header entry must point there — not at /login.
const CENTRAL = "https://thecreator.ravolution.se/auth";
const MENU = readFileSync("src/components/editorial/EditorialLayout.tsx", "utf8");

describe("TheCreator login entry", () => {
  test("header button links to the central TheCreator sign-in", () => {
    const src = readFileSync("src/components/editorial/LoginMenu.tsx", "utf8");
    assert.match(src, new RegExp(`THECREATOR_LOGIN_URL = "${CENTRAL}"`));
    assert.ok(!src.includes('to="/login"'), "header must not link to the local /login page");
  });

  test("the entry is labelled in EN, SV and ES", () => {
    const src = readFileSync("src/components/editorial/LoginMenu.tsx", "utf8");
    for (const lang of ["en", "sv", "es"]) {
      assert.match(src, new RegExp(`\\b${lang}: \\{ login: "`), `missing ${lang} copy`);
    }
    assert.match(src, /login: "Log in to TheCreator"/);
  });

  test("mobile menu shows a TheCreator entry above the gateway links", () => {
    const at = MENU.indexOf(`href="${CENTRAL}"`);
    const gateways = MENU.indexOf('className="grid sm:grid-cols-2 gap-3 mt-10 pt-8 border-t border-white/10"');
    assert.ok(at > -1, "mobile menu has no link to the central sign-in");
    assert.ok(gateways > -1, "gateways grid not found");
    assert.ok(at < gateways, "TheCreator entry must sit above the gateway links");
    assert.match(MENU.slice(at, gateways), /md:hidden/, "entry must be mobile-only");
  });
});
