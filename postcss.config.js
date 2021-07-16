module.exports = {
  plugins: {
    'postcss-nested': {},
    autoprefixer: {},
    'postcss-mixins': { mixins: require('./styles/mixins') },
    'postcss-custom-properties-fallback': {
      importFrom: require.resolve('react-spring-bottom-sheet/defaults.json'),
    },
  },
}
