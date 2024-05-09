/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: "'Lato', sans-serif"
      },
      colors:{
        primary:'#f39c12'
      },
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}

