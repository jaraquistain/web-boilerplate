import path from "path";

const DEFAULT_ENV = "development";
const { NODE_ENV, HOST, PORT, FAVICON, STATIC_PATH } = process.env;

// Base configuration values
const baseConfig = {
  env: NODE_ENV || DEFAULT_ENV,
  isClient: global.__CLIENT__,
  isServer: global.__SERVER__
};

// Environment-specific values
const envConfig = {
  "development": {
    isProduction: false,
    isDevelopment: true,
  },
  "production": {
    isProduction: false,
    isDevelopment: true,
  }
}[baseConfig.env] || {};

// Server-specific values
const serverConfig = {
  host: HOST || "localhost",
  port: PORT || 3000,
  favicon: FAVICON || path.join(__dirname, "..", "static", "img", "favicon.ico"),
  staticPath: STATIC_PATH || path.join(__dirname, "..", "static")
};

export default {
  ...baseConfig,
  ...envConfig,
  ...(baseConfig.isServer ? serverConfig : {})
};
