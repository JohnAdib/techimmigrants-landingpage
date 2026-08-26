import type { ReactNode } from "react";
import { cx } from "../lib/cx";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  split?: boolean;
}

export function SectionHeading({ id, eyebrow, title, lead, split }: SectionHeadingProps) {
  return (
    <Reveal className={cx("ti-section__head", split && "ti-section__head--split")}>
      {split ? (
        <div>
          <span className="ti-eyebrow">{eyebrow}</span>
          <h2 id={id}>{title}</h2>
        </div>
      ) : (
        <>
          <span className="ti-eyebrow">{eyebrow}</span>
          <h2 id={id}>{title}</h2>
        </>
      )}
      {lead ? <p className="ti-lead">{lead}</p> : null}
    </Reveal>
  );
}
