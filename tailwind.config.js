/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,php}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#C41733',
        secondary: '#acce31',
        dark: '#1F2427',
        black: '#111820',
        grey: '#697483',
        light: '#F1EFEF'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '34': "34px",
        '40': "40px",
        '42': "42px",
        '45': "45px",
        '85': "85px",
      },
      borderRadius: {
        '10': "10px"
      }
    },
  },
  plugins: [],
}

