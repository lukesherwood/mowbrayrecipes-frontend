import {
    createStore, 
    applyMiddleware,
    combineReducers,
    compose
  } from 'redux';

  import thunk from 'redux-thunk';  
  import users from './reducers/usersReducer'
  
  const reducers = combineReducers({
    users,
  });
  
  const middleware = [thunk];
  
  export default createStore(
    reducers,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );