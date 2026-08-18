import { ArrowDownLeft } from "lucide-react";
import { outcomes } from "../workshopContent";

export function OutcomesSection() {
  return (
    <section className="rw-section rw-outcomes rw-view" aria-labelledby="outcomes-title">
      <div className="rw-section-head">
        <div><span className="rw-overline">بعد از این سه ساعت</span><h2 id="outcomes-title">در پایان کارگاه، می‌توانی...</h2></div>
        <p>قرار نیست بعد از هر تغییر دوباره منتظر نظر یک نفر دیگر بمانی. چارچوبی می‌گیری که دفعه‌ی بعد خودت اجرا کنی.</p>
      </div>
      <div className="rw-outcome-list">
        {outcomes.map((outcome) => (
          <article key={outcome.number}>
            <span>{outcome.number}</span><h3>{outcome.title}</h3><p>{outcome.description}</p><ArrowDownLeft className="rw-outcome-icon" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
