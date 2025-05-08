import { MetadataRoute } from 'next';

// https://github.com/vercel/next.js/issues/68667
export const dynamic = 'force-static';

/**
 *
 * @returns {MetadataRoute.Sitemap}
 */
export default function sitemap() {
  return [
    {
      url: 'https://promptrecovery.co.uk/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://promptrecovery.co.uk/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://promptrecovery.co.uk/faqs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://promptrecovery.co.uk/reviews',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://promptrecovery.co.uk/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://promptrecovery.co.uk/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
