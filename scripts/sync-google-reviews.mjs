/**
 * Sync 5-star Google reviews into src/data/reviews.json.
 *
 * Setup (one-time, free tier — no subscription):
 * 1. Create a Google Cloud project and enable Places API (New).
 * 2. Enable Cloud Translation API (same project, free tier covers weekly syncs).
 * 3. Create an API key with both APIs allowed (or no API restrictions while testing).
 * 4. Add GOOGLE_PLACES_API_KEY to .env locally or GitHub Actions secrets.
 *
 * Run: npm run sync:reviews
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  LOCALE_TO_TRANSLATE,
  REVIEW_LOCALES,
  shouldUseOriginal,
} from "./review-locales.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const reviewsPath = join(root, "src/data/reviews.json");

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_SEARCH_QUERY =
  process.env.GOOGLE_PLACE_QUERY ??
  "VISAS BOLIVIA EN CUSCO CONEXION BOLIVIA Mara Isabel, Clorinda Matto de Turner 308, Cusco Peru";

const PLACES_BASE = "https://places.googleapis.com/v1";
const TRANSLATE_BASE = "https://translation.googleapis.com/language/translate/v2";

function loadReviewsFile() {
  return JSON.parse(readFileSync(reviewsPath, "utf8"));
}

function saveReviewsFile(data) {
  writeFileSync(reviewsPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function placesFetch(path, { method = "GET", fieldMask, body } = {}) {
  const headers = {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": API_KEY,
  };
  if (fieldMask) headers["X-Goog-FieldMask"] = fieldMask;

  const response = await fetch(`${PLACES_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const payload = await response.json();
  if (!response.ok) {
    const message = payload.error?.message ?? response.statusText;
    throw new Error(`Places API error (${response.status}): ${message}`);
  }
  return payload;
}

async function translationFetch(path, params) {
  const body = new URLSearchParams(params);
  body.append("key", API_KEY);

  const response = await fetch(`${TRANSLATE_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const payload = await response.json();
  if (!response.ok) {
    const message = payload.error?.message ?? response.statusText;
    throw new Error(`Translation API error (${response.status}): ${message}`);
  }
  return payload;
}

async function detectLanguage(text) {
  const payload = await translationFetch("/detect", { q: text });
  return payload.data?.detections?.[0]?.[0]?.language ?? null;
}

async function translateBatch(texts, target) {
  if (texts.length === 0) return [];

  const body = new URLSearchParams();
  texts.forEach((text) => body.append("q", text));
  body.append("target", target);
  body.append("format", "text");
  body.append("key", API_KEY);

  const response = await fetch(TRANSLATE_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const payload = await response.json();
  if (!response.ok) {
    const message = payload.error?.message ?? response.statusText;
    throw new Error(`Translation API error (${response.status}): ${message}`);
  }

  return payload.data.translations.map((item) => item.translatedText);
}

async function resolvePlaceId(existingPlaceId) {
  if (existingPlaceId) return existingPlaceId;

  const result = await placesFetch("/places:searchText", {
    method: "POST",
    fieldMask: "places.id,places.googleMapsUri",
    body: { textQuery: PLACE_SEARCH_QUERY },
  });

  const place = result.places?.[0];
  if (!place?.id) {
    throw new Error(`No place found for query: ${PLACE_SEARCH_QUERY}`);
  }

  return place.id.replace(/^places\//, "");
}

function normalizeReview(review) {
  return {
    author: review.authorAttribution?.displayName ?? "Google user",
    rating: review.rating ?? 5,
    text: review.text?.text?.trim() ?? "",
    sourceLanguage: null,
    translations: {},
    relativeTime: review.relativePublishTimeDescription ?? "",
    publishedAt: review.publishTime ?? null,
    photoUrl: review.authorAttribution?.photoUri ?? null,
  };
}

async function fetchPlaceReviews(placeId) {
  return placesFetch(`/places/${placeId}`, {
    fieldMask: "rating,userRatingCount,googleMapsUri,reviews",
  });
}

async function addTranslations(reviews) {
  const withLanguage = [];
  for (const review of reviews) {
    const sourceLanguage = await detectLanguage(review.text);
    withLanguage.push({ ...review, sourceLanguage });
  }

  for (const locale of REVIEW_LOCALES) {
    const target = LOCALE_TO_TRANSLATE[locale];
    const pending = [];

    withLanguage.forEach((review, index) => {
      if (shouldUseOriginal(review.sourceLanguage, locale)) {
        review.translations[locale] = review.text;
      } else {
        pending.push({ index, text: review.text });
      }
    });

    if (pending.length === 0) continue;

    const translated = await translateBatch(
      pending.map((item) => item.text),
      target,
    );

    pending.forEach((item, i) => {
      withLanguage[item.index].translations[locale] = translated[i];
    });
  }

  return withLanguage;
}

async function main() {
  if (!API_KEY) {
    console.error("Missing GOOGLE_PLACES_API_KEY. Add it to .env or your environment.");
    process.exit(1);
  }

  const existing = loadReviewsFile();
  const placeId = await resolvePlaceId(existing.placeId);
  const place = await fetchPlaceReviews(placeId);

  const allReviews = (place.reviews ?? []).map(normalizeReview).filter((r) => r.text);
  const fiveStarReviews = allReviews.filter((r) => r.rating === 5);
  const selected =
    fiveStarReviews.length > 0 ? fiveStarReviews : allReviews.filter((r) => r.rating >= 4);

  console.log(`Translating ${selected.length} review(s) into ${REVIEW_LOCALES.length} languages…`);
  let translatedReviews = selected;
  try {
    translatedReviews = await addTranslations(selected);
  } catch (error) {
    console.warn(`Translation skipped: ${error.message}`);
    console.warn(
      "Enable Cloud Translation API on your Google Cloud project, then run sync again:",
    );
    console.warn(
      "https://console.cloud.google.com/apis/library/translate.googleapis.com",
    );
  }

  const output = {
    placeId,
    rating: place.rating ?? existing.rating ?? 0,
    totalCount: place.userRatingCount ?? existing.totalCount ?? 0,
    mapsUrl: place.googleMapsUri ?? existing.mapsUrl,
    syncedAt: new Date().toISOString(),
    reviews: translatedReviews,
  };

  if (output.reviews.length === 0) {
    console.warn("No reviews returned. Check the Place ID and API field access.");
  }

  saveReviewsFile(output);
  console.log(
    `Synced ${output.reviews.length} review(s). Rating: ${output.rating} (${output.totalCount} total on Google).`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
