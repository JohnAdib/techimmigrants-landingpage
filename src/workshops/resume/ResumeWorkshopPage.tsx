import { Footer } from "@/components/landing/Footer";
import { useEffect, useRef } from "react";
import { AgendaSection } from "./components/AgendaSection";
import { AudienceSection } from "./components/AudienceSection";
import { FaqSection } from "./components/FaqSection";
import { HeroSection } from "./components/HeroSection";
import { HostsSection } from "./components/HostsSection";
import { IntroSection } from "./components/IntroSection";
import { MethodSection } from "./components/MethodSection";
import { OutcomesSection } from "./components/OutcomesSection";
import { PreparationSection } from "./components/PreparationSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { ResumeComparison } from "./components/ResumeComparison";
import { WorkshopHeader } from "./components/WorkshopHeader";
import { WorkshopTicker } from "./components/WorkshopTicker";
import { useWorkshopMotion } from "./useWorkshopMotion";
import "./resume-workshop.css";

const WORKSHOP_TITLE = "کارگاه رزومه | Tech Immigrants × John Adib";
const WORKSHOP_DESCRIPTION =
  "اپلای می‌کنی اما به مصاحبه نمی‌رسی؟ در این کارگاه عملی سه‌ساعته، رزومه‌های واقعی را بررسی و بازنویسی می‌کنیم.";

export default function ResumeWorkshopPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  useWorkshopMotion(pageRef);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = WORKSHOP_TITLE;
    document.body.classList.add("rw-page-active");
    if (description) description.content = WORKSHOP_DESCRIPTION;

    return () => {
      document.title = previousTitle;
      document.body.classList.remove("rw-page-active");
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  return (
    <>
      <div ref={pageRef} className="rw" dir="rtl">
        <div className="rw-scroll-progress" aria-hidden="true" />
        <a className="rw-skip" href="#main-content">پرش به محتوای اصلی</a>
        <WorkshopHeader />
        <main id="main-content">
          <HeroSection />
          <WorkshopTicker />
          <IntroSection />
          <ResumeComparison />
          <MethodSection />
          <OutcomesSection />
          <AgendaSection />
          <AudienceSection />
          <PreparationSection />
          <HostsSection />
          <FaqSection />
          <RegistrationSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
