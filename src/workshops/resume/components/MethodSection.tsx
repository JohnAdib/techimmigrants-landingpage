import { workshopMethod } from "../workshopContent";

export function MethodSection() {
  return (
    <section id="method" className="rw-section rw-method rw-view" aria-labelledby="method-title">
      <div className="rw-section-index rw-section-index-light"><span>فرمت جلسه</span><b>۰۱</b></div>
      <div className="rw-method-heading">
        <span className="rw-overline">توضیح کوتاه، تمرین واقعی</span>
        <h2 id="method-title">هر نکته را همان‌جا روی رزومه امتحان می‌کنیم.</h2>
        <p>بررسی رزومه را برای آخر جلسه نگه نمی‌داریم. از شروع تا جمع‌بندی، نمونه‌های واقعی روی پرده‌اند.</p>
      </div>
      <div className="rw-method-grid">
        {workshopMethod.map((item) => (
          <article key={item.number} className="rw-method-card">
            <span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
