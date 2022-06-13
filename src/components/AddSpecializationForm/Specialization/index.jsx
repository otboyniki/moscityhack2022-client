/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useState } from 'react';

import {
  FormControlLabel, Radio, RadioGroup, Slider, TextField, Typography,
} from '@mui/material';

import debounce from 'lodash.debounce';

import Accordion from '@/ui/Accordion';

import { EVENT_FORMATS } from '@/constants/enums';

import S from './styles';

const Specialization = (props) => {
  const {
    id,
    title,
    requirements,
    description,
    format,
    age,
    minVolunteersNumber,
    maxVolunteersNumber,
    index,
    errors,
    onChange,
  } = props;

  const [localAge, setLocalAge] = useState([0, 100]);

  useEffect(() => {
    setLocalAge(age);
  }, [age]);

  const handleChange = ({ target }) => {
    onChange({
      id,
      [target.name]: target.value,
    });
  };

  const handleAgeChangeDebounced = useCallback(debounce((value) => {
    onChange({
      id,
      age: value,
    });
  }, 500), []);

  const handleAgeChange = ({ target }) => {
    setLocalAge(target.value);

    handleAgeChangeDebounced(target.value);
  };

  const {
    title: [titleError] = [null],
    requirements: [requirementsError] = [null],
    description: [descriptionError] = [null],
    minVolunteersNumber: [minVolunteersNumberError] = [null],
    maxVolunteersNumber: [maxVolunteersNumberError] = [null],
  } = errors || {};

  return (
    <S.Block>
      <Accordion title={`Вакансия ${index + 1}`} openByDefault>
        <S.Block>
          <TextField
            name="title"
            label="Название вакансии"
            value={title}
            onChange={handleChange}
            error={Boolean(titleError)}
            helperText={titleError}
            fullWidth
          />
        </S.Block>
        <S.Block>
          <TextField
            name="requirements"
            label="Требования"
            value={requirements}
            onChange={handleChange}
            error={Boolean(requirementsError)}
            helperText={requirementsError}
            fullWidth
          />
        </S.Block>
        <S.Block>
          <TextField
            name="description"
            label="Описание"
            value={description}
            onChange={handleChange}
            error={Boolean(descriptionError)}
            helperText={descriptionError}
            fullWidth
          />
        </S.Block>
        <S.Block>
          <S.Text>
            <Typography>
              Формат события
            </Typography>
          </S.Text>
          <RadioGroup
            name="format"
            value={format}
            onChange={handleChange}
          >
            {EVENT_FORMATS.map(({ id, title }) => (
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
        </S.Block>
        <S.Block>
          <S.Text>
            <Typography>
              Возраст
            </Typography>
          </S.Text>
          <Slider
            value={localAge}
            onChange={handleAgeChange}
            valueLabelDisplay="auto"
          />
        </S.Block>
        <S.Block>
          <S.Text>
            <Typography>
              Укажите количество волонтеров
            </Typography>
          </S.Text>
          <S.Counts>
            <S.Count>
              <TextField
                name="minVolunteersNumber"
                label="от"
                value={minVolunteersNumber}
                onChange={handleChange}
                error={Boolean(minVolunteersNumberError)}
                helperText={minVolunteersNumberError}
              />
            </S.Count>
            <S.Count>
              <TextField
                name="maxVolunteersNumber"
                label="до"
                value={maxVolunteersNumber}
                onChange={handleChange}
                error={Boolean(maxVolunteersNumberError)}
                helperText={maxVolunteersNumberError}
              />
            </S.Count>
          </S.Counts>
        </S.Block>
      </Accordion>

    </S.Block>
  );
};

export default Specialization;
