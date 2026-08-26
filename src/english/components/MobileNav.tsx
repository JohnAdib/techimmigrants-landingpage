import { Menu } from "lucide-react";
import type { MouseEvent } from "react";
import { pageNavigation } from "../content/navigation";
import { siteLinks } from "../content/site";

function close(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function MobileNav() {
  return (
    <details className="ti-mobile-nav">
      <summary aria-label="Navigation menu">
        <Menu aria-hidden="true" />
      </summary>
      <nav aria-label="Mobile navigation">
        {pageNavigation.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>
            {item.label}
          </a>
        ))}
        <a className="ti-mobile-nav__persian" href={siteLinks.persian}>
          <span lang="fa" dir="rtl">
            فارسی
          </span>
          <small>Persian site</small>
        </a>
      </nav>
    </details>
  );
}
