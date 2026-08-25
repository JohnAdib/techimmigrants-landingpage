import assert from "node:assert/strict";
import test from "node:test";
import {
  formatCurrentMonth,
  formatCurrentYearMonth,
} from "../src/english/reportingPeriod.ts";

test("formats the current reporting month in English", () => {
  assert.equal(formatCurrentMonth(new Date("2026-08-25T12:00:00Z")), "August 2026");
  assert.equal(formatCurrentYearMonth(new Date("2026-08-25T12:00:00Z")), "2026-08");
});
