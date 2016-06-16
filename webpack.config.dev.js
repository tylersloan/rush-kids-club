var path = require('path');
var webpack = require('webpack');

// var css = require("./client/styles/styles.scss");
// returns compiled css code from styles.scss, resolves Sass imports
// var css = require("!css!sass!./styles.scss");
// returns compiled css code from styles.scss, resolves Sass and CSS imports and url(...)s

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    }
    // CSS
    // {
    //   test: /\.scss$/,
    //   include: path.join(__dirname, 'client'),
    //   loaders: ["style", "css", "sass"]
    // }
    ]
  }
};
