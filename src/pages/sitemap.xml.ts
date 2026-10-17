import type { APIRoute } from "astro";

// Les mentions légales restent hors du sitemap tant qu’elles sont en préparation.
export const GET: APIRoute = ({ site }) => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${new URL("/", site)}</loc></url></urlset>\n`,
  { headers: { "Content-Type": "application/xml; charset=utf-8" } }
);
