/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}","./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '7/8':"90%"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
