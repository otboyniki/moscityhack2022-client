import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { getStoryBranch } from '@/redux/story/selectors';
import { addComment } from '@/redux/story/actions';

import S from './styles';

const AddStoryCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [comment, setComment] = useState('');

  const {
    loaders,
  } = useSelector(getStoryBranch);

  const handleChange = ({ target }) => {
    setComment(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addComment({
      text: comment,
      storyId: id,
    }));

    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.Comment>
        <TextField
          name="comment"
          label="Комментарий"
          value={comment}
          onChange={handleChange}
          fullWidth
        />
      </S.Comment>
      <LoadingButton
        type="submit"
        variant="contained"
        loading={loaders.comment}
        disabled={loaders.comment}
      >
        Добавить
      </LoadingButton>
    </form>
  );
};

export default AddStoryCommentForm;
