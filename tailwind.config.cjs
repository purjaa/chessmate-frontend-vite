/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './main.tsx',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        ocean: {
          200: '#ecf7f9',
          300: '#ddeef2',
          400: '#8ec7d4',
          500: '#008eaa',
          600: '#036d82',
          700: '#004755'
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'sans-serif']
      },
    },
  },
}
