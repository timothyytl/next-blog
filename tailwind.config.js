/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#18181b",
        light: "#ffffff",
        accent: "#48CAE4",
        accentDark: "#48cae4",
        gray: "#747474",
      },
      fontFamily: {
        primary: ["var(--font-mr)"],
        secondary: ["var(--font-in)"],
      },
      animation: {
        roll: "roll 24s linear infinite"
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      },
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme('colors.black'),
      //       // '*': {
      //       //   color: theme('colors.black')
      //       // },
      //       a: {
      //         color: theme('colors.blue.500'),
      //         '&:hover': {
      //           color: theme('colors.blue.700'),
      //         },
      //       },
      //       'h1': {
      //         color: theme('colors.black')
      //       },
      //       'h2': {
      //         color: theme('colors.black')
      //       },
      //       'h3': {
      //         color: theme('colors.black')
      //       },
      //       'h4': {
      //         color: theme('colors.black')
      //       },
      //       'h5': {
      //         color: theme('colors.black')
      //       },
      //       'h6': {
      //         color: theme('colors.black')
      //       },
      //       'strong': {
      //         color: theme('colors.black')
      //       },
      //     },
      //   },
      // }),
      screens: {
        sxl: "1180px",
        sx: "480px",
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
