import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './redux';

ReactDOM.render(
  <Provider store={store}>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
