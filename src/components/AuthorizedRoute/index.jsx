/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuthBranch } from '@/redux/auth/selectors';

import routes from '@/constants/routes';

const AuthorizedRoute = ({ children, ...props }) => {
  const { isAuthorized } = useSelector(getAuthBranch);

  if (!isAuthorized) {
    return (
      <Redirect to={routes.login} />
    );
  }

  return (
    <Route
      {...props}
    >
      {children}
    </Route>
  );
};

export default AuthorizedRoute;
