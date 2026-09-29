import { ROUTES } from "./routes";

export interface FooterLink {
  label: string;
  /** Omitted for features that are not built yet; the link then shows a "coming soon" toast. */
  href?: string;
}

export const FOOTER_COLUMNS: FooterLink[][] = [
  [
    { label: "Featured Courses", href: ROUTES.courses },
    { label: "Featured Categories" },
    { label: "Business" },
    { label: "IT" },
    { label: "Design" },
  ],
  [
    { label: "Development" },
    { label: "Marketing" },
    { label: "Photography" },
    { label: "Finance" },
    { label: "Sport" },
  ],
  [
    { label: "Become a Creator", href: ROUTES.register },
    { label: "Affiliate Program" },
    { label: "Contact" },
    { label: "Help" },
    { label: "About" },
  ],
];

export const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
  { label: "Cookies Settings" },
];
