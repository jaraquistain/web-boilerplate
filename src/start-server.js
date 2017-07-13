require("dotenv").config();
require('babel-register')({ ignore: /\/(build|node_modules)\// });

/**
 * This File's sole purpose is to start the web server
 */

/** GLOBAL CONSTANTS **/
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;

const startServer = require("universal-webpack/server");
const settings = require("./webpack/universal-webpack-settings");
const configuration = require("./webpack/webpack.config");

startServer(configuration, settings);
