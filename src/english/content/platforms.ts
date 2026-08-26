import { communityStats, socialProfiles } from "./communityData";

export type PlatformId = keyof typeof socialProfiles;

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
    metric: communityStats.telegramMembers,
    metricLabel: "members",
    ...socialProfiles.telegram,
    href: socialProfiles.telegram.url,
  },
  {
    id: "youtube",
    name: "YouTube",
    metric: communityStats.youtubeSubscribers,
    metricLabel: "subscribers",
    ...socialProfiles.youtube,
    href: socialProfiles.youtube.url,
  },
  {
    id: "x",
    name: "X",
    metric: communityStats.xFollowers,
    metricLabel: "followers",
    ...socialProfiles.x,
    href: socialProfiles.x.url,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    metric: communityStats.linkedinFollowers,
    metricLabel: "followers",
    ...socialProfiles.linkedin,
    href: socialProfiles.linkedin.url,
  },
  {
    id: "instagram",
    name: "Instagram",
    ...socialProfiles.instagram,
    href: socialProfiles.instagram.url,
  },
  {
    id: "github",
    name: "GitHub",
    ...socialProfiles.github,
    href: socialProfiles.github.url,
  },
];

export const platformById = platforms.reduce<Record<string, Platform>>(
  (map, platform) => ({ ...map, [platform.id]: platform }),
  {},
);
