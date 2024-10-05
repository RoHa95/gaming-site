/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/js/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
      backgroundImage: {
        'article-pattern': "url('/assets/images/article1.png')",
    }
  },
  
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
}};
