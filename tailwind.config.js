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
        green00: '#012b25',
        green01: '#0e352f',
        green02: '#193e38',
        green03: '#32524d',
        green04: '#4a6662',
        green05: '#5d7572',
        green06: '#778a88',
        green: '#278735',
        red: '#fe0a01'
      },
      fontSize: {
        '2xs': '0.5rem'
      },
      borderRadius: {
        'xl': '50px'
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 0 },
          '30%': { opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        }
      },
      animation: {
        fadeInOut: 'fadeInOut 2s ease-in-out',
        fadeInOut2: 'fadeInOut 2s ease-in-out 2s',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out'
      }
    },
  },
  variants: {},
  plugins: [],
}