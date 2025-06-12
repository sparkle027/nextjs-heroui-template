/** @type {import('tailwindcss').Config} */

import { heroui } from '@heroui/react'

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8a2be2',
        'primary-hover': '#7a1cd1',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        content: 'var(--background-content)',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
}
