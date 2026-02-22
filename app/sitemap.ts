import type { MetadataRoute } from 'next';
import { getAllPackIds, getCommandRouteList, getPackById } from '../data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://copycommand.org';
  const staticPages = ['/', '/about', '/contact', '/privacy', '/start-here'];
  const packPages = getAllPackIds().map((packId) => {
    const pack = getPackById(packId);
    const lastReviewed =
      pack.commands.reduce((latest, command) => {
        return command.lastReviewed > latest ? command.lastReviewed : latest;
      }, pack.commands[0]?.lastReviewed ?? new Date().toISOString()) ?? new Date().toISOString();
    return {
      path: `/${packId}`,
      lastModified: lastReviewed
    };
  });
  const commandPages = getCommandRouteList().map((route) => {
    const command = getPackById(route.packId).commands.find(
      (item) => item.slug === route.commandId || item.id === route.commandId
    );
    return {
      path: `/${route.packId}/${route.commandId}`,
      lastModified: command?.lastReviewed ?? new Date().toISOString()
    };
  });

  return [
    ...staticPages.map((path) => ({ path, lastModified: new Date().toISOString() })),
    ...packPages,
    ...commandPages
  ].map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    lastModified: entry.lastModified,
    changeFrequency: 'weekly',
    priority: entry.path === '/' ? 1 : 0.6
  }));
}
