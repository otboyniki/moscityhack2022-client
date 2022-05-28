export const isDevelopment = import.meta.env.DEV;

export const BASE_DEV_URL = '/api';
export const BASE_PROD_URL = 'http://api.otboyniki-moscityhack2022.ru';

export const BASE_URL = (
  isDevelopment
    ? BASE_DEV_URL
    : BASE_PROD_URL
);
