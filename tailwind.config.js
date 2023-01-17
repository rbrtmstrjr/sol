/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
],
  theme: {
    extend: {
      fontFamily: {
        custom: "'Kelly Slab', cursive",
      },
      colors: {
        'primary': '#22223b',
        'secondary': '#f2e9e4',
        'tertiary': '#c9ada7',
        'shades': '#4a4e69'
      }
    },
  },
  plugins: [],
}
