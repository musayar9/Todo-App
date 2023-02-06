/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container:{
        center:true,
       
      },
      width:{
       '95': "32rem",
        '97': "38rem",
        '98': "45rem",
        "120": "60rem"
      
      }
    },
  },
  plugins: [],
}
