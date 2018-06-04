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
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env', 'stage-0']
      }
    },{
      test: /\.css$/,
      loader: 'css-loader',
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
