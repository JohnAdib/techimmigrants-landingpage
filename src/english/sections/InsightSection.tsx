import { ShieldCheck } from "lucide-react";
import type { CSSProperties } from "react";
import { MetricValue } from "../components/MetricValue";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import {
  insightBoard,
  insightClosing,
  insightHeading,
  insightSignal,
  recurringNeeds,
} from "../content/insight";

export function InsightSection() {
  return (
    <section className="ti-section ti-shell" aria-labelledby="insight-title">
      <SectionHeading
        id="insight-title"
        eyebrow={insightHeading.eyebrow}
        title={insightHeading.title}
        lead={insightHeading.lead}
        split
      />

      <Reveal className="ti-insight">
        <div className="ti-insight__signal ti-surface--inverse ti-slab">
          <span className="ti-label">{insightSignal.label}</span>
          <strong className="ti-serif">
            <MetricValue value={insightSignal.value} />
          </strong>
          <p>{insightSignal.description}</p>
          <small>
            <ShieldCheck aria-hidden="true" />
            {insightSignal.privacy}
          </small>
        </div>

        <div className="ti-insight__board">
          <header className="ti-insight__board-head">
            <p className="ti-label">{insightBoard.title}</p>
            <small>{insightBoard.hint}</small>
          </header>

          {recurringNeeds.map((need, index) => (
            <article
              className="ti-need"
              key={need.title}
              style={{ "--need-rank": recurringNeeds.length - index } as CSSProperties}
            >
              <span className="ti-need__index ti-label">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{need.title}</h3>
                <p>{need.description}</p>
              </div>
              <span className="ti-need__meter" aria-hidden="true">
                <i />
              </span>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="ti-principle ti-principle--quiet">
        <span className="ti-label">{insightClosing.label}</span>
        <p>{insightClosing.quote}</p>
      </Reveal>
    </section>
  );
}
