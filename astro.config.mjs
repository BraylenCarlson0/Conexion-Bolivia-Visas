import { defineConfig } from "astro/config";

// Update site URL after GitHub Pages is live (e.g. https://yourusername.github.io/conexion-bolivia-visas)
export default defineConfig({
  site: "https://yourusername.github.io",
  base: "/conexion-bolivia-visas",
  output: "static",
});
