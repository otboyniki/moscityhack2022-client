import URI from 'urijs';

import { BASE_URL } from '@/constants/env';

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
