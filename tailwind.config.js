/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'bg-blue': "rgb(10,25,47)"
        , 'text-white': "rgb(204,214,246)"
        , 'aqua': "rgb(56,189,248)"
        , 'aqua-text': "rgb(100,255,218)"
      }
    },
    screens: {
      'sm': '280px',
      // => @media (min-width: 640px) { ... }

      'md': '468px',
      // => @media (min-width: 768px) { ... }

      'lg': '824px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1080px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1236px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
