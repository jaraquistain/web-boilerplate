var path = require("path");

const assetPath = path.resolve(__dirname, "../../static/dist");

module.exports = {
  entry: "./src/client.js",
  output: {
    filename: "[name]-[hash].js",
    chunkFilename: "[name]-[chunkhash].js",
    path: assetPath,
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  }
};
