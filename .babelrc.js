const env = process.env.BABEL_ENV;

const isCJS = env === 'cjs' ? 'commonjs' : false;

module.exports = {
  presets: [
    [
      'env',
      {
        targets: {
          node: 4.0,
        },
        modules: isCJS
      }
    ]
  ],
  plugins: [
    'transform-object-rest-spread'
  ]
};
