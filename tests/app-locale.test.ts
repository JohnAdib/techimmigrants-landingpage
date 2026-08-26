import assert from "node:assert/strict";
import test from "node:test";

import { resolveAppLocale } from "../src/routing/appLocale.ts";

test("selects the Persian application for the /fa entry path", () => {
  assert.equal(resolveAppLocale("/fa"), "fa");
  assert.equal(resolveAppLocale("/fa/"), "fa");
});

test("selects the Persian application for nested /fa routes", () => {
  assert.equal(resolveAppLocale("/fa/blog"), "fa");
  assert.equal(resolveAppLocale("/fa/workshops/resume"), "fa");
});

test("selects the English application for root and non-Persian paths", () => {
  assert.equal(resolveAppLocale("/"), "en");
  assert.equal(resolveAppLocale("/about"), "en");
});

test("does not treat paths that merely begin with fa as Persian", () => {
  assert.equal(resolveAppLocale("/faq"), "en");
  assert.equal(resolveAppLocale("/farsi"), "en");
});
