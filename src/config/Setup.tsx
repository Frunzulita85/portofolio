import { Code2, Download, Settings, Terminal } from 'lucide-react';

export const steps = [
  {
    id: 1,
    title: 'System & Font Setup (Windows)',
    icon: <Download className="size-4" />,
    content: [
      {
        type: 'download',
        name: 'Fira-code.zip',
        description: 'Unzip the font archive for ligatures in PyCharm & VS Code',
        href: '/setup/fira-code.zip',
      },
      {
        type: 'instruction',
        text: 'Select all font files, right-click, and click Install (Windows)',
      },
      {
        type: 'instruction',
        text: 'Install Git for Windows, Python 3.12+, and Node.js LTS',
      },
    ],
  },
  {
    id: 2,
    title: 'PyCharm Setup (Python & FastAPI Backend)',
    icon: <Terminal className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Open PyCharm on Windows and set Fira Code (size 15–16) under Settings → Editor → Font',
      },
      {
        type: 'instruction',
        text: 'Configure a dedicated virtual environment (.venv) per FastAPI / Python project',
      },
      {
        type: 'instruction',
        text: 'Enable Ruff / Black formatting on save and configure PostgreSQL data sources in the Database tool window',
      },
    ],
  },
  {
    id: 3,
    title: 'VS Code Extensions (Next.js & TypeScript)',
    icon: <Code2 className="size-4" />,
    content: [
      {
        type: 'download',
        name: 'vsc-extensions.txt',
        description: 'Place this file in your Downloads folder',
        href: '/setup/vsc-extensions.txt',
      },
      {
        type: 'instruction',
        text: 'Open VS Code and launch the Command Palette using the Windows shortcut',
      },
      {
        type: 'shortcut',
        text: 'Ctrl + ⇧ + P',
      },
      {
        type: 'instruction',
        text: 'Install essential extensions: Prettier, ESLint, Tailwind CSS IntelliSense, Python & Ruff',
      },
    ],
  },
  {
    id: 4,
    title: 'VS Code Settings (JSON)',
    icon: <Settings className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Open Command Palette on Windows using the keyboard shortcut',
      },
      {
        type: 'shortcut',
        text: 'Ctrl + ⇧ + P',
      },
      {
        type: 'instruction',
        text: 'Enter the command below and press Enter ⏎',
      },
      {
        type: 'prompt',
        text: 'Preferences: Open Settings (JSON)',
      },
      {
        type: 'instruction',
        text: 'Copy and paste the settings.json configuration below',
      },
    ],
  },
];

export const settingsJson = `{
  "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 15,
  "editor.linkedEditing": true,
  "editor.minimap.enabled": false,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorBlinking": "smooth",
  "editor.stickyScroll.enabled": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.autoSave": "afterDelay",
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "git.autofetch": true,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Night Owl (No Italics)",
  "workbench.startupEditor": "none",
  "breadcrumbs.enabled": false,
  "emmet.triggerExpansionOnTab": true,
  "emmet.useInlineCompletions": true,
  "tailwindCSS.emmetCompletions": true,
  "eslint.run": "onSave",
  "[python]": {
    "editor.defaultFormatter": "charliermarsh.ruff",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}`;