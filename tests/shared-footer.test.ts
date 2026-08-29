import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { communityFooterContent } from "../src/components/community-footer/communityFooterContent.ts";
import { socialProfiles } from "../src/content/communityData.ts";

const projectFile = (path: string) => new URL(`../${path}`, import.meta.url);

test("English and Persian pages render the same localized footer", () => {
  const englishPage = readFileSync(projectFile("src/english/EnglishHomePage.tsx"), "utf8");
  const persianFooter = readFileSync(projectFile("src/components/landing/Footer.tsx"), "utf8");

  assert.match(englishPage, /<CommunityFooter locale="en" \/>/);
  assert.match(persianFooter, /<CommunityFooter locale="fa" \/>/);
});

test("the Persian footer keeps the English footer destinations and uses Persian copy", () => {
  const english = communityFooterContent.en;
  const persian = communityFooterContent.fa;
  const profileDestinations = Object.values(socialProfiles).map((profile) => profile.url);

  assert.equal(persian.locale, "fa");
  assert.equal(persian.direction, "rtl");
  assert.match(persian.description, /[\u0600-\u06ff]/);
  assert.deepEqual(
    persian.channels.map((channel) => channel.href),
    profileDestinations,
  );
  assert.deepEqual(
    persian.channels.map((channel) => channel.href),
    english.channels.map((channel) => channel.href),
  );
  assert.equal(persian.homeHref, "/fa/");
  assert.deepEqual(
    persian.pageLinks.map((link) => link.href),
    ["/fa/#interviews", "/fa/#mentors", "/fa/#resources", "/fa/#community"],
  );
  assert.deepEqual(persian.language, {
    label: "English",
    hint: "وب‌سایت انگلیسی",
    href: "/",
    locale: "en",
    direction: "ltr",
  });
  assert.equal(socialProfiles.instagram.url, "https://www.instagram.com/techimmigrant");
  assert.equal(socialProfiles.instagram.handle, "@techimmigrant");
});

test("the footer overrides the page selection color for contrast", () => {
  const css = readFileSync(
    projectFile("src/components/community-footer/community-footer.css"),
    "utf8",
  );

  assert.match(
    css,
    /\.community-footer\.community-footer ::selection\s*{[^}]*background:\s*var\(--footer-selection\);[^}]*color:\s*var\(--footer-selection-text\);/s,
  );
  assert.match(css, /--footer-selection:\s*#f6dcb0;/);
  assert.match(css, /--footer-selection-text:\s*#071e32;/);
});
