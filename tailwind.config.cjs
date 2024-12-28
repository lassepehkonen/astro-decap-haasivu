const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "rose-gold": "#b76e79",
        "rose-gold-light": "#e6b5c1",
        "rose-gold-dark": "#885f63",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 30s ease-in-out infinite',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
};
