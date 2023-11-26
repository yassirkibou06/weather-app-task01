module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif']
      },
      gridTemplateColumns: {
        'home': "350px, 1fr",
      }
    },
  },
  plugins: [],
}