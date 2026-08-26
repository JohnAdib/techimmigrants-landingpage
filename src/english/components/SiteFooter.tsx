import { ArrowUp } from "lucide-react";
import { footerExplore, footerPage } from "../content/navigation";
import { brand } from "../content/site";
import { currentMonth } from "../reportingPeriod";
import { BrandMark } from "./BrandMark";
import { FooterChannels } from "./FooterChannels";
import { FooterColumn } from "./FooterColumn";
import { LanguageSwitch } from "./LanguageSwitch";
import { LiveDot } from "./LiveDot";

export function SiteFooter() {
  return (
    <footer className="ti-footer ti-surface--inverse">
      <div className="ti-shell--wide ti-footer__inner">
        <div className="ti-footer__brand">
          <BrandMark hint={brand.promise} />
          <p>{brand.mission}</p>
          <span className="ti-footer__status ti-label">
            <LiveDot />
            Live · {currentMonth}
          </span>
        </div>

        <FooterChannels />
        <FooterColumn column={footerExplore} />

        <div className="ti-footer__page">
          <FooterColumn column={footerPage} />
          <LanguageSwitch />
        </div>
      </div>

      <div className="ti-shell--wide ti-footer__base">
        <span>{brand.promise}</span>
        <span>Page context · {currentMonth}</span>
        <span>© {new Date().getFullYear()} {brand.name}</span>
        <a className="ti-footer__top" href="#top">
          Back to top
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
