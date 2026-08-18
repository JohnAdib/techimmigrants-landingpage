import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { HostsSection } from "./HostsSection";

describe("HostsSection", () => {
  it("uses the same inline identity layout for both facilitators", () => {
    const html = renderToStaticMarkup(<HostsSection />);

    expect(html.match(/rw-host-identity/g)).toHaveLength(2);
    expect(html.match(/class="rw-host-avatar /g)).toHaveLength(2);
    expect(html.match(/rw-host-heading/g)).toHaveLength(2);
    expect(html.match(/rw-host-avatar-monogram/g)).toHaveLength(2);
  });

  it("renders both facilitators without a portrait image", () => {
    const html = renderToStaticMarkup(<HostsSection />);

    expect(html).not.toContain("<img");
  });
});
