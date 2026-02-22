export type Recipe = {
  id: string;
  title: string;
  intro: string;
  commandIds: string[];
  platform?: 'windows' | 'mac' | 'linux' | 'any';
};

export const recipes: Recipe[] = [
  {
    id: 'first-time-setup-windows',
    title: 'First time setup (Windows)',
    intro:
      'Use this the very first time you open the project. It installs packages, starts the server, and opens the site.',
    commandIds: ['start-install', 'start-dev', 'start-open-localhost'],
    platform: 'windows'
  },
  {
    id: 'start-the-site',
    title: 'Start the site',
    intro: 'Use this any time you just want to run the site locally.',
    commandIds: ['start-dev', 'start-open-localhost'],
    platform: 'any'
  },
  {
    id: 'fix-next-not-recognized',
    title: 'Fix: next is not recognized',
    intro:
      'This usually means the packages are not installed. This flow installs them and starts the server.',
    commandIds: ['fix-next-not-found', 'start-dev'],
    platform: 'any'
  },
  {
    id: 'fix-port-in-use',
    title: 'Fix: port already in use',
    intro:
      'This helps you find what is using port 3000 and stop it, then start the server again.',
    commandIds: ['fix-port-find-3000', 'fix-port-kill', 'start-dev'],
    platform: 'windows'
  },
  {
    id: 'reset-deps-safely',
    title: 'Reset dependencies safely',
    intro:
      'Use this when installs feel broken but you do not want to delete your work.',
    commandIds: ['reset-git-status', 'reset-next-cache', 'reset-npm-install'],
    platform: 'windows'
  },
  {
    id: 'prisma-open-studio',
    title: 'Prisma: open studio',
    intro: 'This opens the database viewer so you can see your data.',
    commandIds: ['prisma-studio'],
    platform: 'any'
  },
  {
    id: 'build-for-production',
    title: 'Build for production',
    intro:
      'Use this when you want to build and run the production version locally.',
    commandIds: ['start-build', 'start-start'],
    platform: 'any'
  }
];
