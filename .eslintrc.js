module.exports = {
  parser: 'babel-eslint',
  extends: ['pedant', 'prettier'],
  plugins: ['require-path-exists'],
  env: {
    node: true,
  },
};
