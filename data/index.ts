import type { Command, Pack } from './schema';
import { defaultPack } from './packs/default';
import { defaultCommands } from './commands';

export const packs: Pack[] = [defaultPack];
export const commands = defaultCommands;

export function getPackById(id?: string | null): Pack {
  if (!id) return defaultPack;
  return packs.find((pack) => pack.id === id || pack.slug === id) ?? defaultPack;
}

export function getAllPackIds(): string[] {
  return packs.map((pack) => pack.slug);
}

export function getCommandsForPack(packId: string): Command[] {
  const pack = getPackById(packId);
  return pack.commands;
}

export function getCommandById(packId: string, commandId: string): Command | null {
  const pack = getPackById(packId);
  return (
    pack.commands.find(
      (item) => item.id === commandId || item.slug === commandId
    ) ?? null
  );
}

export function getCommandRouteList(): Array<{ packId: string; commandId: string }> {
  return packs.flatMap((pack) =>
    pack.commands.map((item) => ({ packId: pack.slug, commandId: item.slug }))
  );
}
