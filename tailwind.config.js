/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        mobile: '640px',
        desktop: '1440px'
      },
      colors: {
        primary: {
          softOrange: 'hsl(35, 77%, 62%)',
          softRed: 'hsl(5, 85%, 63%)',
        },
        neutral: {
          offWhite: 'hsl(36, 100%, 99%)',
          grayishBlue: 'hsl(233, 8%, 79%)',
          darkGrayishBlue: 'hsl(236, 13%, 42%)',
          veryDarkBlue: 'hsl(240, 100%, 5%)',
        }
      },
      fontWeight: {
        regular: '400',
        bold: '700',
        extrabold: '800',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

