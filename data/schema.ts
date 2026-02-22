export type Platform = 'mac' | 'linux' | 'windows';
export type Shell = 'bash' | 'zsh' | 'fish' | 'powershell' | 'cmd';
export type Intent = 'do' | 'learn' | 'fix' | 'compare' | 'browse';

export type Rice = {
  reach: number;
  impact: number;
  confidence: number;
  effortHours: number;
};

export type CommandVariant = {
  platform: Platform;
  shell?: Shell;
  command: string;
  notes?: string;
};

export type CommandLearning = {
  whatItDoes: string;
  whenToUse: string;
  examples: Array<{ title: string; snippet: string; explanation: string }>;
  commonMistakes: Array<{ mistake: string; fix: string }>;
  warnings?: string[];
};

export type Command = {
  id: string;
  slug: string;
  name: string;
  primaryIntent: Intent;
  tools: string[];
  tags: string[];
  defaultVariantKey: string;
  variants: Record<string, CommandVariant>;
  learning: CommandLearning;
  sources: Array<{ label: string; url: string }>;
  lastReviewed: string;
  rice?: Rice;
};

export type Pack = {
  id: string;
  slug: string;
  title: string;
  description: string;
  order: number;
  commands: Command[];
  rice?: Rice;
};
