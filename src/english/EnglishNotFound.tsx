import { ArrowLeft } from "lucide-react";

export default function EnglishNotFound() {
  return (
    <main className="eh eh-not-found">
      <a className="eh-brand eh-not-found__brand" href="/">
        <span className="eh-brand__mark" aria-hidden="true">TI</span>
        <span>Tech Immigrants</span>
      </a>
      <div className="eh-not-found__copy">
        <span className="eh-eyebrow">404 / Beyond this route</span>
        <h1>This path has not been mapped yet.</h1>
        <p>The community is still here. Return to the English homepage or continue to the Persian site.</p>
        <div className="eh-actions">
          <a className="eh-button eh-button--primary" href="/">
            <ArrowLeft aria-hidden="true" /> Back to the homepage
          </a>
          <a className="eh-text-link" href="/fa/" lang="fa" dir="rtl">وب‌سایت فارسی</a>
        </div>
      </div>
    </main>
  );
}
