<!-- Copilot / AI agent instructions for this repository -->
# Agent Quickstart — `meu-projeto`

Short, actionable notes to help an AI coding agent be productive in this React + Vite codebase.

- **Project type:** Single-page React app scaffolded with Vite. Key files: `index.html`, `src/main.jsx`, `vite.config.js`.
- **Dev commands:** `npm run dev` (starts Vite+HMR), `npm run build`, `npm run preview`, `npm run lint` (uses `eslint.config.js`).

## Architecture & entry points

- The HTML entry is `index.html` which mounts React into `<div id="root">` and loads `src/main.jsx`.
- `src/main.jsx` boots the app and renders the root component(s). Follow the existing pattern:
  - Import components from `src/` or `src/components/` and render them inside `createRoot(...).render(...)`.

## Source layout & conventions

- Components live under `src/components/` and pages/main UI under `src/` (e.g. `App.jsx`, `App2.jsx`).
- Files use `.jsx`. Most modules use default exports (see `App.jsx`, `App2.jsx`), so prefer `export default Component` unless a file explicitly uses named exports.
- Component/file naming: PascalCase for both filenames and component identifiers (e.g. `Botao.jsx` -> `Botao`).
- JSX usage: custom components must be capitalized when used in JSX (`<Botao />`), otherwise React treats them as DOM tags. Examples in repo needing fixes show this mistake (see `src/main.jsx`).

## Assets

- `src/assets/*` should be imported in code: `import logo from '/src/assets/react.svg'` (example in `App.jsx`).
- Files in `public/` are served at root and can be referenced directly like `/vite.svg` in `index.html` or JSX `src`.

## Linting & formatting

- ESLint configuration is in `eslint.config.js`. Run `npm run lint` to surface issues.
- Notable ESLint rule: `no-unused-vars` is configured to ignore identifiers that start with a capital letter (`varsIgnorePattern: '^[A-Z_]'`). This allows unused React component identifiers during development.

## Common issues to watch for (with concrete examples)

- Incorrect component import/usage:
  - Problem: `src/main.jsx` currently renders `<botao />` (lowercase) and doesn't import `Botao` correctly.
  - Fix pattern:
    ```jsx
    // correct import
    import Botao from './components/Botao.jsx'

    // correct usage
    createRoot(...).render(
      <StrictMode>
        <Botao />
        <App2 />
      </StrictMode>
    )
    ```

- Broken/recursive component file (example: `src/components/Botao.jsx`): avoid importing the same symbol and returning invalid JSX. Use a simple default-export component:
  ```jsx
  // src/components/Botao.jsx
  import React from 'react'

  export default function Botao() {
    return <button>Meu Botão</button>
  }
  ```

## Editing & adding code — practical rules

- When adding a component:
  - Create `src/components/ComponentName.jsx` (PascalCase).
  - Export default: `export default function ComponentName() { ... }`.
  - Import with explicit relative path and correct capitalization: `import ComponentName from './components/ComponentName.jsx'`.
- When referencing assets from `src`, import them; for static public assets reference by `/filename`.

## Config & integration points

- Vite config: `vite.config.js` (uses `@vitejs/plugin-react`). Modify here for build/time behavior or add plugins.
- Package lifecycle scripts live in `package.json`: edit scripts there when adding new developer tasks.

## What this file does not cover

- There are no unit tests or CI workflows in the repo to reference. If you add CI changes, document the commands and expectations here.

## When in doubt

- Run `npm run dev` locally to reproduce runtime problems with HMR and console errors.
- Check ESLint with `npm run lint` before proposing code style changes.

If any of these examples are unclear or you'd like the file to include expanded CI or PR guidance, tell me which areas to expand and I'll iterate.
