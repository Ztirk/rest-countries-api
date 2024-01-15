/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-blue-element": "#2b3945",
      "very-dark-blue(dark-mode-background)": "#202c37",
      "very-dark-blue(light-mode-text)": "#111517",
      "dark-gray(light-mode-text)": "#858585",
      "very-light-gray(light-mode-background)": "#fafafa",
      "white(dark-mode-text&light-mode-element)": "	#ffffff",
    },
    fontSize: {
      "homepage-items": "14px",
      "detail-page": "16px",
    },
    fontWeight: {
      300: "300",
      600: "600",
      800: "800",
    },
  },
  plugins: [],
};
