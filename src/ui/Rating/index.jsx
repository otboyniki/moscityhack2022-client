import React from 'react';
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { RatingActions } from '@/constants/enums';

import S from './styles';

const Rating = (props) => {
  const { score, isLoading, onClick } = props;

  return (
    <S.Container>
      <S.Block>
        <LoadingButton
          loading={isLoading}
          disabled={isLoading}
          variant="contained"
          color="primary"
          onClick={() => onClick(RatingActions.Like)}
        >
          +
        </LoadingButton>
      </S.Block>
      <S.Block>
        <div>
          {score > 0 ? '+' : ''}
          {score}
        </div>
      </S.Block>
      <S.Block>
        <Button
          loading={isLoading}
          disabled={isLoading}
          variant="contained"
          color="secondary"
          onClick={() => onClick(RatingActions.Dislike)}
        >
          -
        </Button>
      </S.Block>
    </S.Container>
  );
};

export default Rating;
