import { communityStats } from "./communityData";

export interface RecurringNeed {
  title: string;
  description: string;
}

export const insightHeading = {
  eyebrow: "What the conversation reveals",
  title: "A better CV is rarely the whole answer.",
  lead: "Years of recurring questions show that readiness starts earlier, with clarity, confidence, a story that holds together, and people you can ask.",
} as const;

export const insightSignal = {
  label: "Conversations studied",
  value: communityStats.conversationsStudied,
  description:
    "Telegram messages analysed for recurring themes and practical needs.",
  privacy: "No member messages are displayed or quoted on this page.",
} as const;

export const recurringNeeds: RecurringNeed[] = [
  { title: "Clarity", description: "A realistic picture of the path ahead." },
  { title: "Confidence", description: "The language to explain what you can do." },
  { title: "Direction", description: "A useful next step instead of more noise." },
  { title: "Storytelling", description: "Experience shaped for a new market." },
  { title: "Trusted networks", description: "People who understand the context." },
];

export const insightBoard = {
  title: "What appears again and again",
  hint: "Ordered by how often it comes up",
} as const;

export const insightClosing = {
  label: "Our starting point",
  quote:
    "We do not start from the CV. We start from the person getting ready to tell their story.",
} as const;
