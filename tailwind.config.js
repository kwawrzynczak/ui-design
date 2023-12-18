const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#bb2e61',
        accent: '#E6D01E',
        pink: '#C912E6',
        purple: '#7E07E6',
        green: '#86E61E',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
