import { BrandMark } from "./BrandMark";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileNav } from "./MobileNav";
import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  return (
    <header className="ti-header" aria-label="Site navigation">
      <BrandMark />
      <SiteNav />
      <div className="ti-header__actions">
        <LanguageSwitch />
        <MobileNav />
      </div>
    </header>
  );
}
