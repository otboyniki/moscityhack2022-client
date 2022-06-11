import base from '@/redux/base/saga';
import auth from '@/redux/auth/saga';
import notifications from '@/redux/notifications/saga';
import story from '@/redux/story/saga';
import activities from '@/redux/activities/saga';
import user from '@/redux/user/saga';

const sagas = [
  base,
  auth,
  notifications,
  activities,
  story,
  user,
];

export default sagas;
