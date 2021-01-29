import {
    createStore, 
    applyMiddleware,
    combineReducers,
    compose
  } from 'redux';

  import thunk from 'redux-thunk';  
  import users from './reducers/usersReducer'
  import recipes from './reducers/recipesReducer'
  
  const reducers = combineReducers({
    users,
    recipes
  });
  
  const middleware = [thunk];
  
  export default createStore(
    reducers,
    compose(
      applyMiddleware(...middleware),
    )
  );