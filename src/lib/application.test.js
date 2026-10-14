import { describe, expect, it } from "vitest";
import { validateApplication } from "./application";

const valid = {
  name: "Alex Founder",
  company: "Founder Co",
  email: "alex@example.com",
  profile: "https://example.com",
  offer: "Advisory retainers for operators at $8k/month",
  audience: ["customers", "crm"],
  marketSize: "About 400",
  result90: "12 qualified calls",
  proof: "Case studies and a client list",
  owner: "Founder handles replies",
  blocker: "Warm market is unworked",
  startingPoint: "map",
  consent: true,
};

describe("validateApplication", () => {
  it("accepts a complete application", () => {
    expect(validateApplication(valid)).toEqual({});
  });

  it("requires email, audience, starting point and consent", () => {
    const errors = validateApplication({
      ...valid,
      email: "not-an-email",
      audience: [],
      startingPoint: "",
      consent: false,
    });
    expect(errors.email).toBeTruthy();
    expect(errors.audience).toBeTruthy();
    expect(errors.startingPoint).toBeTruthy();
    expect(errors.consent).toBeTruthy();
  });
});
