import type { PlatformId } from "./platforms";

export interface ImpactStat {
  value: string;
  label: string;
  detail: string;
  emphasis?: boolean;
  platform?: PlatformId;
}

export const impactHeading = {
  eyebrow: "Community reach",
  title: "Six years, six channels, no advertising.",
  lead: "Every number below links to the place it came from. Check any of them.",
  topline: ["Trust over time", "Reach with depth", "Growth without paid ads"],
} as const;

export const impactStats: ImpactStat[] = [
  {
    value: "6 years",
    label: "of community building",
    detail: "Grown through lived experience and peer trust.",
    emphasis: true,
  },
  {
    value: "54K+",
    label: "cross-platform reach",
    detail: "Followers and subscribers across community channels.",
    emphasis: true,
  },
  {
    value: "25K+",
    label: "Telegram reach",
    detail: "The community's daily conversation and support layer.",
    platform: "telegram",
  },
  {
    value: "10K+",
    label: "YouTube subscribers",
    detail: "Long-form interviews, Q&As, and live sessions.",
    platform: "youtube",
  },
  {
    value: "350K+",
    label: "YouTube channel views",
    detail: "Sustained demand for practical, experience-led content.",
    platform: "youtube",
  },
  {
    value: "70K+",
    label: "watch hours",
    detail: "Attention measured in depth, not only clicks.",
    platform: "youtube",
  },
  {
    value: "10K+",
    label: "X / Twitter reach",
    detail: "Public conversations and shared opportunities.",
    platform: "x",
  },
  {
    value: "9K+",
    label: "LinkedIn reach",
    detail: "Professional stories and community updates.",
    platform: "linkedin",
  },
];

export const impactNote = (month: string) =>
  `Page viewed ${month}. Figures are approximate and sourced from the Tech Immigrants contributor brief. Cross-platform reach combines followers and subscribers; audiences may overlap.`;
