import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#315C36",
        sage: "#6E8F5F",
        ivory: "#FAF8F2",
        sand: "#EDE5D8",
        ink: "#0E3032"
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
};

export default config;
