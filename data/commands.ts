import type { Command } from './schema';
import { generatedCommands } from './commands.generated';

const baseCommands: Command[] = [
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
      "whatItDoes": "Installs dependencies from package.json into node_modules.",
      "whenToUse": "Use this after cloning the repo or if node_modules is missing.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm install",
          "explanation": "Installs dependencies from package.json into node_modules."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "ENOENT: no such file or directory, open 'package.json'",
          "fix": "Run this in the project root."
        },
        {
          "mistake": "ERESOLVE unable to resolve dependency tree",
          "fix": "Use the project’s required Node version."
        },
        {
          "mistake": "npm ERR! code EACCES",
          "fix": "Fix permissions or use a clean terminal session."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-install/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
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
      "whatItDoes": "Starts the local dev server with hot reload.",
      "whenToUse": "Use this while developing to preview changes locally.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm run dev",
          "explanation": "Starts the local dev server with hot reload."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing script: \"dev\"",
          "fix": "Check package.json for a dev script."
        },
        {
          "mistake": "EADDRINUSE: address already in use",
          "fix": "Stop the other server or use a different port."
        },
        {
          "mistake": "'next' is not recognized / command not found",
          "fix": "Run npm install first."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v8/commands/npm-run-script/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v11/using-npm/scripts/"
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
      "whatItDoes": "Opens your local site in the browser at port 3000.",
      "whenToUse": "Use this after the dev server says it is ready.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "http://localhost:3000",
          "explanation": "Opens your local site in the browser at port 3000."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "ERR_CONNECTION_REFUSED",
          "fix": "Start the dev server and confirm the port."
        },
        {
          "mistake": "This site can’t be reached",
          "fix": "Keep the dev server running in another terminal."
        },
        {
          "mistake": "Port mismatch (e.g. 3001 instead of 3000)",
          "fix": "Use the exact port printed in the terminal."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://mdn2.netlify.app/en-us/docs/web/http/basics_of_http/identifying_resources_on_the_web/"
      },
      {
        "label": "Reference",
        "url": "https://mdn2.netlify.app/en-us/docs/web/http/resources_and_uris/"
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
      "whatItDoes": "Builds the app for production output.",
      "whenToUse": "Use this before deploying or to catch build errors.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm run build",
          "explanation": "Builds the app for production output."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing script: \"build\"",
          "fix": "Add a build script in package.json."
        },
        {
          "mistake": "Module not found: Can't resolve",
          "fix": "Run npm install and check import paths."
        },
        {
          "mistake": "Type error or ESLint error during build",
          "fix": "Fix the first error shown and rebuild."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v8/commands/npm-run-script/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v11/using-npm/scripts/"
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
      "whatItDoes": "Starts the production server from a completed build.",
      "whenToUse": "Use this only after npm run build succeeds.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm start",
          "explanation": "Starts the production server from a completed build."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Error: Could not find a production build in the '.next' directory",
          "fix": "Run npm run build first."
        },
        {
          "mistake": "EADDRINUSE: address already in use",
          "fix": "Stop the process using that port or change the port."
        },
        {
          "mistake": "Missing script: \"start\"",
          "fix": "Add a start script in package.json."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-start/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v11/using-npm/scripts/"
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
      "whatItDoes": "Runs the project’s lint checks.",
      "whenToUse": "Use this before committing or when CI fails.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm run lint",
          "explanation": "Runs the project’s lint checks."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing script: \"lint\"",
          "fix": "Add a lint script in package.json."
        },
        {
          "mistake": "ESLint couldn't find a configuration file",
          "fix": "Ensure eslint config and deps are installed."
        },
        {
          "mistake": "Lint errors found",
          "fix": "Fix the reported files and rerun."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v8/commands/npm-run-script/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v11/using-npm/scripts/"
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
      "whatItDoes": "Prints the installed Node.js version.",
      "whenToUse": "Use this when a tool asks for your Node version.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "node -v",
          "explanation": "Prints the installed Node.js version."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "'node' is not recognized as an internal or external command",
          "fix": "Install Node.js and reopen the terminal."
        },
        {
          "mistake": "Version is too old for the project",
          "fix": "Install the required Node version and retry."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://nodejs.org/api/cli.html"
      },
      {
        "label": "Reference",
        "url": "https://nodejs.org/api/process.html"
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
      "whatItDoes": "Prints the installed npm version.",
      "whenToUse": "Use this when npm behaves oddly or you need to confirm version.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm -v",
          "explanation": "Prints the installed npm version."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "'npm' is not recognized as an internal or external command",
          "fix": "Install Node.js to get npm."
        },
        {
          "mistake": "npm version is too old",
          "fix": "Update Node.js or npm per project instructions."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v7/commands/npm"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
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
      "whatItDoes": "Installs dependencies from package.json into node_modules.",
      "whenToUse": "Use this after cloning the repo or if node_modules is missing.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm install",
          "explanation": "Installs dependencies from package.json into node_modules."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "ENOENT: no such file or directory, open 'package.json'",
          "fix": "Run this in the project root."
        },
        {
          "mistake": "ERESOLVE unable to resolve dependency tree",
          "fix": "Use the project’s required Node version."
        },
        {
          "mistake": "npm ERR! code EACCES",
          "fix": "Fix permissions or use a clean terminal session."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-install/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
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
      "whatItDoes": "Runs npm by bypassing PowerShell script policy for this session.",
      "whenToUse": "Use this if you see 'running scripts is disabled on this system'.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "powershell -ExecutionPolicy Bypass -Command \"npm run dev\"",
          "explanation": "Runs npm by bypassing PowerShell script policy for this session."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "running scripts is disabled on this system",
          "fix": "Use the exact bypass command shown."
        },
        {
          "mistake": "UnauthorizedAccess: (:) [], PSSecurityException",
          "fix": "Open a new PowerShell session and retry."
        },
        {
          "mistake": "'npm' is not recognized",
          "fix": "Install Node.js and reopen PowerShell."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.5"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.5"
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
      "whatItDoes": "Finds the PID using port 3000.",
      "whenToUse": "Use this if the dev server reports EADDRINUSE.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "netstat -ano | findstr :3000",
          "explanation": "Finds the PID using port 3000."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "INFO: No connections could be found",
          "fix": "Nothing is using port 3000 right now."
        },
        {
          "mistake": "Access is denied",
          "fix": "Run PowerShell as Administrator."
        },
        {
          "mistake": "findstr :3000 returns nothing",
          "fix": "Start the app or check the correct port."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/nb-no/windows-server/administration/windows-commands/netstat"
      },
      {
        "label": "Reference",
        "url": "https://man7.org/linux/man-pages/man8/lsof.8.html"
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
      "whatItDoes": "Force-stops the process using a PID.",
      "whenToUse": "Use this after identifying the PID with netstat.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "taskkill /PID <PID> /F",
          "explanation": "Force-stops the process using a PID."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "ERROR: The process \"<PID>\" not found",
          "fix": "Double-check the PID and try again."
        },
        {
          "mistake": "Access is denied",
          "fix": "Run PowerShell as Administrator."
        },
        {
          "mistake": "The PID changed",
          "fix": "Re-run netstat to get the current PID."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/taskkill"
      },
      {
        "label": "Reference",
        "url": "https://man7.org/linux/man-pages/man1/kill.1.html"
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
      "whatItDoes": "Deletes the .next build cache so Next.js can rebuild cleanly.",
      "whenToUse": "Use this if stale builds or weird build errors persist.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Remove-Item -Recurse -Force .next",
          "explanation": "Deletes the .next build cache so Next.js can rebuild cleanly."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Access is denied",
          "fix": "Stop the dev server, then retry."
        },
        {
          "mistake": "Cannot find path '.next'",
          "fix": "You may not have built yet."
        },
        {
          "mistake": "The process cannot access the file because it is being used",
          "fix": "Close the running server first."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.5"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem"
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
      "whatItDoes": "Deletes node_modules to force a clean install.",
      "whenToUse": "Use this if installs are broken or dependencies seem corrupt.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Remove-Item -Recurse -Force node_modules",
          "explanation": "Deletes node_modules to force a clean install."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Access is denied",
          "fix": "Close editors/terminals using node_modules."
        },
        {
          "mistake": "The process cannot access the file because it is being used",
          "fix": "Stop the dev server first."
        },
        {
          "mistake": "Cannot find path",
          "fix": "Run in the project root."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.5"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem"
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
      "whatItDoes": "Deletes package-lock.json to allow a fresh lockfile.",
      "whenToUse": "Use this only if told to regenerate the lockfile.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Remove-Item package-lock.json",
          "explanation": "Deletes package-lock.json to allow a fresh lockfile."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Access is denied",
          "fix": "Close editors holding the file."
        },
        {
          "mistake": "Cannot find path 'package-lock.json'",
          "fix": "Run in the project root."
        },
        {
          "mistake": "Lockfile keeps coming back",
          "fix": "Run npm install to regenerate it."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.5"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem"
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
      "whatItDoes": "Installs dependencies from package.json into node_modules.",
      "whenToUse": "Use this after cloning the repo or if node_modules is missing.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm install",
          "explanation": "Installs dependencies from package.json into node_modules."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "ENOENT: no such file or directory, open 'package.json'",
          "fix": "Run this in the project root."
        },
        {
          "mistake": "ERESOLVE unable to resolve dependency tree",
          "fix": "Use the project’s required Node version."
        },
        {
          "mistake": "npm ERR! code EACCES",
          "fix": "Fix permissions or use a clean terminal session."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-install/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
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
      "whatItDoes": "Clears npm's cache (requires --force).",
      "whenToUse": "Use this if npm reports cache corruption.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm cache clean --force",
          "explanation": "Clears npm's cache (requires --force)."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "npm ERR! code EACCES",
          "fix": "Fix permissions or run in a clean terminal."
        },
        {
          "mistake": "Forgetting --force",
          "fix": "Add --force as shown; clean is restricted."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-cache/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
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
      "whatItDoes": "Shows staged, modified, and untracked files.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git status",
          "explanation": "Shows staged, modified, and untracked files."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
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
      "whatItDoes": "Fetches and merges remote changes into your current branch.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git pull",
          "explanation": "Fetches and merges remote changes into your current branch."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
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
      "whatItDoes": "Stages all changes in the repo for the next commit.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git add -A",
          "explanation": "Stages all changes in the repo for the next commit."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-add/2.48.0.html"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/saving-changes"
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
      "whatItDoes": "Creates a commit from staged changes with a message.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git commit -m \"message\"",
          "explanation": "Creates a commit from staged changes with a message."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-commit.html"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/saving-changes/git-commit"
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
      "whatItDoes": "Sends your commits to the remote repository.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git push",
          "explanation": "Sends your commits to the remote repository."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-push.html"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/syncing/git-push"
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
      "whatItDoes": "Shows recent commits in the current branch.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git log --oneline -5",
          "explanation": "Shows recent commits in the current branch."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-log/2.0.5.html"
      },
      {
        "label": "Reference",
        "url": "https://www.kernel.org/pub/software/scm/git/docs/git-log.html"
      }
    ],
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
      "whatItDoes": "Shows unstaged changes in your working tree.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git diff",
          "explanation": "Shows unstaged changes in your working tree."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-diff"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/saving-changes/git-diff"
      }
    ],
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
      "whatItDoes": "Unstages files without deleting your changes.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git restore --staged .",
          "explanation": "Unstages files without deleting your changes."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-restore.html"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/undoing-changes"
      }
    ],
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
      "whatItDoes": "Temporarily saves uncommitted changes.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git stash -u",
          "explanation": "Temporarily saves uncommitted changes."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-stash/2.7.6.html"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/git-stash/"
      }
    ],
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
      "whatItDoes": "Re-applies the last stashed changes.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git stash pop",
          "explanation": "Re-applies the last stashed changes."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-stash/2.7.6.html"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/git-stash/"
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
      "whatItDoes": "Starts Prisma Studio to browse and edit local data.",
      "whenToUse": "Use this when you want a visual view of your database.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma studio",
          "explanation": "Starts Prisma Studio to browse and edit local data."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.prisma.io/docs/cli/studio"
      },
      {
        "label": "Reference",
        "url": "https://docs.prisma.io/docs/studio"
      }
    ],
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
      "whatItDoes": "Creates and applies a migration in development.",
      "whenToUse": "Use this after changing schema.prisma in dev.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma migrate dev",
          "explanation": "Creates and applies a migration in development."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.prisma.io/docs/cli/migrate"
      },
      {
        "label": "Reference",
        "url": "https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production"
      }
    ],
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
      "whatItDoes": "Generates Prisma Client from your schema.",
      "whenToUse": "Use this after changing schema.prisma.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma generate",
          "explanation": "Generates Prisma Client from your schema."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.prisma.io/docs/cli/generate"
      },
      {
        "label": "Reference",
        "url": "https://docs.prisma.io/docs/orm/reference/prisma-cli-reference"
      }
    ],
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
      "whatItDoes": "Pushes schema changes to the database without migrations.",
      "whenToUse": "Use this for prototypes or local dev without migration history.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma db push",
          "explanation": "Pushes schema changes to the database without migrations."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://www.prisma.io/docs/cli/db/push"
      },
      {
        "label": "Reference",
        "url": "https://docs.prisma.io/docs/orm/prisma-migrate/workflows/prototyping-your-schema"
      }
    ],
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
      "whatItDoes": "Formats the Prisma schema file.",
      "whenToUse": "Use this before committing schema changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma format",
          "explanation": "Formats the Prisma schema file."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.prisma.io/docs/orm/reference/prisma-cli-reference"
      },
      {
        "label": "Reference",
        "url": "https://docs.prisma.io/docs/cli"
      }
    ],
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
      "whatItDoes": "Validates the Prisma schema without formatting.",
      "whenToUse": "Use this to check schema correctness in CI.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma validate",
          "explanation": "Validates the Prisma schema without formatting."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.prisma.io/docs/orm/reference/prisma-cli-reference"
      },
      {
        "label": "Reference",
        "url": "https://docs.prisma.io/docs/cli"
      }
    ],
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
      "whatItDoes": "Finds the schema.prisma file in the repo.",
      "whenToUse": "Use this if you cannot find your Prisma schema file.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Get-ChildItem -Recurse -Filter schema.prisma",
          "explanation": "Finds the schema.prisma file in the repo."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.prisma.io/docs/orm/reference/prisma-schema-reference"
      },
      {
        "label": "Reference",
        "url": "https://docs.prisma.io/docs/v6/orm/prisma-schema/overview"
      }
    ],
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
      "whatItDoes": "Shows migration status for the database.",
      "whenToUse": "Use this to see if migrations are pending.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma migrate status",
          "explanation": "Shows migration status for the database."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.prisma.io/docs/cli/migrate"
      },
      {
        "label": "Reference",
        "url": "https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production"
      }
    ],
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
      "whatItDoes": "Introspects the database and updates schema.prisma.",
      "whenToUse": "Use this when you want schema from an existing DB.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma db pull",
          "explanation": "Introspects the database and updates schema.prisma."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.prisma.io/docs/cli/db/pull"
      },
      {
        "label": "Reference",
        "url": "https://docs.prisma.io/docs/orm/reference/prisma-cli-reference"
      }
    ],
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
      "whatItDoes": "Runs the database seed script.",
      "whenToUse": "Use this after setting up a fresh database.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npx prisma db seed",
          "explanation": "Runs the database seed script."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "P1001: Can't reach database server",
          "fix": "Start the DB and check DATABASE_URL."
        },
        {
          "mistake": "Schema file not found",
          "fix": "Ensure prisma/schema.prisma exists."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.prisma.io/docs/cli/db"
      },
      {
        "label": "Reference",
        "url": "https://docs.prisma.io/docs/cli"
      }
    ],
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
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v7/commands/npm"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
      }
    ],
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
      "whatItDoes": "Prints the installed npm version.",
      "whenToUse": "Use this when npm behaves oddly or you need to confirm version.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm -p \"process.versions.npm\"",
          "explanation": "Prints the installed npm version."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "'npm' is not recognized as an internal or external command",
          "fix": "Install Node.js to get npm."
        },
        {
          "mistake": "npm version is too old",
          "fix": "Update Node.js or npm per project instructions."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v7/commands/npm"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
      }
    ],
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
      "whatItDoes": "Shows where the node executable is on PATH.",
      "whenToUse": "Use this to confirm which Node is being used.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "where node",
          "explanation": "Shows where the node executable is on PATH."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "INFO: Could not find files for the given pattern(s).",
          "fix": "Install Node.js or fix PATH."
        },
        {
          "mistake": "Multiple paths returned",
          "fix": "Remove older Node installs from PATH."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/Windows-server/administration/windows-commands/where"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/gl-es/windows-server/administration/windows-commands/windows-commands"
      }
    ],
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
      "whatItDoes": "Starts the local dev server with hot reload.",
      "whenToUse": "Use this while developing to preview changes locally.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm run dev",
          "explanation": "Starts the local dev server with hot reload."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Missing script: \"dev\"",
          "fix": "Check package.json for a dev script."
        },
        {
          "mistake": "EADDRINUSE: address already in use",
          "fix": "Stop the other server or use a different port."
        },
        {
          "mistake": "'next' is not recognized / command not found",
          "fix": "Run npm install first."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v8/commands/npm-run-script/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v11/using-npm/scripts/"
      }
    ],
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
      "whatItDoes": "Finds the PID using port 3000.",
      "whenToUse": "Use this if the dev server reports EADDRINUSE.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "netstat -ano | findstr :3000",
          "explanation": "Finds the PID using port 3000."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "INFO: No connections could be found",
          "fix": "Nothing is using port 3000 right now."
        },
        {
          "mistake": "Access is denied",
          "fix": "Run PowerShell as Administrator."
        },
        {
          "mistake": "findstr :3000 returns nothing",
          "fix": "Start the app or check the correct port."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/nb-no/windows-server/administration/windows-commands/netstat"
      },
      {
        "label": "Reference",
        "url": "https://man7.org/linux/man-pages/man8/lsof.8.html"
      }
    ],
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
      "whatItDoes": "Shows where esbuild is installed in node_modules.",
      "whenToUse": "Use this to verify esbuild is installed.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "node -p \"require.resolve('esbuild')\"",
          "explanation": "Shows where esbuild is installed in node_modules."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Error: Cannot find module 'esbuild'",
          "fix": "Run npm install."
        },
        {
          "mistake": "MODULE_NOT_FOUND",
          "fix": "Ensure you are in the project root."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://nodejs.org/api/modules.html"
      },
      {
        "label": "Reference",
        "url": "https://nodejs.org/download/release/latest-v9.x/docs/api/modules.html"
      }
    ],
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
      "whatItDoes": "Lists the installed esbuild version and dependency tree.",
      "whenToUse": "Use this to confirm which version is installed.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm ls esbuild",
          "explanation": "Lists the installed esbuild version and dependency tree."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "UNMET DEPENDENCY esbuild",
          "fix": "Run npm install."
        },
        {
          "mistake": "missing: esbuild",
          "fix": "Add esbuild or reinstall dependencies."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v9/commands/npm-ls"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
      }
    ],
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
      "whatItDoes": "Lists files in the current folder.",
      "whenToUse": "Use this to confirm you are in the right directory.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Get-ChildItem",
          "explanation": "Lists files in the current folder."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Access is denied",
          "fix": "Choose a folder you can read."
        },
        {
          "mistake": "No output",
          "fix": "The folder may be empty."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.5"
      }
    ],
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
      "whatItDoes": "Shows staged, modified, and untracked files.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git status",
          "explanation": "Shows staged, modified, and untracked files."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
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
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git fetch",
          "explanation": "Downloads remote updates without changing your files."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-fetch"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/syncing/git-fetch"
      }
    ],
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
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git pull",
          "explanation": "Updates your local files with the latest remote changes."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
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
      "whatItDoes": "Installs dependencies from package.json into node_modules.",
      "whenToUse": "Use this after cloning the repo or if node_modules is missing.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm install",
          "explanation": "Installs dependencies from package.json into node_modules."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "ENOENT: no such file or directory, open 'package.json'",
          "fix": "Run this in the project root."
        },
        {
          "mistake": "ERESOLVE unable to resolve dependency tree",
          "fix": "Use the project’s required Node version."
        },
        {
          "mistake": "npm ERR! code EACCES",
          "fix": "Fix permissions or use a clean terminal session."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-install/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
      }
    ],
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
      "whatItDoes": "Deletes the .next build cache so Next.js can rebuild cleanly.",
      "whenToUse": "Use this if stale builds or weird build errors persist.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Remove-Item -Recurse -Force .next",
          "explanation": "Deletes the .next build cache so Next.js can rebuild cleanly."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Access is denied",
          "fix": "Stop the dev server, then retry."
        },
        {
          "mistake": "Cannot find path '.next'",
          "fix": "You may not have built yet."
        },
        {
          "mistake": "The process cannot access the file because it is being used",
          "fix": "Close the running server first."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.5"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem"
      }
    ],
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
      "whatItDoes": "Deletes node_modules to force a clean install.",
      "whenToUse": "Use this if installs are broken or dependencies seem corrupt.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Get-ChildItem node_modules",
          "explanation": "Deletes node_modules to force a clean install."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Access is denied",
          "fix": "Close editors/terminals using node_modules."
        },
        {
          "mistake": "The process cannot access the file because it is being used",
          "fix": "Stop the dev server first."
        },
        {
          "mistake": "Cannot find path",
          "fix": "Run in the project root."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.5"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem"
      }
    ],
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
      "whatItDoes": "Clears npm's cache (requires --force).",
      "whenToUse": "Use this if npm reports cache corruption.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "npm cache clean --force",
          "explanation": "Clears npm's cache (requires --force)."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "npm ERR! code EACCES",
          "fix": "Fix permissions or run in a clean terminal."
        },
        {
          "mistake": "Forgetting --force",
          "fix": "Add --force as shown; clean is restricted."
        }
      ],
      "warnings": []
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-cache/"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
      }
    ],
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
      "whatItDoes": "Deletes node_modules to force a clean install.",
      "whenToUse": "Use this if installs are broken or dependencies seem corrupt.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Remove-Item -Recurse -Force node_modules",
          "explanation": "Deletes node_modules to force a clean install."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Access is denied",
          "fix": "Close editors/terminals using node_modules."
        },
        {
          "mistake": "The process cannot access the file because it is being used",
          "fix": "Stop the dev server first."
        },
        {
          "mistake": "Cannot find path",
          "fix": "Run in the project root."
        }
      ],
      "warnings": [
        "This can delete files or discard work."
      ]
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.5"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem"
      }
    ],
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
      "whatItDoes": "Deletes the .next build cache so Next.js can rebuild cleanly.",
      "whenToUse": "Use this if stale builds or weird build errors persist.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Remove-Item -Recurse -Force .next",
          "explanation": "Deletes the .next build cache so Next.js can rebuild cleanly."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Access is denied",
          "fix": "Stop the dev server, then retry."
        },
        {
          "mistake": "Cannot find path '.next'",
          "fix": "You may not have built yet."
        },
        {
          "mistake": "The process cannot access the file because it is being used",
          "fix": "Close the running server first."
        }
      ],
      "warnings": [
        "This can delete files or discard work."
      ]
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.5"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem"
      }
    ],
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
      "whatItDoes": "Deletes package-lock.json to allow a fresh lockfile.",
      "whenToUse": "Use this only if told to regenerate the lockfile.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "Remove-Item package-lock.json",
          "explanation": "Deletes package-lock.json to allow a fresh lockfile."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "Access is denied",
          "fix": "Close editors holding the file."
        },
        {
          "mistake": "Cannot find path 'package-lock.json'",
          "fix": "Run in the project root."
        },
        {
          "mistake": "Lockfile keeps coming back",
          "fix": "Run npm install to regenerate it."
        }
      ],
      "warnings": [
        "This can delete files or discard work."
      ]
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.5"
      },
      {
        "label": "Reference",
        "url": "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem"
      }
    ],
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
      "whatItDoes": "Throws away all local changes and resets to the last commit.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git reset --hard",
          "explanation": "Throws away all local changes and resets to the last commit."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": [
        "This can delete files or discard work."
      ]
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-reset.html"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/undoing-changes"
      }
    ],
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
      "whatItDoes": "Deletes all untracked files and folders.",
      "whenToUse": "Use this when working with Git history or syncing changes.",
      "examples": [
        {
          "title": "Basic example",
          "snippet": "git clean -fd",
          "explanation": "Deletes all untracked files and folders."
        }
      ],
      "commonMistakes": [
        {
          "mistake": "fatal: not a git repository",
          "fix": "Run inside a git repo."
        },
        {
          "mistake": "No output or no changes",
          "fix": "You may already be up to date or have nothing to change."
        }
      ],
      "warnings": [
        "This can delete files or discard work."
      ]
    },
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://git-scm.com/docs/git-clean.html"
      },
      {
        "label": "Reference",
        "url": "https://www.atlassian.com/git/tutorials/undoing-changes"
      }
    ],
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
    "sources": [
      {
        "label": "Official Docs",
        "url": "https://docs.npmjs.com/cli/v7/commands/npm"
      },
      {
        "label": "Reference",
        "url": "https://docs.npmjs.com/cli/v10/commands"
      }
    ],
    "lastReviewed": "2026-02-22"
  }
];

function mergeCommands(
  base: Command[],
  generated: Command[]
): Command[] {
  const map = new Map<string, Command>();
  generated.forEach((command) => map.set(command.id, command));
  base.forEach((command) => map.set(command.id, command));

  const merged: Command[] = [];
  const seen = new Set<string>();

  base.forEach((command) => {
    const item = map.get(command.id);
    if (item && !seen.has(item.id)) {
      merged.push(item);
      seen.add(item.id);
    }
  });

  generated.forEach((command) => {
    if (!seen.has(command.id)) {
      merged.push(command);
      seen.add(command.id);
    }
  });

  return merged;
}

export const defaultCommands: Command[] = mergeCommands(
  baseCommands,
  generatedCommands
);
