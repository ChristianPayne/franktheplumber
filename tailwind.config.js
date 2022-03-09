module.exports = {
  content: [
    './pages/**/*.{html,tsx}',
    './components/**/*.{html,tsx}',
  ],
  theme: {
    colors: {
      main: {
        '1' : '#FFFFFF',
        '2' : '#EEF0F2',
        '3' : '#212121'
      },
      accent: {
        '1' : '#4A4A4A',
        '2' : '#A21E21'
      },
    },
    fontFamily: {
      montserrat: 'Montserrat, sans-serif'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}