export type Locale = "es" | "en";

export type Localized = {
  es: string;
  en: string;
};

export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value.es;
}