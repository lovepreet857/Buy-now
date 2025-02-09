/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        font_inter:['"Inter"', 'serif'],
        font_heebo:['"Heebo"', 'serif'],
      },
      colors:{
       black:{
        black_100:"#0C0314",
        black_200:"#693E8E14",
       },
       white:{
        white_100:"#FFFFFF",
        white_2:"#F7F6F8",
        white_200:"#42265914",
       },
       gray:{
         gray_100:"#C4CFD4",
         gray_200:"#495F6A",
       },
       purple:{
      purple_100:"#422659",
      purple_200:"#693E8E",
       },
       yellow:{
        yellow_101:"#FFB400",
        yellow_102:"#ED6C02",
       },
       pink:{
        pink_1:"#ED5F600A",
       }
      }
    },
  },
  plugins: [],
}