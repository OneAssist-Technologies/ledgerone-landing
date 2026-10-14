export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: 'https://oneassist.net.in/ledgerone/sitemap.xml',
  };
}
