/** Standalone build config for the static CSS — content globs point at the PHP files themselves. */
const path = require('path');
const root = __dirname;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(root, '**/*.php'),
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        paper: '#FAF8F4',
        navy: {
          800: '#1E2A52',
          900: '#141E3C',
          950: '#0C1226',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
