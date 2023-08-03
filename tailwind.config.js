/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
    },
    colors: {
      'light': '#F9F8F6',
      'dark': '#222121',
      'orange': '#FD9C7D',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      fontSize: {
      '1xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '300',
      }],
      '2xl': ['2rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '500',
        }],
      '3xl': ['2.5rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '500',
        }],
      '4xl': ['3rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '500',
      }],
    }
    },
    extend: {
    }
  },
  
  plugins: [],
}

