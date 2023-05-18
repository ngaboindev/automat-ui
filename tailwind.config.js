/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Saira', ...fontFamily.sans],
      },
      colors: {
        primary: '#009FB1',
        secondary: '#4CBE1F',
        neutral: '#3E4C5A',
        tertiary: '#121520',
        'tertiary-100': '#131520',
        accent: '#142132',
      },
    },
  },
};
