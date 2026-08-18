import { Linkedin } from "lucide-react";
import { workshopFacts } from "../workshopContent";

export function RegistrationSection() {
  return (
    <section id="registration" className="rw-registration rw-view" aria-labelledby="registration-title">
      <div className="rw-registration-status"><span className="rw-pulse" aria-hidden="true" />وضعیت فعلی: در حال آماده‌سازی</div>
      <div className="rw-registration-main">
        <span className="rw-overline">ثبت‌نام و پرداخت</span>
        <h2 id="registration-title">وقتی ثبت‌نام باز شود، صندلی‌ات را از همین‌جا رزرو می‌کنی.</h2>
        <p>
          این کارگاه رایگان نیست. قیمت، ساعت نهایی و لینک پرداخت هم‌زمان با قطعی‌شدن تاریخ در
          همین بخش قرار می‌گیرد. تاریخ پیشنهادی فعلی {workshopFacts.date.shortLabel} است و
          ساعت نهایی با بازشدن ثبت‌نام اعلام می‌شود.
        </p>
      </div>
      <div className="rw-registration-action">
        <span className="rw-button rw-button-disabled" aria-disabled="true">{workshopFacts.registration.label}</span>
        <a href="https://www.linkedin.com/company/techimmigrants" target="_blank" rel="noreferrer" className="rw-follow-link">
          برای خبر ثبت‌نام، Tech Immigrants را دنبال کن<Linkedin aria-hidden="true" />
        </a>
      </div>
      <div className="rw-registration-date" aria-hidden="true"><strong>28</strong><span>SHAHRIVAR<br />19 SEP</span></div>
    </section>
  );
}
