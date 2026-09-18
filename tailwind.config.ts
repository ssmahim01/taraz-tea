import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1F5C3F",
          dark: "#123B28",
          darker: "#0B2618",
          light: "#E9F3EC",
          accent: "#F2A93B",
        },
      },
      fontFamily: {
        bangla: ["var(--font-bangla)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
