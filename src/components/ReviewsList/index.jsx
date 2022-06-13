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
          {items.map((review) => (
            <S.ListItem key={review.id}>
              <ReviewPreview {...review} />
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
