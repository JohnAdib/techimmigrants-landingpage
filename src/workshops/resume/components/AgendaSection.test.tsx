import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AgendaSection } from "./AgendaSection";

describe("AgendaSection", () => {
  it("renders a compact two-column desktop timeline with simple expanded content", () => {
    const html = renderToStaticMarkup(<AgendaSection />);
    const css = readFileSync(new URL("../resume-workshop.css", import.meta.url), "utf8");

    expect(html.match(/class="rw-agenda-column"/g)).toHaveLength(2);
    expect(html.match(/class="rw-agenda-item"/g)).toHaveLength(8);
    expect(html).not.toContain("open=\"\"");
    expect(html).toContain('class="rw-agenda-description"');
    expect(html).toContain('class="rw-agenda-exercise"');
    expect(css).toMatch(/\.rw-agenda \{[^}]*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/s);
    expect(css).toMatch(/\.rw-agenda-item summary \{[^}]*min-height: 4rem;/s);
    expect(css).toMatch(/\.rw-agenda-content \{[^}]*grid-template-columns: 1fr;/s);
  });
});
