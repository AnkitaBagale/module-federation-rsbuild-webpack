const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { dependencies } = require("./package.json");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: path.resolve('src', 'index.js'),
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      filename: "app2.remoteEntry.js",
      remotes: {
        app3: "app3@http://localhost:3002/app3.remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/Button",
      },
      shared: {
        react: { singleton: true, requiredVersion: dependencies.react },
        'react-dom': { singleton: true, requiredVersion: dependencies['react-dom'] },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
