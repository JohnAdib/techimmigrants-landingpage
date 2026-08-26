import { BrandMark } from "./BrandMark";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileNav } from "./MobileNav";
import { MotionToggle } from "./MotionToggle";
import { SiteNav } from "./SiteNav";

interface SiteHeaderProps {
  motionPaused: boolean;
  onToggleMotion: () => void;
}

export function SiteHeader({ motionPaused, onToggleMotion }: SiteHeaderProps) {
  return (
    <header className="ti-header" aria-label="Site navigation">
      <BrandMark />
      <SiteNav />
      <div className="ti-header__actions">
        <MotionToggle paused={motionPaused} onToggle={onToggleMotion} />
        <LanguageSwitch />
        <MobileNav />
      </div>
    </header>
  );
}
