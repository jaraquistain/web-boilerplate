import path from "path";
const DEFAULT_ENV = "development";

// Base configuration values
const baseConfig = {
  env: process.env.NODE_ENV || DEFAULT_ENV,
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
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  favicon: process.env.FAVICON || path.join(__dirname, "..", "static", "img", "favicon.ico")
};

export default {
  ...baseConfig,
  ...envConfig,
  ...(baseConfig.isServer ? serverConfig : {})
};
