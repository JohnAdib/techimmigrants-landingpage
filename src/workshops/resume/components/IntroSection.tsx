import { CheckCircle2, XCircle } from "lucide-react";

export function IntroSection() {
  return (
    <section className="rw-section rw-intro rw-view" aria-labelledby="intro-title">
      <div className="rw-intro-copy">
        <span className="rw-overline">مسئله از کجاست؟</span>
        <h2 id="intro-title">رزومه می‌فرستی و به مصاحبه نمی‌رسی؟</h2>
        <p>
          این لزوماً به‌معنی کم‌ارزش بودن تجربه‌ات نیست. رزومه باید در چند ثانیه نشان بدهد چه
          مسئله‌ای حل کرده‌ای، چه تصمیمی گرفته‌ای و نتیجه چه بوده؛ در این کارگاه همین فاصله را
          با بازنویسی رزومه‌های واقعی کم می‌کنیم.
        </p>
      </div>
      <div className="rw-intro-cards">
        <article className="rw-intro-card">
          <CheckCircle2 aria-hidden="true" />
          <div><h3>در کارگاه چه می‌کنیم؟</h3><p>رزومه‌های واقعی را بررسی و همان‌جا جمله‌های مبهم را با نسخه‌های روشن‌تر بازنویسی می‌کنیم.</p></div>
        </article>
        <article className="rw-intro-card">
          <XCircle aria-hidden="true" />
          <div><h3>چه کاری نمی‌کنیم؟</h3><p>قالب جادویی، متن آماده برای کپی‌کردن یا وعده‌ی رسیدن به استخدام نمی‌دهیم.</p></div>
        </article>
      </div>
    </section>
  );
}
