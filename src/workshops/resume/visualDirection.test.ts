import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("resume workshop visual direction", () => {
  const css = readFileSync(new URL("./resume-workshop.css", import.meta.url), "utf8");

  it("uses a layered modern surface system", () => {
    expect(css).toContain("--rw-surface: rgba(255, 255, 255, 0.82);");
    expect(css).toContain("--rw-radius-xl: 2rem;");
    expect(css).toContain("--rw-shadow-lg:");
    expect(css).toMatch(/\.rw-header \{[^}]*backdrop-filter: blur\(20px\)[^}]*border-radius:/s);
    expect(css).toMatch(/\.rw-hero \{[^}]*border-radius: var\(--rw-radius-xl\)/s);
  });

  it("removes the previous poster-like hard-shadow styling", () => {
    expect(css).not.toContain("18px 18px 0");
    expect(css).not.toContain("12px 12px 0");
    expect(css).not.toContain("rotate: -1.5deg");
    expect(css).not.toContain("border: 2px solid var(--rw-ink)");
  });

  it("keeps interactive and English UI details clear in RTL", () => {
    expect(css).toMatch(/#version-before:focus-visible\s*~\s*\.rw-compare-tabs/);
    expect(css).toMatch(/#version-after:focus-visible\s*~\s*\.rw-compare-tabs/);
    expect(css).toMatch(/\.rw-stamp-top \{[^}]*direction: ltr;/s);
  });

  it("keeps the marquee seamless and separates adjacent dark sections", () => {
    expect(css).toMatch(/\.rw-ticker-track \{[^}]*width: max-content;[^}]*animation: rw-ticker/s);
    expect(css).toMatch(/\.rw-ticker-group \{[^}]*flex: 0 0 auto;/s);
    expect(css).toMatch(/@keyframes rw-ticker \{[^}]*translateX\(50%\)/s);
    expect(css).toMatch(/\.rw-method \{[^}]*margin-top: clamp\(1\.25rem, 2vw, 2rem\);/s);
  });
});
