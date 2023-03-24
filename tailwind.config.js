/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      'main': '#E7E7DB',
      'secondary' : '#9C9C84',
      'white': '#e4e4e4',
      'buttons' : '#88759C',
      'buttonsHover' : '#ccb2e7'
    },
    fontSize:{
      base:['16px', '26px'],
      lg: ['32px', '42px'],
      xl: ['64px', '74px'],
    }
  },
  plugins: [],
}
