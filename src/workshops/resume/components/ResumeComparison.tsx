import { Check, X } from "lucide-react";

export function ResumeComparison() {
  return (
    <section id="live-edit" className="rw-section rw-live-edit rw-view" aria-labelledby="live-edit-title">
      <div className="rw-section-head">
        <div><span className="rw-overline">یک نمونه از تمرین کارگاه</span><h2 id="live-edit-title">این دو جمله یک معنی ندارند.</h2></div>
        <p>یکی فقط می‌گوید چه وظیفه‌ای داشتی؛ دیگری نشان می‌دهد چه نتیجه‌ای ساختی.</p>
      </div>
      <div className="rw-compare">
        <input defaultChecked type="radio" name="resume-version" id="version-before" />
        <input type="radio" name="resume-version" id="version-after" />
        <div className="rw-compare-tabs" role="group" aria-label="مقایسه نسخه‌های رزومه">
          <label htmlFor="version-before">قبل: شرح وظیفه</label><label htmlFor="version-after">بعد: نتیجه‌ی کار</label>
        </div>
        <div className="rw-compare-stage">
          <article className="rw-version rw-version-before">
            <div className="rw-version-meta"><span>نسخه‌ی اولیه</span><span className="rw-version-status rw-version-status-bad"><X aria-hidden="true" />Bad</span></div>
            <p className="rw-version-example" dir="ltr" lang="en">Responsible for improving website performance and collaborating with the product team.</p>
            <ul><li><X aria-hidden="true" />نقش فرد مشخص نیست</li><li><X aria-hidden="true" />نتیجه‌ای دیده نمی‌شود</li><li><X aria-hidden="true" />شبیه صدها رزومه‌ی دیگر است</li></ul>
          </article>
          <article className="rw-version rw-version-after">
            <div className="rw-version-meta"><span>نسخه‌ی بازنویسی‌شده</span><span className="rw-version-status rw-version-status-good"><Check aria-hidden="true" />Good</span></div>
            <p className="rw-version-example" dir="ltr" lang="en">Redesigned the data-loading flow, cutting load time on key pages by 60% and improving the core user journey.</p>
            <ul><li><Check aria-hidden="true" />اقدام مشخص است</li><li><Check aria-hidden="true" />نتیجه اندازه‌گیری شده</li><li><Check aria-hidden="true" />زمینه‌ی تصمیم روشن است</li></ul>
          </article>
        </div>
      </div>
    </section>
  );
}
