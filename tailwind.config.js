const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: '#000',
      white: '#fff',
      lightGray: '#F8F8F8',
      test: '#2596be'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
