import base from '@/redux/base/saga';
import auth from '@/redux/auth/saga';
import notifications from '@/redux/notifications/saga';

const sagas = [
  base,
  auth,
  notifications,
];

export default sagas;
