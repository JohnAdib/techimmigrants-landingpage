import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../workshopContent";

const toPersianNumber = (value: number) =>
  String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="rw-section rw-faq rw-view" aria-labelledby="faq-title">
      <div className="rw-faq-heading">
        <span className="rw-overline">چند سؤال پیش از ثبت‌نام</span><h2 id="faq-title">سؤال‌های احتمالی</h2>
        <p>هر جزئیاتی که هنوز قطعی نشده، همین‌جا روشن گفته‌ایم. با نهایی‌شدن اطلاعات، صفحه را به‌روز می‌کنیم.</p>
      </div>
      <div className="rw-faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const triggerId = `faq-trigger-${index}`;
          const answerId = `faq-answer-${index}`;

          return (
            <div className={`rw-faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
              <button
                id={triggerId}
                className="rw-faq-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{toPersianNumber(index + 1)}</span>
                <b>{faq.question}</b>
                <ChevronDown className="rw-faq-chevron" aria-hidden="true" />
              </button>
              <div id={answerId} className="rw-faq-answer" role="region" aria-labelledby={triggerId} aria-hidden={!isOpen}>
                <div><p>{faq.answer}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
