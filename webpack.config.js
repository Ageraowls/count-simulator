const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: [
      '.wasm',
      '.mjs',
      '.js',
      '.ts',
      '.tsx',
      '.json',
      '.css',
      '.scss',
    ],
  },
  target: 'web',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'src'),
      watch: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: '../public/favicon.svg',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, 'dist', 'assets/images'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/fonts'),
          to: path.resolve(__dirname, 'dist', 'assets/fonts'),
        },
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist', ''),
        },
      ],
    }),
  ],
};
