import webpack from "webpack";
import { client } from "universal-webpack/config"
import merge from "lodash.merge";

import settings from "./universal-webpack-settings"
import webpackConfig from './webpack.config'
import appConfig from "../config";

const clientWebpackConfig = {
  devtool: "inline-eval-cheap-source-map",
  plugins: [
    new webpack.DefinePlugin({
      global: {
        __CLIENT__: true,
        __SERVER__: false
      }
    })
  ]
};


export default client(
  merge(webpackConfig, clientWebpackConfig),
  settings,
  { development: appConfig.isDevelopment }
);
