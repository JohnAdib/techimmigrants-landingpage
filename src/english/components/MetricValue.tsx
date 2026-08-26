import { useCountUp } from "../hooks/useCountUp";
import { cx } from "../lib/cx";

interface MetricValueProps {
  value: string;
  className?: string;
}

export function MetricValue({ value, className }: MetricValueProps) {
  const { ref, display } = useCountUp(value);

  return (
    <span className={cx("ti-serif", className)} ref={ref}>
      {display}
    </span>
  );
}
