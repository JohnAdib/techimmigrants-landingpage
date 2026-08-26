import { siteLinks } from "./site";

export type InvitationKind = "telegram" | "youtube" | "persian";

export interface InvitationCard {
  id: InvitationKind;
  overline: string;
  title: string;
  href: string;
  primary?: boolean;
}

export const invitationHeading = {
  eyebrow: "Start where it helps most",
  title: "The community is already talking.",
  lead: "Ask a question, hear the full story, or explore the Persian site and its resources.",
} as const;

export const invitationCards: InvitationCard[] = [
  {
    id: "telegram",
    overline: "Real-time community",
    title: "Join on Telegram",
    href: siteLinks.telegram,
    primary: true,
  },
  {
    id: "youtube",
    overline: "Interviews and live sessions",
    title: "Watch on YouTube",
    href: siteLinks.youtube,
  },
  {
    id: "persian",
    overline: "Persian website",
    title: "Explore the full community",
    href: siteLinks.persian,
  },
];
