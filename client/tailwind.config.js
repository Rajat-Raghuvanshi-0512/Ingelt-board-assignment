/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        'dark-blue': '#001E43',
      },
    },
  },
  plugins: [],
};
