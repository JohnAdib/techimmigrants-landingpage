import {
  ArrowUpRight,
  Github,
  Linkedin,
  MessagesSquare,
  Presentation,
  Radio,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { communityChannels, type CommunityChannel } from "../englishHomeContent";

const channelIcons: Record<CommunityChannel["id"], LucideIcon> = {
  telegram: MessagesSquare,
  youtube: Youtube,
  public: Radio,
  github: Github,
  workshops: Presentation,
};

export function CommunityActionSection() {
  return (
    <section className="eh-section eh-community" id="community" aria-labelledby="community-title">
      <div className="eh-section__index" data-reveal>
        <span>05</span>
        <span>Community in action</span>
      </div>

      <header className="eh-section-heading eh-section-heading--wide" data-reveal>
        <span className="eh-eyebrow">One community, many ways knowledge travels</span>
        <h2 id="community-title">Conversation becomes context. Context becomes something useful.</h2>
        <p>Most member-facing activity happens in Persian. Each channel plays a different role in keeping lived experience practical, discoverable, and in motion.</p>
      </header>

      <div className="eh-channel-grid">
        {communityChannels.map((channel, index) => {
          const Icon = channelIcons[channel.id];
          return (
            <article className={`eh-channel eh-channel--${channel.id}`} key={channel.id} data-reveal>
              <div className="eh-channel__topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
              </div>
              <span className="eh-channel__label">{channel.label}</span>
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
              {channel.badge && <small className="eh-language-badge">{channel.badge}</small>}
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
              {channel.id === "public" && <Linkedin className="eh-channel__watermark" aria-hidden="true" />}
            </article>
          );
        })}
      </div>
    </section>
  );
}
