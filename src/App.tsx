import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import OverrideRouter from './components/OverrideRouter/OverrideRouter';
import Login from './pages/Login/Login';
import TodoList from './pages/TodoList/TodoList';
import store from './redux/index';
import {HOME_PATH, LOGIN_PATH} from './types/appConstants';

const App: React.SFC<{}> = () => (
  <Provider store={store}>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <BrowserRouter>
        <React.Fragment>
          <Route path={LOGIN_PATH} component={Login} />
          <Route path={HOME_PATH} component={TodoList} />
          <OverrideRouter />
        </React.Fragment>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
