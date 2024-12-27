/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.5': '0.5px',
        '1': '1px',
        '1.5': '1.5px',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'open_sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'custom_brown': '#491603',
        'custom_burgundy': '#AE360D',
        'custom_grey': '#C0BAA7',
        'custom_ivory': '#ECEADC',
        'custom_white': '#F7F7E9'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

