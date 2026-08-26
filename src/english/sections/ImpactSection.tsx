import { Reveal } from "../components/Reveal";
import { StatCard } from "../components/StatCard";
import { impactHeading, impactNote, impactStats } from "../content/metrics";
import { currentMonth } from "../reportingPeriod";

export function ImpactSection() {
  return (
    <section
      className="ti-impact ti-surface--inverse"
      id="reach"
      aria-labelledby="impact-title"
    >
      <div className="ti-impact__topline" aria-hidden="true">
        {impactHeading.topline.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="ti-impact__inner ti-shell--wide">
        <Reveal className="ti-impact__head">
          <span className="ti-eyebrow">{impactHeading.eyebrow}</span>
          <h2 id="impact-title">{impactHeading.title}</h2>
          <p className="ti-lead">{impactHeading.lead}</p>
        </Reveal>

        <dl className="ti-stats">
          {impactStats.map((stat, index) => (
            <StatCard key={`${stat.value}-${stat.label}`} stat={stat} index={index} />
          ))}
        </dl>

        <Reveal as="p" className="ti-impact__note">
          {impactNote(currentMonth)}
        </Reveal>
      </div>
    </section>
  );
}
