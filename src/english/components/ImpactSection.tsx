import { impactStats } from "../englishHomeContent";
import { currentMonth } from "../reportingPeriod";

export function ImpactSection() {
  return (
    <section className="eh-impact" id="reach" aria-labelledby="impact-title">
      <div className="eh-impact__topline" aria-hidden="true">
        <span>Trust over time</span>
        <span>Reach with depth</span>
        <span>Growth without paid ads</span>
      </div>

      <div className="eh-impact__inner">
        <div className="eh-section__index eh-section__index--dark" data-reveal>
          <span>03</span>
          <span>Community reach</span>
        </div>

        <header className="eh-impact__heading" data-reveal>
          <span className="eh-eyebrow">A community people choose to return to</span>
          <h2 id="impact-title">The numbers are proof of attention. The real value is what people do with it.</h2>
          <p>Reach matters here because it gives useful experience somewhere to go—and gives recurring questions a chance to become shared resources.</p>
        </header>

        <dl className="eh-stats">
          {impactStats.map((stat) => (
            <div className={stat.emphasis ? "eh-stat eh-stat--emphasis" : "eh-stat"} key={`${stat.value}-${stat.label}`} data-reveal>
              <dt>{stat.label}</dt>
              <dd className="eh-stat__value">{stat.value}</dd>
              <dd className="eh-stat__detail">{stat.detail}</dd>
            </div>
          ))}
        </dl>

        <p className="eh-impact__note" data-reveal>
          Page viewed {currentMonth}. Figures are approximate and sourced from the Tech Immigrants contributor brief. Cross-platform reach combines followers and subscribers; audiences may overlap.
        </p>
      </div>
    </section>
  );
}
