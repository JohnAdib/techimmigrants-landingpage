import { useEffect, useRef, useState } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { cx } from "./lib/cx";
import { ChannelsSection } from "./sections/ChannelsSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ImpactSection } from "./sections/ImpactSection";
import { InsightSection } from "./sections/InsightSection";
import { InvitationSection } from "./sections/InvitationSection";
import { JourneySection } from "./sections/JourneySection";
import { TopicTicker } from "./sections/TopicTicker";

export default function EnglishHomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [motionPaused, setMotionPaused] = useState(false);
  useRevealOnScroll(pageRef);

  useEffect(() => {
    document.body.classList.add("ti-page-active");
    return () => document.body.classList.remove("ti-page-active");
  }, []);

  return (
    <div className={cx("ti", motionPaused && "ti-motion-paused")} id="top" ref={pageRef}>
      <a className="ti-skip" href="#main-content">
        Skip to the main content
      </a>

      <SiteHeader
        motionPaused={motionPaused}
        onToggleMotion={() => setMotionPaused((paused) => !paused)}
      />

      <main id="main-content">
        <HeroSection />
        <TopicTicker />
        <HowItWorksSection />
        <JourneySection />
        <ImpactSection />
        <InsightSection />
        <ChannelsSection />
        <InvitationSection />
      </main>

      <SiteFooter />
    </div>
  );
}
