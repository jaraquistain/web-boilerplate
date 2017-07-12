import ReactDOMServer from "react-dom/server"
import React from "react";

import { Html } from "../components";
import createStore from "../redux/createStore";

function generateHtml(store) {
  return `<!doctype html>\n${ReactDOMServer.renderToString(<Html store={store} />)}`;
}

export default (config) => {
  return (ctx) => {
    const store = createStore();

    ctx.body = generateHtml(store);
  }
}
