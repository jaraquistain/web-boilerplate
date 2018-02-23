import React from "react";
import ReactDOM from "react-dom";

import { RootClient } from "./components";
import createStore from "./redux/createStore";
import routes from "./routes";

// Extract the store
const store = createStore(window._appState || {});

// Render the app into the DOM
ReactDOM.hydrate(
  <RootClient store={store} routes={routes} />,
  document.getElementById("content")
);
