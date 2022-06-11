import Cookies from 'js-cookie';

import { UserRoles } from '@/constants/enums';

import * as Types from './types';

const initialState = {
  data: {
    firstName: '',
    lastName: '',
    email: '',
    communication: '',
    code: '',
    type: UserRoles.Volunteer,
    companyName: '',
  },
  isLoading: false,
  isAuthorized: Cookies.get('AspNetCore.Identity.Application') || true,
  errors: null,
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case Types.SET_AUTH: {
      return {
        ...state,
        data: {
          ...state.data,
          ...payload,
        },
      };
    }

    case Types.LOGIN_REQUEST:
    case Types.REGISTER_REQUEST:
    case Types.QUICK_REGISTER_REQUEST:
    case Types.CONFIRM_REGISTRATION_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case Types.LOGIN_SUCCESS:
    case Types.CONFIRM_REGISTRATION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuthorized: true,
      };
    }

    case Types.LOGIN_FAIL:
    case Types.REGISTER_SUCCESS:
    case Types.REGISTER_FAIL:
    case Types.QUICK_REGISTER_SUCCESS:
    case Types.QUICK_REGISTER_FAIL:
    case Types.CONFIRM_REGISTRATION_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case Types.SET_VALIDATION: {
      return {
        ...state,
        errors: {
          ...state.errors,
          ...payload,
        },
      };
    }

    case Types.CLEAR_VALIDATION: {
      return {
        ...state,
        errors: null,
      };
    }

    case Types.CLEAR_AUTH: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
