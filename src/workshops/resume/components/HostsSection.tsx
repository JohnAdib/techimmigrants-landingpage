import { Check, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { facilitators } from "../workshopContent";

type HostIdentityProps = {
  avatar: ReactNode;
  name: string;
  role: string;
};

function HostIdentity({ avatar, name, role }: HostIdentityProps) {
  return (
    <div className="rw-host-identity">
      {avatar}
      <div className="rw-host-heading"><span>{role}</span><h3>{name}</h3></div>
    </div>
  );
}

export function HostsSection() {
  return (
    <section id="hosts" className="rw-section rw-hosts rw-view" aria-labelledby="hosts-title">
      <div className="rw-section-head">
        <div><span className="rw-overline">برگزارکنندگان</span><h2 id="hosts-title">چه کسانی کارگاه را جلو می‌برند؟</h2></div>
        <p>مستر ادیب محتوای کارگاه و بازخورد رزومه‌ها را پیش می‌برد؛ سحر گفت‌وگو و سؤال‌های شرکت‌کنندگان را هدایت می‌کند.</p>
      </div>
      <div className="rw-host-grid">
        <article className="rw-host-card rw-john-card">
          <div className="rw-host-copy">
            <HostIdentity
              avatar={<div className="rw-host-avatar rw-host-avatar-monogram" aria-hidden="true">اد</div>}
              name={facilitators.john.name}
              role={facilitators.john.role}
            />
            <p>{facilitators.john.bio}</p>
            <ul>{facilitators.john.highlights.map((highlight) => <li key={highlight}><Check aria-hidden="true" />{highlight}</li>)}</ul>
            <a href={facilitators.john.url} target="_blank" rel="noreferrer">درباره‌ی مستر ادیب<ExternalLink aria-hidden="true" /></a>
          </div>
        </article>
        <article className="rw-host-card rw-sahar-card">
          <div className="rw-host-copy">
            <HostIdentity
              avatar={<div className="rw-host-avatar rw-host-avatar-monogram" aria-hidden="true">س</div>}
              name={facilitators.sahar.name}
              role={facilitators.sahar.role}
            />
            <p>{facilitators.sahar.bio}</p>
          </div>
          <div className="rw-sahar-community"><small>COMMUNITY FIRST</small><strong>Tech<br />Immigrants</strong></div>
        </article>
      </div>
    </section>
  );
}
