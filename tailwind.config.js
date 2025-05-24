/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'wave': 'wave 15s ease-in-out infinite',
        'wave-reverse': 'wave 15s ease-in-out infinite reverse',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-15px) translateX(10px)' },
          '50%': { transform: 'translateY(10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-5px) translateX(15px)' },
        },
      },
    },
  },
  plugins: [],
};