import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import history from '@/helpers/history';

import store from '@/redux/store';

import '@/styles/fonts.css';
import '@/styles/reset.css';
import '@/styles/global.css';
import '@/styles/media.css';
import '@/styles/animations.css';

import Main from '@/pages/Main';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
