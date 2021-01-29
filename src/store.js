import {
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';

  import thunk from 'redux-thunk';  
  import users from './reducers/usersReducer'
  import recipes from './reducers/recipesReducer'
  
  const reducers = combineReducers({
    users,
    recipes
  });
  
  
  export default createStore(reducers, applyMiddleware(thunk));