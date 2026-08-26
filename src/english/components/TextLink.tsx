import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { externalLinkProps } from "../lib/externalLink";

interface TextLinkProps {
  href: string;
  children: ReactNode;
}

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <a className="ti-text-link" href={href} {...externalLinkProps(href)}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" />
    </a>
  );
}
