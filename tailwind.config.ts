import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#415e70',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'source-serif': ['Source Serif 4', 'serif'],
      },
      
    },
  },
  plugins: [],
} satisfies Config;
