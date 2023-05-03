/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card': "url('/card.jpeg')",
        'bg1':"url('/bg1.jpeg')",
      },
      dropShadow: {
        dark1:'1px 1px 1px black',
        dark2:'1px 1px 1px #1A1A1A',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      colors: {
        'green1': '#52AAB1',
        'yellow1':'#573280',
        'meu':'#00fc62'
      },
    },
    
  },
  plugins: [],
}
