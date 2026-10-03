/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          red: '#c91f1f',
          darkred: '#8b0e0e',
          bg: '#0c0a09',
          surface: '#151312',
          card: '#1c1917',
          border: 'rgba(255, 255, 255, 0.1)',
          subtle: '#a8a29e',
          muted: '#78716c',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      }
    },
  },
  plugins: [],
}
