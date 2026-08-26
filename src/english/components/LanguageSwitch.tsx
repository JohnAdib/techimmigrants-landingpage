import { ArrowUpRight } from "lucide-react";
import { brand, siteLinks } from "../content/site";

export function LanguageSwitch() {
  return (
    <a className="ti-language" href={siteLinks.persian}>
      <span lang="fa" dir="rtl">
        {brand.persianLabel}
      </span>
      <small>{brand.persianHint}</small>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}
