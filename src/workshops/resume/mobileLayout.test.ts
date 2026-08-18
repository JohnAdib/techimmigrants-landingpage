import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("resume workshop mobile hero", () => {
  const css = readFileSync(new URL("./resume-workshop.css", import.meta.url), "utf8");

  it("keeps the first heading compact and on its designed lines", () => {
    expect(css).not.toContain("13.3vw");
    expect(css).toMatch(
      /@media \(max-width: 600px\)[\s\S]*?\.rw-hero h1 \{[^}]*font-size: clamp\(2\.2rem,9\.8vw,2\.65rem\)/,
    );
    expect(css).not.toContain(".rw-hero-line { white-space: normal; }");
  });

  it("keeps actions and workshop facts compact instead of stacking every item", () => {
    expect(css).toMatch(
      /@media \(max-width: 600px\)[\s\S]*?\.rw-hero-actions \{[^}]*grid-template-columns: minmax\(0,1fr\) auto/,
    );
    expect(css).toMatch(
      /@media \(max-width: 600px\)[\s\S]*?\.rw-facts \{[^}]*grid-template-columns: repeat\(2,minmax\(0,1fr\)\)/,
    );
    expect(css).toContain(".rw-facts div:first-child { grid-column: 1/-1;");
  });

  it("keeps method cards and host avatars contained on narrow screens", () => {
    expect(css).toMatch(/\.rw-method-card \{[^}]*min-width: 0;[^}]*width: 100%;/s);
    expect(css).toMatch(/\.rw-method-card \{[^}]*overflow-wrap: anywhere;/s);
    expect(css).toMatch(/\.rw-host-avatar \{[^}]*flex: 0 0 auto;[^}]*overflow: hidden;/s);
  });

  it("uses the same compact avatar scale for both hosts on mobile", () => {
    const mobileCss = css.slice(css.indexOf("@media (max-width: 600px)"));

    expect(mobileCss).toMatch(/\.rw-host-avatar \{[^}]*width: 4\.5rem;[^}]*height: 4\.5rem;/s);
  });
});
