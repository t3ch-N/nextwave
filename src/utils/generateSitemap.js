export const generateSitemap = () => {
  const baseUrl = 'https://nextwave-pr.co.ke';
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/case-studies', priority: '0.8', changefreq: 'weekly' },
    { url: '/portfolio', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/events/africa-climate-summit', priority: '0.7', changefreq: 'monthly' },
    { url: '/events/magical-kenya-open', priority: '0.7', changefreq: 'monthly' },
    { url: '/events/wash-campaign', priority: '0.7', changefreq: 'monthly' },
    { url: '/events/water-sanitation-narsip', priority: '0.7', changefreq: 'monthly' },
    { url: '/events/corporate-events', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};
