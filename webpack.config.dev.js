const path = require('path');
const { merge } = require('webpack-merge');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.config.common');

// UNCOMMENT TO ANALYZE BUNDLE
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const development = {
  mode: 'development',
  output: {
    crossOriginLoading: 'anonymous',
    filename: '[name].js',
    path: path.resolve(__dirname),
    publicPath: '/',
  },
  entry: {
    demo: [
      `webpack-dev-server/client?http://localhost:${process.env.PORT}/`,
      'webpack/hot/only-dev-server',
    ],
  },
  plugins: [
    new ExtractCssChunks(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      minify: false,
      template: path.join(process.cwd(), 'static', 'html', 'index.html'),
      templateParameters(compilation, assets) {
        return {
          compilation,
          webpack: compilation.getStats().toJson(),
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
          },
        };
      },
      filename: 'index.html',
    }),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    host: process.env.HOST,
    hot: true,
    port: process.env.PORT,
    server: 'https',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [require.resolve('react-refresh/babel')],
          },
        }],
        exclude: /(node_modules)/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(commonConfig, development);
