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
  },
  {
    "id": "node-dev-git-status",
    "slug": "node-dev-git-status",
    "name": "git status",
    "primaryIntent": "do",
    "tools": [
      "imported"
    ],
    "tags": [
      "staged"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git-basics,git,status,beginner"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "or untracked."
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "or untracked."
      }
    },
    "learning": {
      "whatItDoes": "Shows which files are changed",
      "whenToUse": "Use this when you need to shows which files are changed.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git-basics,git,status,beginner",
          "explanation": "Shows which files are changed"
        }
      ],
      "commonMistakes": [
        {
          "mistake": "git status",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Source",
        "url": "git status"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-git-add-all",
    "slug": "node-dev-git-add-all",
    "name": "git add .",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "add",
      "stage"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git add ."
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git add ."
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git add ."
      }
    },
    "learning": {
      "whatItDoes": "Stages all changes in the current folder for the next commit.",
      "whenToUse": "Use this when you need to stages all changes in the current folder for the next commit..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git add .",
          "explanation": "Stages all changes in the current folder for the next commit."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Accidentally staging build output",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Nothing added to commit (use \\git status\\ to verify)",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-add"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-git-commit-message",
    "slug": "node-dev-git-commit-message",
    "name": "git commit -m \"message\"",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "commit",
      "history"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git commit -m \"message\""
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git commit -m \"message\""
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git commit -m \"message\""
      }
    },
    "learning": {
      "whatItDoes": "Creates a commit with a short message.",
      "whenToUse": "Use this when you need to creates a commit with a short message..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git commit -m \"message\"",
          "explanation": "Creates a commit with a short message."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "nothing to commit, working tree clean",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "error: pathspec 'message' did not match (quotes missing)",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-commit.html"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-git-pull",
    "slug": "node-dev-git-pull",
    "name": "git pull",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "pull",
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
      "whatItDoes": "Fetches and merges remote changes into your current branch.",
      "whenToUse": "Use this when you need to fetches and merges remote changes into your current branch..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git pull",
          "explanation": "Fetches and merges remote changes into your current branch."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Your local changes would be overwritten by merge",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "fatal: could not read from remote repository",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-pull"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-git-push",
    "slug": "node-dev-git-push",
    "name": "git push",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "push",
      "remote"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git push"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git push"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git push"
      }
    },
    "learning": {
      "whatItDoes": "Uploads your local commits to the remote.",
      "whenToUse": "Use this when you need to uploads your local commits to the remote..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git push",
          "explanation": "Uploads your local commits to the remote."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: The current branch has no upstream branch",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "rejected (non-fast-forward)",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-push.html"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-git-clone",
    "slug": "node-dev-git-clone",
    "name": "git clone <url>",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "clone",
      "remote"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git clone <url>"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git clone <url>"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git clone <url>"
      }
    },
    "learning": {
      "whatItDoes": "Downloads a remote repository to your computer.",
      "whenToUse": "Use this when you need to downloads a remote repository to your computer..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git clone <url>",
          "explanation": "Downloads a remote repository to your computer."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: repository '<url>' not found",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Permission denied (publickey)",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-clone.html"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-git-branch",
    "slug": "node-dev-git-branch",
    "name": "git branch",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "branch",
      "beginner"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git branch"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git branch"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git branch"
      }
    },
    "learning": {
      "whatItDoes": "Lists local branches and shows the current branch.",
      "whenToUse": "Use this when you need to lists local branches and shows the current branch..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git branch",
          "explanation": "Lists local branches and shows the current branch."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Confusing local vs remote branches",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Branch not showing because you are in detached HEAD",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-branch.html"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-git-log-oneline",
    "slug": "node-dev-git-log-oneline",
    "name": "git log --oneline",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "log",
      "history"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git log --oneline"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git log --oneline"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git log --oneline"
      }
    },
    "learning": {
      "whatItDoes": "Shows recent commits in a short list.",
      "whenToUse": "Use this when you need to shows recent commits in a short list..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git log --oneline",
          "explanation": "Shows recent commits in a short list."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: your current branch has no commits yet",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Long output without paging (press q to exit)",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-log"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-git-diff",
    "slug": "node-dev-git-diff",
    "name": "git diff",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "diff",
      "review"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git diff"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git diff"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git diff"
      }
    },
    "learning": {
      "whatItDoes": "Shows changes not yet committed.",
      "whenToUse": "Use this when you need to shows changes not yet committed..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git diff",
          "explanation": "Shows changes not yet committed."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "No output because changes are staged (use git diff --staged)",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Comparing the wrong files or branch",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-diff"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-git-fetch",
    "slug": "node-dev-git-fetch",
    "name": "git fetch",
    "primaryIntent": "do",
    "tools": [
      "git-basics"
    ],
    "tags": [
      "git-basics",
      "git",
      "fetch",
      "remote"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "git fetch"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "git fetch"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "git fetch"
      }
    },
    "learning": {
      "whatItDoes": "Downloads remote updates without changing your files.",
      "whenToUse": "Use this when you need to downloads remote updates without changing your files..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git fetch",
          "explanation": "Downloads remote updates without changing your files."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Assuming fetch updates your working files",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "fatal: 'origin' does not appear to be a git repository",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-fetch"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-node-version",
    "slug": "node-dev-node-version",
    "name": "node -v",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "node",
      "version",
      "setup"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "node -v"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "node -v"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "node -v"
      }
    },
    "learning": {
      "whatItDoes": "Prints your Node.js version.",
      "whenToUse": "Use this when you need to prints your node.js version..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "node -v",
          "explanation": "Prints your Node.js version."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "'node' is not recognized as an internal or external command",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Version too old for the project",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://nodejs.org/api/cli.html"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-version",
    "slug": "node-dev-npm-version",
    "name": "npm -v",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "npm",
      "version",
      "setup"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm -v"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm -v"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm -v"
      }
    },
    "learning": {
      "whatItDoes": "Prints your npm version.",
      "whenToUse": "Use this when you need to prints your npm version..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm -v",
          "explanation": "Prints your npm version."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "'npm' is not recognized as an internal or external command",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Old npm version causing install issues",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-install",
    "slug": "node-dev-npm-install",
    "name": "npm install",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "npm",
      "install",
      "dependencies"
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
      "whatItDoes": "Installs dependencies from package.json.",
      "whenToUse": "Use this when you need to installs dependencies from package.json..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm install",
          "explanation": "Installs dependencies from package.json."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "ENOENT: no such file or directory, open 'package.json'",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "ERESOLVE unable to resolve dependency tree",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-install/"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-ci",
    "slug": "node-dev-npm-ci",
    "name": "npm ci",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "npm",
      "install",
      "ci"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm ci"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm ci"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm ci"
      }
    },
    "learning": {
      "whatItDoes": "Installs dependencies exactly from package-lock.json for a clean build.",
      "whenToUse": "Use this when you need to installs dependencies exactly from package-lock.json for a clean build..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm ci",
          "explanation": "Installs dependencies exactly from package-lock.json for a clean build."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "npm ERR! missing: package-lock.json",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "npm ERR! EBADPLATFORM",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v7/commands/npm-ci"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-run-dev",
    "slug": "node-dev-npm-run-dev",
    "name": "npm run dev",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "npm",
      "dev",
      "scripts"
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
      "whatItDoes": "Runs the dev script from package.json.",
      "whenToUse": "Use this when you need to runs the dev script from package.json..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm run dev",
          "explanation": "Runs the dev script from package.json."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing script: \\dev\\",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "EADDRINUSE: address already in use",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v8/commands/npm-run-script"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-run-build",
    "slug": "node-dev-npm-run-build",
    "name": "npm run build",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "npm",
      "build",
      "scripts"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm run build"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm run build"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm run build"
      }
    },
    "learning": {
      "whatItDoes": "Runs the build script from package.json.",
      "whenToUse": "Use this when you need to runs the build script from package.json..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm run build",
          "explanation": "Runs the build script from package.json."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing script: \\build\\",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Type errors during build",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v8/commands/npm-run-script"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-run-lint",
    "slug": "node-dev-npm-run-lint",
    "name": "npm run lint",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "npm",
      "lint",
      "scripts"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm run lint"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm run lint"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm run lint"
      }
    },
    "learning": {
      "whatItDoes": "Runs the lint script from package.json.",
      "whenToUse": "Use this when you need to runs the lint script from package.json..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm run lint",
          "explanation": "Runs the lint script from package.json."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing script: \\lint\\",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Lint errors fail the command",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v8/commands/npm-run-script"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-start",
    "slug": "node-dev-npm-start",
    "name": "npm start",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "npm",
      "start",
      "scripts"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm start"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm start"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm start"
      }
    },
    "learning": {
      "whatItDoes": "Runs the start script from package.json.",
      "whenToUse": "Use this when you need to runs the start script from package.json..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm start",
          "explanation": "Runs the start script from package.json."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing script: \\start\\",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Server crashes on startup",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v8/commands/npm-run-script"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-test",
    "slug": "node-dev-npm-test",
    "name": "npm test",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "npm",
      "test",
      "scripts"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm test"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm test"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm test"
      }
    },
    "learning": {
      "whatItDoes": "Runs the test script from package.json.",
      "whenToUse": "Use this when you need to runs the test script from package.json..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm test",
          "explanation": "Runs the test script from package.json."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing script: \\test\\",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Tests fail with exit code 1",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v8/commands/npm-run-script"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-cache-clean",
    "slug": "node-dev-npm-cache-clean",
    "name": "npm cache clean --force",
    "primaryIntent": "do",
    "tools": [
      "fix-common"
    ],
    "tags": [
      "fix-common",
      "npm",
      "cache",
      "errors"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm cache clean --force"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm cache clean --force"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm cache clean --force"
      }
    },
    "learning": {
      "whatItDoes": "Clears npm cache (requires --force).",
      "whenToUse": "Use this when you need to clears npm cache (requires --force)..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm cache clean --force",
          "explanation": "Clears npm cache (requires --force)."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "npm ERR! code EACCES when cleaning cache",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Running without --force does nothing",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-cache/"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-cache-verify",
    "slug": "node-dev-npm-cache-verify",
    "name": "npm cache verify",
    "primaryIntent": "do",
    "tools": [
      "fix-common"
    ],
    "tags": [
      "fix-common",
      "npm",
      "cache",
      "verify"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm cache verify"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm cache verify"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm cache verify"
      }
    },
    "learning": {
      "whatItDoes": "Checks npm cache integrity.",
      "whenToUse": "Use this when you need to checks npm cache integrity..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm cache verify",
          "explanation": "Checks npm cache integrity."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Cache verification reports corruption",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Running in the wrong folder",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-cache/"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-npm-ls",
    "slug": "node-dev-npm-ls",
    "name": "npm ls",
    "primaryIntent": "do",
    "tools": [
      "troubleshoot"
    ],
    "tags": [
      "troubleshoot",
      "npm",
      "packages",
      "inspect"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npm ls"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npm ls"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npm ls"
      }
    },
    "learning": {
      "whatItDoes": "Lists installed dependencies in this project.",
      "whenToUse": "Use this when you need to lists installed dependencies in this project..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm ls",
          "explanation": "Lists installed dependencies in this project."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing packages show as UNMET DEPENDENCY",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Command output is too long without --depth",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v9/commands/npm-ls"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-next-dev",
    "slug": "node-dev-next-dev",
    "name": "npx next dev",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "nextjs",
      "dev",
      "server"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npx next dev"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npx next dev"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npx next dev"
      }
    },
    "learning": {
      "whatItDoes": "Starts the Next.js dev server with hot reload.",
      "whenToUse": "Use this when you need to starts the next.js dev server with hot reload..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx next dev",
          "explanation": "Starts the Next.js dev server with hot reload."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "'next' is not recognized (missing dependencies)",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "EADDRINUSE: address already in use",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://nextjs.org/docs/app/api-reference/cli/next"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-next-dev-port",
    "slug": "node-dev-next-dev-port",
    "name": "npx next dev -p 4000",
    "primaryIntent": "do",
    "tools": [
      "fix-common"
    ],
    "tags": [
      "fix-common",
      "nextjs",
      "dev",
      "port"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npx next dev -p 4000"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npx next dev -p 4000"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npx next dev -p 4000"
      }
    },
    "learning": {
      "whatItDoes": "Starts Next.js on a different port.",
      "whenToUse": "Use this when you need to starts next.js on a different port..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx next dev -p 4000",
          "explanation": "Starts Next.js on a different port."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Port still in use because old server is running",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Firewall blocks local port",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://nextjs.org/docs/app/api-reference/cli/next"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-next-build",
    "slug": "node-dev-next-build",
    "name": "npx next build",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "nextjs",
      "build",
      "production"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npx next build"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npx next build"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npx next build"
      }
    },
    "learning": {
      "whatItDoes": "Creates a production build of the app.",
      "whenToUse": "Use this when you need to creates a production build of the app..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx next build",
          "explanation": "Creates a production build of the app."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Build fails due to type errors",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "ENOENT when run outside the project folder",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://nextjs.org/docs/app/api-reference/cli/next"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-next-start",
    "slug": "node-dev-next-start",
    "name": "npx next start",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "nextjs",
      "start",
      "production"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npx next start"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npx next start"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npx next start"
      }
    },
    "learning": {
      "whatItDoes": "Starts the production server after a build.",
      "whenToUse": "Use this when you need to starts the production server after a build..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx next start",
          "explanation": "Starts the production server after a build."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Error: Build not found (run next build first)",
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
        "url": "https://nextjs.org/docs/app/api-reference/cli/next"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-next-lint",
    "slug": "node-dev-next-lint",
    "name": "npx next lint",
    "primaryIntent": "do",
    "tools": [
      "start-here"
    ],
    "tags": [
      "start-here",
      "nextjs",
      "lint",
      "quality"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npx next lint"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npx next lint"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npx next lint"
      }
    },
    "learning": {
      "whatItDoes": "Runs Next.js linting rules.",
      "whenToUse": "Use this when you need to runs next.js linting rules..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx next lint",
          "explanation": "Runs Next.js linting rules."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "ESLint not configured (no lint script)",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Lint errors cause non-zero exit code",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://nextjs.org/docs/app/api-reference/cli/next"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-next-info",
    "slug": "node-dev-next-info",
    "name": "npx next info",
    "primaryIntent": "do",
    "tools": [
      "troubleshoot"
    ],
    "tags": [
      "troubleshoot",
      "nextjs",
      "info",
      "debug"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "npx next info"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "npx next info"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "npx next info"
      }
    },
    "learning": {
      "whatItDoes": "Prints system and environment info for debugging.",
      "whenToUse": "Use this when you need to prints system and environment info for debugging..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx next info",
          "explanation": "Prints system and environment info for debugging."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Command not found because Next.js is not installed",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Running outside the project folder",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://nextjs.org/docs/app/api-reference/cli/next"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-port-find-3000",
    "slug": "node-dev-port-find-3000",
    "name": "Find what is using port 3000",
    "primaryIntent": "do",
    "tools": [
      "fix-common"
    ],
    "tags": [
      "fix-common",
      "port",
      "process",
      "network"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "netstat -ano | findstr :3000"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "lsof -i :3000"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "lsof -i :3000"
      }
    },
    "learning": {
      "whatItDoes": "Finds which process is using port 3000.",
      "whenToUse": "Use this when you need to finds which process is using port 3000..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "netstat -ano | findstr :3000",
          "explanation": "Finds which process is using port 3000."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "lsof: command not found",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "No output because nothing is listening on 3000",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://man7.org/linux/man-pages/man8/lsof.8.html"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat"
      }
    ],
    "lastReviewed": "2026-02-22"
  },
  {
    "id": "node-dev-port-kill-pid",
    "slug": "node-dev-port-kill-pid",
    "name": "Stop a process by PID",
    "primaryIntent": "do",
    "tools": [
      "fix-common"
    ],
    "tags": [
      "fix-common",
      "port",
      "process",
      "kill"
    ],
    "defaultVariantKey": "windows:powershell",
    "variants": {
      "windows:powershell": {
        "platform": "windows",
        "shell": "powershell",
        "command": "taskkill /PID <PID> /F"
      },
      "mac:bash": {
        "platform": "mac",
        "shell": "bash",
        "command": "kill -9 <PID>"
      },
      "linux:bash": {
        "platform": "linux",
        "shell": "bash",
        "command": "kill -9 <PID>"
      }
    },
    "learning": {
      "whatItDoes": "Stops the process that is using the port.",
      "whenToUse": "Use this when you need to stops the process that is using the port..",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "taskkill /PID <PID> /F",
          "explanation": "Stops the process that is using the port."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "No such process",
          "fix": "Check the command, spelling, and folder, then try again."
        },
        {
          "mistake": "Access is denied",
          "fix": "Check the command, spelling, and folder, then try again."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://man7.org/linux/man-pages/man1/kill.1.html"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/taskkill"
      }
    ],
    "lastReviewed": "2026-02-22"
  }
];
