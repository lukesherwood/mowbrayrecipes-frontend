import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import thunk from "redux-thunk";
import users from "./reducers/usersReducer";
import recipes from "./reducers/recipesReducer";

const reducers = combineReducers({
  users,
  recipes,
});
let middleware = [thunk];
let enhancers = [applyMiddleware(...middleware)];
if (process.env.NODE_ENV === "development") {
  enhancers.push(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

export default createStore(reducers, compose(...enhancers));
