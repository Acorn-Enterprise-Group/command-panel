import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Command } from '../../../data/schema';
import {
  getCommandById,
  getCommandRouteList,
  getCommandsForPack,
  getPackById
} from '../../../data';
import CommandPageView from '../../../components/CommandPageView';

export function generateStaticParams() {
  return getCommandRouteList();
}

export function generateMetadata({
  params
}: {
  params: { packId: string; commandId: string };
}): Metadata {
  const command = getCommandById(params.packId, params.commandId);
  if (!command) return { title: 'Command Not Found' };
  return {
    title: `${command.name} - CopyCommand`,
    description: command.learning.whatItDoes,
    alternates: {
      canonical: `https://copycommand.org/${params.packId}/${params.commandId}`
    }
  };
}

function getRelatedCommands(command: Command, list: Command[]): Command[] {
  const index = list.findIndex((item) => item.id === command.id);
  const ordered = list.filter((item) => item.id !== command.id);
  const others = list.filter((item) => item.id !== command.id);
  const scoreTagOverlap = (candidate: Command) => {
    const overlap = candidate.tags.filter((tag) => command.tags.includes(tag));
    return overlap.length;
  };

  const tagMatches = ordered
    .filter((candidate) => scoreTagOverlap(candidate) > 0)
    .sort((a, b) => scoreTagOverlap(b) - scoreTagOverlap(a));

  const adjacency: Command[] = [];
  if (index >= 0) {
    for (let step = 1; step <= 3; step += 1) {
      const nextIndex = (index + step) % list.length;
      const candidate = list[nextIndex];
      if (candidate && candidate.id !== command.id) {
        adjacency.push(candidate);
      }
    }
  }

  const orderedByPriority = [...tagMatches, ...adjacency, ...others];
  const seen = new Set<string>();
  const deduped: Command[] = [];
  orderedByPriority.forEach((item) => {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      deduped.push(item);
    }
  });

  return deduped.slice(0, 3);
}

export default function CommandPage({
  params
}: {
  params: { packId: string; commandId: string };
}) {
  const pack = getPackById(params.packId);
  const command = getCommandById(params.packId, params.commandId);
  if (!command) return notFound();

  const canonicalUrl = `https://copycommand.org/${params.packId}/${params.commandId}`;
  const packUrl = `https://copycommand.org/${pack.slug}`;
  const defaultVariant =
    command.variants[command.defaultVariantKey] ??
    Object.values(command.variants)[0];
  const operatingSystems = Array.from(
    new Set(Object.values(command.variants).map((variant) => variant.platform))
  );

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://copycommand.org/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: pack.title,
            item: packUrl
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: command.name,
            item: canonicalUrl
          }
        ]
      },
      {
        '@type': 'TechArticle',
        headline: `${command.name} - CopyCommand`,
        description: command.learning.whatItDoes,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        dateModified: command.lastReviewed,
        author: {
          '@type': 'Organization',
          name: 'CopyCommand'
        },
        citation: command.sources.map((source) => source.url)
      },
      {
        '@type': 'SoftwareSourceCode',
        name: command.name,
        programmingLanguage: 'Shell',
        text: defaultVariant?.command ?? command.name,
        operatingSystem: operatingSystems,
        url: canonicalUrl
      }
    ]
  });

  const list = getCommandsForPack(params.packId);
  const index = list.findIndex((item) => item.id === command.id);
  const prev = index > 0 ? list[index - 1] : null;
  const next = index >= 0 && index < list.length - 1 ? list[index + 1] : null;
  const packSlug = encodeURIComponent(pack.slug);
  const related = getRelatedCommands(command, list);

  return CommandPageView({
    pack,
    command,
    packSlug,
    prev,
    next,
    related,
    jsonLd
  });
}
