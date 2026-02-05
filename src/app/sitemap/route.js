// app/sitemap/route.js
export async function generateSitemap() {
  const baseUrl = "https://www.jvsmindia.com";
  
  const staticUrls = [
    { loc: "/", lastmod: "2026-02-05", priority: 1.0 },
    { loc: "/#aboutus", lastmod: "2026-02-05", priority: 0.8 },
    { loc: "/contact", lastmod: "2026-02-05", priority: 0.8 },
    { loc: "/#services", lastmod: "2026-02-05", priority: 0.8 },
     { loc: "/zoho", lastmod: "2026-02-05", priority: 0.8 },
  ];

  const dynamicUrls = [
    { loc: "/blog", lastmod: "2026-02-05", priority: 0.8 },
   
  ];

  const urls = [...staticUrls, ...dynamicUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      ({ loc, lastmod, priority }) => `
    <url>
      <loc>${baseUrl}${loc}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>${priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;
}

export async function GET() {
  const sitemap = await generateSitemap();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
