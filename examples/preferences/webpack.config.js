var path = require('path')
var webpack = require('webpack')

const env = process.env.NODE_ENV

module.exports = {
  devtool: 'eval',
  mode: env || 'development',
  entry: [
    'babel-polyfill',
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.json', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.md/,
        loaders: ['html-loader', 'markdown-loader']
      }
    ]
  }
}
