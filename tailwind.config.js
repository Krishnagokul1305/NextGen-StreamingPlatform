/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#E57B78",
        "secondary-hover": "#d96864",
        input: "#272727",
        primary:"#191919"
      },
    },
  },
  plugins: [],
};
