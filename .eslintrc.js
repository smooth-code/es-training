module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
  },
}
