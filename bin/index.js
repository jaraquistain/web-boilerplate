require('source-map-support/register');
require('babel-register')({ ignore: /\/(static|node_modules|bin)\// });

const startServer = require("universal-webpack/server");

// Load .env file into process.env
require("dotenv").config();

// Load Webpack Config
const settings = require("../src/webpack/universal-webpack-settings");
const appConfig = require("../src/config").default;
const prodWebpackConfig = require("../src/webpack/prod.webpack.config.js");
const devWebpackConfig = require("../src/webpack/dev.webpack.config.js");

const myWebpackConfig = appConfig.isDevelopment ? devWebpackConfig : prodWebpackConfig;

// Start the web server with universal-webpack
startServer(myWebpackConfig, settings);
