import { spellNumber } from "../lib/spellNumber";
import { channelCount, communityStats, communityYears } from "./communityData";
import type { PlatformId } from "./platforms";

export interface ImpactStat {
  value: string;
  label: string;
  detail: string;
  emphasis?: boolean;
  platform?: PlatformId;
}

const years = communityYears();

export const impactHeading = {
  eyebrow: "Community reach",
  title: `${spellNumber(years)} years, ${spellNumber(channelCount).toLowerCase()} channels, no advertising.`,
  lead: "Every number below links to the place it came from. Check any of them.",
  topline: ["Trust over time", "Reach with depth", "Growth without paid ads"],
} as const;

export const impactStats: ImpactStat[] = [
  {
    value: `${years} years`,
    label: "of community building",
    detail: "Grown through lived experience and peer trust.",
    emphasis: true,
  },
  {
    value: communityStats.crossPlatformReach,
    label: "cross-platform reach",
    detail: "Followers and subscribers across community channels.",
    emphasis: true,
  },
  {
    value: communityStats.telegramMembers,
    label: "Telegram reach",
    detail: "The community's daily conversation and support layer.",
    platform: "telegram",
  },
  {
    value: communityStats.youtubeSubscribers,
    label: "YouTube subscribers",
    detail: "Long-form interviews, Q&As, and live sessions.",
    platform: "youtube",
  },
  {
    value: communityStats.youtubeViews,
    label: "YouTube channel views",
    detail: "Sustained demand for practical, experience-led content.",
    platform: "youtube",
  },
  {
    value: communityStats.watchHours,
    label: "watch hours",
    detail: "Attention measured in depth, not only clicks.",
    platform: "youtube",
  },
  {
    value: communityStats.xFollowers,
    label: "X / Twitter reach",
    detail: "Public conversations and shared opportunities.",
    platform: "x",
  },
  {
    value: communityStats.linkedinFollowers,
    label: "LinkedIn reach",
    detail: "Professional stories and community updates.",
    platform: "linkedin",
  },
];

export const impactNote = (month: string) =>
  `Page viewed ${month}. Figures are approximate and sourced from the Tech Immigrants contributor brief. Cross-platform reach combines followers and subscribers; audiences may overlap.`;
