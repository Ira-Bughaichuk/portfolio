import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: "390px",//480
      md: "833px", //768
      xl: "1440px",

      smOnly: { max: "832.98px" }, //767.98
      // mdOnly: { min: "768px", max: "1279.98px" },
       notXl: { max: "1439.98px" },
    },
    // THEME
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",    // 16px
          sm: "1rem",         // 16px
          md: "2.5rem",       // 40px
          xl: "3.75rem",      // 60px
        },
      },
      // COLORS
      colors: {
        "color-primary": "#000000",
        "color-secondary": "#FFFFFF",
        "color-accent-primary":"#723406",
        "color-accent-extra":"#E9A16B",
        "color-bg": {
          primary: "#FFFFFF",
          secondary:"#988475",
        },
        "color-btn": {
          primary: "#723406",
          secondary: "#BF590D",
          extra: "#E9A16B",
          main: "#FFFFFF",
        },
      },
      // FONTS
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        condensed:["var(--font-roboto-condensed)"],
        mono: ["var(--font-roboto_mono)"],
        openSans:["var(--font-open_sans)"],
        ribeye_marrow:["var(--font-ribeye_marrow)"],
      },
      // TRANSITION
      // transitionDuration: {
      //   DEFAULT: "500ms",
      // },
      // transitionTimingFunction: {
      //   DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      // },
    },
  },
  plugins: [],
};
export default config;
 