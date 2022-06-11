import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import history from '@/helpers/history';

import store from '@/redux/store';

import Main from '@/pages/Main';
import Registration from '@/pages/Registration';
import Login from '@/pages/Login';
import QuickRegistration from '@/pages/QuickRegistration';
import RegistrationConfirm from '@/pages/RegistrationConfirm';

import Notifications from '@/components/Notifications';
import NonAuthorizedRoute from '@/components/NonAuthorizedRoute';

import routes from '@/constants/routes';

const App = () => (
  <Router history={history}>
    <CssBaseline />
    <Notifications />

    <Switch>
      <NonAuthorizedRoute exact path={routes.login}>
        <Login />
      </NonAuthorizedRoute>
      <NonAuthorizedRoute exact path={routes.registration}>
        <Registration />
      </NonAuthorizedRoute>
      <NonAuthorizedRoute exact path={routes.quickRegistration}>
        <QuickRegistration />
      </NonAuthorizedRoute>
      <NonAuthorizedRoute exact path={routes.registrationConfirm}>
        <RegistrationConfirm />
      </NonAuthorizedRoute>
      <Route exact path={routes.main}>
        <Main />
      </Route>
      <Route path="*">
        <Redirect to={routes.login} />
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
