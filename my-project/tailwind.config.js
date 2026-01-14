/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "#AFC1BE",
        bgDark: "#3F6E6E",
        primary: "#1F6F6B",
        accent: "#C7965B",
        textDark: "#0F2F2E",
        iconBg: "#7F9FA0",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
