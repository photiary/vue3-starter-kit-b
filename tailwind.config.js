/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true, // Tailwind css 우선 https://tailwindcss.com/docs/configuration#important
};
