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
    ["white", "blue-action"],
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
  const pulseSignal = css.match(/\.eh-pulse__signal\s*{([^}]*)}/)?.[1] ?? "";
  const reducedMotion = css.match(/@media \(prefers-reduced-motion: reduce\)\s*{([\s\S]*)$/)?.[1] ?? "";

  assert.match(routeLine, /animation:\s*eh-route-travel 16s linear infinite/);
  assert.match(routePoints, /animation:\s*eh-route-pulse 6s ease-in-out infinite/);
  assert.match(pulseSignal, /animation:\s*eh-signal-float 8s ease-in-out infinite/);
  assert.match(reducedMotion, /animation-duration:\s*0\.01ms !important/);
  assert.match(reducedMotion, /animation-iteration-count:\s*1 !important/);
});

test("impact terms precede their definitions", () => {
  const impact = readProjectFile("src/english/components/ImpactSection.tsx");
  assert.ok(impact.indexOf("<dt>") < impact.indexOf("<dd "));
  assert.match(impact, /<dd className="eh-stat__detail">{stat\.detail}<\/dd>/);
  assert.doesNotMatch(impact, /<p>{stat\.detail}<\/p>/);
});

test("hero pulse terms precede their definitions", () => {
  const hero = readProjectFile("src/english/components/HeroSection.tsx");
  const stats = hero.slice(hero.indexOf('<dl className="eh-pulse__stats">'));

  assert.ok(stats.indexOf("<dt>") < stats.indexOf("<dd>"));
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

test("reporting dates are dynamic instead of hard-coded to the brief month", () => {
  const hero = readProjectFile("src/english/components/HeroSection.tsx");
  const impact = readProjectFile("src/english/components/ImpactSection.tsx");
  const footer = readProjectFile("src/english/components/InvitationFooter.tsx");

  for (const component of [hero, impact, footer]) {
    assert.match(component, /currentMonth/);
    assert.doesNotMatch(component, /June 2026/);
  }

  assert.match(impact, /Page viewed {currentMonth}/);
  assert.match(impact, /Tech Immigrants contributor brief/);
  assert.doesNotMatch(impact, /Snapshot updated/);
  assert.match(hero, /dateTime={currentYearMonth}/);
  assert.match(footer, /Page context · {currentMonth}/);
  assert.doesNotMatch(footer, /Community snapshot/);
});

test("the revised page removes rejected institutional copy", () => {
  const hero = readProjectFile("src/english/components/HeroSection.tsx");
  const impact = readProjectFile("src/english/components/ImpactSection.tsx");
  const invitation = readProjectFile("src/english/components/InvitationFooter.tsx");

  assert.doesNotMatch(impact, /Trust at scale/);
  assert.doesNotMatch(invitation, /Keep the experience moving/);
  assert.doesNotMatch(invitation, /Founded by|Sahar Pakseresht/i);
  assert.doesNotMatch(hero, /Open by default/);
  assert.match(invitation, /Powered by community/);
});

test("phone labels stay legible and decorative panels do not add unnamed landmarks", () => {
  const css = readProjectFile("src/english/english-home.css");
  const giveForward = readProjectFile("src/english/components/GiveForwardSection.tsx");
  const listening = readProjectFile("src/english/components/ListeningSection.tsx");
  const invitationLabel = css.match(/\.eh-invitation-card small\s*{([^}]*)}/)?.[1] ?? "";
  const mobile = css.match(/@media \(max-width: 760px\)\s*{([\s\S]*?)@media \(max-width: 430px\)/)?.[1] ?? "";

  assert.match(invitationLabel, /font-size:\s*0\.625rem/);
  assert.match(mobile, /\.eh-pulse__stats dt\s*{[^}]*font-size:\s*0\.625rem/s);
  assert.doesNotMatch(giveForward, /<aside className="eh-principle"/);
  assert.doesNotMatch(listening, /<aside className="eh-insight__signal"/);
});

test("the English header adopts the floating workshop navigation language", () => {
  const css = readProjectFile("src/english/english-home.css");
  const header = css.match(/\.eh-header\s*{([^}]*)}/)?.[1] ?? "";

  assert.match(header, /top:\s*1rem/);
  assert.match(header, /width:\s*min\(calc\(100% - 2rem\), 1240px\)/);
  assert.match(header, /border-radius:\s*1\.25rem/);
  assert.match(header, /backdrop-filter:\s*blur\(20px\)/);
});

test("the English visual system uses the workshop-inspired blue surfaces", () => {
  const css = readProjectFile("src/english/english-home.css");
  const buttonRule = css.match(/\.eh-button\s*{([^}]*)}/)?.[1] ?? "";
  const heroRule = css.match(/\.eh-hero\s*{([^}]*)}/)?.[1] ?? "";

  assert.match(css, /--eh-paper:\s*#f2f6fa/);
  assert.match(css, /--eh-blue:\s*#0b84c6/);
  assert.match(css, /--eh-navy:\s*#0b2942/);
  assert.match(css, /--eh-radius-card:\s*1\.5rem/);
  assert.match(css, /--eh-radius-pill:\s*999px/);
  assert.match(buttonRule, /border-radius:\s*1rem/);
  assert.match(heroRule, /padding:\s*clamp\(2\.75rem, 4\.5vw, 4rem\)/);
});

test("mobile hero keeps its first actions within a compact first view", () => {
  const css = readProjectFile("src/english/english-home.css");
  const mobile = css.match(/@media \(max-width: 760px\)\s*{([\s\S]*?)@media \(max-width: 430px\)/)?.[1] ?? "";

  assert.match(mobile, /\.eh-hero\s*{[^}]*padding:\s*2rem 1rem 2\.5rem;/s);
  assert.match(mobile, /\.eh-hero h1\s*{[^}]*font-size:\s*clamp\(2\.65rem, 12\.2vw, 3\.6rem\)/s);
  assert.match(mobile, /\.eh-hero__lead\s*{[^}]*line-height:\s*1\.6/s);

  const shortPhone = css.match(/@media \(max-width: 430px\) and \(max-height: 700px\)\s*{([\s\S]*?)(?:@media|$)/)?.[1] ?? "";
  assert.match(shortPhone, /\.eh-hero\s*{[^}]*padding:\s*1\.25rem 0\.85rem 2rem;/s);
  assert.match(shortPhone, /\.eh-hero h1\s*{[^}]*font-size:\s*2\.35rem/s);
  assert.match(shortPhone, /\.eh-hero__lead\s*{[^}]*line-height:\s*1\.45/s);
});

test("short desktop viewports use the compact hero composition", () => {
  const css = readProjectFile("src/english/english-home.css");
  const shortDesktop = css.match(/@media \(min-width: 901px\) and \(max-height: 800px\)\s*{([\s\S]*?)(?:@media|$)/)?.[1] ?? "";

  assert.match(shortDesktop, /\.eh-hero\s*{[^}]*padding:\s*2rem 3\.2rem/s);
  assert.match(shortDesktop, /\.eh-hero h1\s*{[^}]*font-size:\s*clamp\(3\.1rem, 4\.2vw, 4\.25rem\)/s);
  assert.match(shortDesktop, /\.eh-pulse__visual\s*{[^}]*height:\s*16rem/s);
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

test("the primary closing action keeps white text on its blue gradient", () => {
  const css = readProjectFile("src/english/english-home.css");
  const primaryInvitation = css.match(/\.eh-invitation-card--primary\s*{([^}]*)}/)?.[1] ?? "";

  assert.match(primaryInvitation, /color:\s*var\(--eh-white\) !important/);
});

test("small interface text uses the darker accessible blue", () => {
  const css = readProjectFile("src/english/english-home.css");
  const flowNumber = css.match(/\.eh-flow__topline span\s*{([^}]*)}/)?.[1] ?? "";
  const insightNumber = css.match(/\.eh-insight__number\s*{([^}]*)}/)?.[1] ?? "";
  const invitationSmall = css.match(/\.eh-invitation-card--primary small\s*{([^}]*)}/)?.[1] ?? "";

  assert.match(flowNumber, /color:\s*var\(--eh-blue-deep\)/);
  assert.match(insightNumber, /color:\s*var\(--eh-blue-deep\)/);
  assert.match(invitationSmall, /color:\s*var\(--eh-white\)/);
});

test("continuous motion has a persistent pause control", () => {
  const page = readProjectFile("src/english/EnglishHomePage.tsx");
  const header = readProjectFile("src/english/components/EnglishHeader.tsx");
  const css = readProjectFile("src/english/english-home.css");

  assert.match(page, /motionPaused/);
  assert.match(page, /eh-motion-paused/);
  assert.match(header, /aria-pressed={motionPaused}/);
  assert.match(header, /Pause ambient motion/);
  assert.match(css, /\.eh-motion-paused[^{]*{[^}]*animation-play-state:\s*paused !important/s);
});

test("community insight copy stays page-scoped and typographic emphasis stays unique", () => {
  const listening = readProjectFile("src/english/components/ListeningSection.tsx");
  const css = readProjectFile("src/english/english-home.css");

  assert.doesNotMatch(listening, /remain private/i);
  assert.match(listening, /No member messages are displayed or quoted on this page/);
  assert.equal(css.match(/font-family:\s*"Newsreader"/g)?.length, 1);
});

test("mobile statistic sizing targets values without enlarging definitions", () => {
  const css = readProjectFile("src/english/english-home.css");
  const mobile = css.match(/@media \(max-width: 760px\)\s*{([\s\S]*?)@media \(max-width: 430px\)/)?.[1] ?? "";

  assert.doesNotMatch(mobile, /\.eh-stat dd\s*{/);
  assert.match(mobile, /\.eh-stat__value\s*{[^}]*font-size:/s);
  assert.match(mobile, /\.eh-stats\s*{[^}]*gap:/s);
});
