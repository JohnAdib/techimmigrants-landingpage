import { ArrowUpRight } from "lucide-react";
import { PlatformIcon } from "../components/PlatformIcon";
import { Reveal } from "../components/Reveal";
import { invitationCards, invitationHeading } from "../content/invitation";
import { cx } from "../lib/cx";
import { externalLinkProps } from "../lib/externalLink";

export function InvitationSection() {
  return (
    <section className="ti-section ti-shell" aria-labelledby="invitation-title">
      <div className="ti-invitation ti-surface--inverse ti-slab">
        <Reveal className="ti-invitation__copy">
          <span className="ti-eyebrow">{invitationHeading.eyebrow}</span>
          <h2 id="invitation-title">{invitationHeading.title}</h2>
          <p className="ti-lead">{invitationHeading.lead}</p>
        </Reveal>

        <div className="ti-invitation__cards">
          {invitationCards.map((card, index) => (
            <Reveal
              className={cx("ti-invite", card.primary && "ti-invite--primary")}
              index={index}
              key={card.id}
            >
              <a
                className="ti-invite__hit"
                href={card.href}
                {...externalLinkProps(card.href)}
              >
                <span className="ti-invite__glyph">
                  <PlatformIcon platform={card.id} />
                </span>
                <span className="ti-invite__copy">
                  <small>{card.overline}</small>
                  <strong>{card.title}</strong>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
