const path = require('path');
const webpack = require('webpack');

var config = {
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

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;