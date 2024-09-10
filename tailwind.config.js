/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        custom2: "2px 10px 81px -8px #00000024;",
      },
      maxWidth: {
        xl: "1920px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
