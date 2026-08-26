import { siteLinks } from "./site";

export type InvitationKind = "telegram" | "youtube";

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
  lead: "Ask a question while it is still fresh, or sit with the full story from someone who has already made the move.",
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
];
