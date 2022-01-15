module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '4_5xl': '2.75rem',
        '5_5xl': '3.5rem'
      },
      colors: {
        wild_watermelon: '#ff6470',
        wild_watermelon_dark: '#fc5664',
        summer_sky: '#36A7EE'
      },
      maxWidth: {
        13: '13rem'
      },
      fontFamily: {
        roboto: 'Roboto Slab'
      },
      letterSpacing: {
        '0_25': '0.25em'
      },
      screens: {
        md800: '800px'
      }
    }
  },
  plugins: []
}
