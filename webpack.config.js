const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    historyApiFallback:true,
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    client: {
      reconnect: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.module\.css$/,
        use: ["style-loader", "css-modules-typescript-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /\.module\.s[ac]ss/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.module\.s[ac]ss$/,
        use: ["style-loader", "css-modules-typescript-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "src", "assets", "favicon", "stupid.png"),
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].bundle.css",
    }),
    new ESLintPlugin(),
  ],
};
