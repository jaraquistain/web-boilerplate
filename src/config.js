import path from "path";

const DEFAULT_ENV = "development";
const { NODE_ENV, HOST, PORT, FAVICON, STATIC_PATH } = process.env;

// BASE //
const base = {
  env: NODE_ENV || DEFAULT_ENV,
  isClient: typeof window !== 'undefined',
  isServer: !(typeof window !== 'undefined'),
  name: "Site Name" //TODO: Add site name when necessary
};

// ENV //
const env = {
    "development": {
      isProduction: false,
      isDevelopment: true,
    },
    "production": {
      isProduction: true,
      isDevelopment: false,
    }
  }[base.env] || {};

// APP //
const app = {
    head: {
      titleTemplate: `${base.name} - %s`,
      meta: [
        { name: "description", content: "" },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "keywords", content: "" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "" },
        { property: "og:image", content: "" },
        { property: "og:title", content: "" },
        { property: "og:description", content: "" },
        { property: "twitter:card", content: "" },
        { property: "twitter:site", content: "" },
        { name: "google-site-verification", content: "" }
      ]
    }
};

// SERVER //
const server = base.isClient ? {} : {
  port: parseInt(PORT) || 3000,
  host: HOST || "localhost",
  faviconPath: FAVICON || path.join(__dirname, "static", "img", "favicon.ico"),
  staticPath: STATIC_PATH || path.join(__dirname, "..", "static")
};

export default {
  ...base,
  ...env,
  app,
  server
}
