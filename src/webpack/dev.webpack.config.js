const path = require("path");
const config = require("../config").default;

const assetPath = path.resolve(__dirname, "../../static/dist");
const WDSPort = config.server.port + 1;
const publicPath = `http://${config.server.host}:${WDSPort}/dist/`;

module.exports = {
  entry: "./src/client.js",
  output: {
    filename: "[name]-[hash].js",
    chunkFilename: "[name]-[chunkhash].js",
    path: assetPath,
    publicPath: "/dist/", //publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              "react",
              "stage-0",
              ["env", { "targets": { "node": "current" } }]
            ],
            cacheDirectory: true
          }
        }]
      }
    ]
  },
  plugins: []
};
