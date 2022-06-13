import { combineReducers } from 'redux';

import base from '@/redux/base/reducer';
import auth from '@/redux/auth/reducer';
import notifications from '@/redux/notifications/reducer';
import addStory from '@/redux/add-story/reducer';
import activities from '@/redux/activities/reducer';
import user from '@/redux/user/reducer';
import events from '@/redux/events/reducer';
import event from '@/redux/event/reducer';
import main from '@/redux/main/reducer';
import stories from '@/redux/stories/reducer';
import addEvent from '@/redux/add-event/reducer';
import story from '@/redux/story/reducer';

const reducer = combineReducers({
  base,
  auth,
  notifications,
  addStory,
  activities,
  user,
  events,
  event,
  main,
  stories,
  addEvent,
  story,
});

export default reducer;
