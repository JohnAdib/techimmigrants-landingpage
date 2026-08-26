export interface JourneyStage {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const journeyHeading = {
  eyebrow: "The shared path",
  title: "The move is bigger than the application.",
  lead: "Members support each other across the whole journey, from choosing a direction to building a career and a sense of belonging after arrival.",
} as const;

export const journeyStages: JourneyStage[] = [
  {
    number: "01",
    title: "Find direction",
    description:
      "Turn a vague ambition into a path that fits the person, the role, and the life they want to build.",
    tags: ["Clarity", "Role fit", "Confidence"],
  },
  {
    number: "02",
    title: "Shape the story",
    description:
      "Translate experience into a clear professional narrative that travels across markets and cultures.",
    tags: ["CV", "LinkedIn", "Value"],
  },
  {
    number: "03",
    title: "Enter the market",
    description:
      "Learn how others found opportunities, built trust, handled rejection, interviewed, and negotiated offers.",
    tags: ["Networking", "Applications", "Interviews"],
  },
  {
    number: "04",
    title: "Make the move",
    description:
      "Prepare for relocation and the practical, professional, and emotional reality after arrival.",
    tags: ["Relocation", "Onboarding", "Belonging"],
  },
  {
    number: "05",
    title: "Share it forward",
    description:
      "Return hard-won lessons to the community so the next person starts with more context and less uncertainty.",
    tags: ["Mentoring", "Stories", "Peer support"],
  },
];
