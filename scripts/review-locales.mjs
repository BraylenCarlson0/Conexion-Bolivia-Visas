/** Site locales → Google Cloud Translation language codes */
export const REVIEW_LOCALES = [
  "es",
  "en",
  "zh",
  "zh-tw",
  "ar",
  "he",
  "pt",
  "ru",
  "id",
  "uk",
  "sr",
];

export const LOCALE_TO_TRANSLATE = {
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

export function shouldUseOriginal(sourceLang, locale) {
  if (!sourceLang) return false;
  const target = LOCALE_TO_TRANSLATE[locale];
  const source = sourceLang.toLowerCase();
  if (target === "zh-CN" && (source === "zh-cn" || source === "zh")) return true;
  if (target === "zh-TW" && (source === "zh-tw" || source === "zh-hant")) return true;
  return source.split("-")[0] === target.split("-")[0];
}
