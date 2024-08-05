
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}" // Include public directory if you have static assets
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      const allColors = flattenColorPalette(theme('colors'));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
};
