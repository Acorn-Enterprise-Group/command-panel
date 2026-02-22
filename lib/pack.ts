import type { Command, Pack } from '../data/schema';

export type CommandGroup = {
  id: string;
  label: string;
  description?: string;
  commands: Command[];
};

const TOOL_LABELS: Record<string, string> = {
  'start-here': 'Start Here',
  'fix-common': 'Fix Common Errors',
  'git-basics': 'Git Basics',
  'database-prisma': 'Database / Prisma',
  troubleshoot: 'Troubleshoot',
  'reset-safe': 'Reset (Safe)',
  'reset-nuclear': 'Reset (Nuclear)'
};

const TOOL_DESCRIPTIONS: Record<string, string> = {
  'start-here': 'Get set up and run the project.',
  'fix-common': 'Quick fixes for common beginner errors.',
  'git-basics': 'Essential Git commands for everyday work.',
  'database-prisma': 'Prisma workflows and database helpers.',
  troubleshoot: 'Find versions, logs, and environment details.',
  'reset-safe': 'Non-destructive resets that keep your work.',
  'reset-nuclear': 'Destructive resets (use with caution).'
};

function titleCase(value: string): string {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function formatToolLabel(toolId: string): string {
  return TOOL_LABELS[toolId] ?? titleCase(toolId);
}

export function getToolDescription(toolId: string): string | undefined {
  return TOOL_DESCRIPTIONS[toolId];
}

export function getCommandGroups(pack: Pack): CommandGroup[] {
  const orderedIds: string[] = [];
  const map = new Map<string, Command[]>();

  pack.commands.forEach((command) => {
    const toolId = command.tools[0] ?? 'general';
    if (!map.has(toolId)) {
      orderedIds.push(toolId);
      map.set(toolId, []);
    }
    map.get(toolId)?.push(command);
  });

  return orderedIds.map((toolId) => ({
    id: toolId,
    label: formatToolLabel(toolId),
    description: getToolDescription(toolId),
    commands: map.get(toolId) ?? []
  }));
}
