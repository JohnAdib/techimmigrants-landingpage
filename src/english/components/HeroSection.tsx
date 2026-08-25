import { ArrowDown, ArrowRight } from "lucide-react";
import { siteLinks } from "../englishHomeContent";
import { currentMonth, currentYearMonth } from "../reportingPeriod";

const pulseStats = [
  { value: "54K+", label: "cross-platform reach" },
  { value: "Six years", label: "built together" },
  { value: "Organic", label: "community growth" },
] as const;

export function HeroSection() {
  return (
    <section className="eh-hero" aria-labelledby="hero-title">
      <div className="eh-hero__copy" data-reveal>
        <span className="eh-eyebrow">
          <span>Persian-speaking tech community</span>
          <span aria-hidden="true">•</span>
          <span>Across borders, careers, and new beginnings</span>
        </span>
        <h1 id="hero-title">
          Where lived immigration experience becomes <em>shared advantage.</em>
        </h1>
        <p className="eh-hero__lead">
          Persian-speaking tech professionals share what actually helped—from CVs and interviews to relocation, career growth, and building a life after the move.
        </p>
        <div className="eh-actions">
          <a className="eh-button eh-button--primary" href="#story">
            See how knowledge travels <ArrowDown aria-hidden="true" />
          </a>
          <a className="eh-text-link" href={siteLinks.persian}>
            Visit the Persian community <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="eh-hero__proof" aria-label="Community principles">
          <span>Peer-led</span><i aria-hidden="true" /><span>Experience-first</span><i aria-hidden="true" /><span>Community-powered</span>
        </div>
      </div>

      <aside className="eh-pulse" aria-label="Community pulse" data-reveal>
        <div className="eh-pulse__header">
          <span><i aria-hidden="true" /> Community pulse</span>
          <time dateTime={currentYearMonth} aria-label={`Page context: ${currentMonth}`}>{currentMonth}</time>
        </div>

        <div className="eh-pulse__visual" aria-hidden="true">
          <div className="eh-hero__route">
            <svg viewBox="0 0 620 360" role="presentation">
              <path className="eh-route-line eh-route-line--ghost" d="M30 292C118 286 116 105 230 122s134 126 225 43S521 38 592 42" />
              <path className="eh-route-line" d="M30 292C118 286 116 105 230 122s134 126 225 43S521 38 592 42" />
              <circle cx="30" cy="292" r="8" />
              <circle cx="230" cy="122" r="8" />
              <circle cx="455" cy="165" r="8" />
              <circle cx="592" cy="42" r="11" />
            </svg>
          </div>
          <div className="eh-pulse__signal">
            <span>EXPERIENCE</span>
            <strong>shared</strong>
            <small>forward</small>
          </div>
          <span className="eh-pulse__label eh-pulse__label--from">One person learns</span>
          <span className="eh-pulse__label eh-pulse__label--to">The next starts ahead</span>
        </div>

        <dl className="eh-pulse__stats">
          {pulseStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
        <p className="eh-pulse__note">No paid acquisition. Growth built through useful conversations and the choice to help the next person.</p>
      </aside>
    </section>
  );
}
