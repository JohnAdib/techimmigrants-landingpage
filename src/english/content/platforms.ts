import { siteLinks } from "./site";

export type PlatformId =
  | "telegram"
  | "youtube"
  | "x"
  | "linkedin"
  | "instagram"
  | "github";

export interface Platform {
  id: PlatformId;
  name: string;
  handle: string;
  href: string;
  metric?: string;
  metricLabel?: string;
}

export const platforms: Platform[] = [
  {
    id: "telegram",
    name: "Telegram",
    handle: "@techimmigrants",
    href: siteLinks.telegram,
    metric: "25K+",
    metricLabel: "members",
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "@techimmigrants",
    href: siteLinks.youtube,
    metric: "10K+",
    metricLabel: "subscribers",
  },
  {
    id: "x",
    name: "X",
    handle: "@tech_immigrants",
    href: siteLinks.x,
    metric: "10K+",
    metricLabel: "followers",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "techimmigrants",
    href: siteLinks.linkedin,
    metric: "9K+",
    metricLabel: "followers",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@techimmigrants",
    href: siteLinks.instagram,
  },
  {
    id: "github",
    name: "GitHub",
    handle: "TechImmigrants",
    href: siteLinks.github,
  },
];

export const platformById = platforms.reduce<Record<string, Platform>>(
  (map, platform) => ({ ...map, [platform.id]: platform }),
  {},
);
