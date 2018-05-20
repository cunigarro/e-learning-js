const path = require('path')

module.exports = {
  entry: './src/js/e-learning.js',
  output: {
    filename: 'e-learning.min.js',
    path: path.resolve(__dirname, 'dist')
  }
}
