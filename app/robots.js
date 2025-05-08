// https://github.com/vercel/next.js/issues/68667#issuecomment-2448127538
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

/**
 *
 * @returns {MetadataRoute.Robots}
 */
export default function robots() {
  const isNoindex = process.env.APP_INDEX_MODE === 'NOINDEX';
  const domain = 'https://promptrecovery.co.uk';

  return {
    rules: isNoindex
      ? {
          userAgent: '*',
          disallow: '/',
        }
      : {
          userAgent: '*',
          allow: '/',
        },
    sitemap: `${domain}/sitemap.xml`,
  };
}
