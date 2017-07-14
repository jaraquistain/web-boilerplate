/** GLOBAL CONSTANTS **/
global.__CLIENT__ = false;
global.__SERVER__ = true;

require("dotenv").config();
require('babel-register')({ ignore: /\/(build|node_modules)\// });

const startServer = require("universal-webpack/server");

const settings = require("./webpack/universal-webpack-settings");
const configuration = require("./webpack/webpack.config");

/**
 * This File's sole purpose is to start the web server
 */

startServer(configuration, settings);
