import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    // "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//*.{js,ts,jsx,tsx,mdx}",
    "./src/sections//*.{js,ts,jsx,tsx,mdx}",
    "./src/layout//*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXl: { max: "1279.98px" },
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
        "color-text": {
          primary: "#723406",
          extra: "#E9A16B",
        },
        "color-accent": {
          primary: "#723406",
          extra: "#E9A16B",
        },
        "color-bg": {
          primary: "#FFFFFF",
            // navigation: "bg-gradient-to-r from-gray-400 via-gray-600 to-brown-600",
            // hero: "bg-gradient-to-r from-brown-600 via-gray-600 to-white",
            // contacts: "bg-gradient-to-r from-rgba-107-161-233-70 to-rgba-197-219-249-70",

          //   navigation: 'linear-gradient(115deg, #DDDEDC 5.05%, #9B9086 53.78%, #875531 88.73%)',
          //   hero: 'linear-gradient(115deg, #875531 4.61%, #9B9086 53.78%, #DDDEDC 88.73%)',
          //   contacts: 'linear-gradient(112deg, rgba(233, 161, 107, 0.70) 0.63%, rgba(240, 228, 215, 0.70) 59.11%, rgba(249, 219, 197, 0.70) 100%, rgba(251, 252, 217, 0.70) 100%)',
                          
        },
        "color-bg-cart": {
          // primary: 'bg-gradient-to-r from-rgba-107-161-233-70 via-rgba-215-228-240-70 to-rgba-217-219-249-70',
          // extra: 'bg-gradient-to-r from-rgba-107-161-233-60 via-rgba-205-226-254-60 to-rgba-193-255-254-40',

          primary: "linear-gradient(112deg, rgba(233, 161, 107, 0.70) 0.63%, rgba(240, 228, 215, 0.70) 59.11%, rgba(249, 219, 197, 0.70) 100%, rgba(251, 252, 217, 0.70) 100%)",
          extra: "linear-gradient(115deg, #E9A16B 4.61%, rgba(254, 226, 205, 0.60) 48.56%, rgba(254, 255, 193, 0.40) 88.73%)",
        },
        "color-btn": {
          primary: "#723406",
          secondary: "#BF590D",
          extra: "#E9A16B",
        },
      },
      // FONTS
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        condensed:["var(--font-roboto-condensed)"],
      },
      // TRANSITION
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
