import type { Pack } from './schema';
import { defaultPack } from './packs/default';

export const packs: Pack[] = [defaultPack];

export function getPackById(id?: string | null): Pack {
  if (!id) return defaultPack;
  return packs.find((pack) => pack.id === id) ?? defaultPack;
}
