import { Check } from "lucide-react";
import { audience } from "../workshopContent";

export function AudienceSection() {
  return (
    <section className="rw-section rw-fit rw-view" aria-labelledby="fit-title">
      <div className="rw-fit-main">
        <span className="rw-overline">این کارگاه برای توست اگر...</span>
        <h2 id="fit-title">رزومه داری، اما مطمئن نیستی درست از تجربه‌ات حرف می‌زند.</h2>
        <ul>
          {audience.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
        </ul>
      </div>
      <aside className="rw-not-card">
        <span>این کارگاه چه نیست؟</span>
        <h3>قول استخدام، قالب جادویی یا سه ساعت تماشا کردن نیست.</h3>
        <p>اگر دنبال متنی آماده برای کپی‌کردن هستی، این جلسه احتمالاً مناسب تو نیست.</p>
      </aside>
    </section>
  );
}
