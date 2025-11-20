import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014", // Deep void black/purple
        "neon-blue": "#00f3ff", // Electric Cyan
        "neon-purple": "#bc13fe", // Electric Purple
        "neon-pink": "#ff00aa", // Accent Pink
        glass: "rgba(255, 255, 255, 0.05)", // Base glass transparency
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #00f3ff33 0deg, #bc13fe33 180deg, #00f3ff33 360deg)",
        "neon-gradient": "linear-gradient(to right, #00f3ff, #bc13fe)",
      },
      boxShadow: {
        "neon-blue": "0 0 10px #00f3ff, 0 0 20px #00f3ff40",
        "neon-purple": "0 0 10px #bc13fe, 0 0 20px #bc13fe40",
        "glass-card": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "inner-glow": "inset 0 0 20px rgba(0, 243, 255, 0.1)",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 10px #00f3ff" },
          "50%": { opacity: "0.8", boxShadow: "0 0 25px #bc13fe" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
