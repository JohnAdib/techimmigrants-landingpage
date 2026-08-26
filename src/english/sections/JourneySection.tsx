import { useRef } from "react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { journeyHeading, journeyStages } from "../content/journey";
import { useScrollProgress } from "../hooks/useScrollProgress";

export function JourneySection() {
  const listRef = useRef<HTMLOListElement>(null);
  useScrollProgress(listRef);

  return (
    <section className="ti-section ti-shell" id="journey" aria-labelledby="journey-title">
      <SectionHeading
        id="journey-title"
        eyebrow={journeyHeading.eyebrow}
        title={journeyHeading.title}
        lead={journeyHeading.lead}
        split
      />

      <ol className="ti-journey" ref={listRef}>
        <span className="ti-journey__rail" aria-hidden="true">
          <i />
        </span>

        {journeyStages.map((stage, index) => (
          <Reveal as="li" className="ti-journey__stage" index={index} key={stage.number}>
            <span className="ti-journey__node" aria-hidden="true">
              {stage.number}
            </span>
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <ul className="ti-journey__tags">
              {stage.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
