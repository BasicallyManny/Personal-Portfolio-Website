/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [],
  extend: {
    utilities: {
      ".image-render-pixel": {
        imageRendering: "pixelated",
      },
    },
  },
};
