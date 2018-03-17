var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/DateInput.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  },
  module: {
    rules: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
}
