module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-dark': '#b5882b',
      },
      fontFamily: {
        playfair: ['"Playfair Display"','serif'],
        inter: ['Inter','sans-serif']
      }
    }
  },
  plugins: [],
}
