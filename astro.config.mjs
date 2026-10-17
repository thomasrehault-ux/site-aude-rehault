import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://auderehault.fr",
  // L’aperçu GitHub Pages conserve son sous-répertoire ; Cloudflare sert la racine.
  base: process.env.SITE_BASE_PATH || "/",
  trailingSlash: "always"
});
