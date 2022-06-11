import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@mui/material';

import S from './styles';

const Notifications = () => {
  const { items: notifications } = useSelector((store) => store.notifications);

  if (notifications.length === 0) {
    return null;
  }

  return (
    <S.Container>
      {notifications.map(({ id, type, text }) => (
        <Alert
          key={id}
          severity={type}
        >
          {text}
        </Alert>
      ))}
    </S.Container>
  );
};

export default Notifications;
