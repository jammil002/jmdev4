/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ["Bebas Neue", "regular"],
        Montserrat: ["Montserrat", "regular"],
        Oswald: ["Oswald", "regular"],
        PressStart2P: ["Press Start 2P", "regular"],
      },
    },
  },
  plugins: [],
};
