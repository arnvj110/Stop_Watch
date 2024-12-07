/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      
      "bg1":"rgb(29, 251, 29)",
      "bg2":"tomato",
      "bg3":"aqua",
      "bg4":"hsl(0, 0%, 93%)",
      },
      
    },
  },
  plugins: [],
}