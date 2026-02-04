/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'1rem',
      screens:{
        'xs': '480px',
        sm: '640px',
        md:'768px',
        lg:'1024px',
        xl:'1280px',
        '2xl':'1536px',
        '3xl':'1720px',
        '4xl':'1920px',
      },
    },
    extend: {
       fontFamily: {
        gotham: ['"Gotham Rounded"',  "sans-serif"],
      },
      colors:{
        "violet_light":"#b57edc",
        "violet_darck":"#634b99",
        "crema":"#f3eeea",
        "violet_transp":"#d1addb"
      },
      keyframes: {
    obrasLoop: {
      "0%": { transform: "translateX(0)" },
      "50%": { transform: "translateX(-100)" },
      "100%": { transform: "translateX(0%)" },
    },
  },
  animation: {
    "obras-loop": "obrasLoop 25s linear infinite",
  },
    },
  },
  plugins: [],
}

