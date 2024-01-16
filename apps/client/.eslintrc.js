const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ['@repo/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  settings: {
    tailwindcss: {
      config: path.join(__dirname, './tailwind.config.ts'),
    },
  },
};

module.exports = config;
