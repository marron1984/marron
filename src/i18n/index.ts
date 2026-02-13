import type { Locale, SiteLocale } from "./types";
import ja from "./ja";

const localeModules: Record<Locale, () => Promise<{ default: SiteLocale }>> = {
  ja: () => Promise.resolve({ default: ja }),
  en: () => import("./en"),
  uz: () => import("./uz"),
  my: () => import("./my"),
};

// Eager cache (populated on first load of each locale)
const cache: Partial<Record<Locale, SiteLocale>> = { ja };

export async function loadLocale(locale: Locale): Promise<SiteLocale> {
  if (cache[locale]) return cache[locale]!;
  const mod = await localeModules[locale]();
  cache[locale] = mod.default;
  return mod.default;
}

export function getLocaleSync(locale: Locale): SiteLocale {
  return cache[locale] ?? ja;
}

export { type Locale, type SiteLocale } from "./types";
export { LOCALES } from "./types";
