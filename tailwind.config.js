/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
      },

      fontFamily: {
        primary: [" var(--barlow-font)"],
        secondary: [" var(--bellefair-font)"],
      },
    },
  },
  plugins: [],
}

