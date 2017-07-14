import webpack from "webpack";
import { server } from "universal-webpack/config";
import merge from "lodash.merge";

import settings from './universal-webpack-settings'
import webpackConfig from './webpack.config'

const serverWebpackConfig = {
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      global: {
        __CLIENT__: false,
        __SERVER__: true
      }
    })
  ]
};

export default server(
  merge(webpackConfig, serverWebpackConfig),
  settings
);