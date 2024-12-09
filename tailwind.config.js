/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "1px -3px 52px -5px rgba(0, 0, 0, 0.77)", // Add your custom shadow
      },
    },
  },
  plugins: [],
};
