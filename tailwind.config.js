/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#0fd2d2',
      secondary: '#fafafb',
      white: "#ffffff",
      blackPrimary: 'rgb(38, 38, 38)'

    },
    fontFamily: {
      primary: `'Poppins', sans-serif;`,
      secondary: `'Roboto', sans-serif;`,

    },
    extend: {},
  },
  plugins: [],
}