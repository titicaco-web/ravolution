import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { invitationCopy } from "./invitation-copy";

const langs = ["en", "sv", "es"] as const;

describe("Landing invitation TheCreator strip", () => {
  test("every language carries a label, one line of copy and a link", () => {
    for (const lang of langs) {
      const c = invitationCopy[lang];
      assert.equal(c.creatorLabel, "TheCreator · Founder Operating System");
      assert.ok(c.creatorCopy.trim().length > 0, `${lang} creator copy missing`);
      assert.match(c.creatorLink, /TheCreator\s*→$/);
    }
  });
  test("partner tab names TheCreator as the operating system in every language", () => {
    for (const lang of langs) {
      assert.match(invitationCopy[lang].partner, /TheCreator/, `${lang} partner copy missing TheCreator`);
    }
  });
});
