import URI from 'urijs';

import { BASE_URL } from '@/constants/env';
import routes from '@/constants/routes';

const fetchy = async (url, body, options) => {
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
    ...baseOptions,
    ...options,
  });

  if (response.status === 401) {
    window.location.href = routes.login;

    return undefined;
  }

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  if (!data) {
    throw data;
  }

  return data;
};

export default fetchy;
