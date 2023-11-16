const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;
const translation = require("./translations/en.json");

module.exports = {
  // mode: "production",
  mode: "development",
  entry: "./src/app.js",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      description: translation.name,
    }),
    new HTMLInlineCSSWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.html$/, loader: "underscore-template-loader" },
      // {
      //   test: /\.html$/i,
      //   loader: "html-loader",
      // },
      // { test: /\.html$/, use: "raw-loader" },
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
