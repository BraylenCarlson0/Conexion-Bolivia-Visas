import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://visasboliviaconexion.com",
  base: "/",
  output: "static",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "zh", "zh-tw", "ar", "he", "pt", "ru", "id", "uk", "sr", "hi"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en-US",
          zh: "zh-CN",
          "zh-tw": "zh-TW",
          ar: "ar",
          he: "he",
          pt: "pt-BR",
          ru: "ru",
          id: "id",
          uk: "uk",
          sr: "sr",
          hi: "hi",
        },
      },
    }),
  ],
});
