import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ResumeComparison } from "./ResumeComparison";

describe("ResumeComparison", () => {
  it("shows realistic English CV bullets with clear good and bad states", () => {
    const html = renderToStaticMarkup(<ResumeComparison />);

    expect(html).toContain("Responsible for improving website performance and collaborating with the product team.");
    expect(html).toContain("Redesigned the data-loading flow, cutting load time on key pages by 60%");
    expect(html).not.toContain("با بازطراحی مسیر بارگذاری داده");
    expect(html).toContain('class="rw-version-status rw-version-status-bad"');
    expect(html).toContain('class="rw-version-status rw-version-status-good"');
    expect(html).toContain("lucide-x");
    expect(html).toContain("lucide-check");
  });
});
