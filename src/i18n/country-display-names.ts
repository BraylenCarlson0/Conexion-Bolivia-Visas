import type { Locale } from "./config";

type CountryNames = { nameEn: string; nameEs: string };

/** BCP 47 tags for Intl.DisplayNames — es/en use the Google Sheet names instead. */
const INTL_TAGS: Record<Exclude<Locale, "es" | "en">, string> = {
  pt: "pt",
  zh: "zh-CN",
  "zh-tw": "zh-TW",
  ar: "ar",
  he: "he",
  ru: "ru",
  id: "id",
  uk: "uk",
  sr: "sr",
  hi: "hi",
};

const SORT_LOCALES: Record<Locale, string> = {
  es: "es",
  en: "en",
  pt: "pt",
  zh: "zh-CN",
  "zh-tw": "zh-TW",
  ar: "ar",
  he: "he",
  ru: "ru",
  id: "id",
  uk: "uk",
  sr: "sr",
  hi: "hi",
};

const intlDisplayNames = new Map<string, Intl.DisplayNames>();

function getIntlDisplayNames(tag: string): Intl.DisplayNames {
  let displayNames = intlDisplayNames.get(tag);
  if (!displayNames) {
    displayNames = new Intl.DisplayNames([tag], { type: "region" });
    intlDisplayNames.set(tag, displayNames);
  }
  return displayNames;
}

function intlCountryName(tag: string, code: string, fallback: string): string {
  try {
    return getIntlDisplayNames(tag).of(code) ?? fallback;
  } catch {
    return fallback;
  }
}

export function getCountrySortLocale(locale: Locale): string {
  return SORT_LOCALES[locale];
}

export function getCountryDisplayName(
  locale: Locale,
  code: string,
  names: CountryNames,
): string {
  if (locale === "es") return names.nameEs;
  if (locale === "en") return names.nameEn;

  const tag = INTL_TAGS[locale];
  return intlCountryName(tag, code, names.nameEn);
}

export function sortCountriesByDisplayName<
  T extends { code: string; nameEn: string; nameEs: string },
>(countries: T[], locale: Locale): T[] {
  const sortLocale = getCountrySortLocale(locale);
  return [...countries].sort((a, b) => {
    const nameA = getCountryDisplayName(locale, a.code, a);
    const nameB = getCountryDisplayName(locale, b.code, b);
    return nameA.localeCompare(nameB, sortLocale);
  });
}
