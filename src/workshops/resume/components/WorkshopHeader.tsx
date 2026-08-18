import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function WorkshopHeader() {
  return (
    <header className="rw-header" aria-label="ناوبری کارگاه">
      <Link className="rw-brand" to="/workshops" aria-label="صفحه‌ی کارگاه‌های تک ایمیگرنتس">
        <span className="rw-brand-mark" aria-hidden="true">TI</span>
        <span><strong>Tech Immigrants</strong><small>کارگاه‌های مسیر</small></span>
      </Link>
      <nav className="rw-nav" aria-label="بخش‌های صفحه">
        <a href="#method">روش کار</a><a href="#program">برنامه</a><a href="#hosts">برگزارکنندگان</a>
      </nav>
      <a className="rw-header-cta" href="#registration">رزرو صندلی<ChevronLeft aria-hidden="true" /></a>
    </header>
  );
}
