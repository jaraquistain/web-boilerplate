const DEFAULT_ENV = "development";
const ENV = process.env.NODE_ENV || DEFAULT_ENV;

/** ENV CONFIG **/
const defaultEnvConfig = {
  isDevelopment: true,
  isProduction: false
};

const envConfig = {
  "development": {
    isProduction: false,
    isDevelopment: true,
  },
  "production": {
    isProduction: false,
    isDevelopment: true,
  }
}[ENV] || {};

/** CONFIG **/
const config = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  isClient: global.__CLIENT__,
  isServer: global.__SERVER__
};

export default {
  ...defaultEnvConfig,
  ...envConfig,
  ...config
};
