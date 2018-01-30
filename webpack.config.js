const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {title: 'Rock Scissors Paper'}
    )
  ]
}
