/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['"Pacifico"', 'cursive'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      spacing:{
        '128': '32rem',
        '160': '40rem',
      },
    },
  },
  plugins: [],
}