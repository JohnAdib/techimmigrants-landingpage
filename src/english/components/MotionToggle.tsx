import { Pause, Play } from "lucide-react";

interface MotionToggleProps {
  paused: boolean;
  onToggle: () => void;
}

export function MotionToggle({ paused, onToggle }: MotionToggleProps) {
  const label = paused ? "Resume ambient motion" : "Pause ambient motion";

  return (
    <button
      className="ti-motion-toggle"
      type="button"
      aria-pressed={paused}
      aria-label={label}
      title={label}
      onClick={onToggle}
    >
      {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
    </button>
  );
}
