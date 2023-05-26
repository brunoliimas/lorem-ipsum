/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    letterSpacing: {
      tight: '-.015em'
    },
    extend: {
      colors:{
        'green-700' : '#03A26E',
        'green-800' : '#02704C'
      },
      height: {
        'half-screen': '50vh'
      }
    },
  },
  plugins: [],
}
