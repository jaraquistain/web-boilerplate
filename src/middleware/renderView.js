import ReactDOMServer from "react-dom/server"
import React from "react";
import { loadOnServer } from "redux-connect";
import { parse as parseUrl } from 'url'

import { Html, RootServer } from "../components";
import routes from "../routes";

import createStore from "../redux/createStore";

/**
 * Render the appropriate HTML for the initial page load of a view request
 * @param root The root React root Component for the app
 * @returns {string} The html to be rendered in the browser
 */
function getPageString(root) {
  const doctype = "<!doctype html>";
  const document = ReactDOMServer.renderToString(root);

  return `${doctype}\n${document}`;
}

/**
 * Given some Webpack asset map returns Koa middleware
 * @param assets scripts and stylesheets emitted by Webpack
 * @returns {function} Koa middleware for rendering a page in the app
 */
export default (assets) => {
  return async ctx => {
    const store = createStore();
    const location = parseUrl(ctx.originalUrl || ctx.url);
    const helpers = {}; //TODO: This is where you'd put your async helpers E.G. API client

    loadOnServer({ store, location, routes, helpers }).then(() => {
      // This initially empty object can be mutated during view render by react-router
      const context = {};

      const view = <RootServer context={context} location={location} routes={routes} store={store} helpers={helpers}/>;
      const root = <Html store={store} view={view} assets={assets} />;

      // The view is rendered prior to setting the body so it can populate the context if need be
      const pageString = getPageString(root);

      // Catch route-defined redirects
      context.url && ctx.redirect(context.url);

      // Return the rendered view
      ctx.body = pageString;
    });
  }
}
