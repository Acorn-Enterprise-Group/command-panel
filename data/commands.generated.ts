import type { Command } from './schema';

export const generatedCommands: Command[] = [
  {
    "id": "start-install",
    "slug": "start-install",
    "name": "npm install",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "setup",
      "install"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm install"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm install"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm install"
      }
    },
    "learning": {
      "whatItDoes": "Install project dependencies",
      "whenToUse": "Use this when you need to install project dependencies.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm install",
          "explanation": "Install project dependencies"
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Running in the wrong folder",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "No internet connection",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-install"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/using-npm/dependency-types"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "start-dev",
    "slug": "start-dev",
    "name": "npm run dev",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "dev"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm run dev"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm run dev"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm run dev"
      }
    },
    "learning": {
      "whatItDoes": "Start the local dev server",
      "whenToUse": "Use this when you need to start the local dev server.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm run dev",
          "explanation": "Start the local dev server"
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Running before dependencies are installed",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Port 3000 already in use",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-run-script"
      },
      {
        "label": "Reference",
        "url": "https://nextjs.org/docs/app/building-your-application/routing"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "git-status",
    "slug": "git-status",
    "name": "git status",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "status"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git status"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git status"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git status"
      }
    },
    "learning": {
      "whatItDoes": "Show changed files in the repo",
      "whenToUse": "Use this when you need to show changed files in the repo.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git status",
          "explanation": "Show changed files in the repo"
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Not in a git repo",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Forgetting to save a file before checking",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-status"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/inspecting-a-repository"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "git-pull",
    "slug": "git-pull",
    "name": "git pull",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "update"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git pull"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git pull"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git pull"
      }
    },
    "learning": {
      "whatItDoes": "Update your local branch with remote changes",
      "whenToUse": "Use this when you need to update your local branch with remote changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git pull",
          "explanation": "Update your local branch with remote changes"
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Uncommitted local changes blocking pull",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Pulling from the wrong branch",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-pull"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/syncing/git-pull"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "prisma-studio",
    "slug": "prisma-studio",
    "name": "npx prisma studio",
    "primaryIntent": "do",
    "tools": [
      "database-prisma"
    ],
    "tags": [
      "database-prisma",
      "prisma",
      "db"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npx prisma studio"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npx prisma studio"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npx prisma studio"
      }
    },
    "learning": {
      "whatItDoes": "Open Prisma Studio to browse data",
      "whenToUse": "Use this when you need to open prisma studio to browse data.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma studio",
          "explanation": "Open Prisma Studio to browse data"
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Prisma client not generated",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Database not reachable",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://www.prisma.io/docs/orm/tools/prisma-studio"
      },
      {
        "label": "Reference",
        "url": "https://www.prisma.io/docs/orm/reference/prisma-cli-reference"
      }
    ],
    "lastReviewed": "2026-02-22"
  }
];
