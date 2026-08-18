import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { FaqSection } from "./FaqSection";

describe("FaqSection", () => {
  it("renders accessible accordion controls with animated answer regions", () => {
    const html = renderToStaticMarkup(<FaqSection />);
    const css = readFileSync(new URL("../resume-workshop.css", import.meta.url), "utf8");

    expect(html).toContain('class="rw-faq-trigger"');
    expect(html).toContain('aria-expanded="true"');
    expect(html).toContain('class="rw-faq-answer"');
    expect(css).toMatch(/\.rw-faq-answer \{[^}]*grid-template-rows: 0fr;[^}]*transition:/s);
    expect(css).toMatch(/\.rw-faq-item\.is-open \.rw-faq-answer \{[^}]*grid-template-rows: 1fr;/s);
  });
});
