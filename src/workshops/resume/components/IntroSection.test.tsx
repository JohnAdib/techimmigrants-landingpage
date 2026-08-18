import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { IntroSection } from "./IntroSection";

describe("IntroSection", () => {
  it("leads with one concise question and two balanced context cards", () => {
    const html = renderToStaticMarkup(<IntroSection />);
    const css = readFileSync(new URL("../resume-workshop.css", import.meta.url), "utf8");

    expect(html).toContain("رزومه می‌فرستی و به مصاحبه نمی‌رسی؟");
    expect(html).not.toContain("rw-section-index");
    expect(html.match(/class="rw-intro-card"/g)).toHaveLength(2);
    expect(html).toContain("در کارگاه چه می‌کنیم؟");
    expect(html).toContain("چه کاری نمی‌کنیم؟");
    expect(css).toMatch(/\.rw-intro \{[^}]*grid-template-columns: minmax\(0, 1\.45fr\) minmax\(16rem, 0\.55fr\);/s);
  });
});
