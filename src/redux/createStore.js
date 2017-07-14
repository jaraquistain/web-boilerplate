import { createStore, applyMiddleware, compose } from "redux";

import config from "../config";
import reducer from "./reducer";

export default (data = {}) => {
  const middleware = applyMiddleware(/** middleware goes here **/);
  const hasDevTools = config.isClient && window.__REDUX_DEVTOOLS_EXTENSION__;

  // By default just use middleware
  let enhancers = middleware;

  // But if dev tools exist also include that
  if (hasDevTools) {
      enhancers = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  return createStore(reducer, data, enhancers);
}
