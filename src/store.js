import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import updateCurrentImage from './reducers';

const initialState = {
    count: 0,
};

const middleware = [thunk];

const store = createStore(
  //rootReducer,
  updateCurrentImage,
  initialState,
  // compose calls the functions, its a utility function that calls the functions one at a time
  // this is fancy-pants stuff.  https://redux.js.org/api/createstore
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
