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
    test: /react-icons\/(.)*(.js)$/,
    loader: 'babel-loader',
    include: [path.resolve(__dirname, './node_modules/react-icons/md')],
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader!postcss-loader'
    },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer : {
    contentBase: './dist'
  }
};