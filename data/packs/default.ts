import type { Pack } from '../schema';
import { defaultCommands } from '../commands';

export const defaultPack: Pack = {
  "id": "default",
  "slug": "default",
  "title": "Default",
  "description": "Beginner-friendly commands for daily use.",
  "order": 1,
  "commands": defaultCommands
};
