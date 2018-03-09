const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./src/js/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceMap: true,
            presets: ['react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]---[local]---[hash:base64:5]',
            }
          },
          {
            loader: "sass-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]---[local]---[hash:base64:5]',
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true, disable: process.env.NODE_ENV !== 'production' }),
  ]
};
