import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("uses refined status icons and a stable sample link", () => {
    const html = renderToStaticMarkup(<HeroSection />);
    const css = readFileSync(new URL("../resume-workshop.css", import.meta.url), "utf8");

    expect(html).toContain("lucide-circle-x");
    expect(html).toContain("lucide-circle-check");
    expect(html).toContain("Action verb + task or project + metric or result");
    expect(html).not.toContain("اثر + عدد + زمینه");
    expect(css).not.toMatch(/\.rw-text-link:hover,[^}]*gap:/s);
  });
});
