/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { EditorState } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import convertToHTML from 'draft-convert/lib/convertToHTML';

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import { getAddStoryBranch } from '@/redux/add-story/selectors';
import { addStory, clearStory, setStory } from '@/redux/add-story/actions';
import { getActivitiesBranch } from '@/redux/activities/selectors';

import useUpload from '@/hooks/useUpload';

import { StoryTypes } from '@/constants/enums';
import { BASE_URL } from '@/constants/env';

import Editor from './Editor';

import S from './styles';

const AddStoryForm = () => {
  const dispatch = useDispatch();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const {
    isLoading,
    format,
    activityIds,
    shortDescription,
    errors,
    title,
  } = useSelector(getAddStoryBranch);

  const { items: activities } = useSelector(getActivitiesBranch);

  const {
    lastUploadedFile,
    upload,
  } = useUpload();

  useEffect(() => () => {
    dispatch(clearStory());
  }, []);

  useEffect(() => {
    dispatch(setStory({
      previewId: lastUploadedFile,
    }));
  }, [lastUploadedFile]);

  const handleChange = ({ target }) => {
    dispatch(setStory({
      [target.name]: target.value,
    }));
  };

  const handleActivitiesChange = ({ target }) => {
    dispatch(setStory({
      activityIds: target.checked
        ? activityIds.concat(target.name)
        : activityIds.filter((id) => id !== target.name),
    }));
  };

  const handleVideoChange = ({ target }) => {
    const [file] = target.files;

    upload(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addStory({
      description: convertToHTML(editorState.getCurrentContent()),
    }));
  };

  const {
    shortDescription: [shortDescriptionError] = [null],
    title: [titleError] = [null],
  } = errors || {};

  return (
    <form onSubmit={handleSubmit}>
      <S.Block>
        <TextField
          name="title"
          label="Название истории"
          value={title}
          onChange={handleChange}
          error={Boolean(titleError)}
          helperText={titleError}
          fullWidth
        />
      </S.Block>
      <S.Block>
        <FormControl fullWidth>
          <InputLabel id="format">
            Тип истории
          </InputLabel>
          <Select
            labelId="format"
            name="format"
            label="Тип истории"
            value={format}
            onChange={handleChange}
          >
            <MenuItem value={StoryTypes.Text}>Текст</MenuItem>
            <MenuItem value={StoryTypes.Video}>Видео</MenuItem>
          </Select>
        </FormControl>
      </S.Block>
      <S.Block>
        <Typography>
          К чему относится ваша история?
        </Typography>
        {activities.map(({ id, title }) => (
          <FormControlLabel
            key={id}
            control={(
              <Checkbox
                type="checkbox"
                name={id}
                value={activityIds.includes(id)}
                checked={Boolean(activityIds.includes(id))}
                onChange={handleActivitiesChange}
              />
            )}
            label={title}
          />
        ))}
      </S.Block>
      {format === StoryTypes.Text && (
        <S.Block>
          <TextField
            name="shortDescription"
            label="Короткое описание"
            value={shortDescription}
            onChange={handleChange}
            error={Boolean(shortDescriptionError)}
            helperText={shortDescriptionError}
            fullWidth
          />
        </S.Block>
      )}
      {format === StoryTypes.Text && (
        <S.Block>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
          />
        </S.Block>
      )}
      {format === StoryTypes.Video && (
        <>
          <S.Block>
            <Button
              variant="contained"
              component="label"
            >
              Загрузить видео
              <input
                type="file"
                onChange={handleVideoChange}
                accept="video/*"
                hidden
              />
            </Button>
          </S.Block>
          {lastUploadedFile && (
            <S.Video>
              <video
                src={`${BASE_URL}/files/${lastUploadedFile}`}
                controls
              />
            </S.Video>
          )}
        </>
      )}
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        loading={isLoading}
        disabled={isLoading}
      >
        Добавить
      </LoadingButton>
    </form>
  );
};

export default AddStoryForm;
