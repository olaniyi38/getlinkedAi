/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx}" ],
  theme: {
    extend: {

      colors: {
        darkPurple: "#150E28",
        lightPurple: "#903AFF",
        pink: "#D434FE",
        lightPink: "#FF26B9"
      },
      fontFamily: {
        clash: [ "clash", "sans-serif" ],
        montserrat: [ "montserrat", "sans-serif" ]
      },
      screens: {
        xs: "375px"
      }
    },
  },
  plugins: [],
}