/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container:{
        center:true,
       
      },
      width:{
        '98': "45rem",
        "120": "60rem"
      
      }
    },
  },
  plugins: [],
}
