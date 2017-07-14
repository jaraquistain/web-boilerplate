import webpack from "webpack";
import { server } from 'universal-webpack/config'

import settings from './universal-webpack-settings'
import configuration from './webpack.config'

configuration.plugins = [
  ...configuration.plugins,
  new webpack.DefinePlugin({
    global: {
      __CLIENT__: false,
      __SERVER__: true
    }
  })
];

export default server(configuration, settings)