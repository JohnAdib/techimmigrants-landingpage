import { ArrowDownRight, RotateCw } from "lucide-react";

const loop = [
  { number: "01", label: "Someone navigates the hard part" },
  { number: "02", label: "They share what actually happened" },
  { number: "03", label: "The next person starts with context" },
] as const;

export function GiveForwardSection() {
  return (
    <section className="eh-section eh-story" id="story" aria-labelledby="story-title">
      <div className="eh-section__index" data-reveal>
        <span>01</span>
        <span>The idea</span>
      </div>

      <div className="eh-story__headline" data-reveal>
        <span className="eh-eyebrow">A give-forward community</span>
        <h2 id="story-title">A difficult path becomes easier when experience can travel back.</h2>
      </div>

      <div className="eh-story__body" data-reveal>
        <p>
          When one member learns how to shape a CV, recover from rejection, navigate an interview, relocate, or build a life in a new country, that knowledge does not disappear into a private success story.
        </p>
        <p>
          It returns through candid interviews, live Q&As, practical resources, workshops, open-source tools, and thousands of everyday peer conversations.
        </p>
      </div>

      <blockquote className="eh-pullquote" data-reveal>
        <span aria-hidden="true">“</span>
        <p>Those who make the move help the next person make theirs.</p>
      </blockquote>

      <div className="eh-loop" aria-label="The Tech Immigrants knowledge loop" data-reveal>
        <RotateCw className="eh-loop__orbit" aria-hidden="true" />
        {loop.map((item, index) => (
          <div className="eh-loop__step" key={item.number}>
            <span>{item.number}</span>
            <p>{item.label}</p>
            {index < loop.length - 1 && <ArrowDownRight aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
