import { ChevronDown } from "lucide-react";
import { agenda, type AgendaItem } from "../workshopContent";

function AgendaEntry({ item }: { item: AgendaItem }) {
  return (
    <details className="rw-agenda-item">
      <summary>
        <span className="rw-agenda-number">{item.number}</span>
        <span className="rw-agenda-title"><small>{item.tag}</small><strong>{item.title}</strong></span>
        <span className="rw-agenda-time">{item.duration.toLocaleString("fa-IR")} دقیقه</span>
        <span className="rw-agenda-toggle" aria-hidden="true"><ChevronDown /></span>
      </summary>
      <div className="rw-agenda-content">
        <p className="rw-agenda-description">{item.description}</p>
        <p className="rw-agenda-exercise"><span>تمرین همان بخش:</span> {item.exercise}</p>
      </div>
    </details>
  );
}

export function AgendaSection() {
  const splitIndex = Math.ceil(agenda.length / 2);
  const agendaColumns = [agenda.slice(0, splitIndex), agenda.slice(splitIndex)];

  return (
    <section id="program" className="rw-section rw-program rw-view" aria-labelledby="program-title">
      <div className="rw-section-index"><span>برنامه‌ی سه‌ساعته</span><b>۰۲</b></div>
      <div className="rw-program-head">
        <div><span className="rw-overline">۱۸۰ دقیقه · از فایل فعلی تا نسخه‌ی بهتر</span><h2 id="program-title">برنامه‌ی کارگاه</h2></div>
        <div className="rw-program-total"><strong>۱۸۰</strong><span>دقیقه کار و گفت‌وگو</span></div>
      </div>
      <div className="rw-agenda">
        {agendaColumns.map((column, columnIndex) => (
          <div className="rw-agenda-column" key={columnIndex}>
            {column.map((item) => <AgendaEntry item={item} key={item.id} />)}
          </div>
        ))}
      </div>
    </section>
  );
}
