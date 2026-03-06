export default function generateSitemap() {
  const baseUrl = 'https://yourdomain.com';
  const pages = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/portfolio',
    '/blog',
    '/contact',
    '/events/africa-climate-summit',
    '/events/magical-kenya-open',
    '/events/wash-campaign',
    '/events/water-sanitation-narsip',
    '/events/corporate-events'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}
