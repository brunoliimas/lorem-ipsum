/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    letterSpacing: {
      tight: '-.015em'
    },
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '22px'],
        lg: ['18px', '26px'],
        xl: ['20px', '30px'],
      },
      colors: {
        'green-700': '#03A26E',
        'green-800': '#02704C'
      },
      height: {
        'half-screen': '50vh'
      }
    },
  },
  plugins: [],
}
