// Create this file in my-jekyll-site directory
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/**/*.md',
    './pages/**/*.html',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Ubuntu"', 'sans-serif'],
        'logo': ['"Antonio"', 'sans-serif'],
        'heading': ['"Dangrek"', 'sans-serif'],
        'hand': ['"Patrick Hand"', 'sans-serif'],
        // 'hand': ['"Edu VIC WA NT Beginner"', 'sans-serif'],
        // 'hand': ['"Bad Script"', 'sans-serif'],
        // 'hand': ['"Caveat"', 'sans-serif'],
        // 'heading': ['"Fuzzy Bubbles"', 'sans-serif'],
      },
      colors: {
        ground: {
          300: "#e0d5c5",
        },
        water: {
          100: "#c4d7e6",
          200: "#a5b5c1",
          700: "#44687e",
          800: "#39596f",
          900: "#2a4353",
        },
      },
    },
  },
  plugins: [],
}
