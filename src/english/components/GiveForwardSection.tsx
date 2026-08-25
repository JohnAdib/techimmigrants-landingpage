import { ArrowRight, Compass, Lightbulb, MessagesSquare } from "lucide-react";

const flow = [
  {
    icon: Compass,
    label: "Navigate",
    title: "Someone finds a way through.",
    description: "A stronger CV, a better interview answer, a clearer relocation decision, or simply the confidence to keep going.",
  },
  {
    icon: MessagesSquare,
    label: "Share",
    title: "They explain what actually happened.",
    description: "Not a polished success story—the decisions, mistakes, trade-offs, and context that made the difference.",
  },
  {
    icon: Lightbulb,
    label: "Advance",
    title: "The next person starts further ahead.",
    description: "Experience returns to the community as practical guidance that another person can adapt to their own path.",
  },
] as const;

export function GiveForwardSection() {
  return (
    <section className="eh-section eh-story" id="story" aria-labelledby="story-title">
      <header className="eh-section-heading" data-reveal>
        <span className="eh-eyebrow">How the community works</span>
        <h2 id="story-title">Experience compounds when it is shared.</h2>
        <p>Every successful move creates knowledge. Tech Immigrants makes sure that knowledge does not stay private.</p>
      </header>

      <div className="eh-flow" aria-label="The Tech Immigrants knowledge loop">
        {flow.map(({ icon: Icon, label, title, description }, index) => (
          <article className="eh-flow__step" key={label} data-reveal>
            <div className="eh-flow__topline">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon aria-hidden="true" />
            </div>
            <small>{label}</small>
            <h3>{title}</h3>
            <p>{description}</p>
            {index < flow.length - 1 && <ArrowRight className="eh-flow__arrow" aria-hidden="true" />}
          </article>
        ))}
      </div>

      <div className="eh-principle" data-reveal>
        <span>THE GIVE-FORWARD PRINCIPLE</span>
        <p>Those who make the move help the next person make theirs.</p>
      </div>
    </section>
  );
}
