/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        "primary": "#2eca7f",

        "secondary": "#49515d",
      },
    ],
  },
  plugins: [require("daisyui")],
}

