import { Menu } from "lucide-react";
import { navigation, siteLinks } from "../englishHomeContent";

export function EnglishHeader() {
  return (
    <header className="eh-header">
      <div className="eh-header__inner">
        <a className="eh-brand" href="#top" aria-label="Tech Immigrants, back to the top">
          <span className="eh-brand__mark" aria-hidden="true">TI</span>
          <span className="eh-brand__copy">
            <strong>Tech Immigrants</strong>
            <small>Community across borders</small>
          </span>
        </a>

        <nav className="eh-nav" aria-label="English homepage">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="eh-header__actions">
          <a className="eh-language" href={siteLinks.persian}>
            <span lang="fa" dir="rtl">فارسی</span>
            <small>Persian site</small>
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
      </div>
    </header>
  );
}
