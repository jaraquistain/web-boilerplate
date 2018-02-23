import React from "react";
import ReactDOM from "react-dom";

import { RootClient } from "./components";
import createStore from "./redux/createStore";
import * as helpers from "./redux/connectHelpers";
import routes from "./routes";

// Extract the store
const state = window._appState || {};
const store = createStore(state);
const component = <RootClient store={store} routes={routes} helpers={helpers} />;
const container = document.getElementById("content");


// Render the app into the DOM
ReactDOM.hydrate(component, container);
