import type { Command } from './schema';

export const defaultCommands: Command[] = [
{
      "id": "start-install",
      "slug": "start-install",
      "name": "npm install",
      "primaryIntent": "do",
      "tools": [
        "start-here"
      ],
      "tags": [
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
        "whatItDoes": "Installs all the project tools and packages.",
        "whenToUse": "Use this the first time, or after deleting node_modules.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm install",
            "explanation": "Installs all the project tools and packages."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check your internet connection."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "npm install (CLI docs)",
          "url": "https://docs.npmjs.com/cli/v10/commands/npm-install"
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
        "whatItDoes": "Starts the local dev server so you can view the site.",
        "whenToUse": "Use this when you want to develop locally.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm run dev",
            "explanation": "Starts the local dev server so you can view the site."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run npm install first."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "npm run-script (CLI docs)",
          "url": "https://docs.npmjs.com/cli/v10/commands/npm-run-script"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "start-open-localhost",
      "slug": "start-open-localhost",
      "name": "http://localhost:3000",
      "primaryIntent": "do",
      "tools": [
        "start-here"
      ],
      "tags": [
        "dev"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "http://localhost:3000"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "http://localhost:3000"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "http://localhost:3000"
        }
      },
      "learning": {
        "whatItDoes": "Opens the local site in your browser.",
        "whenToUse": "Use this after npm run dev is running.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "http://localhost:3000",
            "explanation": "Opens the local site in your browser."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure the dev server is running."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "MDN: localhost",
          "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#localhost"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "start-build",
      "slug": "start-build",
      "name": "npm run build",
      "primaryIntent": "do",
      "tools": [
        "start-here"
      ],
      "tags": [
        "build"
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
        "whatItDoes": "Builds the site for production.",
        "whenToUse": "Use this before deploying or to check for build errors.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm run build",
            "explanation": "Builds the site for production."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Fix the first error shown in the terminal."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "npm run-script (CLI docs)",
          "url": "https://docs.npmjs.com/cli/v10/commands/npm-run-script"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "start-start",
      "slug": "start-start",
      "name": "npm start",
      "primaryIntent": "do",
      "tools": [
        "start-here"
      ],
      "tags": [
        "build"
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
        "whatItDoes": "Runs the production server after a build.",
        "whenToUse": "Use this only after npm run build has succeeded.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm start",
            "explanation": "Runs the production server after a build."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run npm run build first."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "npm run-script (CLI docs)",
          "url": "https://docs.npmjs.com/cli/v10/commands/npm-run-script"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "start-lint",
      "slug": "start-lint",
      "name": "npm run lint",
      "primaryIntent": "do",
      "tools": [
        "start-here"
      ],
      "tags": [
        "quality"
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
        "whatItDoes": "Checks the code for common mistakes.",
        "whenToUse": "Use this before committing or sharing code.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm run lint",
            "explanation": "Checks the code for common mistakes."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Fix the first lint error listed."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "npm run-script (CLI docs)",
          "url": "https://docs.npmjs.com/cli/v10/commands/npm-run-script"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "start-node-version",
      "slug": "start-node-version",
      "name": "node -v",
      "primaryIntent": "do",
      "tools": [
        "start-here"
      ],
      "tags": [
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
        "whatItDoes": "Shows your Node.js version.",
        "whenToUse": "Use this if someone asks you to confirm your Node version.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "node -v",
            "explanation": "Shows your Node.js version."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Install Node.js from nodejs.org."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "Node.js CLI options",
          "url": "https://nodejs.org/api/cli.html"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "start-npm-version",
      "slug": "start-npm-version",
      "name": "npm -v",
      "primaryIntent": "do",
      "tools": [
        "start-here"
      ],
      "tags": [
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
        "whatItDoes": "Shows your npm version.",
        "whenToUse": "Use this if npm commands are acting strange.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm -v",
            "explanation": "Shows your npm version."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Install Node.js again to restore npm."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "npm command (CLI docs)",
          "url": "https://docs.npmjs.com/cli/v10/commands/npm"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-next-not-found",
      "slug": "fix-next-not-found",
      "name": "npm install",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix"
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
        "whatItDoes": "Fixes next is not recognized by installing packages.",
        "whenToUse": "Use this if the terminal says next is not recognized.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm install",
            "explanation": "Fixes next is not recognized by installing packages."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check your internet connection."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "npm install (CLI docs)",
          "url": "https://docs.npmjs.com/cli/v10/commands/npm-install"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-npm-ps1",
      "slug": "fix-npm-ps1",
      "name": "powershell -ExecutionPolicy Bypass -Command \"npm run dev\"",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
        "powerShell"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "powershell -ExecutionPolicy Bypass -Command \"npm run dev\""
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
        "whatItDoes": "Runs npm even if PowerShell blocks scripts.",
        "whenToUse": "Use this if you see running scripts is disabled.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "powershell -ExecutionPolicy Bypass -Command \"npm run dev\"",
            "explanation": "Runs npm even if PowerShell blocks scripts."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Close other terminals and try again."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "PowerShell Set-ExecutionPolicy",
          "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-port-find-3000",
      "slug": "fix-port-find-3000",
      "name": "netstat -ano | findstr :3000",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
        "port"
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
        "whatItDoes": "Finds what is using port 3000.",
        "whenToUse": "Use this if the dev server says the port is busy.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "netstat -ano | findstr :3000",
            "explanation": "Finds what is using port 3000."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you are using Windows PowerShell."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "Microsoft netstat command",
          "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-port-kill",
      "slug": "fix-port-kill",
      "name": "taskkill /PID <PID> /F",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
        "port"
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
        "whatItDoes": "Stops the process that is using a port.",
        "whenToUse": "Use this after you find the PID with netstat.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "taskkill /PID <PID> /F",
            "explanation": "Stops the process that is using a port."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you replaced <PID> with the real number."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "Microsoft taskkill command",
          "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/taskkill"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-clear-next",
      "slug": "fix-clear-next",
      "name": "Remove-Item -Recurse -Force .next",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
        "cache"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item -Recurse -Force .next"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -rf .next"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -rf .next"
        }
      },
      "learning": {
        "whatItDoes": "Deletes the Next.js build cache so it can rebuild cleanly.",
        "whenToUse": "Use this if builds are stuck or showing old changes.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Remove-Item -Recurse -Force .next",
            "explanation": "Deletes the Next.js build cache so it can rebuild cleanly."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Close the dev server first, then try again."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "PowerShell Remove-Item",
          "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-remove-node-modules",
      "slug": "fix-remove-node-modules",
      "name": "Remove-Item -Recurse -Force node_modules",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
        "install"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item -Recurse -Force node_modules"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -rf node_modules"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -rf node_modules"
        }
      },
      "learning": {
        "whatItDoes": "Removes all installed packages so you can reinstall cleanly.",
        "whenToUse": "Use this if npm install keeps failing.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Remove-Item -Recurse -Force node_modules",
            "explanation": "Removes all installed packages so you can reinstall cleanly."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Close any running dev server and try again."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "PowerShell Remove-Item",
          "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-remove-lockfile",
      "slug": "fix-remove-lockfile",
      "name": "Remove-Item package-lock.json",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
        "install"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item package-lock.json"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -f package-lock.json"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -f package-lock.json"
        }
      },
      "learning": {
        "whatItDoes": "Deletes the lock file so npm can make a fresh one.",
        "whenToUse": "Use this if npm keeps complaining about the lock file.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Remove-Item package-lock.json",
            "explanation": "Deletes the lock file so npm can make a fresh one."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure the file exists in the folder."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "PowerShell Remove-Item",
          "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-reinstall",
      "slug": "fix-reinstall",
      "name": "npm install",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
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
        "whatItDoes": "Reinstalls everything cleanly after deleting node_modules.",
        "whenToUse": "Use this after removing node_modules or the lock file.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm install",
            "explanation": "Reinstalls everything cleanly after deleting node_modules."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check your internet connection."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "npm install (CLI docs)",
          "url": "https://docs.npmjs.com/cli/v10/commands/npm-install"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-npm-cache-clean",
      "slug": "fix-npm-cache-clean",
      "name": "npm cache clean --force",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
        "install"
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
        "whatItDoes": "Clears the npm cache to fix stubborn install errors.",
        "whenToUse": "Use this if npm install fails over and over.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm cache clean --force",
            "explanation": "Clears the npm cache to fix stubborn install errors."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Try running the command as Administrator."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "npm cache (CLI docs)",
          "url": "https://docs.npmjs.com/cli/v10/commands/npm-cache"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-clear-cache-unix",
      "slug": "fix-clear-cache-unix",
      "name": "rm -rf .next",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
        "cache"
      ],
      "defaultVariantKey": "mac:bash",
      "variants": {
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -rf .next"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -rf .next"
        },
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item -Recurse -Force .next"
        }
      },
      "learning": {
        "whatItDoes": "Deletes the Next.js cache on Mac or Linux.",
        "whenToUse": "Use this if builds are stuck on Mac or Linux.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "rm -rf .next",
            "explanation": "Deletes the Next.js cache on Mac or Linux."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you are in the project folder."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "GNU rm command",
          "url": "https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "fix-remove-node-modules-unix",
      "slug": "fix-remove-node-modules-unix",
      "name": "rm -rf node_modules",
      "primaryIntent": "fix",
      "tools": [
        "fix-common"
      ],
      "tags": [
        "fix",
        "install"
      ],
      "defaultVariantKey": "mac:bash",
      "variants": {
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -rf node_modules"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -rf node_modules"
        },
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item -Recurse -Force node_modules"
        }
      },
      "learning": {
        "whatItDoes": "Removes node_modules on Mac or Linux.",
        "whenToUse": "Use this if installs keep failing on Mac or Linux.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "rm -rf node_modules",
            "explanation": "Removes node_modules on Mac or Linux."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Close any running dev server and try again."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "GNU rm command",
          "url": "https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html"
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
        "git"
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
        "whatItDoes": "Shows which files changed since your last save point.",
        "whenToUse": "Use this any time you are unsure what changed.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git status",
            "explanation": "Shows which files changed since your last save point."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you are inside the project folder."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "git status (official docs)",
          "url": "https://git-scm.com/docs/git-status"
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
        "git"
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
        "whatItDoes": "Downloads the latest changes from the shared repo.",
        "whenToUse": "Use this before you start working.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git pull",
            "explanation": "Downloads the latest changes from the shared repo."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Commit or stash your local changes first."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "git pull (official docs)",
          "url": "https://git-scm.com/docs/git-pull"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "git-add-all",
      "slug": "git-add-all",
      "name": "git add -A",
      "primaryIntent": "do",
      "tools": [
        "git-basics"
      ],
      "tags": [
        "git"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "git add -A"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "git add -A"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "git add -A"
        }
      },
      "learning": {
        "whatItDoes": "Stages all your changes so they are ready to commit.",
        "whenToUse": "Use this right before you commit.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git add -A",
            "explanation": "Stages all your changes so they are ready to commit."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check file permissions."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "git add (official docs)",
          "url": "https://git-scm.com/docs/git-add"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "git-commit",
      "slug": "git-commit",
      "name": "git commit -m \"message\"",
      "primaryIntent": "do",
      "tools": [
        "git-basics"
      ],
      "tags": [
        "git"
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
        "whatItDoes": "Creates a saved checkpoint with a short message.",
        "whenToUse": "Use this after staging files with git add.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git commit -m \"message\"",
            "explanation": "Creates a saved checkpoint with a short message."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you staged files first with git add -A."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "git commit (official docs)",
          "url": "https://git-scm.com/docs/git-commit"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "git-push",
      "slug": "git-push",
      "name": "git push",
      "primaryIntent": "do",
      "tools": [
        "git-basics"
      ],
      "tags": [
        "git"
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
        "whatItDoes": "Uploads your commits to the shared repo.",
        "whenToUse": "Use this after committing changes you want to share.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git push",
            "explanation": "Uploads your commits to the shared repo."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run git pull first and resolve any conflicts."
          }
        ],
        "warnings": []
      },
      "sources": [
        {
          "label": "git push (official docs)",
          "url": "https://git-scm.com/docs/git-push"
        }
      ],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "git-log",
      "slug": "git-log",
      "name": "git log --oneline -5",
      "primaryIntent": "do",
      "tools": [
        "git-basics"
      ],
      "tags": [
        "git"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "git log --oneline -5"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "git log --oneline -5"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "git log --oneline -5"
        }
      },
      "learning": {
        "whatItDoes": "Shows the last few commits in a short list.",
        "whenToUse": "Use this to see what was changed recently.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git log --oneline -5",
            "explanation": "Shows the last few commits in a short list."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you are in a Git repository."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "git-diff",
      "slug": "git-diff",
      "name": "git diff",
      "primaryIntent": "do",
      "tools": [
        "git-basics"
      ],
      "tags": [
        "git"
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
        "whatItDoes": "Shows the exact changes you made to files.",
        "whenToUse": "Use this before committing to review changes.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git diff",
            "explanation": "Shows the exact changes you made to files."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you have changed a file first."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "git-restore-staged",
      "slug": "git-restore-staged",
      "name": "git restore --staged .",
      "primaryIntent": "do",
      "tools": [
        "git-basics"
      ],
      "tags": [
        "git"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "git restore --staged ."
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "git restore --staged ."
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "git restore --staged ."
        }
      },
      "learning": {
        "whatItDoes": "Unstages files if you added them by mistake.",
        "whenToUse": "Use this if you staged the wrong files.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git restore --staged .",
            "explanation": "Unstages files if you added them by mistake."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check git status to see what is staged."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "git-stash",
      "slug": "git-stash",
      "name": "git stash -u",
      "primaryIntent": "do",
      "tools": [
        "git-basics"
      ],
      "tags": [
        "git"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "git stash -u"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "git stash -u"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "git stash -u"
        }
      },
      "learning": {
        "whatItDoes": "Temporarily saves your changes without committing.",
        "whenToUse": "Use this when you must pull changes but are not ready to commit.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git stash -u",
            "explanation": "Temporarily saves your changes without committing."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you are in a Git repo."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "git-stash-pop",
      "slug": "git-stash-pop",
      "name": "git stash pop",
      "primaryIntent": "do",
      "tools": [
        "git-basics"
      ],
      "tags": [
        "git"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "git stash pop"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "git stash pop"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "git stash pop"
        }
      },
      "learning": {
        "whatItDoes": "Brings back your last stashed changes.",
        "whenToUse": "Use this after you have pulled and want your changes back.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git stash pop",
            "explanation": "Brings back your last stashed changes."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Resolve any conflicts shown in the terminal."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-studio",
      "slug": "prisma-studio",
      "name": "npx prisma studio",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
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
        "whatItDoes": "Opens a friendly database viewer in your browser.",
        "whenToUse": "Use this to view or edit data by hand.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npx prisma studio",
            "explanation": "Opens a friendly database viewer in your browser."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run npm install first."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-migrate-dev",
      "slug": "prisma-migrate-dev",
      "name": "npx prisma migrate dev",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
        "db"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npx prisma migrate dev"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npx prisma migrate dev"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npx prisma migrate dev"
        }
      },
      "learning": {
        "whatItDoes": "Applies database migrations during development.",
        "whenToUse": "Use this after changing the schema.prisma file.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npx prisma migrate dev",
            "explanation": "Applies database migrations during development."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check the error for schema mistakes."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-generate",
      "slug": "prisma-generate",
      "name": "npx prisma generate",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
        "db"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npx prisma generate"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npx prisma generate"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npx prisma generate"
        }
      },
      "learning": {
        "whatItDoes": "Regenerates the Prisma client code.",
        "whenToUse": "Use this after updating schema.prisma.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npx prisma generate",
            "explanation": "Regenerates the Prisma client code."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check your schema for errors."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-db-push",
      "slug": "prisma-db-push",
      "name": "npx prisma db push",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
        "db"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npx prisma db push"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npx prisma db push"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npx prisma db push"
        }
      },
      "learning": {
        "whatItDoes": "Pushes schema changes directly to the database.",
        "whenToUse": "Use this only if you do not need a migration history.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npx prisma db push",
            "explanation": "Pushes schema changes directly to the database."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure the database is running."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-format",
      "slug": "prisma-format",
      "name": "npx prisma format",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
        "db"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npx prisma format"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npx prisma format"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npx prisma format"
        }
      },
      "learning": {
        "whatItDoes": "Formats your Prisma schema file neatly.",
        "whenToUse": "Use this before committing schema changes.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npx prisma format",
            "explanation": "Formats your Prisma schema file neatly."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check that prisma is installed."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-validate",
      "slug": "prisma-validate",
      "name": "npx prisma validate",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
        "db"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npx prisma validate"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npx prisma validate"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npx prisma validate"
        }
      },
      "learning": {
        "whatItDoes": "Checks your Prisma schema for mistakes.",
        "whenToUse": "Use this if migrations fail or schema looks wrong.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npx prisma validate",
            "explanation": "Checks your Prisma schema for mistakes."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Fix the first error shown."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-schema-location",
      "slug": "prisma-schema-location",
      "name": "Get-ChildItem -Recurse -Filter schema.prisma",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
        "db"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Get-ChildItem -Recurse -Filter schema.prisma"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "find . -name schema.prisma"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "find . -name schema.prisma"
        }
      },
      "learning": {
        "whatItDoes": "Shows where your schema.prisma file lives.",
        "whenToUse": "Use this if you cannot find schema.prisma.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Get-ChildItem -Recurse -Filter schema.prisma",
            "explanation": "Shows where your schema.prisma file lives."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you are in the project folder."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-migrate-status",
      "slug": "prisma-migrate-status",
      "name": "npx prisma migrate status",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
        "db"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npx prisma migrate status"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npx prisma migrate status"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npx prisma migrate status"
        }
      },
      "learning": {
        "whatItDoes": "Shows which migrations have been applied.",
        "whenToUse": "Use this to check migration history.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npx prisma migrate status",
            "explanation": "Shows which migrations have been applied."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure your database is running."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-db-pull",
      "slug": "prisma-db-pull",
      "name": "npx prisma db pull",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
        "db"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npx prisma db pull"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npx prisma db pull"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npx prisma db pull"
        }
      },
      "learning": {
        "whatItDoes": "Pulls the database schema into Prisma.",
        "whenToUse": "Use this if the database changed outside of Prisma.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npx prisma db pull",
            "explanation": "Pulls the database schema into Prisma."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check your database connection string."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "prisma-seed",
      "slug": "prisma-seed",
      "name": "npx prisma db seed",
      "primaryIntent": "do",
      "tools": [
        "db-prisma"
      ],
      "tags": [
        "db"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npx prisma db seed"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npx prisma db seed"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npx prisma db seed"
        }
      },
      "learning": {
        "whatItDoes": "Runs your database seed script.",
        "whenToUse": "Use this when you need sample data.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npx prisma db seed",
            "explanation": "Runs your database seed script."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure the seed script exists."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-node-version",
      "slug": "trouble-node-version",
      "name": "node -p \"process.version\"",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "node -p \"process.version\""
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "node -p \"process.version\""
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "node -p \"process.version\""
        }
      },
      "learning": {
        "whatItDoes": "Shows your Node.js version.",
        "whenToUse": "Use this if a tool requires a certain Node.js version.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "node -p \"process.version\"",
            "explanation": "Shows your Node.js version."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Install Node.js from nodejs.org."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-npm-version",
      "slug": "trouble-npm-version",
      "name": "npm -p \"process.versions.npm\"",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npm -p \"process.versions.npm\""
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npm -p \"process.versions.npm\""
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npm -p \"process.versions.npm\""
        }
      },
      "learning": {
        "whatItDoes": "Shows your npm version.",
        "whenToUse": "Use this if npm behaves oddly.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm -p \"process.versions.npm\"",
            "explanation": "Shows your npm version."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Reinstall Node.js to restore npm."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-where-node",
      "slug": "trouble-where-node",
      "name": "where node",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "where node"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "which node"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "which node"
        }
      },
      "learning": {
        "whatItDoes": "Shows where Node.js is installed on Windows.",
        "whenToUse": "Use this if you have multiple Node installs.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "where node",
            "explanation": "Shows where Node.js is installed on Windows."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure Node is installed."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-which-node",
      "slug": "trouble-which-node",
      "name": "which node",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
      ],
      "defaultVariantKey": "mac:bash",
      "variants": {
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "which node"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "which node"
        },
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "where node"
        }
      },
      "learning": {
        "whatItDoes": "Shows where Node.js is installed on Mac or Linux.",
        "whenToUse": "Use this if you have multiple Node installs.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "which node",
            "explanation": "Shows where Node.js is installed on Mac or Linux."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Install Node.js and reopen the terminal."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-logs-dev",
      "slug": "trouble-logs-dev",
      "name": "npm run dev",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
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
        "whatItDoes": "Shows the dev server logs in the terminal.",
        "whenToUse": "Use this to see errors while the server runs.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm run dev",
            "explanation": "Shows the dev server logs in the terminal."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run npm install first."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-port-3000",
      "slug": "trouble-port-3000",
      "name": "netstat -ano | findstr :3000",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
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
        "whatItDoes": "Finds what is running on port 3000.",
        "whenToUse": "Use this if port 3000 is busy.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "netstat -ano | findstr :3000",
            "explanation": "Finds what is running on port 3000."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Try running PowerShell as Administrator."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-port-unix",
      "slug": "trouble-port-unix",
      "name": "lsof -i :3000",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
      ],
      "defaultVariantKey": "mac:bash",
      "variants": {
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "lsof -i :3000"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "lsof -i :3000"
        },
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "netstat -ano | findstr :3000"
        }
      },
      "learning": {
        "whatItDoes": "Finds what is using port 3000 on Mac or Linux.",
        "whenToUse": "Use this if port 3000 is busy on Mac or Linux.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "lsof -i :3000",
            "explanation": "Finds what is using port 3000 on Mac or Linux."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Install lsof if it is missing."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-esbuild-path",
      "slug": "trouble-esbuild-path",
      "name": "node -p \"require.resolve('esbuild')\"",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "node -p \"require.resolve('esbuild')\""
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "node -p \"require.resolve('esbuild')\""
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "node -p \"require.resolve('esbuild')\""
        }
      },
      "learning": {
        "whatItDoes": "Shows where esbuild is installed.",
        "whenToUse": "Use this if build errors mention esbuild.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "node -p \"require.resolve('esbuild')\"",
            "explanation": "Shows where esbuild is installed."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run npm install to ensure esbuild exists."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-npm-ls-esbuild",
      "slug": "trouble-npm-ls-esbuild",
      "name": "npm ls esbuild",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "npm ls esbuild"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "npm ls esbuild"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "npm ls esbuild"
        }
      },
      "learning": {
        "whatItDoes": "Shows which version of esbuild is installed.",
        "whenToUse": "Use this to confirm the esbuild version.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm ls esbuild",
            "explanation": "Shows which version of esbuild is installed."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run npm install first."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "trouble-tree",
      "slug": "trouble-tree",
      "name": "Get-ChildItem",
      "primaryIntent": "fix",
      "tools": [
        "troubleshoot"
      ],
      "tags": [
        "troubleshoot"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Get-ChildItem"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "ls"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "ls"
        }
      },
      "learning": {
        "whatItDoes": "Shows the top-level files in this folder.",
        "whenToUse": "Use this if you are unsure you are in the right folder.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Get-ChildItem",
            "explanation": "Shows the top-level files in this folder."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Try running PowerShell again."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "reset-git-status",
      "slug": "reset-git-status",
      "name": "git status",
      "primaryIntent": "fix",
      "tools": [
        "reset-safe"
      ],
      "tags": [
        "reset"
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
        "whatItDoes": "Shows what has changed before you reset anything.",
        "whenToUse": "Use this first, always.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git status",
            "explanation": "Shows what has changed before you reset anything."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Make sure you are in the project folder."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "reset-git-fetch",
      "slug": "reset-git-fetch",
      "name": "git fetch",
      "primaryIntent": "fix",
      "tools": [
        "reset-safe"
      ],
      "tags": [
        "reset"
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
        "whenToUse": "Use this to see if remote changes exist.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git fetch",
            "explanation": "Downloads remote updates without changing your files."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check your internet connection."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "reset-git-pull",
      "slug": "reset-git-pull",
      "name": "git pull",
      "primaryIntent": "fix",
      "tools": [
        "reset-safe"
      ],
      "tags": [
        "reset"
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
        "whatItDoes": "Updates your local files with the latest remote changes.",
        "whenToUse": "Use this when you want the newest version.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git pull",
            "explanation": "Updates your local files with the latest remote changes."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Commit or stash local changes first."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "reset-npm-install",
      "slug": "reset-npm-install",
      "name": "npm install",
      "primaryIntent": "fix",
      "tools": [
        "reset-safe"
      ],
      "tags": [
        "reset"
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
        "whatItDoes": "Reinstalls packages without deleting your files.",
        "whenToUse": "Use this if a package is missing.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm install",
            "explanation": "Reinstalls packages without deleting your files."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check your internet connection."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "reset-next-cache",
      "slug": "reset-next-cache",
      "name": "Remove-Item -Recurse -Force .next",
      "primaryIntent": "fix",
      "tools": [
        "reset-safe"
      ],
      "tags": [
        "reset"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item -Recurse -Force .next"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -rf .next"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -rf .next"
        }
      },
      "learning": {
        "whatItDoes": "Deletes only the Next.js cache (safe to rebuild).",
        "whenToUse": "Use this if changes do not show up.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Remove-Item -Recurse -Force .next",
            "explanation": "Deletes only the Next.js cache (safe to rebuild)."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Stop the dev server first."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "reset-open-node-modules",
      "slug": "reset-open-node-modules",
      "name": "Get-ChildItem node_modules",
      "primaryIntent": "fix",
      "tools": [
        "reset-safe"
      ],
      "tags": [
        "reset"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Get-ChildItem node_modules"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "ls node_modules"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "ls node_modules"
        }
      },
      "learning": {
        "whatItDoes": "Checks whether node_modules exists.",
        "whenToUse": "Use this if you are unsure packages are installed.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Get-ChildItem node_modules",
            "explanation": "Checks whether node_modules exists."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run npm install to create node_modules."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "reset-clear-npm-cache",
      "slug": "reset-clear-npm-cache",
      "name": "npm cache clean --force",
      "primaryIntent": "fix",
      "tools": [
        "reset-safe"
      ],
      "tags": [
        "reset"
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
        "whatItDoes": "Clears npm cache (safe but can be slow).",
        "whenToUse": "Use this if npm install keeps failing.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "npm cache clean --force",
            "explanation": "Clears npm cache (safe but can be slow)."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Try running in a new terminal."
          }
        ],
        "warnings": []
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "nuclear-remove-node-modules",
      "slug": "nuclear-remove-node-modules",
      "name": "Remove-Item -Recurse -Force node_modules",
      "primaryIntent": "fix",
      "tools": [
        "reset-nuclear"
      ],
      "tags": [
        "reset"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item -Recurse -Force node_modules"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -rf node_modules"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -rf node_modules"
        }
      },
      "learning": {
        "whatItDoes": "Deletes node_modules completely.",
        "whenToUse": "Use this only if you are told to do a full reinstall.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Remove-Item -Recurse -Force node_modules",
            "explanation": "Deletes node_modules completely."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Stop any running dev server."
          }
        ],
        "warnings": [
          "This can delete files or discard work."
        ]
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "nuclear-remove-next",
      "slug": "nuclear-remove-next",
      "name": "Remove-Item -Recurse -Force .next",
      "primaryIntent": "fix",
      "tools": [
        "reset-nuclear"
      ],
      "tags": [
        "reset"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item -Recurse -Force .next"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -rf .next"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -rf .next"
        }
      },
      "learning": {
        "whatItDoes": "Deletes the Next.js build cache.",
        "whenToUse": "Use this only if safe reset did not work.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Remove-Item -Recurse -Force .next",
            "explanation": "Deletes the Next.js build cache."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Stop the dev server first."
          }
        ],
        "warnings": [
          "This can delete files or discard work."
        ]
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "nuclear-remove-lockfile",
      "slug": "nuclear-remove-lockfile",
      "name": "Remove-Item package-lock.json",
      "primaryIntent": "fix",
      "tools": [
        "reset-nuclear"
      ],
      "tags": [
        "reset"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item package-lock.json"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -f package-lock.json"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -f package-lock.json"
        }
      },
      "learning": {
        "whatItDoes": "Deletes the lock file so npm can rebuild it.",
        "whenToUse": "Use this only if told to delete the lock file.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Remove-Item package-lock.json",
            "explanation": "Deletes the lock file so npm can rebuild it."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Check the file exists before running."
          }
        ],
        "warnings": [
          "This can delete files or discard work."
        ]
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "nuclear-git-reset-hard",
      "slug": "nuclear-git-reset-hard",
      "name": "git reset --hard",
      "primaryIntent": "fix",
      "tools": [
        "reset-nuclear"
      ],
      "tags": [
        "reset"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "git reset --hard"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "git reset --hard"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "git reset --hard"
        }
      },
      "learning": {
        "whatItDoes": "Throws away ALL local changes and resets to last commit.",
        "whenToUse": "Use this only if you are sure you do not need local changes.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git reset --hard",
            "explanation": "Throws away ALL local changes and resets to last commit."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run git status to see what is blocking it."
          }
        ],
        "warnings": [
          "This can delete files or discard work."
        ]
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "nuclear-git-clean",
      "slug": "nuclear-git-clean",
      "name": "git clean -fd",
      "primaryIntent": "fix",
      "tools": [
        "reset-nuclear"
      ],
      "tags": [
        "reset"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "git clean -fd"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "git clean -fd"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "git clean -fd"
        }
      },
      "learning": {
        "whatItDoes": "Deletes ALL untracked files and folders.",
        "whenToUse": "Use this only if you are told to remove extra files.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "git clean -fd",
            "explanation": "Deletes ALL untracked files and folders."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run git status to confirm what will be removed."
          }
        ],
        "warnings": [
          "This can delete files or discard work."
        ]
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    },
    {
      "id": "nuclear-reinstall",
      "slug": "nuclear-reinstall",
      "name": "Remove-Item -Recurse -Force node_modules; npm install",
      "primaryIntent": "fix",
      "tools": [
        "reset-nuclear"
      ],
      "tags": [
        "reset"
      ],
      "defaultVariantKey": "windows:powershell",
      "variants": {
        "windows:powershell": {
          "platform": "windows",
          "shell": "powershell",
          "command": "Remove-Item -Recurse -Force node_modules; npm install"
        },
        "mac:bash": {
          "platform": "mac",
          "shell": "bash",
          "command": "rm -rf node_modules; npm install"
        },
        "linux:bash": {
          "platform": "linux",
          "shell": "bash",
          "command": "rm -rf node_modules; npm install"
        }
      },
      "learning": {
        "whatItDoes": "Full reset: delete dependencies and reinstall.",
        "whenToUse": "Use this only as a last resort.",
        "examples": [
          {
            "title": "Basic example",
            "snippet": "Remove-Item -Recurse -Force node_modules; npm install",
            "explanation": "Full reset: delete dependencies and reinstall."
          }
        ],
        "commonMistakes": [
          {
            "mistake": "Running this in the wrong folder.",
            "fix": "Run the commands one at a time."
          }
        ],
        "warnings": [
          "This can delete files or discard work."
        ]
      },
      "sources": [],
      "lastReviewed": "2026-02-22"
    }
];

