/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "site-bg": "#161617",
      teal: "#2eecc5",
      grey: "#313134",
      light: "#b5feef",
    },
    transitionTimingFunction: {
      ease: "ease",
    },
    backgroundImage: theme => ({
      "teal-gradient": `linear-gradient(91deg, ${theme("colors.light")} 10.31%, ${theme("colors.teal")} 165.09%)`,
      "divider-gradient":
        "linear-gradient(90deg, rgba(42, 188, 158, 0) 0%, #2abc9e 48.65%, rgba(42, 188, 158, 0) 100%)",
      "nav-gradient": `linear-gradient(133deg, #161919 2.37%, #373a3a 100.31%)`,
      "grey-gradient": `linear-gradient(169deg, ${theme("colors.grey")} 9.31%, #292929 61.88%, #282828 111.76%)`,
      "grey-vertical-gradient": "linear-gradient(#303134, #282828, #282828)",
      "blue-gradient": `linear-gradient(140deg, #527791 10.06%, #325597 53.72%, #193895 88%)`,
    }),
    fontFamily: {
      ruberoid: ["Ruberoid", "Inter", "Arial", "sans-serif"],
    },
    dropShadow: {
      teal: `0px 0px 40px rgba(46, 236, 197, .3)`,
    },
    boxShadow: {
      header: `0px 0px 12px rgba(46, 236, 198, 0.1)`,
      button: `0px 0px 32px rgba(46, 236, 197, 0.1)`,
      accordion: `0px 0px 62px rgba(46, 236, 198, 0.1)`,
      blue: "0px 0px 60px 0px rgba(59, 95, 150, 0.35)",
      grey: "0px 0px 60px 0px rgba(44, 44, 45, 0.05)",
    },
    screens: {
      xs: "475px",
      sm: "576px",
      sml: "670px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
      "2xl": "1354px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "20px",
      },
      screens: {
        xs: "100%",
        md: "100%",
        lg: "100%",
        xl: "1354px",
      },
    },
    extend: {},
  },
  plugins: [],
};
