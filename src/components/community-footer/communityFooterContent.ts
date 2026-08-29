import { socialProfiles } from "../../content/communityData.ts";

export type FooterLocale = "en" | "fa";
export type FooterDirection = "ltr" | "rtl";
export type FooterPlatformId = keyof typeof socialProfiles;

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterChannel extends FooterLink {
  id: FooterPlatformId;
  handle: string;
}

export interface CommunityFooterContent {
  locale: FooterLocale;
  direction: FooterDirection;
  brandName: string;
  description: string;
  promise: string;
  liveLabel: string;
  reportingMonth: string;
  channelsLabel: string;
  pageLinksLabel: string;
  backToTopLabel: string;
  homeHref: string;
  language: FooterLink & {
    hint: string;
    locale: FooterLocale;
    direction: FooterDirection;
  };
  channels: FooterChannel[];
  pageLinks: FooterLink[];
}

const channelNames: Record<FooterPlatformId, string> = {
  telegram: "Telegram",
  youtube: "YouTube",
  x: "X",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  github: "GitHub",
};

const channels: FooterChannel[] = Object.entries(socialProfiles).map(([id, profile]) => ({
  id: id as FooterPlatformId,
  label: channelNames[id as FooterPlatformId],
  href: profile.url,
  handle: profile.handle,
}));

const englishPageLinks: FooterLink[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "The path", href: "#journey" },
  { label: "Community reach", href: "#reach" },
  { label: "Join", href: "#community" },
];

const persianPageLinks: FooterLink[] = [
  { label: "مصاحبه‌ها", href: "/fa/#interviews" },
  { label: "منتورها", href: "/fa/#mentors" },
  { label: "منابع", href: "/fa/#resources" },
  { label: "جامعه", href: "/fa/#community" },
];

function formatReportingMonth(locale: FooterLocale) {
  const intlLocale = locale === "fa" ? "fa-IR-u-ca-gregory" : "en";

  return new Intl.DateTimeFormat(intlLocale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date());
}

export const communityFooterContent: Record<FooterLocale, CommunityFooterContent> = {
  en: {
    locale: "en",
    direction: "ltr",
    brandName: "Tech Immigrants",
    description:
      "A volunteer-run community of 54K+ Persian speakers in tech. Real experience on CVs, interviews, visas, relocation, and life after the move.",
    promise: "Powered by community.",
    liveLabel: "Live",
    reportingMonth: formatReportingMonth("en"),
    channelsLabel: "Community",
    pageLinksLabel: "This page",
    backToTopLabel: "Tech Immigrants, back to the top",
    homeHref: "#top",
    language: {
      label: "فارسی",
      hint: "Persian site",
      href: "/fa/",
      locale: "fa",
      direction: "rtl",
    },
    channels,
    pageLinks: englishPageLinks,
  },
  fa: {
    locale: "fa",
    direction: "rtl",
    brandName: "تک ایمیگرنتس",
    description:
      "جامعه‌ای داوطلب‌محور با بیش از ۵۴ هزار فارسی‌زبان فعال در فناوری؛ برای به‌اشتراک‌گذاشتن تجربه‌های واقعی رزومه، مصاحبه، ویزا، جابه‌جایی و زندگی پس از مهاجرت.",
    promise: "با قدرت جامعه.",
    liveLabel: "فعال",
    reportingMonth: formatReportingMonth("fa"),
    channelsLabel: "جامعه",
    pageLinksLabel: "در سایت",
    backToTopLabel: "تک ایمیگرنتس، بازگشت به بالای صفحه",
    homeHref: "/fa/",
    language: {
      label: "English",
      hint: "وب‌سایت انگلیسی",
      href: "/",
      locale: "en",
      direction: "ltr",
    },
    channels,
    pageLinks: persianPageLinks,
  },
};
