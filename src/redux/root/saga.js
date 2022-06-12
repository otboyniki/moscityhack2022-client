import base from '@/redux/base/saga';
import auth from '@/redux/auth/saga';
import notifications from '@/redux/notifications/saga';
import story from '@/redux/story/saga';
import activities from '@/redux/activities/saga';
import user from '@/redux/user/saga';
import events from '@/redux/events/saga';
import event from '@/redux/event/saga';
import main from '@/redux/main/saga';
import stories from '@/redux/stories/saga';

const sagas = [
  base,
  auth,
  notifications,
  activities,
  story,
  user,
  events,
  event,
  main,
  stories,
];

export default sagas;
