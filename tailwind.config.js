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
        'green-700' : '#03A26E'
      },
      height: {
        'half-screen': '50vh'
      }
    },
  },
  plugins: [],
}
