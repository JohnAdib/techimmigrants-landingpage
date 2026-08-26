import { ActionButton } from "../components/ActionButton";
import { ChannelBoard } from "../components/ChannelBoard";
import { LiveDot } from "../components/LiveDot";
import { heroContent } from "../content/hero";

export function HeroSection() {
  const { status, headingLead, headingRest, headingEmphasis, lead, actions, trust } =
    heroContent;

  return (
    <section className="ti-hero ti-shell--wide" aria-labelledby="hero-title">
      <span className="ti-hero__aura ti-hero__aura--a" aria-hidden="true" />
      <span className="ti-hero__aura ti-hero__aura--b" aria-hidden="true" />

      <div className="ti-hero__copy">
        <p className="ti-hero__status">
          <LiveDot />
          <span>{status}</span>
        </p>

        <h1 id="hero-title">
          {headingLead} {headingRest} <em>{headingEmphasis}</em>
        </h1>

        <p className="ti-hero__lead">{lead}</p>

        <div className="ti-hero__actions">
          <ActionButton href={actions.telegram.href} platform="telegram">
            {actions.telegram.label}
          </ActionButton>
          <ActionButton href={actions.youtube.href} platform="youtube" variant="solid">
            {actions.youtube.label}
          </ActionButton>
        </div>

        <ul className="ti-hero__trust">
          {trust.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <ChannelBoard />
    </section>
  );
}
