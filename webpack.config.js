const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: ['babel-polyfill', './js/script.js'],
     output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/bundle.js'
     },
     devServer: {
        contentBase: './dist'
     },
     plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './index.html'
      })
     ],
     module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /non_modules/,
            use:{
               loader: 'babel-loader'
            }
         }
      ]
     }
};