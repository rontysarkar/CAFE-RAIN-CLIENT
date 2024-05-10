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
        primary:'#f39c12',
        secondary:'rgb(255,189,47)'
      },
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}

