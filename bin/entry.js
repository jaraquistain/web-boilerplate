#!/usr/bin/env node
require("babel-register");

const server = require("../src/server.js");

/** Define universal constants **/
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== "production";

server.run();

