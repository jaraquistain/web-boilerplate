require('source-map-support/register');
require('babel-register')({ ignore: /\/(static|node_modules|bin)\// });

const startServer = require("universal-webpack/server");

// Load .env file into process.env
require("dotenv").config();

// Start the web server with universal-webpack
const settings = require("../src/webpack/universal-webpack-settings");
const configuration = require("../src/webpack/webpack.config.js");

startServer(configuration, settings);
