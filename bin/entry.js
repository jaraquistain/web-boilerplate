#!/usr/bin/env node
require("dotenv").config(); // Load .env file into process.env
require("babel-register");   // Enable babel runtime transpilation

const config = require("../src/config").default;
const server = require("../src/server.js");

/** Define universal constants **/
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;

server.run(config);

