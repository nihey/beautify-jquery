var webpack = require('webpack');

module.exports = {
  entry: './js/jquery.beautify.js',

  devTool: 'source-map',

  output: {
    path: './dist/',
    filename: 'jquery.beautify.js',
  },

  externals: {
    'jquery': '$',
  },
};
