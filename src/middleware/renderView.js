import ReactDOMServer from "react-dom/server"
import React from "react";

import { Html } from "../components";
import createStore from "../redux/createStore";

function generateHtml(store, component, assets) {
  return `<!doctype html>\n${ReactDOMServer.renderToString(<Html store={store} component={component} assets={assets} />)}`;
}

function getComponent() {
  return <div>This is my component</div>
}

export default (assets) => {
  return (ctx) => {
    const store = createStore();
    const component = getComponent();

    ctx.body = generateHtml(store, component, assets);
  }
}
