import { ArrowUpRight, Menu, Pause, Play } from "lucide-react";
import { navigation, siteLinks } from "../englishHomeContent";

interface EnglishHeaderProps {
  motionPaused: boolean;
  onToggleMotion: () => void;
}

export function EnglishHeader({
  motionPaused,
  onToggleMotion,
}: EnglishHeaderProps) {
  const motionLabel = motionPaused
    ? "Resume ambient motion"
    : "Pause ambient motion";

  return (
    <header className="eh-header" aria-label="English homepage navigation">
      <a className="eh-brand" href="#top" aria-label="Tech Immigrants, back to the top">
        <span className="eh-brand__mark" aria-hidden="true">TI</span>
        <span className="eh-brand__copy">
          <strong>Tech Immigrants</strong>
          <small>Community across borders</small>
        </span>
      </a>

      <nav className="eh-nav" aria-label="Page sections">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <div className="eh-header__actions">
        <button
          aria-label={motionLabel}
          aria-pressed={motionPaused}
          className="eh-motion-toggle"
          onClick={onToggleMotion}
          title={motionLabel}
          type="button"
        >
          {motionPaused ? (
            <Play aria-hidden="true" size={16} />
          ) : (
            <Pause aria-hidden="true" size={16} />
          )}
          <span className="eh-visually-hidden">{motionLabel}</span>
        </button>
        <a className="eh-language" href={siteLinks.persian}>
          <span lang="fa" dir="rtl">فارسی</span>
          <small>Persian site</small>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <details className="eh-mobile-menu">
          <summary aria-label="Navigation menu">
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
