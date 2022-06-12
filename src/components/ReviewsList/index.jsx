import React from 'react';
import { Typography } from '@mui/material';

import ReviewPreview from '../ReviewPreview';

import S from './styles';

const ReviewsList = (props) => {
  const { items } = props;

  return (
    <S.Container>
      {items.length > 0 && (
        <S.List>
          {items.map(({ id, eventSummary }) => (
            <S.ListItem key={id}>
              <ReviewPreview
                id={id}
                title={eventSummary.title}
                locations={eventSummary.locations}
                meeting={eventSummary.meeting}
                previewId={eventSummary.previewId}
              />
            </S.ListItem>
          ))}
        </S.List>
      )}
      {items.length === 0 && (
        <S.EmptyList>
          <Typography component="h1" variant="body1">
            Отзывов не найдено
          </Typography>
        </S.EmptyList>
      )}
    </S.Container>
  );
};

export default ReviewsList;
