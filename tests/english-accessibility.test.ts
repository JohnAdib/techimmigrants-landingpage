import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const projectFile = (path: string) => new URL(`../${path}`, import.meta.url);
const readProjectFile = (path: string) => readFileSync(projectFile(path), "utf8");

function customProperty(css: string, name: string) {
  const match = css.match(new RegExp(`--eh-${name}:\\s*(#[0-9a-fA-F]{6})`));
  assert.ok(match, `--eh-${name} should be a six-digit hex colour`);
  return match[1];
}

function luminance(hex: string) {
  const channels = hex.slice(1).match(/.{2}/g)?.map((value) => Number.parseInt(value, 16) / 255) ?? [];
  const linear = channels.map((value) => (value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));
  return (0.2126 * linear[0]) + (0.7152 * linear[1]) + (0.0722 * linear[2]);
}

function contrast(first: string, second: string) {
  const lighter = Math.max(luminance(first), luminance(second));
  const darker = Math.min(luminance(first), luminance(second));
  return (lighter + 0.05) / (darker + 0.05);
}

test("small English accent text uses AA contrast tokens", () => {
  const css = readProjectFile("src/english/english-home.css");
  const pairs = [
    ["blue-text", "paper"],
    ["teal-text", "paper"],
    ["teal-text", "teal-light"],
    ["coral-text", "youtube-surface"],
    ["ink-soft", "blue-light"],
    ["ink-soft", "youtube-surface"],
    ["ink-soft", "teal-light"],
    ["white", "blue-deep"],
    ["muted-on-navy", "navy"],
  ] as const;

  for (const [foreground, background] of pairs) {
    const ratio = contrast(customProperty(css, foreground), customProperty(css, background));
    assert.ok(ratio >= 4.5, `${foreground} on ${background} has ${ratio.toFixed(2)}:1 contrast`);
  }
});

test("focus treatment remains visible across light, blue, and navy surfaces", () => {
  const css = readProjectFile("src/english/english-home.css");
  const focusRule = css.match(/\.eh :focus-visible\s*{([^}]*)}/)?.[1] ?? "";

  assert.match(focusRule, /outline:[^;]*var\(--eh-white\)/);
  assert.match(focusRule, /box-shadow:[^;]*var\(--eh-navy\)/);
});

test("ambient journey motion loops gently and remains reduced-motion safe", () => {
  const css = readProjectFile("src/english/english-home.css");
  const routeLine = css.match(/\.eh-route-line\s*{([^}]*)}/)?.[1] ?? "";
  const routePoints = css.match(/\.eh-hero__route circle\s*{([^}]*)}/)?.[1] ?? "";
  const invitationTraveller = css.match(/\.eh-invitation__path::after\s*{([^}]*)}/)?.[1] ?? "";
  const reducedMotion = css.match(/@media \(prefers-reduced-motion: reduce\)\s*{([\s\S]*)$/)?.[1] ?? "";

  assert.match(routeLine, /animation:\s*eh-route-travel 16s linear infinite/);
  assert.match(routePoints, /animation:\s*eh-route-pulse 6s ease-in-out infinite/);
  assert.match(invitationTraveller, /animation:\s*eh-path-traveller 9s linear infinite/);
  assert.match(reducedMotion, /animation-duration:\s*0\.01ms !important/);
  assert.match(reducedMotion, /animation-iteration-count:\s*1 !important/);
});

test("impact terms precede their definitions", () => {
  const impact = readProjectFile("src/english/components/ImpactSection.tsx");
  assert.ok(impact.indexOf("<dt>") < impact.indexOf("<dd "));
  assert.match(impact, /<dd className="eh-stat__detail">{stat\.detail}<\/dd>/);
  assert.doesNotMatch(impact, /<p>{stat\.detail}<\/p>/);
});

test("the site footer is a sibling of main", () => {
  const page = readProjectFile("src/english/EnglishHomePage.tsx");
  const mainClose = page.indexOf("</main>");
  const footer = page.indexOf("<EnglishFooter");

  assert.ok(mainClose >= 0 && footer > mainClose, "EnglishFooter should render after </main>");
});

test("the hero uses the brief's verified duration without inferring a start year", () => {
  const hero = readProjectFile("src/english/components/HeroSection.tsx");

  assert.match(hero, /Six years/);
  assert.doesNotMatch(hero, /2020/);
});

test("the English visual system uses calm surfaces and rounded controls", () => {
  const css = readProjectFile("src/english/english-home.css");
  const buttonRule = css.match(/\.eh-button\s*{([^}]*)}/)?.[1] ?? "";

  assert.match(css, /--eh-paper:\s*#f7f4ee/);
  assert.match(css, /--eh-blue:\s*#6e91a0/);
  assert.match(css, /--eh-coral:\s*#d9927c/);
  assert.match(css, /--eh-radius-card:\s*1\.5rem/);
  assert.match(css, /--eh-radius-pill:\s*999px/);
  assert.match(buttonRule, /border-radius:\s*var\(--eh-radius-pill\)/);
});

test("mobile hero keeps its first actions within a compact first view", () => {
  const css = readProjectFile("src/english/english-home.css");
  const mobile = css.match(/@media \(max-width: 760px\)\s*{([\s\S]*?)@media \(max-width: 430px\)/)?.[1] ?? "";

  assert.match(mobile, /\.eh-hero\s*{[^}]*padding:\s*3rem 0 3rem;/s);
  assert.match(mobile, /\.eh-hero h1\s*{[^}]*font-size:\s*clamp\(2\.9rem, 12\.8vw, 3\.8rem\)/s);
  assert.match(mobile, /\.eh-hero__lead\s*{[^}]*line-height:\s*1\.58/s);

  const shortPhone = css.match(/@media \(max-width: 430px\) and \(max-height: 700px\)\s*{([\s\S]*?)(?:@media|$)/)?.[1] ?? "";
  assert.match(shortPhone, /\.eh-hero\s*{[^}]*padding:\s*1\.5rem 0 2\.5rem;/s);
  assert.match(shortPhone, /\.eh-hero h1\s*{[^}]*font-size:\s*2\.45rem/s);
  assert.match(shortPhone, /\.eh-hero__lead\s*{[^}]*line-height:\s*1\.42/s);
});

test("dark-section microcopy uses the accessible muted token", () => {
  const css = readProjectFile("src/english/english-home.css");
  const statDetail = css.match(/\.eh-stat__detail\s*{([^}]*)}/)?.[1] ?? "";
  const impactNote = css.match(/\.eh-impact__note\s*{([^}]*)}/)?.[1] ?? "";
  const footerMicrocopy = css.match(/\.eh-footer \.eh-brand__copy small\s*{([^}]*)}/)?.[1] ?? "";

  assert.match(statDetail, /color:\s*var\(--eh-muted-on-navy\)/);
  assert.match(impactNote, /color:\s*var\(--eh-muted-on-navy\)/);
  assert.match(footerMicrocopy, /color:\s*var\(--eh-muted-on-navy\)/);
});

test("mobile statistic sizing targets values without enlarging definitions", () => {
  const css = readProjectFile("src/english/english-home.css");
  const mobile = css.match(/@media \(max-width: 760px\)\s*{([\s\S]*?)@media \(max-width: 430px\)/)?.[1] ?? "";

  assert.doesNotMatch(mobile, /\.eh-stat dd\s*{/);
  assert.match(mobile, /\.eh-stat__value\s*{[^}]*font-size:/s);
  assert.match(mobile, /\.eh-stats\s*{[^}]*gap:/s);
});
