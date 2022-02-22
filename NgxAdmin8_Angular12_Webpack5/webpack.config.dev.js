const path = require('path');
const { merge: webpackMerge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    historyApiFallback: true
  }
});
