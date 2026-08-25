import { journeyStages } from "../englishHomeContent";

export function JourneySection() {
  return (
    <section className="eh-section eh-journey" id="journey" aria-labelledby="journey-title">
      <div className="eh-section__index eh-section__index--light" data-reveal>
        <span>02</span>
        <span>The shared path</span>
      </div>

      <header className="eh-section-heading" data-reveal>
        <span className="eh-eyebrow">What members navigate together</span>
        <h2 id="journey-title">From the first uncertain question to giving back with confidence.</h2>
        <p>Migration is not one application. It is a sequence of decisions, setbacks, transitions, and new beginnings—and every stage carries knowledge worth sharing.</p>
      </header>

      <ol className="eh-journey__list">
        {journeyStages.map((stage) => (
          <li key={stage.number} data-reveal>
            <div className="eh-journey__marker">
              <span>{stage.number}</span>
              <i aria-hidden="true" />
            </div>
            <article>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <small>{stage.examples}</small>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
