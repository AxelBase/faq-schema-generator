export const prerender = true;
export const trailingSlash = 'never';

type SitemapUrl = {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

const urls: SitemapUrl[] = [
  { loc: 'https://axelbase.github.io/faq-schema-generator/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 1.0 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/blog.html', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/blog/posts/post1.html', lastmod: '2025-11-01', changefreq: 'yearly', priority: 0.7 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/blog/posts/post2.html', lastmod: '2025-11-03', changefreq: 'yearly', priority: 0.7 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/blog/posts/post3.html', lastmod: '2025-11-05', changefreq: 'yearly', priority: 0.7 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/blog/posts/post4.html', lastmod: '2025-11-07', changefreq: 'yearly', priority: 0.7 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/blog/posts/post5.html', lastmod: '2025-11-09', changefreq: 'yearly', priority: 0.7 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/blog/posts/post6.html', lastmod: '2025-11-11', changefreq: 'yearly', priority: 0.7 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/blog/posts/post7.html', lastmod: '2025-11-13', changefreq: 'yearly', priority: 0.7 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/privacy.html', lastmod: new Date().toISOString().split('T')[0], changefreq: 'yearly', priority: 0.6 },
  { loc: 'https://axelbase.github.io/faq-schema-generator/terms.html', lastmod: new Date().toISOString().split('T')[0], changefreq: 'yearly', priority: 0.6 }
];

export function GET() {
  const header = '<?xml version="1.0" encoding="UTF-8"?>';
  const body = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, lastmod, changefreq, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(header + body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-max-age=0'
    }
  });
}