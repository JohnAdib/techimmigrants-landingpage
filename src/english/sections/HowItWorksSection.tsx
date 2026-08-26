import { useRef } from "react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { storyHeading, storyPrinciple, storySteps } from "../content/story";
import { useScrollProgress } from "../hooks/useScrollProgress";

export function HowItWorksSection() {
  const flowRef = useRef<HTMLDivElement>(null);
  useScrollProgress(flowRef);

  return (
    <section className="ti-section ti-shell" id="how-it-works" aria-labelledby="how-title">
      <SectionHeading
        id="how-title"
        eyebrow={storyHeading.eyebrow}
        title={storyHeading.title}
        lead={storyHeading.lead}
      />

      <div className="ti-flow" ref={flowRef}>
        <span className="ti-flow__rail" aria-hidden="true">
          <i />
        </span>

        {storySteps.map((step, index) => (
          <Reveal as="article" className="ti-flow__step" index={index} key={step.step}>
            <span className="ti-flow__node" aria-hidden="true" />
            <span className="ti-label">
              {step.step} · {step.label}
            </span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="ti-principle">
        <span className="ti-label">{storyPrinciple.label}</span>
        <p>{storyPrinciple.quote}</p>
      </Reveal>
    </section>
  );
}
