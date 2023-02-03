/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container:{
        center:true,
       
      },
      width:{
        '98': "38rem",
        "120": "60rem"
      
      }
    },
  },
  plugins: [],
}
