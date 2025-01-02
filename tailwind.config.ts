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
        neutural: "var(--neutural)",
        primary: "#5a9ef2",
        secondary: "#c469fc",
        accent: "#008ec2",
      },
    },
  },
  plugins: [],
} satisfies Config;
