import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const componentNames = [
  "WorkshopHeader",
  "HeroSection",
  "WorkshopTicker",
  "IntroSection",
  "ResumeComparison",
  "MethodSection",
  "OutcomesSection",
  "AgendaSection",
  "AudienceSection",
  "PreparationSection",
  "HostsSection",
  "FaqSection",
  "RegistrationSection",
];

describe("resume workshop component architecture", () => {
  it("keeps every major page block in its own component", () => {
    for (const name of componentNames) {
      const componentUrl = new URL(`./components/${name}.tsx`, import.meta.url);
      expect(existsSync(componentUrl), `${name} should exist`).toBe(true);
    }
  });

  it("keeps the page component focused on composition", () => {
    const pageSource = readFileSync(new URL("./ResumeWorkshopPage.tsx", import.meta.url), "utf8");

    expect(pageSource).toContain('import { Footer } from "@/components/landing/Footer"');
    for (const name of componentNames) {
      expect(pageSource).toContain(`./components/${name}`);
    }
    expect(pageSource.split("\n").length).toBeLessThan(140);
  });
});
