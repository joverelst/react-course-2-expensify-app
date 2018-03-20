const path = require('path');

module.exports = {
  entry: './src/app.js',
  //entry: './src/playground/hoc.js',
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js'
  },
  module: {
    // babel rule for jsx -> file, config in .babelrc
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    // css rules
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/public/'), // sets content directory, usually public
    historyApiFallback: true // nesecary for React Router, activates client side routing
  }
};