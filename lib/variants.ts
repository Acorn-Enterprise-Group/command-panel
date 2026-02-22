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
  // If all variants are identical, hide the toggle to avoid misleading users.
  // We still keep separate variant entries for future OS-specific differences.
  const commands = Object.values(command.variants).map((variant) => variant.command.trim());
  const unique = new Set(commands);
  return unique.size > 1;
}

export function getDefaultVariant(command: Command): CommandVariant {
  const explicit = command.variants[command.defaultVariantKey];
  if (explicit) return explicit;

  const preferredOrder: Array<{ platform: Platform; shell?: Shell }> = [
    { platform: 'mac', shell: 'bash' },
    { platform: 'mac', shell: 'zsh' },
    { platform: 'linux', shell: 'bash' },
    { platform: 'linux', shell: 'zsh' },
    { platform: 'windows', shell: 'powershell' },
    { platform: 'windows', shell: 'cmd' }
  ];

  for (const preferred of preferredOrder) {
    const match = Object.values(command.variants).find((variant) => {
      if (variant.platform !== preferred.platform) return false;
      if (preferred.shell && variant.shell !== preferred.shell) return false;
      return true;
    });
    if (match) return match;
  }

  return Object.values(command.variants)[0];
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

export function formatRunLabel(variant: CommandVariant): string {
  if (variant.platform === 'windows') return 'Run in PowerShell';
  if (variant.platform === 'mac') return 'Run in macOS Terminal';
  return 'Run in Linux Terminal';
}
