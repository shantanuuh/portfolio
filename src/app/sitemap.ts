import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shantanuharkulkar.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Since this is a single-page portfolio, we only need the root URL mapped here.
    // As you add more pages (like /blog or /case-studies), you can add them to this array.
  ];
}
