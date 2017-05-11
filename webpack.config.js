const path = require("path");

const StyleLintPlugin = require('stylelint-webpack-plugin');

const nodeModules = path.resolve(__dirname, "node_modules");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/, loader: "eslint-loader", exclude: nodeModules
      },
      {test: /\.js$/, use: "babel-loader", exclude: nodeModules},
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({files: "src/**/*.css"}),
  ],
};