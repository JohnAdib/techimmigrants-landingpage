import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { PlatformId } from "../content/platforms";
import { cx } from "../lib/cx";
import { externalLinkProps, isExternal } from "../lib/externalLink";
import { PlatformIcon } from "./PlatformIcon";

interface ActionButtonProps {
  href: string;
  variant?: "primary" | "solid" | "quiet";
  platform?: PlatformId;
  children: ReactNode;
}

export function ActionButton({
  href,
  variant = "primary",
  platform,
  children,
}: ActionButtonProps) {
  return (
    <a
      className={cx("ti-button", `ti-button--${variant}`)}
      href={href}
      data-platform={platform}
      {...externalLinkProps(href)}
    >
      {platform ? (
        <span className="ti-button__glyph">
          <PlatformIcon platform={platform} />
        </span>
      ) : null}
      <span className="ti-button__label">{children}</span>
      {isExternal(href) ? <ArrowUpRight aria-hidden="true" /> : null}
    </a>
  );
}
