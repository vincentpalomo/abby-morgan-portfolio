/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'forest-green': '#04322E',
        'abby-pink': '#FF99FE',
        'off-white': '#F3F3F3',
      },
    },
  },
  plugins: [],
};
