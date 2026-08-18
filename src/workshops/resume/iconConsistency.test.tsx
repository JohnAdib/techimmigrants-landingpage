import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { describe, expect, it } from "vitest";
import ResumeWorkshopPage from "./ResumeWorkshopPage";

describe("resume workshop icons", () => {
  it("uses Lucide icons instead of typographic icon marks", () => {
    const html = renderToStaticMarkup(
      <StaticRouter location="/fa/workshops/resume">
        <ResumeWorkshopPage />
      </StaticRouter>,
    );

    expect(html).toContain("lucide-chevron-down");
    expect(html).toContain("lucide-chevron-left");
    expect(html).toContain("lucide-external-link");
    expect(html).toContain("lucide-linkedin");
    expect(html).toContain("lucide-arrow-down");
    expect(html).toContain("lucide-arrow-left");
    expect(html).toContain("lucide-check");
    expect(html).not.toContain("↗");
    expect(html).not.toContain("←");
    expect(html).not.toContain("◆");
  });
});
