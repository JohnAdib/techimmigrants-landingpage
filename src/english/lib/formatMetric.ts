export interface ParsedMetric {
  prefix: string;
  value: number;
  suffix: string;
  decimals: number;
}

const METRIC_PATTERN = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/;

export function parseMetric(raw: string): ParsedMetric | null {
  const match = raw.match(METRIC_PATTERN);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  const value = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(value)) return null;

  const fraction = digits.split(".")[1];
  return { prefix, value, suffix, decimals: fraction ? fraction.length : 0 };
}

export function formatMetric(metric: ParsedMetric, value: number) {
  const number = value.toLocaleString("en-US", {
    minimumFractionDigits: metric.decimals,
    maximumFractionDigits: metric.decimals,
  });

  return `${metric.prefix}${number}${metric.suffix}`;
}
