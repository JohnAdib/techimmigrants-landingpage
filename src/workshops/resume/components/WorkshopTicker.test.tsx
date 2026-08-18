import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { WorkshopTicker } from "./WorkshopTicker";

describe("WorkshopTicker", () => {
  it("renders two identical groups for a seamless marquee loop", () => {
    const html = renderToStaticMarkup(<WorkshopTicker />);

    expect(html.match(/rw-ticker-group/g)).toHaveLength(2);
    expect(html.match(/رزومه‌ی واقعی/g)).toHaveLength(2);
    expect(html.match(/بازخورد روشن/g)).toHaveLength(2);
    expect(html.match(/بازنویسی در همان جلسه/g)).toHaveLength(2);
  });

  it("keeps ticker items compact without a stretched track", () => {
    const css = readFileSync(new URL("../resume-workshop.css", import.meta.url), "utf8");

    expect(css).toMatch(/\.rw-ticker-track \{[^}]*width: max-content;/s);
    expect(css).toMatch(/\.rw-ticker-group \{[^}]*flex: 0 0 auto;[^}]*justify-content: flex-start;/s);
  });
});
