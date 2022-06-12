import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { getEventsBranch } from '@/redux/events/selectors';

import EventPreview from '../EventPreview';

import S from './styles';

const EventsList = () => {
  const { data: events } = useSelector(getEventsBranch);

  return (
    <S.Container>
      {events.length > 0 && (
        <S.List>
          {events.map(({
            id, title, locations, meeting,
          }) => (
            <S.ListItem key={id}>
              <EventPreview
                key={id}
                title={title}
                locations={locations}
                meeting={meeting}
              />
            </S.ListItem>
          ))}
        </S.List>
      )}
      {events.length === 0 && (
        <S.EmptyList>
          <Typography component="h1" variant="body1">
            Событий не найдено
          </Typography>
        </S.EmptyList>
      )}
    </S.Container>
  );
};

export default EventsList;