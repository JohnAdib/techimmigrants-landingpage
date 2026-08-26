export interface StoryStep {
  step: string;
  label: string;
  title: string;
  description: string;
}

export const storyHeading = {
  eyebrow: "How the community works",
  title: "Experience compounds when it is shared.",
  lead: "Every move someone makes creates knowledge. We make sure it does not stay private.",
} as const;

export const storySteps: StoryStep[] = [
  {
    step: "01",
    label: "Navigate",
    title: "Someone finds a way through.",
    description:
      "A stronger CV, a better interview answer, a clearer relocation decision, or simply the confidence to keep going.",
  },
  {
    step: "02",
    label: "Share",
    title: "They explain what actually happened.",
    description:
      "Not the polished success story. The decisions, the mistakes, the trade-offs, and the context that made the difference.",
  },
  {
    step: "03",
    label: "Advance",
    title: "The next person starts further ahead.",
    description:
      "That experience returns to the community as practical guidance someone else can adapt to their own path.",
  },
];

export const storyPrinciple = {
  label: "The give-forward principle",
  quote: "Those who make the move help the next person make theirs.",
} as const;
