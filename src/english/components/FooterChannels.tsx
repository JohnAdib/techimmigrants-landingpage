import { platforms } from "../content/platforms";
import { externalLinkProps } from "../lib/externalLink";
import { PlatformIcon } from "./PlatformIcon";

export function FooterChannels() {
  return (
    <nav className="ti-footer__column ti-footer__channels" aria-label="Community channels">
      <p className="ti-label">Community</p>
      <ul>
        {platforms.map((platform) => (
          <li key={platform.id}>
            <a
              href={platform.href}
              data-platform={platform.id}
              {...externalLinkProps(platform.href)}
            >
              <span className="ti-footer__glyph">
                <PlatformIcon platform={platform.id} />
              </span>
              <span>{platform.name}</span>
              <small>{platform.handle}</small>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
