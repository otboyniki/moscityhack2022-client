import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';

import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import store from '@/redux/store';
import { getAuthBranch } from '@/redux/auth/selectors';
import { getUserProfile } from '@/redux/user/actions';
import { getUserBranch } from '@/redux/user/selectors';

import Main from '@/pages/Main';
import Registration from '@/pages/Registration';
import Login from '@/pages/Login';
import QuickRegistration from '@/pages/QuickRegistration';
import RegistrationConfirm from '@/pages/RegistrationConfirm';
import AddStory from '@/pages/AddStory';

import Notifications from '@/components/Notifications';
import NonAuthorizedRoute from '@/components/NonAuthorizedRoute';
import AuthorizedRoute from '@/components/AuthorizedRoute';

import AppLoader from '@/ui/AppLoader';

import history from '@/helpers/history';

import routes from '@/constants/routes';

const App = () => {
  const { isAuthorized } = useSelector(getAuthBranch);
  const { phone, email } = useSelector(getUserBranch);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthorized && !phone && !email) {
      dispatch(getUserProfile());
    }
  }, []);

  if (isAuthorized && !phone && !email) {
    return (
      <AppLoader />
    );
  }

  return (
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
        <AuthorizedRoute>
          <AddStory />
        </AuthorizedRoute>
        <Route path="*">
          <Redirect to={routes.login} />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
