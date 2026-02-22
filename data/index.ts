import type { CommandItem, Pack } from './schema';
import { defaultPack } from './packs/default';

export const packs: Pack[] = [defaultPack];

export function getPackById(id?: string | null): Pack {
  if (!id) return defaultPack;
  return packs.find((pack) => pack.id === id) ?? defaultPack;
}

export function getAllPackIds(): string[] {
  return packs.map((pack) => pack.id);
}

export function getCommandsForPack(packId: string): CommandItem[] {
  const pack = getPackById(packId);
  return pack.sets.flatMap((set) => set.items);
}

export function getCommandById(packId: string, commandId: string): CommandItem | null {
  const pack = getPackById(packId);
  for (const set of pack.sets) {
    const found = set.items.find((item) => item.id === commandId);
    if (found) return found;
  }
  return null;
}

export function getCommandRouteList(): Array<{ packId: string; commandId: string }> {
  return packs.flatMap((pack) =>
    pack.sets.flatMap((set) =>
      set.items.map((item) => ({ packId: pack.id, commandId: item.id }))
    )
  );
}
