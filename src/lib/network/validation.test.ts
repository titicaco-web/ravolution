import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { isAllowedProjectUrl, inviteSchema, projectInputSchema } from "./validation.ts";

describe("project origin allowlist", () => {
  test("accepts the three initial portals", () => {
    assert.equal(isAllowedProjectUrl("https://yotau.ravolution.se/inicio"), true);
    assert.equal(isAllowedProjectUrl("https://drivally.ravolution.se/overview"), true);
    assert.equal(isAllowedProjectUrl("https://thecreator.ravolution.se/overview"), true);
  });
  test("rejects plain http", () => {
    assert.equal(isAllowedProjectUrl("http://yotau.ravolution.se/"), false);
  });
  test("rejects lookalike and foreign domains", () => {
    assert.equal(isAllowedProjectUrl("https://evilravolution.se/"), false);
    assert.equal(isAllowedProjectUrl("https://yotau.ravolution.se.evil.com/"), false);
    assert.equal(isAllowedProjectUrl("https://example.com/"), false);
  });
  test("rejects credentials, ports and query strings", () => {
    assert.equal(isAllowedProjectUrl("https://a:b@yotau.ravolution.se/"), false);
    assert.equal(isAllowedProjectUrl("https://yotau.ravolution.se:8443/"), false);
    assert.equal(isAllowedProjectUrl("https://yotau.ravolution.se/?next=x"), false);
  });
  test("rejects the apex domain itself", () => {
    assert.equal(isAllowedProjectUrl("https://ravolution.se/"), false);
  });
});

describe("registry and invite input", () => {
  test("project with non-allowlisted url is rejected", () => {
    const r = projectInputSchema.safeParse({ slug: "x1", name: "X", description: "", url: "https://x.com" });
    assert.equal(r.success, false);
  });
  test("invite role must be viewer, editor or admin", () => {
    const base = { email: "a@b.se", projectId: "00000000-0000-4000-8000-000000000000" };
    assert.equal(inviteSchema.safeParse({ ...base, role: "owner" }).success, false);
    assert.equal(inviteSchema.safeParse({ ...base, role: "editor" }).success, true);
  });
});
