// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        gothic: ["Science Gothic", "sans-serif"],
        bungee: ["Bungee Spice", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'gradient': 'gradient 15s ease infinite',
        'underline-expand': 'underlineExpand 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradient: {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
        underlineExpand: {
          '0%': { 
            width: '0%',
            opacity: '0'
          },
          '100%': { 
            width: '100%',
            opacity: '1'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)',
        'nav-gradient-simple': 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',
        'nav-gradient-premium': 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
      }
    },
  },
  plugins: [],
}