const path = require('path');
const { merge: webpackMerge } = require('webpack-merge');
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new AngularWebpackPlugin({
      jitMode: false
    })
  ]
});
