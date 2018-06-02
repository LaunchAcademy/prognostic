var path = require('path')
var webpack = require('webpack')

const env = process.env.NODE_ENV

module.exports = {
  devtool: 'eval',
  mode: env || 'development',
  entry: ['babel-polyfill', 'eventsource-polyfill', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]'
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
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
        include: [
          path.join(__dirname, 'src'),
          //TODO: fix this once modules are working
          path.join(__dirname, '../../src')
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.md/,
        use: ['html-loader', 'markdown-loader']
      }
    ]
  }
}
