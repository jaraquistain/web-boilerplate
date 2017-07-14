import { createStore, applyMiddleware, compose } from "redux";

import config from "../config";
import reducer from "./reducer";

export default (data = {}) => {
  // Middleware
  const middleware = applyMiddleware();
  const hasDevTools = config.isClient && window.__REDUX_DEVTOOLS_EXTENSION__;
  let enhancers = middleware;

  if (hasDevTools) {
      enhancers = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(reducer, data, enhancers);
}
