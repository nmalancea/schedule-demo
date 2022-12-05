const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

require('./env'); // Requiring this file will make sure that env variables are valid before injecting them with webpack

module.exports = {
  entry: {
    demo: [
      path.join(process.cwd(), 'app.js'),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    symlinks: false,
    // https://webpack.js.org/configuration/resolve/#resolvefallback
    fallback: {
      url: require.resolve('url/'),
      util: require.resolve('util/'),
    },
  },
  plugins: [
    new Dotenv(),
    new MomentLocalesPlugin(), // strip all locales but en
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
};
