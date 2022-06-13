/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { EditorState } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import convertToHTML from 'draft-convert/lib/convertToHTML';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru';

import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import {
  addEvent, clearEvent, clearValidation, setEvent,
} from '@/redux/add-event/actions';
import { getActivitiesBranch } from '@/redux/activities/selectors';
import { getAddEventBranch } from '@/redux/add-event/selectors';

import useUpload from '@/hooks/useUpload';

import { BASE_URL } from '@/constants/env';

import AddSpecializationForm from '../AddSpecializationForm';

import Editor from './Editor';

import S from './styles';

const AddEventForm = () => {
  const dispatch = useDispatch();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const {
    isLoading,
    errors,
    data,
  } = useSelector(getAddEventBranch);

  const {
    title,
    location,
    activityId,
    recruitment = {},
    meeting = {},
    terms,
  } = data;

  const { items: activities } = useSelector(getActivitiesBranch);

  const {
    lastUploadedFile,
    upload,
  } = useUpload();

  useEffect(() => () => {
    dispatch(clearEvent());
  }, []);

  useEffect(() => {
    dispatch(setEvent({
      previewId: lastUploadedFile,
    }));
  }, [lastUploadedFile]);

  const handleChange = ({ target }) => {
    dispatch(clearValidation());

    dispatch(setEvent({
      [target.name]: target.value,
    }));
  };

  const handleImageChange = ({ target }) => {
    const [file] = target.files;

    upload(file);
  };

  const handleDateChange = (name, value) => {
    dispatch(clearValidation());

    dispatch(setEvent({
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addEvent({
      description: convertToHTML(editorState.getCurrentContent()),
    }));
  };

  const {
    title: [titleError] = [null],
    location: [locationError] = [null],
    activityId: [activityIdError] = [null],
    recruitment: [recruitmentError] = [null],
    meeting: [meetingError] = [null],
    terms: [termsError] = [null],
  } = errors || {};

  return (
    <form onSubmit={handleSubmit}>
      <S.Block>
        <TextField
          name="title"
          label="Название события"
          value={title}
          onChange={handleChange}
          error={Boolean(titleError)}
          helperText={titleError}
          fullWidth
        />
      </S.Block>
      <S.Block>
        <S.Text>
          <Typography>
            К чему относится ваше событие?
          </Typography>
        </S.Text>
        <FormControl component="fieldset" error={Boolean(activityIdError)}>
          <RadioGroup
            name="activityId"
            value={activityId}
            onChange={handleChange}
          >
            {activities.map(({ id, title }) => (
              <FormControlLabel
                key={id}
                value={id}
                control={(
                  <Radio />
              )}
                label={title}
              />
            ))}
          </RadioGroup>
          <FormHelperText>{activityIdError}</FormHelperText>
        </FormControl>
      </S.Block>
      <S.Block>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
        />
      </S.Block>
      <S.Block>
        <Button
          variant="contained"
          component="label"
        >
          Загрузить превью
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </Button>
        {lastUploadedFile && (
          <S.Image>
            <img
              alt="Preview"
              src={`${BASE_URL}/files/${lastUploadedFile}`}
            />
          </S.Image>
        )}
      </S.Block>

      <S.Block>
        <TextField
          name="location"
          label="Локация"
          value={location}
          onChange={handleChange}
          error={Boolean(locationError)}
          helperText={locationError}
          fullWidth
        />
      </S.Block>
      <S.Block>
        <TextField
          name="terms"
          label="Условия"
          value={terms}
          onChange={handleChange}
          error={Boolean(termsError)}
          helperText={termsError}
          fullWidth
        />
      </S.Block>
      <S.Block>
        <S.Text>
          <Typography>
            Укажите даты набора
          </Typography>
        </S.Text>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          locale={ru}
        >
          <FormControl component="fieldset" error={Boolean(recruitmentError)}>
            <S.Dates>
              <S.Date>
                <DatePicker
                  value={recruitment.since}
                  label="от"
                  onChange={(value) => handleDateChange('recruitment', {
                    since: value,
                    until: recruitment.until,
                  })}
                  renderInput={(params) => (
                    <TextField {...params} />
                  )}
                />
              </S.Date>
              <S.Date>
                <DatePicker
                  value={recruitment.until}
                  label="до"
                  onChange={(value) => handleDateChange('recruitment', {
                    since: recruitment.since,
                    until: value,
                  })}
                  renderInput={(params) => (
                    <TextField {...params} />
                  )}
                />
              </S.Date>
              <FormHelperText>{recruitmentError}</FormHelperText>
            </S.Dates>
          </FormControl>

        </LocalizationProvider>
      </S.Block>
      <S.Block>
        <S.Text>
          <Typography>
            Укажите даты проведения
          </Typography>
        </S.Text>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          locale={ru}
        >
          <FormControl component="fieldset" error={Boolean(meetingError)}>
            <S.Dates>
              <S.Date>
                <DatePicker
                  value={meeting.since}
                  label="от"
                  onChange={(value) => handleDateChange('meeting', {
                    since: value,
                    until: meeting.until,
                  })}
                  renderInput={(params) => (
                    <TextField {...params} />
                  )}
                />
              </S.Date>
              <S.Date>
                <DatePicker
                  value={meeting.until}
                  label="до"
                  onChange={(value) => handleDateChange('meeting', {
                    since: meeting.since,
                    until: value,
                  })}
                  renderInput={(params) => (
                    <TextField {...params} />
                  )}
                />
              </S.Date>
              <FormHelperText>{meetingError}</FormHelperText>
            </S.Dates>
          </FormControl>
        </LocalizationProvider>
      </S.Block>
      <AddSpecializationForm />
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

export default AddEventForm;
