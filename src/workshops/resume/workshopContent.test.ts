import { describe, expect, it } from "vitest";
import { agenda, facilitators, workshopFacts, workshopMethod } from "./workshopContent";

describe("resume workshop content", () => {
  it("fills a focused three-hour workshop", () => {
    const totalMinutes = agenda.reduce((total, item) => total + item.duration, 0);

    expect(totalMinutes).toBe(180);
    expect(workshopFacts.durationMinutes).toBe(totalMinutes);
  });

  it("keeps the placeholder date honest and explicit", () => {
    expect(workshopFacts.date.iso).toBe("2026-09-26");
    expect(workshopFacts.date.status).toBe("proposed");
    expect(workshopFacts.date.persianLabel).toContain("۴ مهر ۱۴۰۵");
    expect(workshopFacts.date.gregorianLabel).toContain("26 September 2026");
    expect(workshopFacts.date.timeLabel).toContain("سه ساعت");
  });

  it("makes the workshop language and review rhythm explicit", () => {
    expect(workshopFacts.language).toContain("فارسی");
    expect(workshopFacts.language).toContain("انگلیسی");
    expect(workshopMethod[1].title).toContain("۲ تا ۳ رزومه");
    expect(workshopMethod[1].description).toContain("هر موضوع");
  });

  it("is designed for a small interactive cohort", () => {
    expect(workshopFacts.capacity).toEqual({ min: 20, max: 30 });
  });

  it("gives every agenda block a concrete exercise in Persian", () => {
    expect(agenda.length).toBeGreaterThanOrEqual(8);

    for (const item of agenda) {
      expect(item.title).toMatch(/[\u0600-\u06ff]/);
      expect(item.description.length).toBeGreaterThan(40);
      expect(item.exercise.length).toBeGreaterThan(25);
    }
  });

  it("uses the current mentoring milestone", () => {
    expect(facilitators.john.bio).toContain("۶۰۰");
    expect(facilitators.john.highlights).toContain("۶۰۰+ جلسه منتورینگ");
    expect(facilitators.john.url).toBe("https://mradib.com");
  });
});
