import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        playfair: ["var(--font-playfair_display)", "serif"],
      },
      backgroundImage: {
        navBg:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.5) -25%, rgba(0, 0, 0, 0) 100%)",
        homeBg: "url('/assets/images/home_bg.png')",
        homeMobileBg: "url('/assets/images/home_mobile_bg.png')",
        homeAbout: "url('/assets/images/pin_map.png')",
        footer: "url('/assets/images/footer_bg.png')",
        aboutGradient:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) -26.4%, #FFFFFF 82.58%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        button: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
