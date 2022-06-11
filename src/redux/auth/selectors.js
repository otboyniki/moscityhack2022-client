export const getAuthBranch = (store) => store.auth;

export const selectAuthData = (store) => {
  const { data } = getAuthBranch(store);

  return data;
};
