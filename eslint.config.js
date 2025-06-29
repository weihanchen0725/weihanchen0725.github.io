import js from '@eslint/js'; // core “eslint:recommended”
import astro from 'eslint-plugin-astro';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import solid from 'eslint-plugin-solid';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended, // basic JS rules
  ...astro.configs.flat.recommended, // HTML/JSX/template linting for .astro

  // ---------- Astro files ----------
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astro.parser, // parses <script> & front-matter
      parserOptions: { parser: tsParser, extraFileExtensions: ['.astro'] },
    },
    plugins: { astro },
    rules: {
      'astro/no-set-html-directive': 'error', // example extra rule
    },
  },

  // ---------- TypeScript, React & Solid ----------
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: './tsconfig.json' },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react,
      'react-hooks': reactHooks,
      solid,
    },
    rules: {
      // Add your favourites here 👇
      'react/jsx-uses-react': 'off', // React 17+ JSX transform
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'solid/reactivity': 'warn',
    },
  },
];
