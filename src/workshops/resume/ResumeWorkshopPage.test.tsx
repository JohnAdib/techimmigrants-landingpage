import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { describe, expect, it } from "vitest";
import ResumeWorkshopPage from "./ResumeWorkshopPage";

const renderPage = () =>
  renderToStaticMarkup(
    <StaticRouter location="/workshops/resume">
      <ResumeWorkshopPage />
    </StaticRouter>,
  );

describe("ResumeWorkshopPage", () => {
  it("renders the core Persian workshop proposition", () => {
    const html = renderPage();

    expect(html).toContain('dir="rtl"');
    expect(html).toContain("اپلای می‌کنی، اما به مصاحبه نمی‌رسی؟");
    expect(html).toContain("مسئله این است که آن را چطور در رزومه نوشته‌ای");
    expect(html).not.toContain("رزومه‌ای بنویس که ارزش تجربه‌ات را روشن کند");
    expect(html).not.toContain("رزومه‌ای بساز که اثر کارت را نشان بدهد");
    expect(html).toContain("سه ساعت");
    expect(html).toContain("۳۰ نفر");
    expect(html).not.toContain("۲۰ تا ۳۰ نفر");
  });

  it("communicates the tentative logistics without pretending registration is open", () => {
    const html = renderPage();

    expect(html).toContain("شنبه ۲۸ شهریور ۱۴۰۵");
    expect(html).toContain("Saturday, 19 September 2026");
    expect(html).toContain("ساعت نهایی به‌زودی · سه ساعت");
    expect(html).toContain("رزرو صندلی — به‌زودی");
    expect(html).toContain('aria-disabled="true"');
  });

  it("includes agenda, real-resume method, and both organizers", () => {
    const html = renderPage();

    expect(html).toContain('id="program"');
    expect(html).toContain("۲ تا ۳ رزومه");
    expect(html).toContain("گفت‌وگو فارسی · رزومه انگلیسی");
    expect(html).toContain("مستر ادیب");
    expect(html).toContain("سحر");
    expect(html).toContain("۶۰۰+ جلسه منتورینگ");
    expect(html.match(/rw-host-avatar-monogram/g)).toHaveLength(2);
  });

  it("reuses the standard Tech Immigrants footer", () => {
    const html = renderPage();

    expect(html).toContain("جامعه ایرانیان شاغل در صنعت تکنولوژی");
    expect(html).toContain('aria-label="Telegram"');
    expect(html).toContain('aria-label="YouTube"');
  });
});
