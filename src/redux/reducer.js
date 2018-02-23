import { combineReducers } from "redux";
import { reducer as reduxAsyncConnect } from "redux-connect";

function count(state = 0, action) {
  return state + 1;
}

function messages(state = [], action) {
  return [ ...state, action]
}

export default combineReducers({
  reduxAsyncConnect,
  messages,
  count
});
