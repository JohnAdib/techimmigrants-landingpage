import { ArrowUpRight } from "lucide-react";
import { PlatformIcon } from "../../english/components/PlatformIcon";
import {
  communityFooterContent,
  type FooterLocale,
} from "./communityFooterContent";
import "./community-footer.css";

interface CommunityFooterProps {
  locale: FooterLocale;
}

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function CommunityFooter({ locale }: CommunityFooterProps) {
  const content = communityFooterContent[locale];

  return (
    <footer
      className={`community-footer community-footer--${locale}`}
      dir={content.direction}
      lang={content.locale}
    >
      <div className="community-footer__shell community-footer__inner">
        <div className="community-footer__brand">
          <a
            className="community-footer__identity"
            href={content.homeHref}
            aria-label={content.backToTopLabel}
          >
            <img
              className="community-footer__mark"
              src="/brand-mark.png"
              alt=""
              width={40}
              height={40}
            />
            <span className="community-footer__identity-copy">
              <strong>{content.brandName}</strong>
              <small>{content.promise}</small>
            </span>
          </a>

          <p>{content.description}</p>

          <span className="community-footer__status community-footer__label">
            <span className="community-footer__live-dot" aria-hidden="true" />
            {content.liveLabel} · {content.reportingMonth}
          </span>

          <a className="community-footer__language" href={content.language.href}>
            <span lang={content.language.locale} dir={content.language.direction}>
              {content.language.label}
            </span>
            <small>{content.language.hint}</small>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <nav className="community-footer__column" aria-label={content.channelsLabel}>
          <p className="community-footer__label">{content.channelsLabel}</p>
          <ul>
            {content.channels.map((channel) => (
              <li key={channel.id}>
                <a
                  className="community-footer__channel"
                  href={channel.href}
                  data-platform={channel.id}
                  {...externalLinkProps}
                >
                  <span className="community-footer__glyph">
                    <PlatformIcon platform={channel.id} />
                  </span>
                  <span>{channel.label}</span>
                  <small>{channel.handle}</small>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="community-footer__column" aria-label={content.pageLinksLabel}>
          <p className="community-footer__label">{content.pageLinksLabel}</p>
          <ul>
            {content.pageLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="community-footer__shell community-footer__base">
        <span>{content.promise}</span>
        <span>
          © {new Date().getFullYear()} {content.brandName}
        </span>
      </div>
    </footer>
  );
}
