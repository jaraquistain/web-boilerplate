import { combineReducers } from "redux";

function count(state = {}, action) {
  const count = state.count || 0;
  return { ...state, count: count + 1 };
}

function messages(state = [], action) {
  return [ ...state, action]
}

export default combineReducers({
  messages,
  count
});
