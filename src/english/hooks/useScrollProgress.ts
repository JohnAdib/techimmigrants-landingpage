import { type RefObject, useEffect } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const PROPERTY = "--scroll-progress";

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReduced) {
      node.style.setProperty(PROPERTY, "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const span = rect.height + window.innerHeight * 0.6;
      const travelled = window.innerHeight * 0.9 - rect.top;
      const progress = Math.min(Math.max(travelled / span, 0), 1);
      node.style.setProperty(PROPERTY, progress.toFixed(4));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [prefersReduced, ref]);
}
