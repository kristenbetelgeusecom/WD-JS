const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/script/index.js",
  output: {
    path: __dirname + "/dist",
    filename: 'script.js',
    assetModuleFilename: "img/[name][ext]",
  },
  mode: "development",
  devServer: {
    port: 3000,
  },
  devtool: "source-map",

  plugins: [
    new HTMLWebpackPlugin({
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin({
        filename: "style.css"
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: "asset/resource" },
    ],
  },
}
