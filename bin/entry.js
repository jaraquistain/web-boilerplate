#!/usr/bin/env node
require("dotenv").config(); // Populates process.env from .env file
require("babel-register");  // Enables Babel runtime transpilation

const config = require("../src/config").default;
const server = require("../src/server").default;

/** GLOBAL CONSTANTS **/
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;

/** RUN SERVER **/
server(config);

