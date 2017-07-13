import { createStore, applyMiddleware } from "redux";

import reducer from "./reducer";

export default (data = {}) => {
  // Middleware
  const middleware = applyMiddleware();

  return createStore(reducer, data, middleware);
}
