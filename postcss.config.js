module.exports = {
  plugins: {
    'postcss-nested': {},
    autoprefixer: {},
    'postcss-mixins': { mixins: require('./styles/mixins') },
  },
}
