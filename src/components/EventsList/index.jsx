import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { getEventsBranch } from '@/redux/events/selectors';

import EventPreview from '../EventPreview';

import S from './styles';

const EventsList = ({ eventsPerLine }) => {
  const { data: events } = useSelector(getEventsBranch);

  return (
    <S.Container>
      {events.length > 0 && (
        <S.List>
          {events.map(({
            id,
            title,
            locations,
            meeting,
            previewId,
          }) => (
            <S.ListItem key={id} eventsPerLine={eventsPerLine}>
              <EventPreview
                key={id}
                id={id}
                title={title}
                locations={locations}
                meeting={meeting}
                previewId={previewId}
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
