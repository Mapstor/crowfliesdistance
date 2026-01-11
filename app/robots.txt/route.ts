export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://crowfliesdistance.com/sitemap.xml

# Crawl-delay for courtesy
Crawl-delay: 1

# Allow all major search engines and AI crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

# AI Training Crawlers
User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

# Academic and Research Bots
User-agent: ia_archiver
Allow: /

# Disallow admin/private areas (none currently but good practice)
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /api/

# Allow specific API endpoints that provide useful data
Allow: /api/cities
Allow: /api/distance`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}