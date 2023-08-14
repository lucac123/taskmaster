/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark': '#4D8097',
      'background': '#88BACD',
      'mid': '#6FACC8',
      'light': '#E7BDD1',
      'white': '#FFFFFF',
      'font-mid': '#F9DBE9',
      'font-dark': '#F1D1E0',
    },
    extend: {
    },
  },
  plugins: [],
}
