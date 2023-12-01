const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#221A41',
        accent: '#E6D01E',
        pink: '#C912E6',
        purple: '#7E07E6',
        green: '#86E61E',
      },
    },
  },
  plugins: [],
};
