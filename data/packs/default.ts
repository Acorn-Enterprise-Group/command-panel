import type { Pack } from '../schema';

export const defaultPack: Pack = {
  id: 'default',
  label: 'Default',
  description: 'Beginner-friendly commands for daily use.',
  sets: [
    {
      id: 'start-here',
      label: 'Start Here',
      description: 'The basics you need to run the project.',
      items: [
        {
          id: 'start-install',
          explain: 'Installs all the project tools and packages.',
          command: 'npm install',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this the first time, or after deleting node_modules.',
          expectedResult:
            'You will see a list of packages installed and the command ends without errors.',
          ifItFails: [
            'Check your internet connection.',
            'Close any running npm or node processes and try again.',
            'If PowerShell blocks npm, use the safe bypass command in Fix Common Errors.'
          ],
          tags: ['setup', 'install'],
          platform: 'any'
        },
        {
          id: 'start-dev',
          explain: 'Starts the local dev server so you can view the site.',
          command: 'npm run dev',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this when you want to develop locally.',
          expectedResult:
            'You will see a message that the server is running, usually on port 3000.',
          ifItFails: [
            'Run npm install first.',
            'If the port is busy, see Fix Common Errors for port help.'
          ],
          tags: ['dev'],
          platform: 'any'
        },
        {
          id: 'start-open-localhost',
          explain: 'Opens the local site in your browser.',
          command: 'http://localhost:3000',
          shellLabel: 'Browser',
          level: 'safe',
          whenToUse: 'Use this after npm run dev is running.',
          expectedResult: 'You will see the site in your browser.',
          ifItFails: [
            'Make sure the dev server is running.',
            'If you see a blank page, refresh the browser.'
          ],
          tags: ['dev'],
          platform: 'any'
        },
        {
          id: 'start-build',
          explain: 'Builds the site for production.',
          command: 'npm run build',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this before deploying or to check for build errors.',
          expectedResult: 'You will see a successful build message.',
          ifItFails: [
            'Fix the first error shown in the terminal.',
            'Run npm install again if dependencies are missing.'
          ],
          tags: ['build'],
          platform: 'any'
        },
        {
          id: 'start-start',
          explain: 'Runs the production server after a build.',
          command: 'npm start',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this only after npm run build has succeeded.',
          expectedResult: 'The production server starts and shows the URL.',
          ifItFails: [
            'Run npm run build first.',
            'Check the terminal for the first error message.'
          ],
          tags: ['build'],
          platform: 'any'
        },
        {
          id: 'start-lint',
          explain: 'Checks the code for common mistakes.',
          command: 'npm run lint',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this before committing or sharing code.',
          expectedResult: 'You will see no errors, or a list of fixes to make.',
          ifItFails: [
            'Fix the first lint error listed.',
            'Run it again after you edit the file.'
          ],
          tags: ['quality'],
          platform: 'any'
        },
        {
          id: 'start-node-version',
          explain: 'Shows your Node.js version.',
          command: 'node -v',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if someone asks you to confirm your Node version.',
          expectedResult: 'You will see a version number like v18.x.x.',
          ifItFails: [
            'Install Node.js from nodejs.org.',
            'Close and reopen the terminal after installing.'
          ],
          tags: ['setup'],
          platform: 'any'
        },
        {
          id: 'start-npm-version',
          explain: 'Shows your npm version.',
          command: 'npm -v',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if npm commands are acting strange.',
          expectedResult: 'You will see a version number.',
          ifItFails: [
            'Install Node.js again to restore npm.',
            'Restart your terminal and try again.'
          ],
          tags: ['setup'],
          platform: 'any'
        }
      ]
    },
    {
      id: 'fix-common',
      label: 'Fix Common Errors',
      description: 'Quick fixes for the most common problems.',
      items: [
        {
          id: 'fix-next-not-found',
          explain: 'Fixes next is not recognized by installing packages.',
          command: 'npm install',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if the terminal says next is not recognized.',
          expectedResult: 'Packages install and the error goes away.',
          ifItFails: [
            'Check your internet connection.',
            'Make sure you are in the project folder.'
          ],
          tags: ['fix'],
          platform: 'any'
        },
        {
          id: 'fix-npm-ps1',
          explain: 'Runs npm even if PowerShell blocks scripts.',
          command: 'powershell -ExecutionPolicy Bypass -Command "npm run dev"',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this if you see running scripts is disabled.',
          expectedResult: 'The dev server starts without the policy error.',
          ifItFails: [
            'Close other terminals and try again.',
            'Ask for help to change ExecutionPolicy permanently.'
          ],
          tags: ['fix', 'powerShell'],
          platform: 'windows'
        },
        {
          id: 'fix-port-find-3000',
          explain: 'Finds what is using port 3000.',
          command: 'netstat -ano | findstr :3000',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if the dev server says the port is busy.',
          expectedResult: 'You will see a line with a PID number.',
          ifItFails: [
            'Make sure you are using Windows PowerShell.',
            'Try port 3001 by setting PORT=3001 before npm run dev.'
          ],
          tags: ['fix', 'port'],
          platform: 'windows'
        },
        {
          id: 'fix-port-kill',
          explain: 'Stops the process that is using a port.',
          command: 'taskkill /PID <PID> /F',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this after you find the PID with netstat.',
          expectedResult: 'The process stops and the port is free.',
          ifItFails: [
            'Make sure you replaced <PID> with the real number.',
            'Try closing the app that might be using the port.'
          ],
          tags: ['fix', 'port'],
          platform: 'windows'
        },
        {
          id: 'fix-clear-next',
          explain: 'Deletes the Next.js build cache so it can rebuild cleanly.',
          command: 'Remove-Item -Recurse -Force .next',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this if builds are stuck or showing old changes.',
          expectedResult: 'The .next folder is removed and can be rebuilt.',
          ifItFails: [
            'Close the dev server first, then try again.',
            'Check that you are in the project folder.'
          ],
          tags: ['fix', 'cache'],
          platform: 'windows'
        },
        {
          id: 'fix-remove-node-modules',
          explain: 'Removes all installed packages so you can reinstall cleanly.',
          command: 'Remove-Item -Recurse -Force node_modules',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this if npm install keeps failing.',
          expectedResult: 'The node_modules folder disappears.',
          ifItFails: [
            'Close any running dev server and try again.',
            'If it still fails, restart your computer and retry.'
          ],
          tags: ['fix', 'install'],
          platform: 'windows'
        },
        {
          id: 'fix-remove-lockfile',
          explain: 'Deletes the lock file so npm can make a fresh one.',
          command: 'Remove-Item package-lock.json',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this if npm keeps complaining about the lock file.',
          expectedResult:
            'The lock file is removed and will be recreated on install.',
          ifItFails: [
            'Make sure the file exists in the folder.',
            'Close any program that might be using it.'
          ],
          tags: ['fix', 'install'],
          platform: 'windows'
        },
        {
          id: 'fix-reinstall',
          explain: 'Reinstalls everything cleanly after deleting node_modules.',
          command: 'npm install',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this after removing node_modules or the lock file.',
          expectedResult: 'Packages install without errors.',
          ifItFails: [
            'Check your internet connection.',
            'Try running the command again after a minute.'
          ],
          tags: ['fix', 'install'],
          platform: 'any'
        },
        {
          id: 'fix-npm-cache-clean',
          explain: 'Clears the npm cache to fix stubborn install errors.',
          command: 'npm cache clean --force',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this if npm install fails over and over.',
          expectedResult: 'The cache clears and npm can try fresh downloads.',
          ifItFails: [
            'Try running the command as Administrator.',
            'Make sure no npm process is running.'
          ],
          tags: ['fix', 'install'],
          platform: 'any'
        },
        {
          id: 'fix-clear-cache-unix',
          explain: 'Deletes the Next.js cache on Mac or Linux.',
          command: 'rm -rf .next',
          shellLabel: 'Bash',
          level: 'caution',
          whenToUse: 'Use this if builds are stuck on Mac or Linux.',
          expectedResult: 'The .next folder is removed.',
          ifItFails: [
            'Make sure you are in the project folder.',
            'Try running the command with sudo only if you know why.'
          ],
          tags: ['fix', 'cache'],
          platform: 'mac'
        },
        {
          id: 'fix-remove-node-modules-unix',
          explain: 'Removes node_modules on Mac or Linux.',
          command: 'rm -rf node_modules',
          shellLabel: 'Bash',
          level: 'caution',
          whenToUse: 'Use this if installs keep failing on Mac or Linux.',
          expectedResult: 'The node_modules folder is deleted.',
          ifItFails: [
            'Close any running dev server and try again.',
            'Check file permissions.'
          ],
          tags: ['fix', 'install'],
          platform: 'mac'
        }
      ]
    },
    {
      id: 'git-basics',
      label: 'Git Basics',
      description: 'Safe everyday Git commands for beginners.',
      items: [
        {
          id: 'git-status',
          explain: 'Shows which files changed since your last save point.',
          command: 'git status',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this any time you are unsure what changed.',
          expectedResult: 'You will see a list of modified or new files.',
          ifItFails: [
            'Make sure you are inside the project folder.',
            'Run git init if this is a brand new folder.'
          ],
          tags: ['git'],
          platform: 'any'
        },
        {
          id: 'git-pull',
          explain: 'Downloads the latest changes from the shared repo.',
          command: 'git pull',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this before you start working.',
          expectedResult: 'You will see Already up to date or new files added.',
          ifItFails: [
            'Commit or stash your local changes first.',
            'Check your internet connection.'
          ],
          tags: ['git'],
          platform: 'any'
        },
        {
          id: 'git-add-all',
          explain: 'Stages all your changes so they are ready to commit.',
          command: 'git add -A',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this right before you commit.',
          expectedResult:
            'git status will show files under Changes to be committed.',
          ifItFails: [
            'Check file permissions.',
            'Make sure Git can see the files in this folder.'
          ],
          tags: ['git'],
          platform: 'any'
        },
        {
          id: 'git-commit',
          explain: 'Creates a saved checkpoint with a short message.',
          command: 'git commit -m "message"',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this after staging files with git add.',
          expectedResult: 'You will see a commit summary and a new commit id.',
          ifItFails: [
            'Make sure you staged files first with git add -A.',
            'If you are asked to set your name or email, follow the instructions.'
          ],
          tags: ['git'],
          platform: 'any'
        },
        {
          id: 'git-push',
          explain: 'Uploads your commits to the shared repo.',
          command: 'git push',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this after committing changes you want to share.',
          expectedResult: 'You will see a message that new commits were pushed.',
          ifItFails: [
            'Run git pull first and resolve any conflicts.',
            'Check your internet connection.'
          ],
          tags: ['git'],
          platform: 'any'
        },
        {
          id: 'git-log',
          explain: 'Shows the last few commits in a short list.',
          command: 'git log --oneline -5',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this to see what was changed recently.',
          expectedResult: 'You will see a short list of recent commits.',
          ifItFails: [
            'Make sure you are in a Git repository.',
            'Run git status to confirm the repo exists.'
          ],
          tags: ['git'],
          platform: 'any'
        },
        {
          id: 'git-diff',
          explain: 'Shows the exact changes you made to files.',
          command: 'git diff',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this before committing to review changes.',
          expectedResult: 'You will see lines with + and - changes.',
          ifItFails: [
            'Make sure you have changed a file first.',
            'Try git status to confirm changes exist.'
          ],
          tags: ['git'],
          platform: 'any'
        },
        {
          id: 'git-restore-staged',
          explain: 'Unstages files if you added them by mistake.',
          command: 'git restore --staged .',
          shellLabel: 'Git',
          level: 'caution',
          whenToUse: 'Use this if you staged the wrong files.',
          expectedResult: 'Files move back to the Changes not staged list.',
          ifItFails: [
            'Check git status to see what is staged.',
            'Try running the command again.'
          ],
          tags: ['git'],
          platform: 'any'
        },
        {
          id: 'git-stash',
          explain: 'Temporarily saves your changes without committing.',
          command: 'git stash -u',
          shellLabel: 'Git',
          level: 'caution',
          whenToUse:
            'Use this when you must pull changes but are not ready to commit.',
          expectedResult: 'Your working folder becomes clean.',
          ifItFails: [
            'Make sure you are in a Git repo.',
            'Run git status to confirm there are changes to stash.'
          ],
          tags: ['git'],
          platform: 'any'
        },
        {
          id: 'git-stash-pop',
          explain: 'Brings back your last stashed changes.',
          command: 'git stash pop',
          shellLabel: 'Git',
          level: 'caution',
          whenToUse: 'Use this after you have pulled and want your changes back.',
          expectedResult: 'Your files return to how they were before stashing.',
          ifItFails: [
            'Resolve any conflicts shown in the terminal.',
            'Run git status to see the conflict files.'
          ],
          tags: ['git'],
          platform: 'any'
        }
      ]
    },
    {
      id: 'db-prisma',
      label: 'Database / Prisma',
      description: 'Common Prisma and database actions.',
      items: [
        {
          id: 'prisma-studio',
          explain: 'Opens a friendly database viewer in your browser.',
          command: 'npx prisma studio',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this to view or edit data by hand.',
          expectedResult: 'A browser window opens with tables and rows.',
          ifItFails: [
            'Run npm install first.',
            'Make sure the database is running.'
          ],
          tags: ['db'],
          platform: 'any'
        },
        {
          id: 'prisma-migrate-dev',
          explain: 'Applies database migrations during development.',
          command: 'npx prisma migrate dev',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this after changing the schema.prisma file.',
          expectedResult: 'Migrations run and the database updates.',
          ifItFails: [
            'Check the error for schema mistakes.',
            'Make sure your database is running.'
          ],
          tags: ['db'],
          platform: 'any'
        },
        {
          id: 'prisma-generate',
          explain: 'Regenerates the Prisma client code.',
          command: 'npx prisma generate',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this after updating schema.prisma.',
          expectedResult: 'You will see Generated Prisma Client.',
          ifItFails: [
            'Check your schema for errors.',
            'Run npm install to ensure Prisma is installed.'
          ],
          tags: ['db'],
          platform: 'any'
        },
        {
          id: 'prisma-db-push',
          explain: 'Pushes schema changes directly to the database.',
          command: 'npx prisma db push',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this only if you do not need a migration history.',
          expectedResult: 'The database matches your schema file.',
          ifItFails: [
            'Make sure the database is running.',
            'Check schema.prisma for errors.'
          ],
          notes: 'Do not use this on production databases.',
          tags: ['db'],
          platform: 'any'
        },
        {
          id: 'prisma-format',
          explain: 'Formats your Prisma schema file neatly.',
          command: 'npx prisma format',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this before committing schema changes.',
          expectedResult: 'The schema file becomes well formatted.',
          ifItFails: [
            'Check that prisma is installed.',
            'Open schema.prisma and fix any errors.'
          ],
          tags: ['db'],
          platform: 'any'
        },
        {
          id: 'prisma-validate',
          explain: 'Checks your Prisma schema for mistakes.',
          command: 'npx prisma validate',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if migrations fail or schema looks wrong.',
          expectedResult: 'It reports no errors if the schema is valid.',
          ifItFails: [
            'Fix the first error shown.',
            'Run the command again to confirm.'
          ],
          tags: ['db'],
          platform: 'any'
        },
        {
          id: 'prisma-schema-location',
          explain: 'Shows where your schema.prisma file lives.',
          command: 'Get-ChildItem -Recurse -Filter schema.prisma',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if you cannot find schema.prisma.',
          expectedResult: 'You will see the path to the schema file.',
          ifItFails: [
            'Make sure you are in the project folder.',
            'Try searching in your editor instead.'
          ],
          tags: ['db'],
          platform: 'windows'
        },
        {
          id: 'prisma-migrate-status',
          explain: 'Shows which migrations have been applied.',
          command: 'npx prisma migrate status',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this to check migration history.',
          expectedResult: 'You will see applied and pending migrations.',
          ifItFails: [
            'Make sure your database is running.',
            'Check your database connection settings.'
          ],
          tags: ['db'],
          platform: 'any'
        },
        {
          id: 'prisma-db-pull',
          explain: 'Pulls the database schema into Prisma.',
          command: 'npx prisma db pull',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this if the database changed outside of Prisma.',
          expectedResult: 'schema.prisma updates to match the database.',
          ifItFails: [
            'Check your database connection string.',
            'Make sure the database is running.'
          ],
          tags: ['db'],
          platform: 'any'
        },
        {
          id: 'prisma-seed',
          explain: 'Runs your database seed script.',
          command: 'npx prisma db seed',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this when you need sample data.',
          expectedResult: 'You will see logs that data was added.',
          ifItFails: [
            'Make sure the seed script exists.',
            'Check the error message for missing data.'
          ],
          tags: ['db'],
          platform: 'any'
        }
      ]
    },
    {
      id: 'troubleshoot',
      label: 'Troubleshoot',
      description: 'Helpful checks when something feels wrong.',
      items: [
        {
          id: 'trouble-node-version',
          explain: 'Shows your Node.js version.',
          command: 'node -p "process.version"',
          shellLabel: 'Node',
          level: 'safe',
          whenToUse: 'Use this if a tool requires a certain Node.js version.',
          expectedResult: 'A version number appears.',
          ifItFails: [
            'Install Node.js from nodejs.org.',
            'Restart your terminal after installing.'
          ],
          tags: ['troubleshoot'],
          platform: 'any'
        },
        {
          id: 'trouble-npm-version',
          explain: 'Shows your npm version.',
          command: 'npm -p "process.versions.npm"',
          shellLabel: 'Node',
          level: 'safe',
          whenToUse: 'Use this if npm behaves oddly.',
          expectedResult: 'A version number appears.',
          ifItFails: [
            'Reinstall Node.js to restore npm.',
            'Restart your terminal.'
          ],
          tags: ['troubleshoot'],
          platform: 'any'
        },
        {
          id: 'trouble-where-node',
          explain: 'Shows where Node.js is installed on Windows.',
          command: 'where node',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if you have multiple Node installs.',
          expectedResult: 'A file path shows where node.exe lives.',
          ifItFails: [
            'Make sure Node is installed.',
            'Restart the terminal.'
          ],
          tags: ['troubleshoot'],
          platform: 'windows'
        },
        {
          id: 'trouble-which-node',
          explain: 'Shows where Node.js is installed on Mac or Linux.',
          command: 'which node',
          shellLabel: 'Bash',
          level: 'safe',
          whenToUse: 'Use this if you have multiple Node installs.',
          expectedResult: 'A file path shows the node binary.',
          ifItFails: [
            'Install Node.js and reopen the terminal.',
            'Check your PATH settings.'
          ],
          tags: ['troubleshoot'],
          platform: 'mac'
        },
        {
          id: 'trouble-logs-dev',
          explain: 'Shows the dev server logs in the terminal.',
          command: 'npm run dev',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this to see errors while the server runs.',
          expectedResult: 'Logs appear and update as you use the site.',
          ifItFails: [
            'Run npm install first.',
            'Check for port errors.'
          ],
          tags: ['troubleshoot'],
          platform: 'any'
        },
        {
          id: 'trouble-port-3000',
          explain: 'Finds what is running on port 3000.',
          command: 'netstat -ano | findstr :3000',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if port 3000 is busy.',
          expectedResult: 'You will see a PID using the port.',
          ifItFails: [
            'Try running PowerShell as Administrator.',
            'Check that netstat exists on your system.'
          ],
          tags: ['troubleshoot'],
          platform: 'windows'
        },
        {
          id: 'trouble-port-unix',
          explain: 'Finds what is using port 3000 on Mac or Linux.',
          command: 'lsof -i :3000',
          shellLabel: 'Bash',
          level: 'safe',
          whenToUse: 'Use this if port 3000 is busy on Mac or Linux.',
          expectedResult: 'You will see the process using the port.',
          ifItFails: [
            'Install lsof if it is missing.',
            'Try running with sudo if you understand why.'
          ],
          tags: ['troubleshoot'],
          platform: 'mac'
        },
        {
          id: 'trouble-esbuild-path',
          explain: 'Shows where esbuild is installed.',
          command: 'node -p "require.resolve(\'esbuild\')"',
          shellLabel: 'Node',
          level: 'safe',
          whenToUse: 'Use this if build errors mention esbuild.',
          expectedResult: 'A file path appears.',
          ifItFails: [
            'Run npm install to ensure esbuild exists.',
            'Check that node_modules is present.'
          ],
          tags: ['troubleshoot'],
          platform: 'any'
        },
        {
          id: 'trouble-npm-ls-esbuild',
          explain: 'Shows which version of esbuild is installed.',
          command: 'npm ls esbuild',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this to confirm the esbuild version.',
          expectedResult: 'A version tree appears in the terminal.',
          ifItFails: [
            'Run npm install first.',
            'Make sure you are in the project folder.'
          ],
          tags: ['troubleshoot'],
          platform: 'any'
        },
        {
          id: 'trouble-tree',
          explain: 'Shows the top-level files in this folder.',
          command: 'Get-ChildItem',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if you are unsure you are in the right folder.',
          expectedResult: 'You see project folders like app, data, and components.',
          ifItFails: [
            'Try running PowerShell again.',
            'Check that the folder exists.'
          ],
          tags: ['troubleshoot'],
          platform: 'windows'
        }
      ]
    },
    {
      id: 'reset-safe',
      label: 'Reset Safe',
      description: 'Safe resets that do not delete your work.',
      items: [
        {
          id: 'reset-git-status',
          explain: 'Shows what has changed before you reset anything.',
          command: 'git status',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this first, always.',
          expectedResult: 'You see a list of changed files.',
          ifItFails: [
            'Make sure you are in the project folder.',
            'Run git init if this is a new folder.'
          ],
          tags: ['reset'],
          platform: 'any'
        },
        {
          id: 'reset-git-fetch',
          explain: 'Downloads remote updates without changing your files.',
          command: 'git fetch',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this to see if remote changes exist.',
          expectedResult: 'Remote updates are downloaded quietly.',
          ifItFails: [
            'Check your internet connection.',
            'Make sure the remote repo exists.'
          ],
          tags: ['reset'],
          platform: 'any'
        },
        {
          id: 'reset-git-pull',
          explain: 'Updates your local files with the latest remote changes.',
          command: 'git pull',
          shellLabel: 'Git',
          level: 'safe',
          whenToUse: 'Use this when you want the newest version.',
          expectedResult: 'New files appear or you see Already up to date.',
          ifItFails: [
            'Commit or stash local changes first.',
            'Resolve any merge conflicts shown.'
          ],
          tags: ['reset'],
          platform: 'any'
        },
        {
          id: 'reset-npm-install',
          explain: 'Reinstalls packages without deleting your files.',
          command: 'npm install',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if a package is missing.',
          expectedResult: 'Packages install successfully.',
          ifItFails: [
            'Check your internet connection.',
            'Try again after a minute.'
          ],
          tags: ['reset'],
          platform: 'any'
        },
        {
          id: 'reset-next-cache',
          explain: 'Deletes only the Next.js cache (safe to rebuild).',
          command: 'Remove-Item -Recurse -Force .next',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this if changes do not show up.',
          expectedResult: 'The .next folder is removed.',
          ifItFails: [
            'Stop the dev server first.',
            'Check you are in the project folder.'
          ],
          tags: ['reset'],
          platform: 'windows'
        },
        {
          id: 'reset-open-node-modules',
          explain: 'Checks whether node_modules exists.',
          command: 'Get-ChildItem node_modules',
          shellLabel: 'PowerShell',
          level: 'safe',
          whenToUse: 'Use this if you are unsure packages are installed.',
          expectedResult: 'You will see a list of folders.',
          ifItFails: [
            'Run npm install to create node_modules.',
            'Make sure you are in the project folder.'
          ],
          tags: ['reset'],
          platform: 'windows'
        },
        {
          id: 'reset-clear-npm-cache',
          explain: 'Clears npm cache (safe but can be slow).',
          command: 'npm cache clean --force',
          shellLabel: 'PowerShell',
          level: 'caution',
          whenToUse: 'Use this if npm install keeps failing.',
          expectedResult: 'Cache clears and npm can download fresh files.',
          ifItFails: [
            'Try running in a new terminal.',
            'Check that npm is installed.'
          ],
          tags: ['reset'],
          platform: 'any'
        }
      ]
    },
    {
      id: 'reset-nuclear',
      label: 'Reset Nuclear',
      description: 'Dangerous resets that delete files. Use only if told to.',
      items: [
        {
          id: 'nuclear-remove-node-modules',
          explain: 'Deletes node_modules completely.',
          command: 'Remove-Item -Recurse -Force node_modules',
          shellLabel: 'PowerShell',
          level: 'danger',
          whenToUse: 'Use this only if you are told to do a full reinstall.',
          expectedResult: 'node_modules is deleted.',
          ifItFails: [
            'Stop any running dev server.',
            'Try again after a restart.'
          ],
          tags: ['reset'],
          platform: 'windows'
        },
        {
          id: 'nuclear-remove-next',
          explain: 'Deletes the Next.js build cache.',
          command: 'Remove-Item -Recurse -Force .next',
          shellLabel: 'PowerShell',
          level: 'danger',
          whenToUse: 'Use this only if safe reset did not work.',
          expectedResult: '.next is deleted.',
          ifItFails: [
            'Stop the dev server first.',
            'Make sure you are in the project folder.'
          ],
          tags: ['reset'],
          platform: 'windows'
        },
        {
          id: 'nuclear-remove-lockfile',
          explain: 'Deletes the lock file so npm can rebuild it.',
          command: 'Remove-Item package-lock.json',
          shellLabel: 'PowerShell',
          level: 'danger',
          whenToUse: 'Use this only if told to delete the lock file.',
          expectedResult: 'package-lock.json is gone.',
          ifItFails: [
            'Check the file exists before running.',
            'Close any program that uses it.'
          ],
          tags: ['reset'],
          platform: 'windows'
        },
        {
          id: 'nuclear-git-reset-hard',
          explain: 'Throws away ALL local changes and resets to last commit.',
          command: 'git reset --hard',
          shellLabel: 'Git',
          level: 'danger',
          whenToUse:
            'Use this only if you are sure you do not need local changes.',
          expectedResult: 'Your working folder becomes clean.',
          ifItFails: [
            'Run git status to see what is blocking it.',
            'Ask for help before trying again.'
          ],
          tags: ['reset'],
          platform: 'any'
        },
        {
          id: 'nuclear-git-clean',
          explain: 'Deletes ALL untracked files and folders.',
          command: 'git clean -fd',
          shellLabel: 'Git',
          level: 'danger',
          whenToUse: 'Use this only if you are told to remove extra files.',
          expectedResult: 'Untracked files are removed.',
          ifItFails: [
            'Run git status to confirm what will be removed.',
            'Ask for help before retrying.'
          ],
          tags: ['reset'],
          platform: 'any'
        },
        {
          id: 'nuclear-reinstall',
          explain: 'Full reset: delete dependencies and reinstall.',
          command: 'Remove-Item -Recurse -Force node_modules; npm install',
          shellLabel: 'PowerShell',
          level: 'danger',
          whenToUse: 'Use this only as a last resort.',
          expectedResult: 'node_modules is recreated with fresh packages.',
          ifItFails: [
            'Run the commands one at a time.',
            'Check your internet connection.'
          ],
          tags: ['reset'],
          platform: 'windows'
        }
      ]
    }
  ],
  recipes: [
    {
      id: 'first-time-setup-windows',
      title: 'First time setup (Windows)',
      intro:
        'Use this the very first time you open the project. It installs packages, starts the server, and opens the site.',
      steps: [
        { id: 'first-time-setup-step-1', type: 'command', commandId: 'start-install' },
        { id: 'first-time-setup-step-2', type: 'command', commandId: 'start-dev' },
        {
          id: 'first-time-setup-step-3',
          type: 'command',
          commandId: 'start-open-localhost'
        }
      ],
      platform: 'windows'
    },
    {
      id: 'start-the-site',
      title: 'Start the site',
      intro: 'Use this any time you just want to run the site locally.',
      steps: [
        { id: 'start-site-step-1', type: 'command', commandId: 'start-dev' },
        {
          id: 'start-site-step-2',
          type: 'command',
          commandId: 'start-open-localhost'
        }
      ],
      platform: 'any'
    },
    {
      id: 'fix-next-not-recognized',
      title: 'Fix: next is not recognized',
      intro:
        'This usually means the packages are not installed. This flow installs them and starts the server.',
      steps: [
        { id: 'fix-next-step-1', type: 'command', commandId: 'fix-next-not-found' },
        { id: 'fix-next-step-2', type: 'command', commandId: 'start-dev' }
      ],
      platform: 'any'
    },
    {
      id: 'fix-port-in-use',
      title: 'Fix: port already in use',
      intro:
        'This helps you find what is using port 3000 and stop it, then start the server again.',
      steps: [
        { id: 'fix-port-step-1', type: 'command', commandId: 'fix-port-find-3000' },
        { id: 'fix-port-step-2', type: 'command', commandId: 'fix-port-kill' },
        { id: 'fix-port-step-3', type: 'command', commandId: 'start-dev' }
      ],
      platform: 'windows'
    },
    {
      id: 'reset-deps-safely',
      title: 'Reset dependencies safely',
      intro:
        'Use this when installs feel broken but you do not want to delete your work.',
      steps: [
        { id: 'reset-safe-step-1', type: 'command', commandId: 'reset-git-status' },
        { id: 'reset-safe-step-2', type: 'command', commandId: 'reset-next-cache' },
        { id: 'reset-safe-step-3', type: 'command', commandId: 'reset-npm-install' }
      ],
      platform: 'windows'
    },
    {
      id: 'prisma-open-studio',
      title: 'Prisma: open studio',
      intro: 'This opens the database viewer so you can see your data.',
      steps: [
        { id: 'prisma-studio-step-1', type: 'command', commandId: 'prisma-studio' }
      ],
      platform: 'any'
    },
    {
      id: 'build-for-production',
      title: 'Build for production',
      intro:
        'Use this when you want to build and run the production version locally.',
      steps: [
        { id: 'build-prod-step-1', type: 'command', commandId: 'start-build' },
        { id: 'build-prod-step-2', type: 'command', commandId: 'start-start' }
      ],
      platform: 'any'
    }
  ]
};
