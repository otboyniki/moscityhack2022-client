const getQueryParams = (search = window.location.search) => (
  Object.fromEntries(new URLSearchParams(search))
);

export default getQueryParams;
