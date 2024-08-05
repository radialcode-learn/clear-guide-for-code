/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      screens: {
        "2xl": "1400px",
        xs: "480px",
        xxs: "375px",
      },
      keyframes: {
        "up-down": {
          from: {
            transform: "translateY(50px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
      },
      boxShadow: {
        "solution-card":
          "0 1px 1.75px -2px rgba(22, 22, 23, 0.12),0 2px 2.5px -2px rgba(22, 22, 23, 0.12),0 4px 6px -2px rgba(22, 22, 23, 0.12), 0 0 2px 0 rgba(22, 22, 23, 0.25)",
          "faq-card":"6px 6px 0px 0px #000"
      },
      animation: {
        "back-to-top": "up-down 1s ease-out infinite alternate-reverse",
      },
      fontFamily: {
        "ibm-regular": ["IBMPlexSans-Regular", "Verdana", "sans-serif"],
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(107.02deg, #00FFE1 12.76%, #6E5DF6 91.81%)",
      },

      // YOU CAN MODIFY FONT SIZES AND ITS NAME ACCORDINGLY
      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "22px",
        xl: "26px",
        "2xl": "29px",
        "2xxl": "34px",
        "3xl": "44px",
        "4xl": "52px",
      },
      colors: {
        "light-gray": "#D3D3D3",
        "off-white": "#ffffffbf",
        "black-light": {
          DEFAULT: "#1616171f",
          700: "#16161629",
          600: "#16161729",
          500: "#1616174d",
          400: "#16161740",
        },
      },
    },
  },
  plugins: [],
};
