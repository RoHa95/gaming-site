/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/js/*.js"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        sans:["vazir"]
      }
    },
  },
  plugins: [],
};
