/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile-sm': '370px',
      'mobile-md': '390px',
      'mobile-lg': "400px",
      'sm': '535px',
      'md': '700px',
      'lg': '800px',
      'xl': '900px',
      '2xl': '1000px',
      '3xl': '1200px',
    },
    extend: {},
  },
  plugins: [],
}

