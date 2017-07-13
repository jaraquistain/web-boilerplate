import React from "react";
import ReactDOM from "react-dom";

import createStore from "./redux/createStore";
import config from "./config";


function getComponent() {
  return <div>This is my component</div>;
}

const contentRoot = document.getElementById("content");
const store = createStore(window._appState);
if (config.isDevelopment) { window.React = React; }

ReactDOM.render(getComponent(store), contentRoot);
