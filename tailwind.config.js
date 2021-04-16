module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        strongcyan: '#26baa4',
        lightblue: '#6173ff',
        darkgrayish: '#4c545d',
        greyblue: '#9fabb2',
        footer: '#f5f6f8',
      },
      fontFamily: {
        body: ['Bai Jamjuree', 'sans-serif']
      },
      backgroundImage: theme => ({
        'mobile-image': "url('images/bg-header-mobile.png')",
        'desktop-image': "url('images/bg-header-desktop.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
