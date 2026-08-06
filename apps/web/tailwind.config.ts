import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shared/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5ff",
          100: "#dce8ff",
          200: "#b8d0ff",
          300: "#87b0ff",
          400: "#5390ff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#163b9b",
          800: "#102c73",
          900: "#0a1f4d",
          950: "#06122d"
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.08)",
        glass: "0 12px 40px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(11, 31, 77, 0.98) 0%, rgba(37, 99, 235, 0.88) 100%)",
        "section-grid": "radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.08) 1px, transparent 0)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
