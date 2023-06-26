/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d472ea",

          "secondary": "#b2fff7",

          "accent": "#b4f47f",

          "neutral": "#221825",

          "base-100": "#2b3250",

          "info": "#a8c6e6",

          "success": "#1ca653",

          "warning": "#eea81b",

          "error": "#dd365b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

