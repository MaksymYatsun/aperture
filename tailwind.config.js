/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        popins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
