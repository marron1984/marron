export type Locale = "ja" | "en" | "uz" | "my";

export interface LocaleInfo {
  code: Locale;
  label: string;
  flag: string;
}

export const LOCALES: LocaleInfo[] = [
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "my", label: "မြန်မာ", flag: "🇲🇲" },
];

export interface WebSite {
  name: string;
  url: string;
  domain: string;
  tag: string;
}

export interface PortfolioItem {
  company: string;
  role: string;
  description: string;
  longDescription: string;
  tags: string[];
  accent: "marron" | "navy" | "neutral";
  span: "wide" | "tall" | "normal";
  group?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  detail?: string;
  highlight?: boolean;
}

export interface SiteLocale {
  personalInfo: {
    nameJa: string;
    nameEn: string;
    alias: string;
    catchphrase: string;
    subcatchphrase: string;
    birthDate: string;
    origin: string;
    hobby: string;
    keywords: string[];
    coreIdentity: string;
    stats: { value: string; label: string }[];
  };
  webPortfolio: WebSite[];
  portfolio: PortfolioItem[];
  timeline: TimelineEvent[];
  philosophy: {
    mainQuote: string;
    subtext: string;
    beliefs: { title: string; text: string }[];
  };
  ui: {
    scroll: string;
    portfolio: {
      label: string;
      title: string;
      subtitle: string;
      clickHint: string;
    };
    history: {
      label: string;
      title: string;
      subtitle: string;
    };
    philosophy: {
      label: string;
      title: string;
    };
    webPortfolio: {
      badge: string;
      title: string;
      description: string;
      websites: string;
      powered: string;
      stack: string;
    };
    gallery: {
      label: string;
      title: string;
      dragHint: string;
    };
    contact: {
      label: string;
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submitHint: string;
    };
    footer: {
      navLinks: { label: string; href: string }[];
    };
  };
}
