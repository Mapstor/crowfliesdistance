import { popularDistances } from '@/data/popular-distances';

export async function GET() {
  const baseUrl = 'https://crowfliesdistance.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/privacy-policy',
    '/terms-of-service',
    '/blog',
    '/blog/what-does-as-the-crow-flies-mean',
    '/blog/straight-line-vs-driving-distance',
    '/blog/how-to-measure-distance-on-map',
    '/blog/why-planes-dont-fly-straight',
    '/blog/surprising-city-distances',
    '/blog/great-circle-routes-navigation'
  ];

  // Generate city pair URLs from popular distances
  const cityPairPages = popularDistances.map(distance => {
    const fromSlug = distance.fromCity.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const toSlug = distance.toCity.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `/${fromSlug}-to-${toSlug}`;
  });

  const currentDate = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page === '' ? 'daily' : page.includes('/blog') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/blog') ? '0.8' : '0.7'}</priority>
  </url>`).join('')}
  ${cityPairPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}