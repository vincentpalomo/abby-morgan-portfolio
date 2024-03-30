import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotomono: ['Roboto Mono'],
        lemurmure: ['var(--font-lemurmure)']
      },
      colors: {
        'offwhite': '#F1F1F1',
        'offblack': '#1E1E1E',
        'offgrey': '#333'
      }
    },
  },
  plugins: [],
};
export default config;
