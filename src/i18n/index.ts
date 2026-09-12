import type { Locale } from "@/lib/i18n-types";
import { es, type Dictionary } from "./dictionaries/es";
import { en } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export type { Dictionary };