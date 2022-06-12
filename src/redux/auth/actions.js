import * as Types from './types';

export const setAuth = (data) => ({
  type: Types.SET_AUTH,
  payload: data,
});

export const login = (data) => ({
  type: Types.LOGIN,
  payload: data,
});

export const loginRequest = () => ({
  type: Types.LOGIN_REQUEST,
});

export const loginSuccess = () => ({
  type: Types.LOGIN_SUCCESS,
});

export const loginFail = () => ({
  type: Types.LOGIN_FAIL,
});

export const register = (data) => ({
  type: Types.REGISTER,
  payload: data,
});

export const registerRequest = () => ({
  type: Types.REGISTER_REQUEST,
});

export const registerSuccess = () => ({
  type: Types.REGISTER_SUCCESS,
});

export const registerFail = () => ({
  type: Types.REGISTER_FAIL,
});

export const quickRegister = (data) => ({
  type: Types.QUICK_REGISTER,
  payload: data,
});

export const quickRegisterRequest = () => ({
  type: Types.QUICK_REGISTER_REQUEST,
});

export const quickRegisterSuccess = () => ({
  type: Types.QUICK_REGISTER_SUCCESS,
});

export const quickRegisterFail = () => ({
  type: Types.QUICK_REGISTER_FAIL,
});

export const confirmRegistration = (data) => ({
  type: Types.CONFIRM_REGISTRATION,
  payload: data,
});

export const confirmRegistrationRequest = () => ({
  type: Types.CONFIRM_REGISTRATION_REQUEST,
});

export const confirmRegistrationSuccess = () => ({
  type: Types.CONFIRM_REGISTRATION_SUCCESS,
});

export const confirmRegistrationFail = () => ({
  type: Types.CONFIRM_REGISTRATION_FAIL,
});

export const setValidation = (data) => ({
  type: Types.SET_VALIDATION,
  payload: data,
});

export const clearValidation = () => ({
  type: Types.CLEAR_VALIDATION,
});

export const logout = () => ({
  type: Types.LOGOUT,
});

export const logoutRequest = () => ({
  type: Types.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: Types.LOGOUT_SUCCESS,
});

export const logoutFail = () => ({
  type: Types.LOGOUT_FAIL,
});

export const clearAuth = () => ({
  type: Types.CLEAR_AUTH,
});
