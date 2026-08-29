import {
  communityFooterContent,
  type FooterLink,
} from "@/components/community-footer/communityFooterContent";

export type NavItem = FooterLink;

export const pageNavigation: NavItem[] = communityFooterContent.en.pageLinks;
