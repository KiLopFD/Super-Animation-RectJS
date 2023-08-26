/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow:{
        'pink':'0 0 20px 0px rgb(255, 159, 247)',
      },
      colors:{
        'pri-txt':'#B7B4BB',
      },
      borderColor:{
        'pri-bd': '#ffffff26',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}