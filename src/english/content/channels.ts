import { siteLinks } from "./site";

export type ChannelId = "telegram" | "youtube" | "public" | "github" | "workshops";

export interface ChannelLink {
  label: string;
  href: string;
}

export interface CommunityChannel {
  id: ChannelId;
  label: string;
  title: string;
  description: string;
  badge?: string;
  links: ChannelLink[];
}

export const channelsHeading = {
  eyebrow: "Where the community meets",
  title: "Choose the conversation you need.",
  lead: "Most activity happens in Persian. Each channel is built for a different depth, from a quick peer answer to a full interview or a hands-on workshop.",
} as const;

export const communityChannels: CommunityChannel[] = [
  {
    id: "telegram",
    label: "Real-time exchange",
    title: "Peer questions become shared answers.",
    description:
      "The Telegram community is where members ask, compare, challenge, and help while the details are still fresh.",
    badge: "Persian-language",
    links: [{ label: "Open Telegram", href: siteLinks.telegram }],
  },
  {
    id: "youtube",
    label: "Long-form experience",
    title: "The full story, not the polished summary.",
    description:
      "Interviews and live sessions make room for decisions, setbacks, relocation, and what happened afterwards.",
    badge: "Persian-language",
    links: [{ label: "Watch on YouTube", href: siteLinks.youtube }],
  },
  {
    id: "public",
    label: "Public conversation",
    title: "Useful knowledge travels beyond the group.",
    description:
      "LinkedIn and X carry community updates, professional context, opportunities, and lessons into the wider tech ecosystem.",
    links: [
      { label: "LinkedIn", href: siteLinks.linkedin },
      { label: "X / Twitter", href: siteLinks.x },
    ],
  },
  {
    id: "github",
    label: "Open-source practice",
    title: "Members build tools, not only conversations.",
    description:
      "Community projects turn repeated needs into resources anyone can inspect, improve, and share.",
    links: [{ label: "Explore GitHub", href: siteLinks.github }],
  },
  {
    id: "workshops",
    label: "Practical learning",
    title: "Recurring needs become hands-on sessions.",
    description:
      "Small workshops use real examples and clear next steps to turn community insight into action.",
    badge: "Persian-language",
    links: [],
  },
];
