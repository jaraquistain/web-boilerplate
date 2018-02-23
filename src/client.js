import React from "react";
import ReactDOM from "react-dom";

import { RootClient } from "./components";
import createStore from "./redux/createStore";
import routes from "./routes";

// Extract the store
const helpers = {}; //TODO: add async helpers here same as in server
const state = window._appState || {};
const store = createStore(state);
const component = <RootClient store={store} routes={routes} helpers={helpers} />;
const container = document.getElementById("content");


// Render the app into the DOM
ReactDOM.hydrate(component, container);
