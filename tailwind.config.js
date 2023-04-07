/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: '#c7eaf0',
        green: '#6B8C85',
        gray: '#777777',
        light_gray: '#DFDFDF',
        light_pink: '#F5D1D1',
        black: '#000000'
      },
    },
  },
  plugins: [],
})
