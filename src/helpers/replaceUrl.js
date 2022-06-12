import queryString from 'query-string';

import history from '@/helpers/history';

const replaceUrl = (query, pathname = window.location.pathname) => {
  const options = {
    skipNull: true,
    skipEmptyString: true,
  };

  const url = queryString.stringifyUrl({
    url: pathname,
    query,
  }, options);

  history.replace(url);
};

export default replaceUrl;
