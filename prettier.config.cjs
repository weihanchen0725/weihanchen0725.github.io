/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: [
    'prettier-plugin-astro', // .astro formatter
  ],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
