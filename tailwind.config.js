module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        mil: '1000px',
        sp: '70%'
      },
      screens: {
        small: '670px'
      },
      spacing: {
        ten: '10px',
        negative: '-1rem'
      },
      borderColor: {
        newBlue: '#0d6efd'
      },
      colors: {
        blueText: '#0d6efd',
        newHover: '#0a58ca',
        newGray: '#6c757d',
        newDark: '#212529'
      }
    },
  },
  plugins: [],
}
