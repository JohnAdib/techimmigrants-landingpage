import { ArrowUpRight, Globe2, Presentation } from "lucide-react";
import type { ChannelId, CommunityChannel } from "../content/channels";
import type { PlatformId } from "../content/platforms";
import { cx } from "../lib/cx";
import { externalLinkProps } from "../lib/externalLink";
import { PlatformIcon } from "./PlatformIcon";

const CHANNEL_PLATFORM: Partial<Record<ChannelId, PlatformId>> = {
  telegram: "telegram",
  youtube: "youtube",
  github: "github",
};

function ChannelGlyph({ id }: { id: ChannelId }) {
  const platform = CHANNEL_PLATFORM[id];
  if (platform) return <PlatformIcon platform={platform} />;
  if (id === "workshops") return <Presentation aria-hidden="true" />;
  return <Globe2 aria-hidden="true" />;
}

interface ChannelCardProps {
  channel: CommunityChannel;
  index: number;
  featured?: boolean;
}

export function ChannelCard({ channel, index, featured }: ChannelCardProps) {
  return (
    <article
      className={cx("ti-channel", featured && "ti-channel--featured")}
      data-channel={channel.id}
      data-reveal=""
    >
      <div className="ti-channel__top">
        <span className="ti-channel__glyph">
          <ChannelGlyph id={channel.id} />
        </span>
        <span className="ti-label">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="ti-channel__body">
        <span className="ti-channel__kicker">{channel.label}</span>
        <h3>{channel.title}</h3>
        <p>{channel.description}</p>
      </div>

      <div className="ti-channel__foot">
        {channel.badge ? <small className="ti-badge">{channel.badge}</small> : <span />}
        <div className="ti-channel__links">
          {channel.links.map((link) => (
            <a key={link.href} href={link.href} {...externalLinkProps(link.href)}>
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
