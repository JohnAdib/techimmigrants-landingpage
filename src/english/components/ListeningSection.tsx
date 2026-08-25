import { Check, MessageSquareText, ShieldCheck } from "lucide-react";
import { recurringNeeds } from "../englishHomeContent";

export function ListeningSection() {
  return (
    <section className="eh-section eh-listening" aria-labelledby="listening-title">
      <header className="eh-section-heading eh-section-heading--split" data-reveal>
        <div>
          <span className="eh-eyebrow">What the conversation reveals</span>
          <h2 id="listening-title">A better CV is rarely the whole answer.</h2>
        </div>
        <p>Years of recurring questions show that career readiness begins earlier: with clarity, confidence, a coherent story, and people you can trust.</p>
      </header>

      <div className="eh-insight" data-reveal>
        <div className="eh-insight__signal">
          <div className="eh-insight__icon"><MessageSquareText aria-hidden="true" /></div>
          <span>CONVERSATIONS STUDIED</span>
          <strong>~200K</strong>
          <p>Telegram messages analysed for recurring themes and practical needs.</p>
          <small><ShieldCheck aria-hidden="true" /> No member messages are displayed or quoted on this page.</small>
        </div>

        <div className="eh-insight__needs" aria-label="Recurring community needs">
          <div className="eh-insight__needs-header">
            <span>What appears again and again</span>
            <small>Five readiness signals</small>
          </div>
          {recurringNeeds.map((need, index) => (
            <article key={need.title}>
              <span className="eh-insight__number">0{index + 1}</span>
              <div><h3>{need.title}</h3><p>{need.description}</p></div>
              <Check aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>

      <div className="eh-readiness-note" data-reveal>
        <span>OUR STARTING POINT</span>
        <p>We do not start from the CV. We start from the person becoming ready to tell their story.</p>
      </div>
    </section>
  );
}
