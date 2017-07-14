const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
    {
      test: /\.jsx*$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader', 
        query: {
        presets: ['es2015','stage-2', 'react']
        }
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer : {
    contentBase: './dist'
  }
};