import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { ImpactStat } from "../content/metrics";
import { platformById } from "../content/platforms";
import { cx } from "../lib/cx";
import { externalLinkProps } from "../lib/externalLink";
import { MetricValue } from "./MetricValue";
import { PlatformIcon } from "./PlatformIcon";

interface StatCardProps {
  stat: ImpactStat;
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const platform = stat.platform ? platformById[stat.platform] : undefined;

  return (
    <div
      className={cx("ti-stat", stat.emphasis && "ti-stat--emphasis")}
      data-reveal=""
      style={{ "--reveal-index": index % 4 } as CSSProperties}
    >
      <dt className="ti-stat__label">
        <span>{stat.label}</span>
        {platform ? (
          <a
            className="ti-stat__link"
            href={platform.href}
            aria-label={`Open ${platform.name}`}
            {...externalLinkProps(platform.href)}
          >
            <PlatformIcon platform={platform.id} />
            <ArrowUpRight aria-hidden="true" />
          </a>
        ) : null}
      </dt>
      <dd className="ti-stat__value">
        <MetricValue value={stat.value} />
      </dd>
      <dd className="ti-stat__detail">{stat.detail}</dd>
    </div>
  );
}
