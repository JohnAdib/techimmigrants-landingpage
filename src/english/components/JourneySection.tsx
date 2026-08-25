import { journeyStages } from "../englishHomeContent";

export function JourneySection() {
  return (
    <section className="eh-section eh-journey" id="journey" aria-labelledby="journey-title">
      <header className="eh-section-heading" data-reveal>
        <span className="eh-eyebrow">The shared path</span>
        <h2 id="journey-title">The move is bigger than the application.</h2>
        <p>Members support one another across the whole journey—from choosing a direction to building a career and a sense of belonging after arrival.</p>
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
