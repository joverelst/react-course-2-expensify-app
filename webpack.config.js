const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
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
        use: CSSExtract.extract({
          use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    // normal without css: cheap-module-eval-source-map
    // with css: inline-source-map
    devtool: isProduction ? 'source-map' : 'inline-source-map', // makes sources map
    devServer: {
      contentBase: path.join(__dirname, '/public/'), // sets content directory, usually public
      historyApiFallback: true // nesecary for React Router, activates client side routing
    }
  };
};