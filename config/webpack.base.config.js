const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BASE_DIR = path.resolve(__dirname, '../');
const PUBLIC_DIR = path.resolve(BASE_DIR, './public');

module.exports = {
  entry: ['react-hot-loader/patch', path.resolve(BASE_DIR, './src/index.js')],
  output: {
    path: path.resolve(BASE_DIR, './dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(BASE_DIR, './src/'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(PUBLIC_DIR, './index.ejs'),
      filename: 'index.html',
      title: 'Portfolio - Thomas Dillard',
      publicDir: PUBLIC_DIR,
    }),
  ],
};
