const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  plugins: [new HotModuleReplacementPlugin()],
  stats: 'minimal',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
    // redirect 404s to /index.html
    historyApiFallback: true,
    proxy: { '/api/**': { target: 'http://localhost:5000', secure: false } },
  },
  devtool: 'eval-source-map',
});
