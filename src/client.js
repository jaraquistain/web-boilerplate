import React from "react";
import ReactDOM from "react-dom";

import createStore from "./redux/createStore";
import { getRootComponent } from "./helpers";

// Extract the store
const store = createStore(window._appState || {});

// Render the app into the DOM
ReactDOM.render(
  getRootComponent.client(store),
  document.getElementById("content")
);
