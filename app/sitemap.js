export default function sitemap() {
    return [
      {
        url: 'https://dijokiin.dreamice.my.id',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://dijokiin.dreamice.my.id/store',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://dijokiin.dreamice.my.id/store',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }