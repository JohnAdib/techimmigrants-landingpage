import { useEffect, useMemo, useRef, useState } from "react";
import { formatMetric, parseMetric } from "../lib/formatMetric";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const DURATION = 1400;

export function useCountUp(raw: string) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const metric = useMemo(() => parseMetric(raw), [raw]);
  const animates = Boolean(metric) && !prefersReduced;
  const [display, setDisplay] = useState(() =>
    metric && !prefersReduced ? formatMetric(metric, 0) : raw,
  );

  useEffect(() => {
    const node = ref.current;
    if (!animates || !metric || !node || !("IntersectionObserver" in window)) {
      setDisplay(raw);
      return;
    }

    let frame = 0;
    const tick = (start: number) => (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(progress < 1 ? formatMetric(metric, metric.value * eased) : raw);
      if (progress < 1) frame = requestAnimationFrame(tick(start));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          frame = requestAnimationFrame((now) => tick(now)(now));
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [animates, metric, raw]);

  return { ref, display };
}
