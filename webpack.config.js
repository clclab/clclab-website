

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

const extractSCSS = new ExtractTextPlugin('styles.css');

module.exports = {
  entry: "./webpack/index.js",

  output: {
    path: path.join(__dirname, "jekyll/assets"),
    filename: "bundle.js"
  },

  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /\.(scss)$/,
      use: extractSCSS.extract({
        fallback: 'style-loader', // inject CSS to page
        use: [
          { loader: 'css-loader', }, // translates CSS into CommonJS modules
          { loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  // require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, 
          { loader: 'sass-loader' }, // compiles Sass to CSS
        ]
      }),
    }]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './node_modules/open-iconic/font',
        to: 'iconic'
      }
    ]),
    // Copy the bootstrap scss files to the jekyll site
    // new CopyWebpackPlugin([
    //   { 
    //     from: './node_modules/bootstrap/scss/bootstrap.scss',
    //     to: 'bootstrap.scss'
    //   }
    // ]),

    // Clean up the dist directory
    // new CleanWebpackPlugin(['jekyll/assets/dist']),

    // Copy css files
    extractSCSS,
  ],
};