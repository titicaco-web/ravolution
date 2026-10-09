import { describe, expect, test } from "bun:test";
import { invitationSchema } from "./invitation-schema";

const valid = { interest: "invest", platforms: ["Singuistic", "EyeHealthIntel"], support: [], message: "Interested in a conversation", deck: "", name: "Test visitor", company: "", email: "visitor@example.com", consent: true, language: "en" };
describe("Landing invitation rules", () => {
  test("accepts example project selections and optional company", () => { expect(invitationSchema.safeParse(valid).success).toBe(true); });
  test("requires a name", () => { expect(invitationSchema.safeParse({ ...valid, name: " " }).success).toBe(false); });
  test("requires a valid email", () => { expect(invitationSchema.safeParse({ ...valid, email: "bad" }).success).toBe(false); });
  test("requires explicit privacy consent", () => { expect(invitationSchema.safeParse({ ...valid, consent: false }).success).toBe(false); });
  test("rejects executable deck URLs", () => { expect(invitationSchema.safeParse({ ...valid, deck: "javascript:alert(1)" }).success).toBe(false); });
  test("rejects unknown project choices", () => { expect(invitationSchema.safeParse({ ...valid, platforms: ["arbitrary"] }).success).toBe(false); });
  test("limits message length", () => { expect(invitationSchema.safeParse({ ...valid, message: "x".repeat(3001) }).success).toBe(false); });
});