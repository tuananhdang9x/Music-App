/** @type {import('tailwindcss').Config} */
module.exports = {
  model: "jit",
  purge: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        250: '250px',

      }
    },
  },
  plugins: [],
}
