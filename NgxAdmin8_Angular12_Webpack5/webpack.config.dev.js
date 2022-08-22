const path = require('path');
const { merge: webpackMerge } = require('webpack-merge');
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    historyApiFallback: true
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  plugins: [
    new AngularWebpackPlugin({
      jitMode: true,
      tsconfig: 'tsconfig.app.json'
    })
  ]
});
