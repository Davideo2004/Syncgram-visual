import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        syncgreen: "#16A34A",
        tealsync: "#0EA5A4",
        surface: "#F6F8F7",
        text: "#111827",
        muted: "#6B7280",
      },
      borderRadius: {
        base: "12px",
        pill: "999px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "48px",
        6: "64px",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(17,24,39,0.06)",
      },
      fontSize: {
        "display-xl": ["44px", { lineHeight: "1.08" }],
        "display-lg": ["36px", { lineHeight: "1.1" }],
        h1: ["28px", "1.12"],
        h2: ["22px", "1.2"],
        body: ["16px", "1.45"],
        small: ["13px", "1.4"],
      },
    },
  },
  plugins: [],
};

export default config;

