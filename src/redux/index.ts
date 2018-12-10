import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const devTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

let store;

if (process.env.NODE_ENV === 'development') {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      devTools
    )
  );
} else {
  store = createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default store;
