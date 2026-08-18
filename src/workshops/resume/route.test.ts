import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const appSource = () => readFileSync(new URL("../../App.tsx", import.meta.url), "utf8");

describe("resume workshop route", () => {
  it("provides a workshops index before the individual workshop route", () => {
    const source = appSource();

    expect(source).toContain('path="/workshops"');
    expect(source.indexOf('path="/workshops"')).toBeLessThan(
      source.indexOf('path="/workshops/resume"'),
    );
  });

  it("keeps the workshop pages out of the main bundle", () => {
    const source = appSource();

    expect(source).toContain('lazy(() => import("./workshops/WorkshopsPage"))');
    expect(source).toContain('lazy(() => import("./workshops/resume/ResumeWorkshopPage"))');
  });

  it("leaves the existing routes untouched", () => {
    const source = appSource();

    for (const page of ["Index", "Interviews", "Mentors", "Resources", "Blog", "BlogPost", "NotFound"]) {
      expect(source).toContain(`import ${page} from "./pages/${page}"`);
    }
  });
});
