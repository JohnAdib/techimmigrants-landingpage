import { siteLinks } from "./site";

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterColumnContent {
  title: string;
  items: NavItem[];
}

export const pageNavigation: NavItem[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "The path", href: "#journey" },
  { label: "Community reach", href: "#reach" },
  { label: "Join", href: "#community" },
];

export const footerExplore: FooterColumnContent = {
  title: "Explore",
  items: [
    { label: "Persian site", href: siteLinks.persian },
    { label: "Workshops", href: siteLinks.workshops },
    { label: "Interviews", href: siteLinks.interviews },
    { label: "Mentors", href: siteLinks.mentors },
    { label: "Resources", href: siteLinks.resources },
    { label: "Blog", href: siteLinks.blog },
  ],
};

export const footerPage: FooterColumnContent = {
  title: "This page",
  items: pageNavigation,
};
