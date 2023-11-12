const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;

module.exports = {
  // mode: "production",
  mode: "development",
  entry: "./src/app.js",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({ template: "./src/index.html", inject: false }),
    new HTMLInlineCSSWebpackPlugin({
      replace: {
        target: '<link rel="stylesheet" href="./output.css" />',
        removeTarget: true,
      },
    }),
  ],
  module: {
    rules: [
      { test: /\.html$/, use: "raw-loader" },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
