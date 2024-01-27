export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
      }, 
    ],
    sitemap: 'https://acme.com/sitemap.xml',
  }
}