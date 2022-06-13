/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/img-redundant-alt */
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
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import { getAddStoryBranch } from '@/redux/add-story/selectors';

import {
  addStory,
  clearStory,
  clearValidation,
  setStory,
} from '@/redux/add-story/actions';

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
    dispatch(clearValidation());

    dispatch(setStory({
      previewId: lastUploadedFile,
    }));
  }, [lastUploadedFile]);

  const handleChange = ({ target }) => {
    dispatch(clearValidation());

    dispatch(setStory({
      [target.name]: target.value,
    }));
  };

  const handleActivitiesChange = ({ target }) => {
    dispatch(clearValidation());

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

  const handleEditorChange = (value) => {
    dispatch(clearValidation());

    setEditorState(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addStory({
      description: convertToHTML({
        entityToHTML: (entity, originalText) => {
          if (entity.type === 'IMAGE') {
            return <img alt="image" src={entity.data.src} />;
          }

          return originalText;
        },
      })(editorState.getCurrentContent()),
    }));
  };

  const {
    shortDescription: [shortDescriptionError] = [null],
    title: [titleError] = [null],
    activityIds: [activityIdsError] = [null],
    description: [descriptionError] = [null],
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
        <FormControl component="fieldset" error={Boolean(activityIdsError)}>
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
          <FormHelperText>{activityIdsError}</FormHelperText>
        </FormControl>

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
          <FormControl
            fullWidth
            component="fieldset"
            error={Boolean(descriptionError)}
          >
            <Editor
              editorState={editorState}
              onChange={handleEditorChange}
            />
            <FormHelperText>
              {descriptionError}
            </FormHelperText>
          </FormControl>
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
