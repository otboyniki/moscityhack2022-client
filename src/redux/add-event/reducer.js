import { nanoid } from 'nanoid';

import { EventFormats } from '@/constants/enums';

import * as types from './types';

const initialState = {
  isLoading: false,
  data: {
    activityId: '',
    title: '',
    location: '',
    terms: '',
    recruitment: {
      since: new Date(),
      until: new Date(),
    },
    meeting: {
      since: new Date(),
      until: new Date(),
    },
    specializations: [{
      id: nanoid(),
      title: '',
      requirements: '',
      description: '',
      format: EventFormats.Online,
      age: [0, 100],
      minVolunteersNumber: '',
      maxVolunteersNumber: '',
    }],
  },
  errors: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_EVENT: {
      return {
        ...state,
        data: {
          ...state.data,
          ...payload,
        },
      };
    }

    case types.ADD_SPECIALIZATION: {
      return {
        ...state,
        data: {
          ...state.data,
          specializations: state.data.specializations.concat({
            id: nanoid(),
            title: '',
            requirements: '',
            description: '',
            format: EventFormats.Online,
            age: [0, 100],
          }),
        },
      };
    }

    case types.SET_SPECIALIZATION: {
      return {
        ...state,
        data: {
          ...state.data,
          specializations: state.data.specializations.map((specialization) => {
            if (specialization.id !== payload.id) {
              return specialization;
            }

            return {
              ...specialization,
              ...payload,
            };
          }),
        },
      };
    }

    case types.SET_VALIDATION: {
      return {
        ...state,
        errors: {
          ...state.errors,
          ...payload,
        },
      };
    }

    case types.CLEAR_VALIDATION: {
      return {
        ...state,
        errors: null,
      };
    }

    case types.ADD_EVENT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case types.ADD_EVENT_SUCCESS:
    case types.ADD_EVENT_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.CLEAR_EVENT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
