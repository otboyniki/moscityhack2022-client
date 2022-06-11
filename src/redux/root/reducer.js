import { combineReducers } from 'redux';

import base from '@/redux/base/reducer';
import auth from '@/redux/auth/reducer';
import notifications from '@/redux/notifications/reducer';

const reducer = combineReducers({
  base,
  auth,
  notifications,
});

export default reducer;
