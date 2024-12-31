/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}