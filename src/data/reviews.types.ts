import type { Locale } from "../i18n/config";

export type GoogleReview = {
  author: string;
  rating: number;
  /** Original text from Google */
  text: string;
  sourceLanguage: string | null;
  /** Localized text for each site language */
  translations: Partial<Record<Locale, string>>;
  relativeTime: string;
  publishedAt: string | null;
  photoUrl: string | null;
};

export type GoogleReviewsData = {
  placeId: string;
  rating: number;
  totalCount: number;
  mapsUrl: string;
  syncedAt: string | null;
  reviews: GoogleReview[];
};

export function getReviewText(review: GoogleReview, locale: Locale): string {
  return review.translations?.[locale] ?? review.text;
}
