import { queryCollection } from "@nuxt/content/server";

const staticPaths = [
  "/",
  "/who-we-are",
  "/epc",
  "/field-services",
  "/supply-chain",
  "/projects",
  "/contact-us",
];

export default defineEventHandler(async (event) => {
  const { siteUrl } = useRuntimeConfig(event).public;
  const projects = await queryCollection(event, "projects")
    .select("path")
    .all();

  const urls = [...staticPaths, ...projects.map((project) => project.path)]
    .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
    .join("\n");

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
});
