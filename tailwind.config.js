/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myanmar: ['"Myanmar Khyay"', 'sans-serif'],
        sniglet : ['"Sniglet', 'sans-serif'],
      },
      colors: {
        customPurple: '#3E3A7D',
        hoverPurple: '#6864A1',
      },
      
    },
  },
  plugins: [],
}

