import React from "react";
import { Provider } from "react-redux";
import { StaticRouter, BrowserRouter } from "react-router-dom";

import { App } from "../../containers";

/**
 * this function generates the root React Comonent for use in rendering the app
 * @param appContext The context provided by Koa when a request is recieved
 * @param routerContext A context to be used by react-router when rendering
 * @param store The populated redux store
 * @returns {XML} The root React Component for the app
 */
function server(appContext, routerContext, store) {
  return (
    <Provider store={store}>
      <StaticRouter location={appContext.url} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>
  );
}

/**
 * this function generates the root React Comonent for use in rendering the app
 * @param store The populated redux store
 * @returns {XML} The root React Component for the app
 */
function client(store) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

export default { server, client };