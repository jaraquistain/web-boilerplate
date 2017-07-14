import { combineReducers } from "redux";

function count(state = 0, action) {
  return state + 1;
}

function messages(state = [], action) {
  return [ ...state, action]
}

export default combineReducers({
  messages,
  count
});
