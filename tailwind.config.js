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
      'medium': '#2D2D2D',
      'dark': '#222121',
      'orange': '#FD9C7D',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      fontSize: {
      '1xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '400',
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
    screens: {
      'xxs': '360px',
      // => @media (min-width: 360px) { ... }

      'xs': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1910px',
      // => @media (min-width: 1910px) { ... }
    },

    extend: {
    }
    
  },
  
  plugins: [],
}

