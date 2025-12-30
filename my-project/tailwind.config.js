/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: "#AFC1BE", // بک‌گروند بالا + Skills
        bgDark: "#3F6E6E", // بک‌گروند About
        primary: "#1F6F6B", // متن اصلی
        accent: "#C7965B", // رنگ نام
        textDark: "#0F2F2E",
        iconBg: "#7F9FA0", // مربع آیکن‌ها
      },
    },
  },
  plugins: [],
};
