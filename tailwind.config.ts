import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        mild: "var(--mild-color)",
        border: "var(--border-color)",
        "mild-dark": "var(--mild-dark)",
        secondary: "var(--secondary-color)",
        header: "var(--header-color)",
        "secondary-dark": "var(--secondary-dark)",
        paragraph: "var(--paragraph-color)",
        dark: "var(--dark-color)",
        light: "var(--light-color)",
        "light-dark": "var(--light-dark)",
        "dark-foreground": "var(--dark-foreground)",
      },
      borderRadius: {
        default: "var(--border-radius)",
        card: "var(--card-border-radius)",
        button: "var(--button-border-radius)",
      },
      fontFamily: {
        gabarito: ["var(--font-family)"],
      },
    },
  },
  plugins: [],
};

export default config;
