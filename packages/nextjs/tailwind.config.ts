import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#794BFC",

          secondary: "F4F1FD",

          accent: "#ff00ff",

          neutral: "#ff00ff",

          "base-100": "#ffffff",

          info: "#0000ff",

          success: "#00ffff",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        froly: {
          50: "#fff1f1",
          100: "#ffe3e4",
          200: "#ffccd0",
          300: "#ffa1a9",
          400: "#ff6978",
          500: "#f93a52",
          600: "#e7173c",
          700: "#c30d31",
          800: "#a30e30",
          900: "#8b1030",
          950: "#4e0315",
        },
        blizzardblue: {
          50: "#ebfffe",
          100: "#cdfdff",
          200: "#a6faff",
          300: "#62f3fe",
          400: "#1be2f5",
          500: "#00c5db",
          600: "#029eb8",
          700: "#0a7e94",
          800: "#126578",
          900: "#135366",
          950: "#063746",
        },
        mint: {
          50: "#f2fbf8",
          100: "#ccf4e8",
          200: "#a4ebd7",
          300: "#6fd9bf",
          400: "#41c0a5",
          500: "#28a48b",
          600: "#1e8371",
          700: "#1c695c",
          800: "#1a554c",
          900: "#1a4740",
          950: "#092a26",
        },
        powder: {
          50: "#fffcf9",
          100: "#ffebd5",
          200: "#fed2aa",
          300: "#fdb274",
          400: "#fb873c",
          500: "#f96616",
          600: "#ea4c0c",
          700: "#c2370c",
          800: "#9a2c12",
          900: "#7c2712",
          950: "#431107",
        },
        rose: {
          50: "#fef1f8",
          100: "#fee5f4",
          200: "#ffccea",
          300: "#ffa1d7",
          400: "#ff66ba",
          500: "#fb399d",
          600: "#eb1779",
          700: "#cd095e",
          800: "#a90b4e",
          900: "#8d0e44",
          950: "#570025",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#93BBFB",
          "primary-content": "#2A3655",
          secondary: "#DAE8FF",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f8ff",
          "base-300": "#DAE8FF",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#212638",
          "primary-content": "#DAE8FF",
          secondary: "#323f61",
          "secondary-content": "#F9FBFF",
          accent: "#4969A6",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#385183",
          "base-200": "#2A3655",
          "base-300": "#212638",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
