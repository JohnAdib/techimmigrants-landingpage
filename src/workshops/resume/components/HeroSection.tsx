import { ArrowDown, ArrowLeft, CircleCheck, CircleX } from "lucide-react";
import { workshopFacts } from "../workshopContent";

export function HeroSection() {
  return (
    <section className="rw-hero" aria-labelledby="workshop-title">
      <div className="rw-hero-copy">
        <div className="rw-kicker rw-reveal">
          <span>ورک‌شاپ اول از مجموعه‌ی مسیر</span>
          <span className="rw-kicker-line" aria-hidden="true" />
          <span>{workshopFacts.edition}</span>
        </div>
        <h1 id="workshop-title" className="rw-reveal" aria-label="اپلای می‌کنی، اما به مصاحبه نمی‌رسی؟">
          <span className="rw-hero-line">اپلای می‌کنی،</span><br />
          <span className="rw-hero-line">اما به <em>مصاحبه</em></span><br />
          <span className="rw-hero-line">نمی‌رسی؟</span>
        </h1>
        <p className="rw-hero-lead rw-reveal">
          احتمالاً تجربه‌ات مشکل ندارد؛ مسئله این است که آن را چطور در رزومه نوشته‌ای. در این
          کارگاه یاد می‌گیری ارزش کارت را روشن، دقیق و متناسب با هر موقعیت شغلی بنویسی.
        </p>
        <div className="rw-hero-actions rw-reveal">
          <a className="rw-button rw-button-primary" href="#program">برنامه‌ی کارگاه<ArrowDown aria-hidden="true" /></a>
          <a className="rw-text-link" href="#live-edit">یک نمونه را ببین<ArrowLeft aria-hidden="true" /></a>
        </div>
        <dl className="rw-facts rw-reveal">
          <div className="rw-fact-date">
            <dt>تاریخ پیشنهادی</dt>
            <dd><span>{workshopFacts.date.persianLabel}</span><small dir="ltr">{workshopFacts.date.gregorianLabel}</small></dd>
          </div>
          <div><dt>زمان</dt><dd>{workshopFacts.date.timeLabel}</dd></div>
          <div><dt>ظرفیت</dt><dd>۳۰ نفر</dd></div>
          <div className="rw-fact-language"><dt>زبان</dt><dd>{workshopFacts.language}</dd></div>
        </dl>
      </div>

      <div className="rw-hero-art rw-reveal" aria-label="نمونه بازنویسی رزومه">
        <div className="rw-stamp rw-stamp-top" aria-hidden="true"><span>LIVE</span><span>EDIT</span></div>
        <div className="rw-stamp rw-stamp-side" aria-hidden="true">۳۰<small>نفر</small></div>
        <article className="rw-resume-sheet">
          <div className="rw-sheet-topline"><span>RESUME / 01</span><span>EN</span></div>
          <div className="rw-sheet-person">
            <div><span className="rw-sheet-label">PRODUCT ENGINEER</span><strong>YOUR NAME</strong></div>
            <span className="rw-sheet-avatar" aria-hidden="true" />
          </div>
          <div className="rw-sheet-rule" />
          <span className="rw-sheet-section">EXPERIENCE</span>
          <div className="rw-sheet-role"><strong>Senior Product Engineer</strong><span>2023—NOW</span></div>
          <div className="rw-sheet-bullet rw-sheet-bullet-muted"><span aria-hidden="true"><CircleX /></span><p>Responsible for improving product performance.</p></div>
          <div className="rw-editor-note rw-editor-note-old">مبهم است؛ چه چیزی تغییر کرد؟</div>
          <div className="rw-sheet-bullet rw-sheet-bullet-good"><span aria-hidden="true"><CircleCheck /></span><p>Cut key page load times by 60%, improving the core customer journey.</p></div>
          <div className="rw-editor-note rw-editor-note-new" dir="ltr">Action verb + task or project + metric or result</div>
          <div className="rw-sheet-lines" aria-hidden="true"><span /><span /><span /><span /></div>
        </article>
        <div className="rw-scribble" aria-hidden="true">فقط نگو «چه کار کردم»؛<strong>بگو «چه چیزی را تغییر دادم؟»</strong></div>
      </div>
    </section>
  );
}
