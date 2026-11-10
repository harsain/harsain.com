import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/blog';
import { site } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().filter((p) => !p.externalUrl);
  return [
    { url: `${site.url}/` },
    ...(posts.length ? [{ url: `${site.url}/blog/` }] : []),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}/`, lastModified: new Date(p.date) })),
  ];
}
