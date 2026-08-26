import type { FooterColumnContent } from "../content/navigation";
import { externalLinkProps } from "../lib/externalLink";

interface FooterColumnProps {
  column: FooterColumnContent;
}

export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <nav className="ti-footer__column" aria-label={column.title}>
      <p className="ti-label">{column.title}</p>
      <ul>
        {column.items.map((item) => (
          <li key={item.href}>
            <a href={item.href} {...externalLinkProps(item.href)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
