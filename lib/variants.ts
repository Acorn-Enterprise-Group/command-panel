import type { Command, CommandVariant, Platform, Shell } from '../data/schema';

type VariantOption = {
  key: string;
  label: string;
  variant: CommandVariant;
};

const PLATFORM_LABELS: Record<Platform, string> = {
  windows: 'Windows',
  mac: 'Mac',
  linux: 'Linux'
};

const SHELL_LABELS: Record<Shell, string> = {
  bash: 'Bash',
  zsh: 'Zsh',
  fish: 'Fish',
  powershell: 'PowerShell',
  cmd: 'Command Prompt'
};

export function formatVariantLabel(variant: CommandVariant): string {
  const platform = PLATFORM_LABELS[variant.platform];
  if (!variant.shell) return platform;
  return `${platform} ${SHELL_LABELS[variant.shell] ?? variant.shell}`;
}

export function getVariantOptions(command: Command): VariantOption[] {
  return Object.entries(command.variants).map(([key, variant]) => ({
    key,
    label: formatVariantLabel(variant),
    variant
  }));
}

export function shouldShowVariantToggle(command: Command): boolean {
  const commands = Object.values(command.variants).map((variant) => variant.command.trim());
  const unique = new Set(commands);
  return unique.size > 1;
}

export function getDefaultVariant(command: Command): CommandVariant {
  return command.variants[command.defaultVariantKey] ?? Object.values(command.variants)[0];
}

export function getVariantForPlatform(
  command: Command,
  platform: Platform
): { key: string; variant: CommandVariant } | null {
  const entries = Object.entries(command.variants);
  const matching = entries.filter(([, variant]) => variant.platform === platform);
  if (matching.length === 0) return null;
  const preferredShellOrder: Shell[] =
    platform === 'windows'
      ? ['powershell', 'cmd']
      : ['bash', 'zsh', 'fish'];
  const preferred = matching.find(([, variant]) =>
    variant.shell ? preferredShellOrder.includes(variant.shell) : false
  );
  const [key, variant] = preferred ?? matching[0];
  return { key, variant };
}
