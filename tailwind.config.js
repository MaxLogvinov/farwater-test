/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#262626',
        black: '#101010',
        white: '#FFFFFF',
        whitetext: '#F3F3F3',
        whitelink: '#D9D9D9',
        green: '#428D26',
        graytext: '#6C6C6C',
        graysubtext: '#ABABAB'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'dropdown-icon': "url('/src/assets/Polygon 15.svg')",
        sandwich: "url('/src/assets/Сэндвич.svg')",
        closeButton: "url('/src/assets/mobile-close-button.svg')"
      },
      transitionProperty: {
        transform: 'transform',
        all: 'all'
      }
    }
  },
  plugins: []
};
