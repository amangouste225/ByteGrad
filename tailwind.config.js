/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backGround: "url('./src/word_analytics/assets/header-background.jpg')",
      },
      fontFamily: {
        pop: "Poppins",
        rob: "Roboto Mono",
      },
    },
  },
  plugins: [],
};
