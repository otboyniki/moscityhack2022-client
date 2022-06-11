import { combineReducers } from 'redux';

import base from '@/redux/base/reducer';
import auth from '@/redux/auth/reducer';
import notifications from '@/redux/notifications/reducer';
import story from '@/redux/story/reducer';
import activities from '@/redux/activities/reducer';

const reducer = combineReducers({
  base,
  auth,
  notifications,
  story,
  activities,
});

export default reducer;
