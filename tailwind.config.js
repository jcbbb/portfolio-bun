/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono"]
      },
      colors: {
        "gruvbox-black": {
          DEFAULT: "var(--gruvbox-black)"
        },
        "gruvbox-green": {
          DEFAULT: "var(--gruvbox-green)"
        },
        "gruvbox-aqua": {
          DEFAULT: "var(--gruvbox-aqua)",
          500: "var(--gruvbox-aqualight)",
        },
        "gruvbox-purple": {
          DEFAULT: "var(--gruvbox-purple)"
        },
        "gruvbox-fg": {
          DEFAULT: "var(--gruvbox-fg)",
          700: "var(--gruvbox-fg-darker)",
        },
      }
    },
  },
  plugins: [],
}
