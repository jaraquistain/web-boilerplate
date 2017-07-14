const path = require("path");
const config = require("../config").default;

const assetPath = path.resolve(__dirname, "../../static/dist");
//TODO: Need to put in better management around dev/prod here
const publicPathPort = config.isProduction ? config.server.port : (config.server.port + 1);
const publicPath = `http://${config.server.host}:${publicPathPort}/dist/`;

module.exports = {
  entry: "./src/client.js",
  output: {
    filename: "[name]-[hash].js",
    chunkFilename: "[name]-[chunkhash].js",
    path: assetPath,
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: []
};
