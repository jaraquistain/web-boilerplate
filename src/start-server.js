require('source-map-support/register');
require('babel-register')({ ignore: /\/(static|node_modules)\// });

const startServer = require("universal-webpack/server");

// Initialize global constants
global.__CLIENT__ = false;
global.__SERVER__ = true;

// Load .env file into process.env
require("dotenv").config();

// Start the web server with universal-webpack
const settings = require("./webpack/universal-webpack-settings");
const configuration = require("./webpack/webpack.config");

startServer(configuration, settings);
