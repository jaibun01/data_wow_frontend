import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '14px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-500": "var(--green-500)",
        "green-300": "var(--green-300)",
        "green-100": "var(--green-100)",
        gloden: "var(--gloden)",
        black: "var(--black)",
        white: "var(--white)",
        text: "var(--text)",
        "grey-100": "var(--grey-100)",
        "grey-300": "var(--grey-300)",
        success: "var(--success)",
      },
    },
  },
  plugins: [],
} satisfies Config;
