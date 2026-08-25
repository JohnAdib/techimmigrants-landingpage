import {
  ArrowUpRight,
  Github,
  Globe2,
  Presentation,
  Send,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { communityChannels, type CommunityChannel } from "../englishHomeContent";

const channelIcons: Record<CommunityChannel["id"], LucideIcon> = {
  telegram: Send,
  youtube: Youtube,
  public: Globe2,
  github: Github,
  workshops: Presentation,
};

export function CommunityActionSection() {
  return (
    <section className="eh-section eh-community" id="community" aria-labelledby="community-title">
      <header className="eh-section-heading eh-section-heading--split" data-reveal>
        <div>
          <span className="eh-eyebrow">Where the community meets</span>
          <h2 id="community-title">Choose the conversation you need.</h2>
        </div>
        <p>Most member activity happens in Persian. Each channel is built for a different depth of conversation—from a quick peer answer to a full interview or hands-on workshop.</p>
      </header>

      <div className="eh-channel-grid">
        {communityChannels.map((channel, index) => {
          const Icon = channelIcons[channel.id];
          const className = `eh-channel eh-channel--${channel.id}${index < 2 ? " eh-channel--featured" : ""}`;

          return (
            <article className={className} key={channel.id} data-reveal>
              <div className="eh-channel__topline">
                <span className="eh-channel__icon"><Icon aria-hidden="true" /></span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="eh-channel__copy">
                <span className="eh-channel__label">{channel.label}</span>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
              </div>
              <div className="eh-channel__footer">
                {channel.badge ? <small className="eh-language-badge">{channel.badge}</small> : <span />}
                <div className="eh-channel__links">
                  {channel.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label} <ArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
