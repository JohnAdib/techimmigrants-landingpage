export interface JourneyStage {
  number: string;
  title: string;
  description: string;
  examples: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  detail: string;
  emphasis?: boolean;
}

export interface ChannelLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface CommunityChannel {
  id: "telegram" | "youtube" | "public" | "github" | "workshops";
  label: string;
  title: string;
  description: string;
  badge?: string;
  links: ChannelLink[];
}

export const siteLinks = {
  persian: "/fa/",
  workshops: "/fa/workshops",
  telegram: "https://t.me/techimmigrants",
  youtube: "https://youtube.com/@techimmigrants",
  linkedin: "https://www.linkedin.com/company/techimmigrants",
  x: "https://x.com/tech_immigrants",
  instagram: "https://instagram.com/techimmigrants",
  github: "https://github.com/TechImmigrants",
} as const;

export const navigation = [
  { label: "Our story", href: "#story" },
  { label: "The shared path", href: "#journey" },
  { label: "Reach", href: "#reach" },
  { label: "In action", href: "#community" },
] as const;

export const journeyStages: JourneyStage[] = [
  {
    number: "01",
    title: "Find direction",
    description: "Turn a vague ambition into a path that fits the person, the role, and the life they want to build.",
    examples: "Clarity · role fit · confidence",
  },
  {
    number: "02",
    title: "Shape the story",
    description: "Translate experience into a clear professional narrative that can travel across markets and cultures.",
    examples: "CV · LinkedIn · value proposition",
  },
  {
    number: "03",
    title: "Enter the market",
    description: "Learn how others found opportunities, built trust, handled rejection, interviewed, and negotiated offers.",
    examples: "Networking · applications · interviews",
  },
  {
    number: "04",
    title: "Make the move",
    description: "Prepare for relocation and the practical, professional, and emotional reality after arrival.",
    examples: "Relocation · onboarding · belonging",
  },
  {
    number: "05",
    title: "Share it forward",
    description: "Return hard-won lessons to the community so the next person starts with more context and less uncertainty.",
    examples: "Mentoring · stories · peer support",
  },
];

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
  },
  {
    value: "10K+",
    label: "YouTube subscribers",
    detail: "Long-form interviews, Q&As, and live sessions.",
  },
  {
    value: "350K+",
    label: "YouTube channel views",
    detail: "Sustained demand for practical, experience-led content.",
  },
  {
    value: "70K+",
    label: "watch hours",
    detail: "Attention measured in depth, not only clicks.",
  },
  {
    value: "10K+",
    label: "X / Twitter reach",
    detail: "Public conversations and shared opportunities.",
  },
  {
    value: "9K+",
    label: "LinkedIn reach",
    detail: "Professional stories and community updates.",
  },
];

export const recurringNeeds = [
  "Clarity",
  "Confidence",
  "Direction",
  "Storytelling",
  "A trusted network",
] as const;

export const communityChannels: CommunityChannel[] = [
  {
    id: "telegram",
    label: "Real-time exchange",
    title: "Peer questions become shared answers.",
    description: "The Telegram community is where members ask, compare, challenge, and help—while the details are still fresh.",
    badge: "Persian-language",
    links: [{ label: "Open Telegram", href: siteLinks.telegram, external: true }],
  },
  {
    id: "youtube",
    label: "Long-form experience",
    title: "The full story, not the polished summary.",
    description: "Interviews and live sessions make room for decisions, setbacks, interviews, relocation, and what happened afterwards.",
    badge: "Persian-language",
    links: [{ label: "Watch on YouTube", href: siteLinks.youtube, external: true }],
  },
  {
    id: "public",
    label: "Public conversation",
    title: "Useful knowledge travels beyond the group.",
    description: "LinkedIn and X carry community updates, professional context, opportunities, and lessons into the wider tech ecosystem.",
    links: [
      { label: "LinkedIn", href: siteLinks.linkedin, external: true },
      { label: "X / Twitter", href: siteLinks.x, external: true },
    ],
  },
  {
    id: "github",
    label: "Open-source practice",
    title: "Members build tools, not only conversations.",
    description: "Community projects turn repeated needs into resources that can be inspected, improved, and shared by anyone.",
    links: [{ label: "Explore GitHub", href: siteLinks.github, external: true }],
  },
  {
    id: "workshops",
    label: "Practical learning",
    title: "Recurring needs become hands-on sessions.",
    description: "Small workshops use real examples and clear next steps to turn community insight into action.",
    badge: "Persian-language",
    links: [{ label: "View workshops", href: siteLinks.workshops }],
  },
];
