import queryString from 'query-string';

const options = {
  skipNull: true,
  skipEmptyString: true,
};

export const stringifyUrl = (query, pathname = window.location.pathname) => {
  const url = queryString.stringifyUrl({
    url: pathname,
    query,
  }, options);

  return url;
};

export const stringify = (query) => queryString.stringify(query, options);
