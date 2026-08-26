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

export const footerPage: FooterColumnContent = {
  title: "This page",
  items: pageNavigation,
};
