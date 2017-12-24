module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env', 'stage-0']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
