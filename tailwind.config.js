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
    extend: {
      colors: {
        green00: '#012b25',
        green01: '#0e352f',
        green02: '#193e38',
        green03: '#32524d',
        green04: '#4a6662',
        green05: '#5d7572',
        gren06: '#778a88',
        green: '#278735',
        red: '#fe0a01'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '30%': { opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 4s ease-in-out',
        fadeIn2: 'fadeIn 4s ease-in-out 4s',
      }
    },
  },
  variants: {},
  plugins: [],
}