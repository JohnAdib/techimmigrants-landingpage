import { pageNavigation } from "../content/navigation";

export function SiteNav() {
  return (
    <nav className="ti-nav" aria-label="Page sections">
      {pageNavigation.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
