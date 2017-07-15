import webpack from "webpack";
import { client } from "universal-webpack/config"

import settings from "./universal-webpack-settings"
import webpackConfig from './webpack.config'
import appConfig from "../config";

const clientWebpackConfig = {
  ...webpackConfig,
  devtool: "inline-eval-cheap-source-map",
  plugins: [
    ...webpackConfig.plugins,
    new webpack.DefinePlugin({
      global: {
        __CLIENT__: true,
        __SERVER__: false
      }
    })
  ]
};

export default client(
  clientWebpackConfig,
  settings,
  { development: appConfig.isDevelopment }
);
