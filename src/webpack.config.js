

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "../assets/js"),
    filename: "bundle.js"
  },
  devtool: 'inline-source-map'
};