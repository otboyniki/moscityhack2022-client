import URI from 'urijs';

import { BASE_URL } from '@/constants/env';
import routes from '@/constants/routes';

const fetchy = async (url, body, options = {}) => {
  const baseOptions = body
    ? {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
    : {};

  const response = await fetch(URI(`${BASE_URL}/${url}`).normalizePath(), {
    credentials: 'include',
    ...baseOptions,
    ...options,
  });

  if (response.status === 401) {
    localStorage.removeItem('isAuthorized');

    if (!options.without401check) {
      window.location.href = routes.login;
    }

    return undefined;
  }

  if (!response.ok) {
    // throw response;
  }

  if (response.headers.get('content-length') === '0') {
    return {};
  }

  const data = await response.json();

  if (!data) {
    throw data;
  }

  return data;
};

export default fetchy;
