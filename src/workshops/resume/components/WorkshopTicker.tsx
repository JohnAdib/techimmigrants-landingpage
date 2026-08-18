import { Circle } from "lucide-react";

const tickerItems = [
  "رزومه‌ی واقعی",
  "بازخورد روشن",
  "بازنویسی در همان جلسه",
  "از وظیفه تا دستاورد",
  "تنظیم برای یک آگهی مشخص",
  "بولت‌های قابل سنجش",
  "خلاصه‌ی حرفه‌ای دقیق",
  "اشتباه‌های رایج",
  "چک‌لیست پیش از ارسال",
  "سه ساعت کار عملی",
  "ظرفیت ۳۰ نفر",
  "برنامه‌ی هفت‌روزه",
];

function TickerGroup() {
  return (
    <div className="rw-ticker-group">
      {tickerItems.map((item) => (
        <span className="rw-ticker-item" key={item}>
          <span>{item}</span><Circle aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function WorkshopTicker() {
  return (
    <div className="rw-ticker" aria-hidden="true">
      <div className="rw-ticker-track">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
