/** @type {import('tailwindcss').Config} */

export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate:{
        "30": "30deg",
        "60": "60deg",
        "120": "120deg",
        "150": "150deg",
      }
    },
  },
  plugins: [],
}

