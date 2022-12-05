/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "'General Sans', sans-serif",
        body: "'General Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
