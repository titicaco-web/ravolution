import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { invitationSchema } from "./invitation-schema";

const valid = { interest: "invest", platforms: ["Singuistic", "EyeHealthIntel"], support: [], message: "Interested in a conversation", deck: "", name: "Test visitor", company: "", email: "visitor@example.com", consent: true, language: "en" };
describe("Landing invitation rules", () => {
  test("accepts example project selections and optional company", () => { assert.equal(invitationSchema.safeParse(valid).success, true); });
  test("requires a name", () => { assert.equal(invitationSchema.safeParse({ ...valid, name: " " }).success, false); });
  test("requires a valid email", () => { assert.equal(invitationSchema.safeParse({ ...valid, email: "bad" }).success, false); });
  test("requires explicit privacy consent", () => { assert.equal(invitationSchema.safeParse({ ...valid, consent: false }).success, false); });
  test("rejects executable deck URLs", () => { assert.equal(invitationSchema.safeParse({ ...valid, deck: "javascript:alert(1)" }).success, false); });
  test("rejects unknown project choices", () => { assert.equal(invitationSchema.safeParse({ ...valid, platforms: ["arbitrary"] }).success, false); });
  test("limits message length", () => { assert.equal(invitationSchema.safeParse({ ...valid, message: "x".repeat(3001) }).success, false); });
});