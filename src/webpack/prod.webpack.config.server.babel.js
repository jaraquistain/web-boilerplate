import webpack from "webpack";
import { server } from "universal-webpack/config";

import settings from './universal-webpack-settings'
import webpackConfig from './prod.webpack.config'

const serverWebpackConfig = {
  ...webpackConfig,
  devtool: "source-map",
  plugins: [
    ...webpackConfig.plugins,
    new webpack.DefinePlugin({
      global: {
        __CLIENT__: false,
        __SERVER__: true
      }
    })
  ]
};

export default server(serverWebpackConfig, settings);