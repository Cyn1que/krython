const path = require('path');
const HtmlWebpackPlugin   = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle-[hash:6].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ne$/,
        use: ['nearley-loader'],
      },
    ]
  }
};