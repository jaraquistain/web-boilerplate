import ReactDOMServer from "react-dom/server"
import React from "react";

import { getRootComponent } from "../helpers";
import { Html } from "../components";

import createStore from "../redux/createStore";

/**
 * Render the appropriate HTML for the initial page load of a view request
 * @param store The populated redux store
 * @param component The root React component for the app
 * @param assets scripts and stylesheets emitted by Webpack
 * @returns {string} The html to be rendered in the browser
 */
function generateViewResponseString(store, component, assets) {
  const doctype = "<!doctype html>";
  const document = ReactDOMServer.renderToString(
    <Html store={store} component={component} assets={assets} />
  );

  return `${doctype}\n${document}`;
}

/**
 * Given some Webpack asset map returns Koa middleware
 * @param assets scripts and stylesheets emitted by Webpack
 * @returns {function} Koa middleware for rendering a page in the app
 */
export default (assets) => {
  return (ctx) => {
    const routerContext = {};
    const store = createStore();
    const component = getRootComponent.server(ctx, routerContext, store);

    ctx.body = generateViewResponseString(store, component, assets);
  }
}
