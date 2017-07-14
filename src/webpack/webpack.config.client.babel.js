import webpack from "webpack";
import { client } from "universal-webpack/config"

import settings from "./universal-webpack-settings"
import configuration from "./webpack.config"

configuration.plugins = [
  ...configuration.plugins,
  new webpack.DefinePlugin({
    global: {
      __CLIENT__: true,
      __SERVER__: false
    }
  })
];

export default client(configuration, settings)