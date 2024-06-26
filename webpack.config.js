const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    filename: "./[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo-List",
      filename: "./index.html",
      template: path.resolve(__dirname, "./src/template.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./[name].[contenthash].css",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    minimizer: [new CssMinimizerPlugin()],
  },
};
