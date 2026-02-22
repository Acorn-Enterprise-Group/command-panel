export type Platform = 'windows' | 'mac' | 'linux' | 'any';
export type Shell = 'PowerShell' | 'Bash' | 'Cmd' | 'Node' | 'Git' | 'Browser';
export type Level = 'safe' | 'caution' | 'danger';

export type CommandItem = {
  id: string;
  title?: string;
  explain: string;
  command: string;
  shellLabel: Shell;
  tags?: string[];
  level: Level;
  whenToUse: string;
  expectedResult: string;
  ifItFails: string[];
  notes?: string;
  platform: Platform;
  copyAs?: string;
};

export type CommandSet = {
  id: string;
  label: string;
  description?: string;
  items: CommandItem[];
};

export type RecipeStep =
  | {
      id: string;
      type: 'command';
      commandId: string;
      note?: string;
    }
  | {
      id: string;
      type: 'text';
      title: string;
      body: string;
    };

export type Recipe = {
  id: string;
  title: string;
  intro: string;
  steps: RecipeStep[];
  platform?: Platform;
};

export type Pack = {
  id: string;
  label: string;
  description?: string;
  sets: CommandSet[];
  recipes: Recipe[];
};
