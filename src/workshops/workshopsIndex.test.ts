import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("workshops index", () => {
  it("offers a clear route to the résumé workshop and reuses the standard footer", () => {
    const pageUrl = new URL("./WorkshopsPage.tsx", import.meta.url);

    expect(existsSync(pageUrl), "WorkshopsPage should exist").toBe(true);
    if (!existsSync(pageUrl)) return;

    const source = readFileSync(pageUrl, "utf8");
    expect(source).toContain('to="/workshops/resume"');
    expect(source).toContain("کارگاه رزومه");
    expect(source).toContain("شنبه ۱۹ سپتامبر");
    expect(source).toContain('import { Footer } from "@/components/landing/Footer"');
  });

  it("links back to the workshops index from the workshop header", () => {
    const workshopHeaderSource = readFileSync(
      new URL("./resume/components/WorkshopHeader.tsx", import.meta.url),
      "utf8",
    );

    expect(workshopHeaderSource).toContain('to="/workshops"');
  });

  it("uses Vazirmatn explicitly as the sole workshop typeface", () => {
    const resumeCss = readFileSync(
      new URL("./resume/resume-workshop.css", import.meta.url),
      "utf8",
    );

    expect(resumeCss).toContain('font-family: "Vazirmatn", sans-serif;');
    expect(resumeCss).not.toMatch(/font-family:\s*[^;]*(Inter|Lora|Space|Mono|Kufi)/);
  });
});
