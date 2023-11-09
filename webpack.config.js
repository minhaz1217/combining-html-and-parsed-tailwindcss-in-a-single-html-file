const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.html',
  module: {
    rules: [{ test: /\.html$/, use: 'raw-loader' }],
  },
  // output: {
  //   filename: 'main.html',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  devServer: {
    hot: true,
    watchFiles: ['src/**/*.html'],
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: false,
    port: 80,
  },
};
