import type { CSSProperties, ElementType, ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  index?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({ as: Tag = "div", index = 0, className, children }: RevealProps) {
  return (
    <Tag
      className={className}
      data-reveal=""
      style={{ "--reveal-index": index } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
