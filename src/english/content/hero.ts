import { siteLinks } from "./site";

export const heroContent = {
  status: "54K+ people across six channels",
  headingLead: "Six years of Persian speakers in tech",
  headingRest: "helping each other",
  headingEmphasis: "move forward.",
  lead:
    "Engineers, product managers, designers, and data teams share what actually worked. CVs and interviews, visas and relocation, and the part nobody warns you about: life after the move.",
  actions: {
    telegram: { label: "Join on Telegram", href: siteLinks.telegram },
    youtube: { label: "Watch on YouTube", href: siteLinks.youtube },
    persian: { label: "Explore the Persian site", href: siteLinks.persian },
  },
  trust: ["Volunteer-run", "Persian-language", "No paid ads"],
  board: {
    title: "Community channels",
    total: "54K+",
    totalLabel: "combined reach",
    note: "Growth without paid acquisition.",
  },
} as const;

export const tickerTopics = [
  "CVs that get read",
  "Interviews",
  "Visas and paperwork",
  "Relocation",
  "Salary and offers",
  "First 90 days",
  "Finding your people",
  "Open-source tools",
  "Workshops",
] as const;
