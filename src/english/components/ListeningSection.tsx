import { ArrowRight, MessageSquareText } from "lucide-react";
import { recurringNeeds } from "../englishHomeContent";

export function ListeningSection() {
  return (
    <section className="eh-section eh-listening" aria-labelledby="listening-title">
      <div className="eh-section__index" data-reveal>
        <span>04</span>
        <span>Collective insight</span>
      </div>

      <div className="eh-listening__statement" data-reveal>
        <span className="eh-eyebrow">Listening at community scale</span>
        <h2 id="listening-title">People rarely get stuck only because they need a better CV.</h2>
        <p>
          Across years of Q&As, live sessions, and community conversations, the same deeper needs appear before market readiness.
        </p>
      </div>

      <aside className="eh-signal-card" data-reveal>
        <MessageSquareText aria-hidden="true" />
        <span>Community signal</span>
        <strong>~200K</strong>
        <p>Telegram messages analysed for recurring themes, questions, and practical needs.</p>
        <small>No member messages are displayed or quoted on this page.</small>
      </aside>

      <div className="eh-needs" aria-label="Recurring community needs" data-reveal>
        {recurringNeeds.map((need, index) => (
          <div key={need}>
            <span>{need}</span>
            {index < recurringNeeds.length - 1 && <ArrowRight aria-hidden="true" />}
          </div>
        ))}
      </div>

      <div className="eh-readiness-note" data-reveal>
        <span>Our starting point</span>
        <p>We do not start from CV. We start from readiness.</p>
      </div>
    </section>
  );
}
