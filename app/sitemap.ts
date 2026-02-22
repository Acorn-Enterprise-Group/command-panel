import type { MetadataRoute } from 'next';
import { getAllPackIds, getCommandRouteList } from '../data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://copycommand.org';
  const staticPages = ['/', '/about', '/contact', '/privacy'];
  const packPages = getAllPackIds().map((packId) => `/${packId}`);
  const commandPages = getCommandRouteList().map(
    (route) => `/${route.packId}/${route.commandId}`
  );

  return [...staticPages, ...packPages, ...commandPages].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.6
  }));
}
