# ESLint setup guide

This project uses ESLint with a modern flat config file named `eslint.config.js` and a legacy config file named `.eslintrc`.

The goal is to keep linting simple and useful for a plain JavaScript project without React/JSX parsing.

## 1) What ESLint is

ESLint is a linter for JavaScript. It checks your code for common mistakes, unused variables, bad syntax, and style issues before you run or ship the app.

It helps you catch things like:

- unused variables
- missing semicolons or bad formatting patterns
- unsafe or invalid JavaScript
- code that may fail in the browser or Node

## 2) Why there are two config files

There are two common ways ESLint can be configured:

### A. `eslint.config.js` (flat config)

This is the newer and recommended ESLint config style.

Example structure:

```js
import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
```

What this means:

- `ignores` tells ESLint to skip generated files like `dist` and installed packages
- `js.configs.recommended` loads the standard recommended rules from ESLint
- `files` limits linting to JavaScript files
- `languageOptions` sets JavaScript features and browser/global variables
- `rules` adds custom behavior such as treating unused variables as errors

### B. `.eslintrc` (legacy config)

This is the older config style, still supported by ESLint for compatibility.

Example structure:

```json
{
  "root": true,
  "env": {
    "browser": true,
    "es2022": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}
```

This does the same job in a different format:

- `env` sets the environment (browser, Node, etc.)
- `extends` includes the default ESLint recommended rules
- `parserOptions` tells ESLint what JavaScript syntax to accept
- `rules` defines project-specific checks

## 3) Why we ignore `dist/**`

Your build output folder is usually generated automatically when you run Vite or another bundler.

This folder contains compiled assets, and linting them is usually not useful because:

- they are not handwritten source files
- they often contain minified generated CSS/JS
- they create huge noisy lint errors

So in the config we used:

```js
ignores: ["dist/**", "node_modules/**"];
```

This prevents linting generated output and installed dependencies.

## 4) Why no React/JSX parser is enabled

This project is set up as plain JavaScript, not React with JSX.

That means we do not enable JSX parsing. If we did, ESLint would accept JSX syntax such as:

```jsx
<div className="card">Hello</div>
```

But because this project is not using React JSX syntax, we keep the config simple and focused on regular JavaScript.

## 5) Why `sourceType: "module"` is important

This project uses ES modules, which is common in Vite applications.

This is why the config includes:

```js
sourceType: "module";
```

This allows syntax like:

```js
import something from "./file.js";
export default value;
```

## 6) Why `globals.browser` and `globals.node` are included

JavaScript code may use browser APIs such as `window`, `document`, or `fetch`, and Node APIs such as `process`.

The config includes both so ESLint understands what is valid in your project.

## 7) What the lint command does

The project script is:

```json
"lint": "eslint ."
```

This means:

- ESLint looks through the project root
- it ignores files in `dist` and `node_modules`
- it checks all remaining supported JavaScript files

## 8) What the project currently does well

The current config is a good basic setup because it:

- uses the recommended ESLint defaults
- supports modern JavaScript modules
- ignores generated files
- limits linting to plain JavaScript
- avoids React-specific configuration that you do not need

## 9) When you would add React-specific linting

You would add JSX/React support only if your app actually contains files like:

- `App.jsx`
- `components/Button.jsx`
- `App.tsx` with JSX

Then you would install and configure:

- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `@eslint/js`
- maybe React version and parser settings

But since your setup is plain JavaScript and you do not want JSX or React linting, the current config is the right choice.

## 10) Key lesson

The main idea is this:

- ESLint config is just a rulebook for your project
- flat config and legacy config are two formats for the same idea
- ignore generated folders
- enable the syntaxes and globals your project actually uses
- avoid enabling React/JSX unless the project really uses it

## 11) Useful commands

Run ESLint:

```bash
npm run lint
```

Auto-fix problems when possible:

```bash
npm run lint -- --fix
```

Or:

```bash
npx eslint . --fix
```

## 12) Summary

Your project is configured in a clean and minimal way:

- modern JavaScript modules enabled
- browser + Node globals included
- recommended rules applied
- `dist` ignored
- React/JSX not enabled because it is not being used

This is a good default setup for a simple JavaScript project.
