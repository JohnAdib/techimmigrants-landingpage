import { persianSiteUrl, socialProfiles } from "./communityData";

export const siteLinks = {
  persian: persianSiteUrl,
  telegram: socialProfiles.telegram.url,
  youtube: socialProfiles.youtube.url,
  linkedin: socialProfiles.linkedin.url,
  x: socialProfiles.x.url,
  instagram: socialProfiles.instagram.url,
  github: socialProfiles.github.url,
} as const;

export const brand = {
  name: "Tech Immigrants",
  logo: "/brand-mark.png",
  tagline: "Community across borders",
  description:
    "A volunteer-run community of 54K+ Persian speakers in tech. Real experience on CVs, interviews, visas, relocation, and life after the move.",
  promise: "Powered by community.",
  persianLabel: "فارسی",
  persianHint: "Persian site",
} as const;
