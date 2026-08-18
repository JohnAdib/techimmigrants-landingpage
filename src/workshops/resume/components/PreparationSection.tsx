import { preparation } from "../workshopContent";

const toPersianNumber = (value: number) =>
  String(value).padStart(2, "0").replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);

export function PreparationSection() {
  return (
    <section className="rw-section rw-bring rw-view" aria-labelledby="bring-title">
      <div className="rw-section-index rw-section-index-light"><span>قبل از شروع</span><b>۰۳</b></div>
      <div className="rw-bring-copy"><span className="rw-overline">شرط ورود سختی ندارد</span><h2 id="bring-title">همین‌قدر کافی است.</h2></div>
      <ol className="rw-bring-list">
        {preparation.map((item, index) => <li key={item}><span>{toPersianNumber(index + 1)}</span><p>{item}</p></li>)}
      </ol>
      <p className="rw-consent-note"><span aria-hidden="true">✦</span>نمایش رزومه کاملاً اختیاری است و پیش از نمایش از تو اجازه می‌گیریم.</p>
    </section>
  );
}
