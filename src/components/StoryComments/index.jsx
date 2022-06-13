/* eslint-disable no-shadow */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getStoryBranch } from '@/redux/story/selectors';
import { setCommentRating } from '@/redux/story/actions';

import Comment from './Comment';

import S from './styles';

const StoryComments = () => {
  const { data } = useSelector(getStoryBranch);
  const { id } = useParams();

  const dispatch = useDispatch();

  const handleRatingClick = (value) => {
    dispatch(setCommentRating({
      storyId: id,
      ...value,
    }));
  };

  return (
    <S.List>
      {data.comments.map(({
        id,
        fullName,
        date,
        score,
        text,
        isPositiveScore,
      }) => (
        <S.Item key={id}>
          <Comment
            id={id}
            fullName={fullName}
            date={date}
            score={score}
            text={text}
            isPositiveScore={isPositiveScore}
            onClick={handleRatingClick}
          />
        </S.Item>
      ))}
    </S.List>
  );
};

export default StoryComments;
