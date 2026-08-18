import { Footer } from "@/components/landing/Footer";
import { ArrowLeft, CalendarDays, Clock3, Users } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PAGE_TITLE = "کارگاه‌ها | Tech Immigrants";

export default function WorkshopsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground" dir="rtl">
        <header className="border-b border-border/80 bg-background/90 backdrop-blur-md">
          <div className="container mx-auto flex h-20 items-center justify-between px-4">
            <Link to="/" className="text-lg font-bold text-primary">
              Tech Immigrants
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-foreground/65 transition-colors hover:text-primary"
            >
              بازگشت به صفحه‌ی اصلی
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 pb-28 pt-20 md:pb-36 md:pt-28">
          <section className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl md:mb-20">
              <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold text-primary">
                <span className="h-px w-10 bg-primary" aria-hidden="true" />
                کارگاه‌های تک ایمیگرنتس
              </span>
              <h1 className="text-5xl font-black leading-[1.3] tracking-tight md:text-7xl">
                یادگیری با تمرین،
                <span className="block text-primary">نه فقط شنیدن.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-foreground/65 md:text-lg md:leading-9">
                کارگاه‌های کوچک و تعاملی برای مسئله‌های واقعی مسیر شغلی؛ با نمونه‌های واقعی،
                تمرین در همان جلسه و قدم بعدی روشن.
              </p>
            </div>

            <Link
              to="/workshops/resume"
              aria-label="مشاهده‌ی صفحه‌ی کارگاه رزومه"
              className="group relative grid overflow-hidden border border-secondary/25 bg-card shadow-sm transition duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl md:grid-cols-[0.72fr_1.28fr]"
            >
              <div className="relative min-h-72 overflow-hidden bg-secondary p-8 text-secondary-foreground md:min-h-[32rem] md:p-12">
                <div
                  className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-secondary-foreground/15"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-10 -top-14 h-56 w-56 rounded-full border border-secondary-foreground/15"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="rounded-full border border-secondary-foreground/30 px-3 py-1.5">
                      در حال آماده‌سازی
                    </span>
                    <span>شماره‌ی ۰۱</span>
                  </div>
                  <div className="mt-20">
                    <span className="block text-7xl font-black text-primary-foreground/15 md:text-9xl">
                      01
                    </span>
                    <p className="mt-4 max-w-xs text-sm leading-7 text-secondary-foreground/70">
                      رزومه‌ات را بیاور؛ روی همان فایل کار می‌کنیم.
                    </p>
                  </div>
                </div>
              </div>

              <article className="flex flex-col justify-center p-8 md:p-14 lg:p-16">
                <span className="text-xs font-bold text-primary">اولین کارگاه از مجموعه‌ی مسیر</span>
                <h2 className="mt-5 text-4xl font-black leading-[1.35] tracking-tight md:text-6xl">
                  کارگاه رزومه
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-foreground/65">
                  سه ساعت تمرین و بازنویسی برای اینکه تجربه‌هایت را روشن‌تر بنویسی، رزومه را
                  برای هر موقعیت شغلی تنظیم کنی و اشتباه‌های رایج را پیش از ارسال پیدا کنی.
                </p>

                <dl className="mt-9 grid gap-4 border-y border-border py-6 text-sm sm:grid-cols-3">
                  <div className="flex items-center gap-2.5">
                    <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                    <div><dt className="sr-only">تاریخ</dt><dd>شنبه ۲۶ سپتامبر</dd></div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
                    <div><dt className="sr-only">مدت</dt><dd>سه ساعت</dd></div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                    <div><dt className="sr-only">ظرفیت</dt><dd>۳۰ نفر</dd></div>
                  </div>
                </dl>

                <span className="mt-9 inline-flex items-center gap-3 self-start font-bold text-primary">
                  دیدن جزئیات کارگاه
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" aria-hidden="true" />
                </span>
              </article>
            </Link>

            <p className="mt-10 text-center text-sm text-foreground/45">
              کارگاه‌های بعدی پس از نهایی‌شدن موضوع و مدرس، همین‌جا اضافه می‌شوند.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
