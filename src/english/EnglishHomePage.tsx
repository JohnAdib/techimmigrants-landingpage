import { useEffect, useRef } from "react";
import { CommunityActionSection } from "./components/CommunityActionSection";
import { EnglishHeader } from "./components/EnglishHeader";
import { GiveForwardSection } from "./components/GiveForwardSection";
import { HeroSection } from "./components/HeroSection";
import { ImpactSection } from "./components/ImpactSection";
import { EnglishFooter, InvitationSection } from "./components/InvitationFooter";
import { JourneySection } from "./components/JourneySection";
import { ListeningSection } from "./components/ListeningSection";
import { useEnglishHomeMotion } from "./useEnglishHomeMotion";

export default function EnglishHomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  useEnglishHomeMotion(pageRef);

  useEffect(() => {
    document.body.classList.add("eh-page-active");
    return () => document.body.classList.remove("eh-page-active");
  }, []);

  return (
    <div className="eh" id="top" ref={pageRef}>
      <a className="eh-skip" href="#main-content">Skip to the main content</a>
      <EnglishHeader />
      <main id="main-content">
        <HeroSection />
        <GiveForwardSection />
        <JourneySection />
        <ImpactSection />
        <ListeningSection />
        <CommunityActionSection />
        <InvitationSection />
      </main>
      <EnglishFooter />
    </div>
  );
}
