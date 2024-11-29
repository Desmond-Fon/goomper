/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E9FFDA",
        secondary: "#A8FBB5",
        yellow: "#FFDD00",
      },
      fontFamily: {
        itim: ["itim"],
        short: ["Short Stack"],
      },
    },
  },
  plugins: [],
};
