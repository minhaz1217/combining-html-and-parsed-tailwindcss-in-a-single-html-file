const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;

module.exports = (env) => {
  if (!process.env.npm_config_language_file) {
    console.log(
      "You can enter dynamic language files by using --language_file=<your_language_file_without_extension>(ie: de/it/fr)"
    );
  }
  const languageFile = process.env.npm_config_language_file || "en";
  const translation = require(`./translations/${languageFile}.json`);
  return {
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
        translations: {
          ...translation,
          language_file: process.env.npm_config_language_file || "german",
        },
      }),
      new HTMLInlineCSSWebpackPlugin(),
    ],
    module: {
      rules: [
        { test: /\.html$/, loader: "underscore-template-loader" },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
  };
};
