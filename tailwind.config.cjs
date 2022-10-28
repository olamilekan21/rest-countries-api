/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "hsl(0, 0%, 98%)",
        dark: "hsl(207, 26%, 17%)",
        "dark-el": "hsl(209, 23%, 22%)",
        "dark-text": "hsl(200, 15%, 8%)",
        "input-text": "hsl(0, 0%, 52%)"
      },
      fontFamily: {
        'nunito-sans': ["Nunito Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
};
