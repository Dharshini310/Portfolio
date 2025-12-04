/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // all your React files
  ],
  darkMode: 'class', // <-- THIS ENABLES DARK MODE USING 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};
