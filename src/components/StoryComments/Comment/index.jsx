import React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { getStoryBranch } from '@/redux/story/selectors';
import { getAuthBranch } from '@/redux/auth/selectors';

import Rating from '@/ui/Rating';

import formatDate from '@/helpers/formatDate';

import S from './styles';

const Comment = (props) => {
  const {
    id,
    fullName,
    date,
    score,
    text,
    onClick,
  } = props;

  const { changedRatingCommentId } = useSelector(getStoryBranch);
  const { isAuthorized } = useSelector(getAuthBranch);

  const handleClick = (value) => {
    onClick({
      commentId: id,
      ratingChangeType: value,
    });
  };

  return (
    <S.Container>
      <S.Header>
        <div>
          <Typography variant="h6">
            {fullName}
          </Typography>
          <Typography variant="body1">
            Дата публикации:
            {' '}
            {formatDate(date)}
          </Typography>
        </div>
        {isAuthorized && (
          <Rating
            isLoading={changedRatingCommentId === id}
            score={score}
            onClick={handleClick}
          />
        )}
      </S.Header>
      <Typography variant="body1">
        {text}
      </Typography>
    </S.Container>
  );
};

export default Comment;
