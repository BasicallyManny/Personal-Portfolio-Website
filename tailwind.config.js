/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#e6f1ff',
            100: '#b3d1ff',
            200: '#80b1ff',
            300: '#4d91ff',
            400: '#1a71ff',
            500: '#0055e6',
            600: '#0044b3',
            700: '#003380',
            800: '#00224d',
            900: '#00111a',
          },
          secondary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          background: '#0f172a',
          surface: '#1e293b',
          accent: '#38bdf8',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Fira Code', 'monospace'],
        },
      },
    },
    plugins: [],
  }