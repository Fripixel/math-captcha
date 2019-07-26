const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV,
  context: __dirname,
  entry: ['./assets/js/index.js'],
  output: {
    filename: 'app.js',
    path: path.resolve('./dist/')
  },
  devtool: false,
  module: {
      rules: [{
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options : {
          fix : true
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env'
          ]
        }
      }, {
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
      }
    ]
  },
  plugins: [

  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
      '@': path.resolve(__dirname, './assets')
    },
    extensions: [
      '*',
      '.js',
      '.scss',
      '.json'
    ]
  }
}
