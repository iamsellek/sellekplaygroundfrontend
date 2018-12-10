import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const devTools =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : null;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devTools
  )
);

export default store;
