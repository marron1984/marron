"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { Locale, SiteLocale } from "@/i18n/types";
import { loadLocale, getLocaleSync } from "@/i18n";
import ja from "@/i18n/ja";

interface LanguageContextValue {
  locale: Locale;
  t: SiteLocale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "ja",
  t: ja,
  setLocale: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("ja");
  const [translations, setTranslations] = useState<SiteLocale>(ja);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && ["ja", "en", "uz", "my"].includes(saved)) {
      setLocaleState(saved);
      loadLocale(saved).then(setTranslations);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
    document.documentElement.setAttribute("lang", next === "my" ? "my" : next);
    loadLocale(next).then(setTranslations);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <LanguageContext.Provider value={{ locale, t: translations, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
