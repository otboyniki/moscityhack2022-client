import { matchPath } from 'react-router-dom';

const matchPathname = (routes, pathname, options = {}) => (
  routes.find((path) => matchPath(pathname, {
    path,
    ...options,
  }))
);

export default matchPathname;
