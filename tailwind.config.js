const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
      xxl: "1920px"
    },
    container: {
      center: true
    },
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        green01: '#a3b1af',
        green02: '#778a88',
        green03: '#5d7572',
        green04: '#4a6662',
        green05: '#32524d',
        green06: '#193e38',
        green07: '#0e352f',
        green08: '#022b25',
        green: '#278735',
        red: '#fe0a01',
        black: '#060606',
        gray: {
          ...colors.gray,
          400: '#d3d7d6',
          600: '#777575',
        }
      },
      fontSize: {
        '2xs': '0.625rem'
      },
      borderRadius: {
        'xl': '35px',
        '2xl': '50px'
      },
      minWidth: {
        175: '175px'
      },
      opacity: {
        90: 90
      }
    },
  },
  variants: {},
  plugins: [],
}