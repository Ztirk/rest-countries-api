/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-blue-element": "",
      "very-dark-blue(dark-mode-background)": "",
      "very-dark-blue(light-mode-text)": "",
      "dark-gray(light-mode-text)": "",
      "very-light-gray(light-mode-background)": "",
      "white(dark-mode-text&light-mode-element)": "",
    },
    fontSize: {
      "homepage-items": "14px",
      "detail-page": "16px",
    },
  },
  plugins: [],
};
