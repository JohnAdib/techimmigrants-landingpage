import { ArrowDown, ArrowRight } from "lucide-react";
import { siteLinks } from "../englishHomeContent";

export function HeroSection() {
  return (
    <section className="eh-hero" aria-labelledby="hero-title">
      <div className="eh-hero__route" aria-hidden="true">
        <svg viewBox="0 0 620 540" role="presentation">
          <path className="eh-route-line eh-route-line--ghost" d="M30 440C105 365 90 236 197 202s149 70 224 5 49-142 170-163" />
          <path className="eh-route-line" d="M30 440C105 365 90 236 197 202s149 70 224 5 49-142 170-163" />
          <circle cx="30" cy="440" r="8" />
          <circle cx="197" cy="202" r="8" />
          <circle cx="421" cy="207" r="8" />
          <circle cx="591" cy="44" r="11" />
        </svg>
        <span className="eh-route-note eh-route-note--one">experience</span>
        <span className="eh-route-note eh-route-note--two">context</span>
        <span className="eh-route-note eh-route-note--three">shared forward</span>
      </div>

      <div className="eh-hero__copy" data-reveal>
        <span className="eh-eyebrow">
          <span>Persian-speaking tech community</span>
          <span aria-hidden="true">/</span>
          <span>Six years of shared experience</span>
        </span>
        <h1 id="hero-title">
          Where lived immigration experience becomes <em>shared advantage.</em>
        </h1>
        <p className="eh-hero__lead">
          Tech Immigrants turns the hard-won experience of Persian-speaking tech professionals into practical guidance for people navigating international careers, migration, relocation, and belonging.
        </p>
        <div className="eh-actions">
          <a className="eh-button eh-button--primary" href="#story">
            See how it works <ArrowDown aria-hidden="true" />
          </a>
          <a className="eh-text-link" href={siteLinks.persian}>
            Visit the Persian community <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <aside className="eh-field-note" aria-label="Community field notes" data-reveal>
        <div className="eh-field-note__heading">
          <span>Field notes</span>
          <span>June 2026</span>
        </div>
        <dl>
          <div>
            <dt>Community reach</dt>
            <dd>54K+</dd>
          </div>
          <div>
            <dt>Built together</dt>
            <dd>6 years</dd>
          </div>
          <div>
            <dt>Growth model</dt>
            <dd>Organic</dd>
          </div>
        </dl>
        <p>No paid ads. No sponsor-led growth. Trust built through useful conversations, practical support, and the decision to help the next person.</p>
      </aside>

      <div className="eh-hero__caption" aria-hidden="true">
        <span>IR</span><i /> <span>WORLD</span>
      </div>
    </section>
  );
}
