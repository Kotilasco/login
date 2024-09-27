/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      fontFamily: {
        appFont: "Outfit, sans-serif",
      },
      colors: {
        appGreen: "#38B349",
        appGray: "#E9EDF0",
        lightGray: "969696",
        black: {
          900: "var(--black_900)",
          "900_01": "var(--black_900_01)",
          "900_0c": "var(--black_900_0c)",
          "900_33": "var(--black_900_33)",
          "900_4c": "var(--black_900_4c)",
          "900_7f": "var(--black_900_7f)",
        },
        blue: { 100: "var(--blue_100)" },
        blue_gray: { 50: "var(--blue_gray_50)" },
        gray: {
          50: "var(--gray_50)",
          200: "var(--gray_200)",
          400: "var(--gray_400)",
          500: "var(--gray_500)",
          600: "var(--gray_600)",
          700: "var(--gray_700)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "200_01": "var(--gray_200_01)",
          "700_01": "var(--gray_700_01)",
          "900_01": "var(--gray_900_01)",
          "900_02": "var(--gray_900_02)",
          "900_03": "var(--gray_900_03)",
        },
        green: {
          500: "var(--green_500)",
          "500_01": "var(--green_500_01)",
        },
        light_blue: {
          a700: "var(--light_blue_a700)",
        },
        light_green: {
          500: "var(--light_green_500)",
        },
        white: {
          a700: "var(--white_a700)",
          a700_99: "var(--white_a700_99)",
        },
        boxShadow: {},
        fontFamilyy: { poppins: "Poppins" },
      },
    },
  },
  plugins: [],
};
