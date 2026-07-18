import type { Locale } from "../i18n/config";

export const LOCALE_TO_TRANSLATE: Record<Locale, string> = {
  es: "es",
  en: "en",
  zh: "zh-CN",
  "zh-tw": "zh-TW",
  ar: "ar",
  he: "he",
  pt: "pt",
  ru: "ru",
  id: "id",
  uk: "uk",
  sr: "sr",
};

export function isReviewTranslated(
  sourceLanguage: string | null | undefined,
  locale: Locale,
): boolean {
  if (!sourceLanguage) return false;
  const target = LOCALE_TO_TRANSLATE[locale];
  const source = sourceLanguage.toLowerCase();
  if (target === "zh-CN" && (source === "zh-cn" || source === "zh")) return false;
  if (target === "zh-TW" && (source === "zh-tw" || source === "zh-hant")) return false;
  return source.split("-")[0] !== target.split("-")[0];
}
