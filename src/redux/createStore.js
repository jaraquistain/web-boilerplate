import { createStore, applyMiddleware, compose } from "redux";

import config from "../config";
import reducer from "./reducer";

export default (data = {}) => {
  const devTools = config.isClient && window.__REDUX_DEVTOOLS_EXTENSION__();
  const baseMiddleware = applyMiddleware(); //TODO: Add middleware when necesasry E.G. Thunk
  const middleware = !!devTools ? compose(baseMiddleware, devTools) : baseMiddleware;

  return createStore(reducer, data, middleware);
}


